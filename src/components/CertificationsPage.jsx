import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FaAward, FaCalendar, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa'

const certifications = [
  {
    title: 'Meta Front-End Developer',
    org: 'Meta (Facebook)',
    date: '2024',
    description: 'Professional certificate covering React, advanced CSS, JavaScript, and responsive design principles.',
    skills: ['React', 'Advanced CSS', 'JavaScript', 'UX/UI'],
    color: '#00D9FF',
  },
  {
    title: 'AWS Cloud Practitioner',
    org: 'Amazon Web Services',
    date: '2024',
    description: 'Foundational knowledge of AWS cloud services, architecture, and best practices.',
    skills: ['Cloud Computing', 'AWS Services', 'Architecture'],
    color: '#8B5CF6',
  },
  {
    title: 'Google UX Design',
    org: 'Google',
    date: '2023',
    description: 'Complete UX design process including wireframing, prototyping, and user research methodologies.',
    skills: ['Figma', 'Prototyping', 'User Research', 'Wireframing'],
    color: '#00D9FF',
  },
  {
    title: 'JavaScript Algorithms',
    org: 'freeCodeCamp',
    date: '2023',
    description: 'Advanced JavaScript algorithms and data structures with 300+ coding challenges completed.',
    skills: ['JavaScript', 'Data Structures', 'Algorithms'],
    color: '#8B5CF6',
  },
  {
    title: 'React Native Specialist',
    org: 'Udemy',
    date: '2023',
    description: 'Cross-platform mobile app development using React Native with real-world project experience.',
    skills: ['React Native', 'Mobile Dev', 'iOS', 'Android'],
    color: '#00D9FF',
  },
  {
    title: 'Full Stack Open',
    org: 'University of Helsinki',
    date: '2022',
    description: 'Modern web development with React, Node.js, GraphQL, TypeScript, and testing libraries.',
    skills: ['Node.js', 'GraphQL', 'TypeScript', 'Testing'],
    color: '#8B5CF6',
  },
]

function CertificationsPage({ onBack }) {
  const pageRef = useRef(null)

  useGSAP(
    () => {
      gsap.from('.cert-reveal', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        delay: 0.2,
      })

      gsap.from('.cert-card', {
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
          className="cert-reveal mb-12 flex items-center gap-3 text-[14px] font-medium uppercase tracking-[1.5px] text-white/70 transition duration-300 hover:text-[#00D9FF]"
        >
          <FaArrowLeft />
          Back to Portfolio
        </button>

        <div className="cert-reveal mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#2f4371] bg-[#111b36]/82 px-4 py-2.5 text-[11px] font-semibold tracking-[1.2px] text-white/92 shadow-[0_0_26px_rgba(0,217,255,0.25)]">
          <FaAward className="text-[#ffd28f]" />
          MY ACHIEVEMENTS
        </div>

        <h1 className="cert-reveal mb-6 text-[72px] font-bold leading-[1.05] tracking-[-2px] text-white [text-shadow:0_0_24px_rgba(255,255,255,0.16)]">
          Certifications
          <span className="mt-2 block bg-gradient-to-r from-[#00D9FF] via-[#56beff] to-[#8B5CF6] bg-clip-text text-[48px] font-semibold tracking-[-1px] text-transparent">
            & Professional Credentials
          </span>
        </h1>

        <p className="cert-reveal mb-16 max-w-[700px] text-[20px] leading-[1.7] text-[#aec2e1]">
          A collection of professional certifications and credentials that validate my expertise
          in modern web development, cloud technologies, and user experience design.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="cert-card group relative overflow-hidden rounded-[22px] border border-[#2b4976]/80 bg-[#0a1228]/90 p-7 shadow-[inset_0_0_40px_rgba(0,217,255,0.08),0_14px_48px_rgba(2,8,25,0.6),0_0_28px_rgba(0,217,255,0.06)] transition duration-500 hover:border-[#4a73b5] hover:shadow-[inset_0_0_56px_rgba(0,217,255,0.16),0_0_52px_rgba(139,92,246,0.4),0_0_68px_rgba(0,217,255,0.18)]"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at 15% 18%, ${cert.color}12, transparent 52%), radial-gradient(circle at 88% 82%, ${cert.color}18, transparent 58%)`,
                }}
              />

              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-xl border border-white/15"
                    style={{
                      background: `linear-gradient(135deg, ${cert.color}22, ${cert.color}08)`,
                      boxShadow: `0 0 20px ${cert.color}30, inset 0 0 12px ${cert.color}15`,
                    }}
                  >
                    <FaAward size={22} style={{ color: cert.color }} />
                  </div>
                  <span className="flex items-center gap-1.5 text-[13px] font-medium text-[#8a9cc4]">
                    <FaCalendar size={11} />
                    {cert.date}
                  </span>
                </div>

                <h3 className="mb-2 text-[22px] font-semibold tracking-[-0.3px] text-white">
                  {cert.title}
                </h3>
                <p className="mb-1 text-[14px] font-medium text-[#00D9FF]">{cert.org}</p>
                <p className="mb-5 text-[15px] leading-[1.65] text-[#8a9cc4]">
                  {cert.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-[#3b5786]/80 bg-[#13203f]/92 px-3 py-1.5 text-[12px] text-[#c2d3ef]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[1.2px] text-white/80 transition duration-300 hover:text-[#00D9FF]"
                >
                  Verify Credential
                  <FaExternalLinkAlt size={11} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CertificationsPage
