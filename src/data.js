export const profile = {
  name: 'Fatharony Fatwa',
  first: 'Fatharony',
  last: 'Fatwa',
  role: 'Web Developer & Visual Creator',
  location: 'Pekanbaru, Riau',
  email: 'fatharonyfatwa@gmail.com',
  phone: '+6285283793072',
  linkedin: 'https://www.linkedin.com/in/fatharony-fatwa-77a416297/',
  linkedinLabel: 'fatharony-fatwa',
}

export const about = [
  "I'm Fatharony Fatwa, a D4 Informatics Engineering graduate of Politeknik Caltex Riau focused on web development, data analytics, and machine learning. I like building information systems that make everyday processes simpler, from student admissions to digital notice boards.",
  'My internships span IT support at Bank Rakyat Indonesia, land mapping and spatial data at BPN Rokan Hilir, and digital-marketing content production. I also work with visuals — graphic design, photography, and video — and built a U-Net model that detects peatland fires from Sentinel-2 imagery.',
]

export const stats = [
  { value: 3.33, decimals: 2, label: 'CGPA out of 4.00' },
  { value: 3, label: 'Internships' },
  { value: 15, suffix: '+', label: 'Projects built' },
  { value: 4, label: 'Community service (PKM)' },
]

export const heroLabels = ['web development', 'machine learning', 'data analytics', 'visual design']

export const experience = [
  {
    year: 2026,
    company: 'Bank Rakyat Indonesia (BRI) Regional Office Pekanbaru',
    role: 'IT & E-Channel Intern',
    period: 'Nov 2026 – May 2027',
    blurb: 'Information Technology & E-Channel Department.',
    points: [
      'Helped check the readiness of hardware — PCs, laptops, and printers — to support the work unit’s daily operations.',
      'Observed and learned first-level handling steps for helpdesk complaints.',
      'Learned to record system maintenance reports and antivirus updates according to standard operating procedures (SOP).',
      'Designed social media content to support publication needs.',
    ],
  },
  {
    year: 'Intern', // TODO: replace with the internship year once you confirm the dates
    company: 'PT Usaha Saudara Mandiri',
    role: 'Digital Marketing Intern',
    period: 'Internship program', // TODO: add the exact period, e.g. 'Aug 2025 – Dec 2025'
    blurb: 'The role of digital marketing in raising brand awareness and engagement through visual content.',
    points: [
      'Produced visual content — graphic design, photos, and videos — to support the company’s digital marketing strategy.',
      'Contributed to raising brand awareness and engagement through visual content.',
      'Tools: Adobe Illustrator, Photoshop, After Effects, Premiere Pro, Lightroom, CapCut, and Canva.',
    ],
  },
  {
    year: 2021,
    company: 'Kantor Pertanahan (BPN) Kabupaten Rokan Hilir',
    role: 'Field Work Practice Intern',
    period: 'Oct 2021 – Dec 2021',
    blurb: 'Vocational school field work practice (PKL).',
    points: [
      'Learned to use AutoCAD for processing land drawings and maps.',
      'Learned ArcGIS for spatial data processing and mapping.',
      'Learned the technical use of the ComNav T300 GNSS survey instrument.',
    ],
  },
]

export const organizations = [
  {
    year: 2022,
    company: 'Keluarga Mahasiswa PCR-ROHIL',
    role: 'Kominfo Division Member',
    period: 'Sep 2022 – Sep 2026',
    blurb: 'Student family association of Rokan Hilir at Politeknik Caltex Riau.',
    points: [
      'Active member and Kominfo (communication & information) board member for the 2022–2026 period.',
      'Member of the Kominfo division for the PCR B2C 2023 & 2024 and USC PCR 2024 events, and the publication division for USC 2023.',
      'Committee member (equipment division) for the Rokan Hilir Student Futsal Tournament.',
    ],
  },
  {
    year: 2023,
    company: 'ITSA & Sumatera Career Center PCR',
    role: 'Committee & Division Member',
    period: 'Aug 2023 – Aug 2026',
    blurb: 'Informatics student association and the campus career center at Politeknik Caltex Riau.',
    points: [
      'Member of the Information Technology Student Association (ITSA) and the events division for ITSA CUP VOLY 2023.',
      'Committee member for PCR-GTS 2023 & 2024, and Rokan Hilir regional coordinator for PCR-GTS 2023.',
      'Committee for career events: graduate career preparation 2023, alumni briefing 2023, campus hiring, career briefing with P&G 2024, MSIB batch 7 briefing, and a focus group discussion.',
    ],
  },
]

export const education = {
  school: 'Politeknik Caltex Riau',
  degree: 'D4 in Informatics Engineering',
  start: 'Sep 2022',
  end: 'Sep 2026',
  gpa: '3.33',
}

// shown as the education timeline, oldest first
export const eduTimeline = [
  {
    yr: '2019',
    title: 'SMK N 1 Bangko',
    text: 'Jun 2019 · Building Design Modeling & Information (TDPIB) · Vice Chair of OSIS 2019–2020',
  },
  {
    yr: '2022',
    title: education.school,
    text: `${education.start} · Started ${education.degree} · Rokan Hilir Regency Government Scholarship 2022–2026`,
  },
  {
    yr: '2026',
    title: education.degree,
    text: `${education.end} · CGPA ${education.gpa} / 4.00 · 4 community service (PKM) programs`,
  },
]

export const featured = {
  title: 'Student Admission System',
  company: 'SMA Methodist Bangko',
  intro:
    'My final project: a web-based admission (PPDB) information system for SMA Methodist Bangko, built with CodeIgniter and MySQL using the Prototyping method to simplify registration and the management of prospective student data.',
  modules: [
    { name: 'Multi-role Access', desc: 'One login that routes Admin, Panitia, Bendahara, and Siswa to their own pages.' },
    { name: 'Student Registration', desc: 'Prospective students register and fill in their data online.' },
    { name: 'Committee Review', desc: 'The admissions committee (Panitia) manages incoming applicant data.' },
    { name: 'Treasurer', desc: 'The Bendahara role handles the financial side of admission.' },
    { name: 'Admin Dashboard', desc: 'Admins oversee the whole admission process in one place.' },
  ],
}

export const projects = [
  {
    title: 'Peatland Fire Detection',
    subtitle: 'U-Net segmentation on Sentinel-2 imagery',
    period: 'Computer Vision',
    kind: 'Deep Learning',
    art: 'sat',
    stack: ['Python', 'U-Net', 'Sentinel-2', 'GitHub'],
    points: [
      'Developed a spatial segmentation model based on the U-Net architecture to detect burned peatland areas.',
      'Used Sentinel-2 satellite imagery as input, turning raw scenes into pixel-level fire-area masks.',
      'Built the pipeline in Python with Visual Studio Code and GitHub.',
    ],
  },
  {
    title: 'Brand Visual Content',
    subtitle: 'Digital marketing at PT Usaha Saudara Mandiri',
    period: 'Internship',
    kind: 'Design · Video',
    art: 'design',
    stack: ['Illustrator', 'Photoshop', 'After Effects', 'Premiere Pro', 'Lightroom', 'CapCut', 'Canva'],
    points: [
      'Produced graphic design, photo, and video content to support the company’s digital marketing.',
      'Focused on raising brand awareness and engagement through visual content.',
      'Studied the role of digital marketing in brand awareness as the topic of the internship report.',
    ],
  },
  {
    title: 'Digital Information Board',
    subtitle: 'Display system for a Kumon tutoring center',
    period: '2024 · Team',
    kind: 'Full-Stack',
    art: 'display',
    stack: ['Laravel', 'PHP'],
    points: [
      'Built a digital information board for a school/tutoring center as a team project (Framework Workshop 2).',
      'Developed with the Laravel framework.',
      'Also built a digital information board for a tutoring center using CodeIgniter.',
    ],
  },
  {
    title: 'Daily-Goods E-Commerce',
    subtitle: 'Online store sales information system',
    period: '2023',
    kind: 'Web',
    art: 'retail',
    stack: ['CodeIgniter', 'PHP'],
    points: [
      'Created an e-commerce website for selling a store’s daily goods (Framework Workshop 1).',
      'Built as a sales information system for everyday products using the CodeIgniter framework.',
    ],
  },
  {
    title: 'E-Commerce Data Warehouse',
    subtitle: 'Descriptive & predictive analysis',
    period: 'Data Warehouse',
    kind: 'Data Analytics',
    art: 'dw',
    stack: ['Data Warehouse', 'Data Analytics'],
    points: [
      'Performed descriptive and predictive data analysis for an e-commerce platform using a data warehouse.',
      'Designed and developed the data warehouse that the analysis runs on.',
    ],
  },
  {
    title: 'Water Quality Monitoring',
    subtitle: 'Water & wastewater app for Pekanbaru',
    period: 'Mobile · ML',
    kind: 'Mobile · ML',
    art: 'water',
    stack: ['Mobile App', 'Machine Learning', 'Logistic Regression'],
    points: [
      'Designed an application for monitoring water quality and wastewater treatment in Pekanbaru (Mobile Programming).',
      'Implemented machine learning with Logistic Regression for the same application (Machine Learning course).',
    ],
  },
  {
    title: 'ANTI Sampah',
    subtitle: 'UI & prototype for a waste-prone area app',
    period: 'HCI · Team',
    kind: 'UI/UX',
    art: 'jobs',
    stack: ['UI Design', 'Prototyping'],
    points: [
      'Developed the user interface and an app prototype aimed at environments prone to waste problems.',
      'Worked in a team as part of the Human-Computer Interaction course.',
    ],
  },
  {
    title: 'Local Culture & Arts System',
    subtitle: 'Information system to empower local communities',
    period: 'Team',
    kind: 'Software Eng.',
    art: 'doc',
    stack: ['SKPL', 'DPPL', 'Project Management'],
    points: [
      'Built an online Local Culture and Arts Information System to help empower the local economy (Project Management).',
      'Wrote the software requirements (SKPL) and design (DPPL) documents as a team (Software Engineering 2).',
      'Also developed a laundry service application (Software Engineering 1).',
    ],
  },
  {
    title: 'Games & Animation',
    subtitle: 'Game Maker, Unity, and Blender',
    period: 'Multimedia',
    kind: 'Game · 3D',
    art: 'game',
    stack: ['Game Maker', 'Unity', 'Blender', 'CapCut'],
    points: [
      'Developed the game “Trapped in the forest” on my own with Game Maker, and “Hack the out” with a team using Unity.',
      'Created 2D and 3D animation in Blender, including a promotional animation and the finishing of a team animated film.',
    ],
  },
]

export const skillCategories = [
  { id: 'web', label: 'Web Development', sub: 'CodeIgniter · Laravel · PHP', items: ['CodeIgniter', 'Laravel', 'PHP', 'XAMPP', 'Visual Studio Code', 'Git/GitHub'] },
  { id: 'ml', label: 'Data & Machine Learning', sub: 'Python · U-Net · Data Warehouse', items: ['Python', 'Deep Learning', 'U-Net', 'Image Segmentation', 'Logistic Regression', 'Data Warehouse', 'Data Analytics', 'MATLAB'] },
  { id: 'design', label: 'Design & Multimedia', sub: 'Adobe · Blender · Canva', items: ['Illustrator (AI)', 'Photoshop (PS)', 'After Effects (AE)', 'Premiere Pro', 'Lightroom (LR)', 'CapCut', 'Canva', 'Blender', 'Photography', 'Videography'] },
  { id: 'ui', label: 'UI & Game Dev', sub: 'UI/UX · Unity · Game Maker', items: ['UI Design', 'Prototyping', 'Unity', 'Game Maker', '2D & 3D Animation'] },
  { id: 'it', label: 'IT Support & GIS', sub: 'Troubleshooting · ArcGIS · AutoCAD', items: ['Hardware Troubleshooting', 'First-level Helpdesk', 'System Maintenance Reports', 'Antivirus Updates (SOP)', 'AutoCAD', 'ArcGIS', 'GNSS Survey (ComNav T300)'] },
]

// legends printed on the 3D keyboard, each tied to a category
export const keycaps = [
  ['CI', 'web'], ['Laravel', 'web'], ['PHP', 'web'], ['CAD', 'it'], ['Git', 'web'],
  ['Python', 'ml'], ['U-Net', 'ml'], ['LogReg', 'ml'], ['DW', 'ml'], ['MATLAB', 'ml'],
  ['Ai', 'design'], ['Ps', 'design'], ['Ae', 'design'], ['Pr', 'design'], ['Lr', 'design'],
  ['Blender', 'design'], ['Unity', 'ui'], ['GIS', 'it'], ['UI/UX', 'ui'], ['VS Code', 'web'],
]

export const softSkills = ['Teamwork', 'Communication', 'Quick Learner', 'Responsibility', 'Initiative', 'Discipline', 'Adaptability']
export const software = [
  'Microsoft Office', 'Adobe Illustrator (AI)', 'Adobe Photoshop (PS)', 'Adobe After Effects (AE)', 'Adobe Premiere Pro',
  'Adobe Lightroom (LR)', 'CapCut', 'Canva', 'Blender', 'MATLAB', 'Visual Studio Code', 'AutoCAD', 'ArcGIS',
]
export const aiAssistants = ['Claude', 'Gemini', 'ChatGPT', 'DeepSeek', 'Dreamina', 'Blackbox AI', 'VS Code', 'Copilot']
export const achievements = ['Rokan Hilir Regency Government Scholarship 2022–2026']
