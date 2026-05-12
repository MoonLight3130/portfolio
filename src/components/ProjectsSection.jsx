import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FaGithub, FaArrowRight, FaStar, FaCheck, FaCode } from 'react-icons/fa'
import previewImage from '../assets/project-preview.png'
import resqnowPreview from '../assets/resqnow-preview.png.png'
import brawlershoodPreview from '../assets/brawlershood-preview.png.png'
import taskflowPreview from '../assets/taskflow-preview.png.png'

const projects = [
  {
    title: 'ResQNow — Emergency Assistance Platform',
    description: 'Smart emergency response platform designed to provide instant access to medical, police, and rescue assistance through real-time location tracking and modern responsive UI.',
    tech: ['React', 'Tailwind', 'Firebase', 'Node.js'],
    imagePos: '12% 77%',
    icon: FaStar,
    iconColor: '#ffd700',
    githubUrl: 'https://github.com/MoonLight3130/',
    demoUrl: 'https://resqnow-9e907.web.app/',
    previewImage: resqnowPreview,
  },
  {
    title: 'TaskFlow — Smart Task Management Platform',
    description: 'Modern task management platform with real-time collaboration, smart workflow organization, and productivity-focused features for real time, teams and individuals.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    imagePos: '50% 77%',
    icon: FaCheck,
    iconColor: '#4ade80',
    githubUrl: 'https://github.com/MoonLight3130/',
    demoUrl: 'https://taskflow01-chi.vercel.app/',
    previewImage: taskflowPreview,
  },
  {
    title: 'BrawlersHood — Esports Documentary Experience',
    description: 'eSports platform exploring competitive gaming culture through cinematic storytelling, interactive visuals, and modern web animations.',
    tech: ['React', 'GSAP', 'Tailwind', 'Three.js'],
    imagePos: '85% 77%',
    icon: FaCode,
    iconColor: '#00D9FF',
    githubUrl: 'https://github.com/MoonLight3130/',
    demoUrl: 'https://subtle-beijinho-d533fd.netlify.app/',
    previewImage: brawlershoodPreview,
  },
]

function ProjectsSection({ onNavClick }) {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      const cleanupCallbacks = []

      gsap.from('.project-reveal', {
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.08,
        delay: 0.2,
      })

      const cards = gsap.utils.toArray('.project-reveal')
      cards.forEach((card) => {
        const onEnter = () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.36,
            ease: 'power3.out',
          })
        }
        const onLeave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.42,
            ease: 'power3.out',
          })
        }
        card.addEventListener('mouseenter', onEnter)
        card.addEventListener('mouseleave', onLeave)
        cleanupCallbacks.push(() => {
          card.removeEventListener('mouseenter', onEnter)
          card.removeEventListener('mouseleave', onLeave)
        })
      })

      return () => {
        cleanupCallbacks.forEach((cleanup) => cleanup())
      }
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className="mt-14 pb-16">
      <div className="overflow-hidden rounded-[24px] border border-[#23406f]/90 bg-[#070f24]/72 shadow-[0_0_68px_rgba(0,217,255,0.15),0_0_78px_rgba(139,92,246,0.15),inset_0_0_42px_rgba(160,198,255,0.10)] backdrop-blur-[34px]">
        <div className="flex items-center justify-between border-b border-[#1f3257]/92 px-10 py-6">
          <h3 className="text-[22px] font-semibold uppercase tracking-[1.5px] text-[#55d9ff] [text-shadow:0_0_12px_rgba(85,217,255,0.4)]">
            Featured Projects
          </h3>
          <button
            type="button"
            onClick={() => onNavClick && onNavClick('Projects')}
            className="flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[1.25px] text-white/88 transition duration-300 hover:text-[#00D9FF]"
          >
            VIEW ALL PROJECTS
            <FaArrowRight size={12} />
          </button>
        </div>

        <div className="grid gap-5 p-4 sm:p-6 lg:grid-cols-3 lg:p-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-reveal group rounded-2xl border border-[#2b4976]/90 bg-[#0d172f]/82 p-6 shadow-[inset_0_0_40px_rgba(0,217,255,0.12),0_14px_48px_rgba(2,8,25,0.76),0_0_28px_rgba(0,217,255,0.08)] transition duration-350 hover:border-[#4a73b5] hover:shadow-[inset_0_0_48px_rgba(0,217,255,0.18),0_0_52px_rgba(139,92,246,0.48),0_0_68px_rgba(0,217,255,0.22)]"
            >
              <div className="relative overflow-hidden rounded-xl border border-[#314a74]">
                <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.14),transparent_42%)] opacity-80" />
                <img
                  src={project.previewImage || previewImage}
                  alt={project.title}
                  className="h-[180px] w-full object-cover transition duration-500 group-hover:scale-[1.45]"
                  style={{ objectPosition: project.imagePos }}
                />
              </div>

              <div className="mt-5">
                <h4 className="text-[24px] font-semibold tracking-[-0.5px] text-white sm:text-[32px]">
                  {project.title}
                </h4>
              </div>
              <p className="mt-2.5 min-h-[60px] text-[16px] leading-[1.62] text-[#aec2e1] sm:min-h-[80px] sm:text-[18px]">
                {project.description}
              </p>

              <div className="mt-4 flex gap-2.5 text-[13px]">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-[#3b5786] bg-[#13203f]/92 px-3 py-1.5 text-[#c2d3ef]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => window.open(project.demoUrl, '_blank')}
                  className="flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[1.2px] text-white transition duration-300 hover:text-[#00D9FF]"
                >
                  LIVE DEMO
                  <FaArrowRight size={12} />
                </button>
                <button
                  type="button"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  aria-label={`${project.title} source code`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-[#365483] text-white/88 transition duration-300 hover:border-[#00D9FF] hover:text-[#00D9FF] hover:shadow-[0_0_20px_rgba(0,217,255,0.5)]"
                >
                  <FaGithub />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
