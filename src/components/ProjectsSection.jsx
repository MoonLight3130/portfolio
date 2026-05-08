import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FaGithub, FaArrowRight, FaStar, FaCheck, FaCode } from 'react-icons/fa'
import previewImage from '../assets/project-preview.png'

const projects = [
  {
    title: 'DevFlow',
    description: 'A platform to discover and share developer resources.',
    tech: ['React', 'Tailwind', 'Firebase'],
    imagePos: '12% 77%',
    icon: FaStar,
    iconColor: '#ffd700',
  },
  {
    title: 'Taskify',
    description: 'A modern task management app to boost productivity.',
    tech: ['React', 'Node.js', 'MongoDB'],
    imagePos: '50% 77%',
    icon: FaCheck,
    iconColor: '#4ade80',
  },
  {
    title: 'Portfolio 3.0',
    description: 'My personal portfolio built with React, GSAP and Tailwind CSS.',
    tech: ['React', 'GSAP', 'Tailwind'],
    imagePos: '85% 77%',
    icon: FaCode,
    iconColor: '#00D9FF',
  },
]

function ProjectsSection() {
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
          <a
            href="#projects"
            className="flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[1.25px] text-white/88 transition duration-300 hover:text-[#00D9FF]"
          >
            VIEW ALL PROJECTS
            <FaArrowRight size={12} />
          </a>
        </div>

        <div className="grid gap-5 p-6 lg:grid-cols-3 lg:p-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-reveal group rounded-2xl border border-[#2b4976]/90 bg-[#0d172f]/82 p-6 shadow-[inset_0_0_40px_rgba(0,217,255,0.12),0_14px_48px_rgba(2,8,25,0.76),0_0_28px_rgba(0,217,255,0.08)] transition duration-350 hover:border-[#4a73b5] hover:shadow-[inset_0_0_48px_rgba(0,217,255,0.18),0_0_52px_rgba(139,92,246,0.48),0_0_68px_rgba(0,217,255,0.22)]"
            >
              <div className="relative overflow-hidden rounded-xl border border-[#314a74]">
                <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.14),transparent_42%)] opacity-80" />
                <img
                  src={previewImage}
                  alt={project.title}
                  className="h-[180px] w-full object-cover transition duration-500 group-hover:scale-[1.07]"
                  style={{ objectPosition: project.imagePos }}
                />
              </div>

              <div className="mt-5 flex items-center gap-3">
                <project.icon
                  size={28}
                  style={{ color: project.iconColor }}
                  className="[filter:drop-shadow(0_0_8px_currentColor)]"
                />
                <h4 className="text-[32px] font-semibold tracking-[-0.5px] text-white">
                  {project.title}
                </h4>
              </div>
              <p className="mt-2.5 min-h-[80px] text-[18px] leading-[1.62] text-[#aec2e1]">
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
                  className="flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[1.2px] text-white transition duration-300 hover:text-[#00D9FF]"
                >
                  LIVE DEMO
                  <FaArrowRight size={12} />
                </button>
                <button
                  type="button"
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
