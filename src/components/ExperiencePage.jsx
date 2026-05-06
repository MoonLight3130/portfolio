import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FaArrowLeft, FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'

const experiences = [
  {
    role: 'Senior Frontend Developer',
    company: 'TechNova Solutions',
    location: 'Remote',
    period: '2024 - Present',
    type: 'Full-time',
    description: 'Leading frontend architecture decisions and mentoring a team of 5 developers. Built a design system used across 12 products. Implemented performance optimizations reducing load times by 60%.',
    achievements: ['Led migration to Next.js 14', 'Built component library (40+ components)', 'Improved Lighthouse score to 98+'],
    color: '#00D9FF',
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Wave Agency',
    location: 'San Francisco, CA',
    period: '2022 - 2024',
    type: 'Full-time',
    description: 'Developed responsive web applications for enterprise clients. Collaborated with UX designers to implement pixel-perfect interfaces. Integrated third-party APIs and payment gateways.',
    achievements: ['Delivered 15+ client projects', 'Reduced bundle size by 45%', 'Implemented CI/CD pipelines'],
    color: '#8B5CF6',
  },
  {
    role: 'Junior Web Developer',
    company: 'StartUp Hub',
    location: 'New York, NY',
    period: '2021 - 2022',
    type: 'Full-time',
    description: 'Built landing pages and marketing sites for early-stage startups. Learned modern React patterns and contributed to open-source projects during company hackathons.',
    achievements: ['Shipped 8 MVPs in 12 months', 'Open-source contributor', 'Promoted in 8 months'],
    color: '#00D9FF',
  },
  {
    role: 'Freelance Developer',
    company: 'Self-Employed',
    location: 'Remote',
    period: '2020 - 2021',
    type: 'Contract',
    description: 'Provided web development services to small businesses and startups. Managed client relationships, project timelines, and delivered custom solutions on tight budgets.',
    achievements: ['20+ satisfied clients', '100% on-time delivery', '5-star average rating'],
    color: '#8B5CF6',
  },
]

function ExperiencePage({ onBack }) {
  const pageRef = useRef(null)

  useGSAP(
    () => {
      gsap.from('.exp-reveal', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        delay: 0.2,
      })
      gsap.from('.exp-card', {
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.12,
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
          className="exp-reveal mb-12 flex items-center gap-3 text-[14px] font-medium uppercase tracking-[1.5px] text-white/70 transition duration-300 hover:text-[#00D9FF]"
        >
          <FaArrowLeft />
          Back to Portfolio
        </button>

        <div className="exp-reveal mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#2f4371] bg-[#111b36]/82 px-4 py-2.5 text-[11px] font-semibold tracking-[1.2px] text-white/92 shadow-[0_0_26px_rgba(0,217,255,0.25)]">
          <FaBriefcase className="text-[#ffd28f]" />
          CAREER JOURNEY
        </div>

        <h1 className="exp-reveal mb-6 text-[72px] font-bold leading-[1.05] tracking-[-2px] text-white [text-shadow:0_0_24px_rgba(255,255,255,0.16)]">
          Experience
          <span className="mt-2 block bg-gradient-to-r from-[#00D9FF] via-[#56beff] to-[#8B5CF6] bg-clip-text text-[48px] font-semibold tracking-[-1px] text-transparent">
            & Work History
          </span>
        </h1>

        <p className="exp-reveal mb-16 max-w-[700px] text-[20px] leading-[1.7] text-[#aec2e1]">
          My professional journey through startups, agencies, and remote work — constantly
          learning, building, and delivering impactful digital experiences.
        </p>

        <div className="relative">
          <div className="absolute left-[27px] top-0 h-full w-0.5 bg-gradient-to-b from-[#00D9FF]/50 via-[#8B5CF6]/50 to-[#00D9FF]/50 lg:left-[31px]" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="exp-card relative flex gap-6 lg:gap-8">
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className="grid h-14 w-14 place-items-center rounded-full border-2 border-[#1f3257] bg-[#0a1228] lg:h-16 lg:w-16"
                    style={{
                      boxShadow: `0 0 20px ${exp.color}40, inset 0 0 12px ${exp.color}20`,
                    }}
                  >
                    <FaBriefcase size={18} style={{ color: exp.color }} />
                  </div>
                </div>

                <div
                  className="group relative flex-1 overflow-hidden rounded-[22px] border border-[#2b4976]/80 bg-[#0a1228]/90 p-7 shadow-[inset_0_0_40px_rgba(0,217,255,0.08),0_14px_48px_rgba(2,8,25,0.6),0_0_28px_rgba(0,217,255,0.06)] transition duration-500 hover:border-[#4a73b5] hover:shadow-[inset_0_0_56px_rgba(0,217,255,0.16),0_0_52px_rgba(139,92,246,0.4),0_0_68px_rgba(0,217,255,0.18)]"
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at 15% 18%, ${exp.color}12, transparent 52%), radial-gradient(circle at 88% 82%, ${exp.color}18, transparent 58%)`,
                    }}
                  />

                  <div className="relative">
                    <div className="mb-1 flex flex-wrap items-center gap-3">
                      <h3 className="text-[22px] font-semibold tracking-[-0.3px] text-white">{exp.role}</h3>
                      <span
                        className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
                        style={{
                          color: exp.color,
                          border: `1px solid ${exp.color}40`,
                          background: `${exp.color}10`,
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>

                    <p className="mb-4 text-[16px] font-medium" style={{ color: exp.color }}>{exp.company}</p>

                    <div className="mb-4 flex flex-wrap items-center gap-4 text-[13px] text-[#8a9cc4]">
                      <span className="flex items-center gap-1.5">
                        <FaCalendar size={11} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaMapMarkerAlt size={11} />
                        {exp.location}
                      </span>
                    </div>

                    <p className="mb-5 text-[15px] leading-[1.65] text-[#aec2e1]">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement) => (
                        <span
                          key={achievement}
                          className="rounded-md border border-[#3b5786]/60 bg-[#13203f]/80 px-3 py-1.5 text-[12px] text-[#c2d3ef]"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperiencePage
