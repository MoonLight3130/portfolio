import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiFirebase, SiMongodb } from 'react-icons/si'

const skills = [
  { name: 'React', icon: FaReact, color: '#4fd9ff' },
  { name: 'JavaScript', icon: IoLogoJavascript, color: '#ffd84f' },
  { name: 'Tailwind CSS', icon: RiTailwindCssFill, color: '#2ed8ff' },
  { name: 'Node.js', icon: FaNodeJs, color: '#85e65e' },
  { name: 'Python', icon: FaPython, color: '#85b1ff' },
  { name: 'MongoDB', icon: SiMongodb, color: '#45d06f' },
  { name: 'Git', icon: FaGitAlt, color: '#ff784f' },
  { name: 'Firebase', icon: SiFirebase, color: '#ffbe54' },
  { name: 'HTML5', icon: FaHtml5, color: '#ff8454' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#62b8ff' },
]

const experiences = [
  {
    role: 'Frontend Developer Intern',
    company: 'ABC Company',
    dates: '2024 - Present',
    dot: '#49deff',
  },
  {
    role: 'Web Developer Intern',
    company: 'XYZ Company',
    dates: '2023 - 2024',
    dot: '#b97dff',
  },
  {
    role: 'Freelance Developer',
    company: '',
    dates: '2022 - 2023',
    dot: '#9c7bff',
  },
]

function InfoGrid({ onNavClick }) {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.from('.info-card-reveal', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      gsap.to('.skill-orb', {
        y: -8,
        duration: 2.8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.1,
          from: 'random',
        },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className="mt-12">
      <div className="grid gap-0 overflow-hidden rounded-[24px] border border-[#23406f]/90 bg-[#070f24]/72 shadow-[0_0_68px_rgba(0,217,255,0.15),0_0_76px_rgba(139,92,246,0.15),inset_0_0_44px_rgba(168,200,255,0.10)] backdrop-blur-[34px] lg:grid-cols-3">
        <article className="info-card-reveal border-b border-r border-[#1f3257]/92 p-10 lg:min-h-[320px] lg:border-b-0">
          <h3 className="mb-6 text-[22px] font-semibold uppercase tracking-[1.5px] text-[#55d9ff] [text-shadow:0_0_12px_rgba(85,217,255,0.4)]">
            About Me
          </h3>
          <p className="max-w-[340px] text-[22px] leading-[1.68] text-[#c5d4ee]">
            I&apos;m a passionate Frontend Developer who loves creating interactive,
            visually stunning and performance optimized websites. I enjoy turning
            ideas into real world products using modern technologies.
          </p>
          <button
            type="button"
            onClick={() => onNavClick && onNavClick('About')}
            className="mt-8 inline-flex h-13 items-center rounded-xl border border-[#37568d] bg-[#111c37]/88 px-7 text-[13px] font-semibold tracking-[1.25px] text-white shadow-[0_0_28px_rgba(139,92,246,0.32)] transition duration-300 hover:border-[#8B5CF6] hover:shadow-[0_0_36px_rgba(139,92,246,0.68)]"
          >
            MORE ABOUT ME
          </button>
        </article>

        <article className="info-card-reveal border-b border-r border-[#1f3257]/92 p-10 lg:min-h-[320px] lg:border-b-0">
          <h3 className="mb-6 text-[22px] font-semibold uppercase tracking-[1.5px] text-[#55d9ff] [text-shadow:0_0_12px_rgba(85,217,255,0.4)]">
            My Skills
          </h3>
          <div className="grid grid-cols-5 gap-x-6 gap-y-6">
            {skills.map(({ name, icon: Icon, color }) => (
              <div key={name} className="group flex flex-col items-center gap-2.5">
                <div className="skill-orb grid h-[76px] w-[76px] place-items-center rounded-full border border-[#35548b] bg-[#111b34]/98 shadow-[inset_0_0_34px_rgba(0,217,255,0.44),0_0_42px_rgba(139,92,246,0.36),0_0_56px_rgba(0,217,255,0.18)] transition duration-300 group-hover:scale-110 group-hover:shadow-[inset_0_0_42px_rgba(0,217,255,0.64),0_0_52px_rgba(139,92,246,0.58),0_0_72px_rgba(0,217,255,0.28)]">
                  <Icon size={34} style={{ color }} />
                </div>
                <span className="text-center text-[13px] font-medium text-[#b4c5e5]">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </article>

        <article className="info-card-reveal relative p-10 lg:min-h-[320px]">
          <h3 className="mb-6 text-[22px] font-semibold uppercase tracking-[1.5px] text-[#55d9ff] [text-shadow:0_0_12px_rgba(85,217,255,0.4)]">
            Experience
          </h3>
          <div className="absolute left-[50px] top-[82px] h-[200px] w-px bg-gradient-to-b from-[#53deff]/95 via-[#8f74ff]/82 to-transparent shadow-[0_0_26px_rgba(83,222,255,0.68),0_0_38px_rgba(139,92,246,0.42)]" />
          <div className="space-y-10">
            {experiences.map((item) => (
              <div key={item.role} className="relative pl-9">
                <span
                  className="absolute left-0 top-[10px] h-3 w-3 rounded-full shadow-[0_0_18px_currentColor,0_0_28px_currentColor]"
                  style={{ backgroundColor: item.dot, color: item.dot }}
                />
                <h4 className="text-[22px] font-semibold text-white">{item.role}</h4>
                <p className="mt-1.5 text-[18px] text-[#aabde0]">
                  {item.company ? `${item.company} · ` : ''}
                  {item.dates}
                </p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default InfoGrid
