import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PresentationControls, RoundedBox, Float } from '@react-three/drei'
import * as THREE from 'three'
import { setCursorLabel } from './ui'

const W = 540
const H = 1140
const NAVY = '#1c3362'
const CREAM = '#f1efea'
const PAPER = '#fbfaf7'
const SOFT = '#8792aa'
const screens = ['Student Admission', 'Peatland Fire AI', 'Digital Board']

function rr(ctx, x, y, w, h, r, fill) {
  ctx.beginPath()
  ctx.roundRect(x, y, w, h, r)
  ctx.fillStyle = fill
  ctx.fill()
}

function text(ctx, str, x, y, size, color, weight = 500, align = 'left') {
  ctx.font = `${weight} ${size}px Fredoka, system-ui, sans-serif`
  ctx.fillStyle = color
  ctx.textAlign = align
  ctx.fillText(str, x, y)
}

function drawAdmission(ctx, t) {
  const mods = ['Multi-role Access', 'Student Registration', 'Committee Review', 'Treasurer', 'Admin Dashboard']
  const p = (t * 0.18) % 1.25
  const progress = Math.min(p, 1)
  text(ctx, 'SMA Methodist Bangko', 40, 190, 26, SOFT)
  text(ctx, 'Student Admission', 40, 236, 40, NAVY, 600)
  rr(ctx, 40, 270, W - 80, 200, 28, NAVY)
  // progress ring
  ctx.lineWidth = 16
  ctx.strokeStyle = 'rgba(241,239,234,.2)'
  ctx.beginPath()
  ctx.arc(140, 370, 58, 0, Math.PI * 2)
  ctx.stroke()
  ctx.strokeStyle = CREAM
  ctx.lineCap = 'round'
  ctx.beginPath()
  ctx.arc(140, 370, 58, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * progress)
  ctx.stroke()
  text(ctx, `${Math.round(progress * 100)}%`, 140, 382, 30, CREAM, 600, 'center')
  text(ctx, 'Modules done', 230, 352, 24, 'rgba(241,239,234,.7)')
  text(ctx, `${Math.floor(progress * mods.length)} / ${mods.length}`, 230, 400, 48, CREAM, 600)
  mods.forEach((m, i) => {
    const y = 510 + i * 84
    rr(ctx, 40, y, W - 80, 70, 20, PAPER)
    const done = progress * mods.length > i + 0.5
    ctx.beginPath()
    ctx.arc(84, y + 35, 15, 0, Math.PI * 2)
    ctx.lineWidth = 3
    ctx.strokeStyle = NAVY
    ctx.stroke()
    if (done) {
      ctx.fillStyle = NAVY
      ctx.fill()
      ctx.strokeStyle = CREAM
      ctx.lineWidth = 3.5
      ctx.beginPath()
      ctx.moveTo(77, y + 35)
      ctx.lineTo(82, y + 41)
      ctx.lineTo(92, y + 29)
      ctx.stroke()
    }
    text(ctx, m, 116, y + 44, 25, NAVY, 500)
  })
}

function drawPeatland(ctx, t) {
  text(ctx, 'Sentinel-2 · U-Net', 40, 190, 26, SOFT)
  text(ctx, 'Peatland Fire AI', 40, 236, 40, NAVY, 600)
  const s = 400
  const x = (W - s) / 2
  const y = 280
  rr(ctx, x, y, s, s, 30, NAVY)
  // satellite pixels; "burned" cells pulse like a segmentation mask
  const n = 8
  const cell = (s - 60) / n
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const burned = (i * 3 + j * 5 + i * j) % 7 === 0
      const pulse = burned ? 0.45 + 0.55 * ((Math.sin(t * 2.4 + i + j) + 1) / 2) : 0.14 + ((i * 7 + j * 3) % 4) * 0.05
      ctx.fillStyle = `rgba(241,239,234,${pulse})`
      ctx.beginPath()
      ctx.roundRect(x + 30 + i * cell + 2, y + 30 + j * cell + 2, cell - 4, cell - 4, 5)
      ctx.fill()
    }
  }
  const ly = y + 30 + ((Math.sin(t * 1.6) + 1) / 2) * (s - 60)
  ctx.fillStyle = CREAM
  ctx.fillRect(x + 18, ly - 2, s - 36, 4)
  rr(ctx, 40, 710, W - 80, 220, 28, PAPER)
  text(ctx, 'Segmentation', 72, 770, 34, NAVY, 600)
  text(ctx, 'Burned-area mask', 72, 808, 22, SOFT)
  ;[['Input', 'Sentinel-2'], ['Model', 'U-Net'], ['Output', 'Fire mask']].forEach(([k, v], i) => {
    text(ctx, k, 72, 858 + i * 34, 23, SOFT)
    text(ctx, v, W - 72, 858 + i * 34, 23, NAVY, 600, 'right')
  })
}

function drawBoard(ctx, t) {
  text(ctx, 'Tutoring center', 40, 190, 26, SOFT)
  text(ctx, 'Digital Board', 40, 236, 40, NAVY, 600)
  rr(ctx, 40, 270, W - 80, 380, 28, NAVY)
  const rows = ['Mathematics', 'Reading', 'Writing', 'Science', 'Art']
  const active = Math.floor(t * 0.8) % rows.length
  rows.forEach((r, i) => {
    const y = 300 + i * 66
    rr(ctx, 64, y, W - 128, 50, 14, i === active ? CREAM : 'rgba(241,239,234,.14)')
    text(ctx, r, 90, y + 33, 24, i === active ? NAVY : CREAM, 500)
    text(ctx, `${8 + i}:00`, W - 90, y + 33, 22, i === active ? NAVY : 'rgba(241,239,234,.6)', 600, 'right')
  })
  rr(ctx, 40, 690, W - 80, 220, 28, PAPER)
  text(ctx, 'Announcements', 72, 750, 34, NAVY, 600)
  ;[0.85, 0.62, 0.4].forEach((v, i) => {
    rr(ctx, 72, 786 + i * 38, (W - 144) * v, 14, 7, i === 0 ? NAVY : 'rgba(28,51,98,.25)')
  })
  text(ctx, 'Auto-refreshing', 72, 900, 22, SOFT)
}

function drawScreen(ctx, idx, t) {
  ctx.fillStyle = CREAM
  ctx.fillRect(0, 0, W, H)
  text(ctx, '9:41', 56, 70, 26, NAVY, 600)
  rr(ctx, W - 110, 52, 54, 24, 7, NAVY)
  ;[drawAdmission, drawPeatland, drawBoard][idx](ctx, t)
  // tab dots
  screens.forEach((_, i) => rr(ctx, W / 2 - 50 + i * 40, H - 90, i === idx ? 36 : 16, 12, 6, i === idx ? NAVY : 'rgba(28,51,98,.25)'))
  text(ctx, 'tap to switch app', W / 2, H - 40, 22, SOFT, 500, 'center')
}

function Phone() {
  const group = useRef()
  const st = useRef({ idx: 0, spin: 0, switched: true, hover: 0, hovered: false, acc: 1 })
  const [ctx, texture] = useMemo(() => {
    const cv = document.createElement('canvas')
    cv.width = W
    cv.height = H
    const tex = new THREE.CanvasTexture(cv)
    tex.colorSpace = THREE.SRGBColorSpace
    tex.anisotropy = 4
    return [cv.getContext('2d'), tex]
  }, [])

  useFrame(({ clock, pointer }, dt) => {
    const s = st.current
    // the screen only needs ~30fps; redrawing a 540×1140 canvas every frame is wasteful
    s.acc += dt
    if (s.acc > 1 / 30 || s.spin > 0) {
      s.acc = 0
      drawScreen(ctx, s.idx, clock.elapsedTime)
      texture.needsUpdate = true
    }
    // tap: full spin, swap screen halfway through
    if (s.spin > 0) {
      s.spin = Math.max(0, s.spin - dt * 1.6)
      if (!s.switched && s.spin < 0.5) {
        s.idx = (s.idx + 1) % screens.length
        s.switched = true
      }
    }
    const e = 1 - s.spin
    const spinAngle = s.spin > 0 ? Math.PI * 2 * (1 - Math.pow(1 - e, 3)) : 0
    s.hover = THREE.MathUtils.lerp(s.hover, s.hovered ? 1 : 0, 0.1)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * 0.35, 0.06)
    group.current.children[0].rotation.y = spinAngle
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.2, 0.06)
    group.current.scale.setScalar(1 + s.hover * 0.04)
  })

  return (
    <group ref={group}>
      <group
        onClick={(e) => {
          e.stopPropagation()
          const s = st.current
          if (s.spin === 0) {
            s.spin = 1
            s.switched = false
          }
        }}
        onPointerOver={() => {
          st.current.hovered = true
          setCursorLabel('Tap')
        }}
        onPointerOut={() => {
          st.current.hovered = false
          setCursorLabel('')
        }}
      >
        <RoundedBox args={[1.62, 3.34, 0.17]} radius={0.2} smoothness={6}>
          <meshStandardMaterial color="#13244a" roughness={0.35} metalness={0.25} />
        </RoundedBox>
        <mesh position={[0, 0, 0.087]}>
          <planeGeometry args={[1.48, 3.14]} />
          <meshBasicMaterial map={texture} toneMapped={false} />
        </mesh>
        {/* dynamic island */}
        <mesh position={[0, 1.42, 0.09]} rotation={[0, 0, Math.PI / 2]}>
          <capsuleGeometry args={[0.045, 0.22, 6, 12]} />
          <meshBasicMaterial color="#0b1630" />
        </mesh>
        {/* side buttons */}
        <mesh position={[0.82, 0.6, 0]}>
          <boxGeometry args={[0.03, 0.4, 0.06]} />
          <meshStandardMaterial color="#13244a" />
        </mesh>
        <mesh position={[-0.82, 0.8, 0]}>
          <boxGeometry args={[0.03, 0.24, 0.06]} />
          <meshStandardMaterial color="#13244a" />
        </mesh>
        {/* back plate monogram */}
        <mesh position={[0, 0.9, -0.087]} rotation={[0, Math.PI, 0]}>
          <circleGeometry args={[0.22, 40]} />
          <meshBasicMaterial color={CREAM} />
        </mesh>
      </group>
    </group>
  )
}

export default function HeroPhone({ active = true }) {
  return (
    <Canvas frameloop={active ? 'always' : 'never'} resize={{ offsetSize: true }} camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}>
      <ambientLight intensity={1.4} />
      <directionalLight position={[3, 4, 5]} intensity={2} />
      <directionalLight position={[-4, -2, 2]} intensity={0.6} />
      <PresentationControls global={false} snap speed={1.4} polar={[-0.4, 0.4]} azimuth={[-0.9, 0.9]} cursor={false}>
        <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.6}>
          <Phone />
        </Float>
      </PresentationControls>
    </Canvas>
  )
}
