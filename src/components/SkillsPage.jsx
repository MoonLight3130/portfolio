import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FaArrowLeft, FaCode, FaPaintBrush, FaServer, FaMobile, FaDatabase, FaTools } from 'react-icons/fa'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: FaCode,
    color: '#00D9FF',
    skills: [
      { name: 'React', level: 95 },
      { name: 'JavaScript', level: 92 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 88 },
      { name: 'HTML5/CSS3', level: 96 },
      { name: 'Tailwind CSS', level: 94 },
    ],
  },
  {
    title: 'UI/UX Design',
    icon: FaPaintBrush,
    color: '#8B5CF6',
    skills: [
      { name: 'Figma', level: 88 },
      { name: 'Adobe XD', level: 75 },
      { name: 'Responsive Design', level: 95 },
      { name: 'Animation & Motion', level: 90 },
      { name: 'Design Systems', level: 82 },
      { name: 'Prototyping', level: 85 },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: FaServer,
    color: '#00D9FF',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 78 },
      { name: 'REST APIs', level: 88 },
      { name: 'GraphQL', level: 72 },
      { name: 'Authentication', level: 85 },
      { name: 'WebSockets', level: 70 },
    ],
  },
  {
    title: 'Mobile Development',
    icon: FaMobile,
    color: '#8B5CF6',
    skills: [
      { name: 'React Native', level: 82 },
      { name: 'Flutter', level: 65 },
      { name: 'PWA', level: 88 },
      { name: 'Mobile UI', level: 90 },
      { name: 'App Store Deploy', level: 75 },
      { name: 'Push Notifications', level: 72 },
    ],
  },
  {
    title: 'Database & Cloud',
    icon: FaDatabase,
    color: '#00D9FF',
    skills: [
      { name: 'MongoDB', level: 78 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Firebase', level: 85 },
      { name: 'AWS', level: 70 },
      { name: 'Docker', level: 65 },
      { name: 'CI/CD', level: 72 },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: FaTools,
    color: '#8B5CF6',
    skills: [
      { name: 'Git/GitHub', level: 92 },
      { name: 'VS Code', level: 95 },
      { name: 'Webpack/Vite', level: 82 },
      { name: 'Jest/Testing', level: 78 },
      { name: 'Agile/Scrum', level: 85 },
      { name: 'Documentation', level: 90 },
    ],
  },
]

function SkillsPage({ onBack }) {
  const pageRef = useRef(null)

  useGSAP(
    () => {
      gsap.from('.skills-reveal', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        delay: 0.2,
      })
      gsap.from('.skills-card', {
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.08,
        delay: 0.4,
      })
    },
    { scope: pageRef },
  )

  return (
    <div ref={pageRef} className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#030612_0%,#060d1f_45%,#070a18_100%)]" />
        <div className="absolute -left-40 top-6 h-[480px] w-[480px] rounded-full bg-[#00D9FF]/18 blur-[150px]" />
        <div className="absolute right-[-140px] top-[80px] h-[520px] w-[520px] rounded-full bg-[#8B5CF6]/32 blur-[165px]" />
        <div className="absolute bottom-[-240px] left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#4c3db1]/34 blur-[190px]" />
        <div className="absolute left-[6%] top-[34%] h-[260px] w-[260px] rounded-full bg-[#00d9ff]/14 blur-[110px]" />
        <div className="absolute right-[10%] top-[52%] h-[270px] w-[270px] rounded-full bg-[#8b5cf6]/18 blur-[115px]" />
        <div className="cyber-grid absolute inset-0 opacity-40" />
        <div className="star-field absolute inset-0 opacity-65" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1580px] px-6 pb-32 pt-12 sm:px-12 lg:px-16">
        <button
          onClick={onBack}
          className="skills-reveal mb-12 flex items-center gap-3 text-[14px] font-medium uppercase tracking-[1.5px] text-white/70 transition duration-300 hover:text-[#00D9FF]"
        >
          <FaArrowLeft />
          Back to Portfolio
        </button>

        <div className="skills-reveal mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#2f4371] bg-[#111b36]/82 px-4 py-2.5 text-[11px] font-semibold tracking-[1.2px] text-white/92 shadow-[0_0_26px_rgba(0,217,255,0.25)]">
          <FaCode className="text-[#ffd28f]" />
          MY EXPERTISE
        </div>

        <h1 className="skills-reveal mb-6 text-[72px] font-bold leading-[1.05] tracking-[-2px] text-white [text-shadow:0_0_24px_rgba(255,255,255,0.16)]">
          Technical Skills
          <span className="mt-2 block bg-gradient-to-r from-[#00D9FF] via-[#56beff] to-[#8B5CF6] bg-clip-text text-[48px] font-semibold tracking-[-1px] text-transparent">
            & Technologies
          </span>
        </h1>

        <p className="skills-reveal mb-16 max-w-[700px] text-[20px] leading-[1.7] text-[#aec2e1]">
          A comprehensive overview of my technical abilities across frontend, backend, design,
          and development tools that power modern web applications.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skills-card group relative overflow-hidden rounded-[22px] border border-[#2b4976]/80 bg-[#0a1228]/90 p-7 shadow-[inset_0_0_40px_rgba(0,217,255,0.08),0_14px_48px_rgba(2,8,25,0.6),0_0_28px_rgba(0,217,255,0.06)] transition duration-500 hover:border-[#4a73b5] hover:shadow-[inset_0_0_56px_rgba(0,217,255,0.16),0_0_52px_rgba(139,92,246,0.4),0_0_68px_rgba(0,217,255,0.18)]"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at 15% 18%, ${category.color}12, transparent 52%), radial-gradient(circle at 88% 82%, ${category.color}18, transparent 58%)`,
                }}
              />

              <div className="relative">
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-xl border border-white/15"
                    style={{
                      background: `linear-gradient(135deg, ${category.color}22, ${category.color}08)`,
                      boxShadow: `0 0 20px ${category.color}30, inset 0 0 12px ${category.color}15`,
                    }}
                  >
                    <category.icon size={22} style={{ color: category.color }} />
                  </div>
                  <h3 className="text-[22px] font-semibold tracking-[-0.3px] text-white">{category.title}</h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-[15px] font-medium text-white">{skill.name}</span>
                        <span className="text-[14px] font-bold" style={{ color: category.color }}>{skill.level}%</span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-[#0d1528] border border-[#1e3055]/50">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${category.color}, ${category.color}88)`,
                            boxShadow: `0 0 12px ${category.color}60, 0 0 4px ${category.color}40`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillsPage
