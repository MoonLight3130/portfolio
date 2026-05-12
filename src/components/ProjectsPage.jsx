import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FaArrowLeft, FaStar, FaCheck, FaCode, FaGithub, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'ResQNow — Emergency Assistance Platform',
    description: 'Smart emergency response platform designed to provide instant access to medical, police, and rescue assistance through real-time location tracking and modern responsive UI. Currently working on live emergency alerts, real-time responder tracking, secure authentication, and faster emergency communication systems.',
    tech: ['React', 'Tailwind', 'Firebase', 'Node.js'],
    icon: FaStar,
    iconColor: '#ffd700',
    stats: {},
    featured: true,
    githubUrl: 'https://github.com/MoonLight3130/',
    demoUrl: 'https://resqnow-9e907.web.app/',
  },
  {
    title: 'TaskFlow — Smart Task Management Platform',
    description: 'Modern task management platform with real-time collaboration, smart workflow organization, and productivity-focused features for teams and individuals. Currently working on AI-powered task automation, drag-and-drop Kanban boards, and advanced real-time notification systems.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    icon: FaCheck,
    iconColor: '#4ade80',
    stats: {},
    featured: true,
    githubUrl: 'https://github.com/MoonLight3130/',
    demoUrl: 'https://taskflow01-chi.vercel.app/',
  },
  {
    title: 'BrawlersHood — Esports Documentary Experience',
    description: 'eSports platform exploring competitive gaming culture through cinematic storytelling, interactive visuals, and modern web animations. Currently working on animations, dynamic transitions, interactive story sections, and performance optimization for a smoother cinematic experience.',
    tech: ['React', 'GSAP', 'Tailwind', 'Three.js'],
    icon: FaCode,
    iconColor: '#00D9FF',
    stats: {},
    featured: true,
    githubUrl: 'https://github.com/MoonLight3130/',
    demoUrl: 'https://subtle-beijinho-d533fd.netlify.app/',
  },
  {
    title: 'EverAfter — Wedding Event Platform',
    description: 'Elegant wedding event platform designed for showcasing wedding details, photo galleries, RSVP management, and memorable moments with a modern responsive UI. Currently working on interactive invitations, guest management features, animated galleries, and seamless event scheduling integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    icon: FaStar,
    iconColor: '#8B5CF6',
    stats: {},
    featured: false,
    githubUrl: 'https://github.com/MoonLight3130/',
    demoUrl: 'https://wedding-azure-two.vercel.app/',
  },
  {
    title: 'Developer Portfolio 3.0',
    description: 'Modern personal portfolio website featuring immersive animations, glowing UI elements, and responsive layouts to showcase skills, projects, and frontend development expertise. Currently working on advanced motion effects, interactive project sections, smooth GSAP transitions, and optimized performance for a seamless user experience.',
    tech: ['React', 'GSAP', 'Tailwind', 'Three.js'],
    icon: FaCheck,
    iconColor: '#00D9FF',
    stats: {},
    featured: false,
    githubUrl: 'https://github.com/MoonLight3130/',
    demoUrl: 'https://portfolio-eta-eosin-28.vercel.app/',
  },
  {
    title: 'Developer Portfolio 2.0',
    description: 'Modern interactive developer portfolio built with smooth animations, glassmorphism UI, and responsive design to showcase projects, skills, and experience in a visually engaging way. Currently working on advanced GSAP animations, interactive project showcases, performance optimization, and enhanced mobile responsiveness.',
    tech: ['React', 'GSAP', 'Tailwind', 'Three.js'],
    icon: FaCode,
    iconColor: '#4ade80',
    stats: {},
    featured: false,
    githubUrl: 'https://github.com/MoonLight3130/',
    demoUrl: 'https://stellar-faloodeh-2c19d3.netlify.app/',
  },
]

function ProjectsPage({ onBack }) {
  const pageRef = useRef(null)

  useGSAP(
    () => {
      gsap.from('.projects-reveal', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        delay: 0.2,
      })
      gsap.from('.projects-card', {
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.08,
        delay: 0.4,
      })

      // 3D tilt hover effect for project cards
      const cards = gsap.utils.toArray('.projects-card')
      cards.forEach((card) => {
        const glow = card.querySelector('.card-glow')

        const handleMouseMove = (e) => {
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          const centerX = rect.width / 2
          const centerY = rect.height / 2

          const rotateX = ((y - centerY) / centerY) * -6
          const rotateY = ((x - centerX) / centerX) * 6

          gsap.to(card, {
            rotateX,
            rotateY,
            scale: 1.02,
            duration: 0.4,
            ease: 'power2.out',
          })

          if (glow) {
            gsap.to(glow, {
              x: (x - centerX) * 0.2,
              y: (y - centerY) * 0.2,
              opacity: 0.8,
              duration: 0.4,
              ease: 'power2.out',
            })
          }
        }

        const handleMouseLeave = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
          })

          if (glow) {
            gsap.to(glow, {
              x: 0,
              y: 0,
              opacity: 0,
              duration: 0.6,
              ease: 'power2.out',
            })
          }
        }

        card.addEventListener('mousemove', handleMouseMove)
        card.addEventListener('mouseleave', handleMouseLeave)
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
          className="mb-12 flex items-center gap-3 text-[14px] font-medium uppercase tracking-[1.5px] text-white/90 transition duration-300 hover:text-[#00D9FF]"
        >
          <FaArrowLeft />
          Back to Portfolio
        </button>

        <div className="projects-reveal mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#2f4371] bg-[#111b36]/82 px-4 py-2.5 text-[11px] font-semibold tracking-[1.2px] text-white/92 shadow-[0_0_26px_rgba(0,217,255,0.25)]">
          <FaCode className="text-[#ffd28f]" />
          MY WORK
        </div>

        <h1 className="projects-reveal mb-6 text-[72px] font-bold leading-[1.05] tracking-[-2px] text-white [text-shadow:0_0_24px_rgba(255,255,255,0.16)]">
          All Projects
          <span className="mt-2 block bg-gradient-to-r from-[#00D9FF] via-[#56beff] to-[#8B5CF6] bg-clip-text text-[48px] font-semibold tracking-[-1px] text-transparent">
            & Open Source
          </span>
        </h1>

        <p className="projects-reveal mb-16 max-w-[700px] text-[20px] leading-[1.7] text-[#aec2e1]">
          A curated collection of my best work — from production-grade applications to experimental
          side projects, all built with modern technologies and best practices.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: '1000px' }}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="projects-card group relative overflow-hidden rounded-[22px] border border-[#2b4976]/80 bg-[#0a1228]/90 p-7 shadow-[inset_0_0_40px_rgba(0,217,255,0.08),0_14px_48px_rgba(2,8,25,0.6),0_0_28px_rgba(0,217,255,0.06)] transition duration-500 hover:border-[#4a73b5] hover:shadow-[inset_0_0_56px_rgba(0,217,255,0.16),0_0_52px_rgba(139,92,246,0.4),0_0_68px_rgba(0,217,255,0.18)]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div
                className="card-glow pointer-events-none absolute inset-0 rounded-[22px] opacity-0"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${project.iconColor}15, transparent 70%)`,
                  filter: 'blur(20px)',
                  transform: 'translateZ(-10px)',
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at 15% 18%, ${project.iconColor}12, transparent 52%), radial-gradient(circle at 88% 82%, ${project.iconColor}18, transparent 58%)`,
                }}
              />

              {project.featured && (
                <div className="absolute right-6 top-6 rounded-full border border-[#ffd700]/30 bg-[#ffd700]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#ffd700]">
                  Featured
                </div>
              )}

              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <project.icon
                    size={28}
                    style={{ color: project.iconColor }}
                    className="[filter:drop-shadow(0_0_8px_currentColor)]"
                  />
                  <h3 className="text-[24px] font-semibold tracking-[-0.3px] text-white">{project.title}</h3>
                </div>

                <p className="mb-5 min-h-[80px] text-[15px] leading-[1.65] text-[#8a9cc4]">
                  {project.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#3b5786]/80 bg-[#13203f]/92 px-3 py-1.5 text-[12px] text-[#c2d3ef]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mb-6 flex items-center gap-6 border-t border-[#1f3257]/60 pt-4">
                  <span className="flex items-center gap-1.5 text-[13px] text-[#8a9cc4]">
                    <FaStar size={12} className="text-[#ffd700]" /> {project.stats.stars}
                  </span>
                  <span className="flex items-center gap-1.5 text-[13px] text-[#8a9cc4]">
                    <FaGithub size={12} /> {project.stats.forks}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                    className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[1.2px] text-white/80 transition duration-300 hover:text-[#00D9FF]"
                  >
                    Live Demo
                    <FaExternalLinkAlt size={11} />
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-full border border-[#365483] text-white/88 transition duration-300 hover:border-[#00D9FF] hover:text-[#00D9FF] hover:shadow-[0_0_20px_rgba(0,217,255,0.5)]"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
