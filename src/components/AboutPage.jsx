import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {
  FaArrowLeft,
  FaCode,
  FaRocket,
  FaLightbulb,
  FaHeart,
  FaUser,
} from 'react-icons/fa'

const highlights = [
  {
    icon: FaCode,
    title: 'Clean Code',
    description:
      'I write maintainable, scalable code following best practices and design patterns.',
    color: '#00D9FF',
  },
  {
    icon: FaRocket,
    title: 'Performance',
    description:
      'Obsessed with speed — optimizing every millisecond of load time and interaction.',
    color: '#8B5CF6',
  },
  {
    icon: FaLightbulb,
    title: 'Innovation',
    description:
      'Always exploring new technologies and creative solutions to complex problems.',
    color: '#00D9FF',
  },
  {
    icon: FaHeart,
    title: 'Passion',
    description:
      'Development is not just work — it is my craft, my hobby, and my continuous journey.',
    color: '#8B5CF6',
  },
]

const stats = [
  { value: '3+', label: 'Years Coding' },
  { value: '15+', label: 'Projects Built' },
  { value: '10K+', label: 'Lines of Code' },
  { value: '99%', label: 'Client Satisfaction' },
]

function AboutPage({ onBack }) {
  const pageRef = useRef(null)

  useGSAP(
    () => {
      gsap.from('.about-reveal', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        delay: 0.2,
      })
      gsap.from('.about-card', {
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.08,
        delay: 0.4,
      })
      gsap.from('.about-stat', {
        y: 20,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.08,
        delay: 0.5,
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
          className="about-reveal mb-12 flex items-center gap-3 text-[14px] font-medium uppercase tracking-[1.5px] text-white/70 transition duration-300 hover:text-[#00D9FF]"
        >
          <FaArrowLeft />
          Back to Portfolio
        </button>

        <div className="about-reveal mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#2f4371] bg-[#111b36]/82 px-4 py-2.5 text-[11px] font-semibold tracking-[1.2px] text-white/92 shadow-[0_0_26px_rgba(0,217,255,0.25)]">
          <FaUser className="text-[#ffd28f]" />
          KNOW ME BETTER
        </div>

        <h1 className="about-reveal mb-6 text-[72px] font-bold leading-[1.05] tracking-[-2px] text-white [text-shadow:0_0_24px_rgba(255,255,255,0.16)]">
          About Me
          <span className="mt-2 block bg-gradient-to-r from-[#00D9FF] via-[#56beff] to-[#8B5CF6] bg-clip-text text-[48px] font-semibold tracking-[-1px] text-transparent">
            & My Journey
          </span>
        </h1>

        <p className="about-reveal mb-16 max-w-[800px] text-[20px] leading-[1.7] text-[#aec2e1]">
          I am a passionate Frontend Developer who believes in the power of beautiful,
          performant, and accessible web experiences. Every line of code I write is
          driven by a desire to create something meaningful.
        </p>

        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="about-stat relative overflow-hidden rounded-[20px] border border-[#2b4976]/80 bg-[#0a1228]/90 p-7 text-center shadow-[inset_0_0_40px_rgba(0,217,255,0.08),0_14px_48px_rgba(2,8,25,0.6),0_0_28px_rgba(0,217,255,0.06)] transition duration-500 hover:border-[#4a73b5] hover:shadow-[inset_0_0_56px_rgba(0,217,255,0.16),0_0_52px_rgba(139,92,246,0.4),0_0_68px_rgba(0,217,255,0.18)]"
            >
              <div className="mb-2 text-[42px] font-bold leading-none text-white [text-shadow:0_0_20px_rgba(0,217,255,0.5)]">
                {stat.value}
              </div>
              <div className="text-[13px] font-medium uppercase tracking-[1.2px] text-[#8a9cc4]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="about-reveal relative overflow-hidden rounded-[22px] border border-[#2b4976]/80 bg-[#0a1228]/90 p-8 shadow-[inset_0_0_40px_rgba(0,217,255,0.08),0_14px_48px_rgba(2,8,25,0.6),0_0_28px_rgba(0,217,255,0.06)]">
            <h3 className="mb-5 text-[24px] font-semibold text-white">My Story</h3>
            <div className="space-y-4 text-[16px] leading-[1.75] text-[#aec2e1]">
              <p>
                I started my coding journey in 2021 when I built my first HTML page. What
                began as curiosity quickly turned into an obsession with creating digital
                experiences that people love to use.
              </p>
              <p>
                Over the years, I have worked with startups, agencies, and freelance clients —
                each project teaching me something new about design, performance, and user
                psychology.
              </p>
              <p>
                Today, I specialize in React ecosystems with a strong focus on animation,
                accessibility, and modern CSS. I believe great code is invisible — it just
                works, feels natural, and makes users smile.
              </p>
            </div>
          </div>

          <div className="about-reveal relative overflow-hidden rounded-[22px] border border-[#2b4976]/80 bg-[#0a1228]/90 p-8 shadow-[inset_0_0_40px_rgba(0,217,255,0.08),0_14px_48px_rgba(2,8,25,0.6),0_0_28px_rgba(0,217,255,0.06)]">
            <h3 className="mb-5 text-[24px] font-semibold text-white">What Drives Me</h3>
            <div className="space-y-4 text-[16px] leading-[1.75] text-[#aec2e1]">
              <p>
                I am driven by the challenge of turning complex problems into simple,
                elegant solutions. The web is my canvas, and JavaScript is my paintbrush.
              </p>
              <p>
                When I am not coding, you will find me exploring new design trends,
                contributing to open-source projects, or mentoring aspiring developers
                in online communities.
              </p>
              <p>
                My goal is simple: build products that matter, write code that lasts, and
                never stop learning in this ever-evolving field.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="about-card group relative overflow-hidden rounded-[22px] border border-[#2b4976]/80 bg-[#0a1228]/90 p-7 shadow-[inset_0_0_40px_rgba(0,217,255,0.08),0_14px_48px_rgba(2,8,25,0.6),0_0_28px_rgba(0,217,255,0.06)] transition duration-500 hover:border-[#4a73b5] hover:shadow-[inset_0_0_56px_rgba(0,217,255,0.16),0_0_52px_rgba(139,92,246,0.4),0_0_68px_rgba(0,217,255,0.18)]"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at 15% 18%, ${item.color}12, transparent 52%), radial-gradient(circle at 88% 82%, ${item.color}18, transparent 58%)`,
                }}
              />

              <div className="relative">
                <div
                  className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-white/15"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}22, ${item.color}08)`,
                    boxShadow: `0 0 24px ${item.color}30, inset 0 0 14px ${item.color}15`,
                  }}
                >
                  <item.icon size={26} style={{ color: item.color }} />
                </div>

                <h3 className="mb-3 text-[20px] font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.65] text-[#8a9cc4]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutPage
