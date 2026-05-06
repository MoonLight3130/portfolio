import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { useSmoothMousePosition } from '../hooks/useMousePosition'

const socialLinks = [
  { icon: FaGithub, href: '#', label: 'GitHub' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
]

const referenceImage =
  '/@fs/C:/Users/user/.cursor/projects/c-Users-user-mine/assets/c__Users_user_AppData_Roaming_Cursor_User_workspaceStorage_4846a57a9b2ff58d7a75f71df639bb94_images_1000142909-9e753400-6fd9-4baf-9b8e-87db22fb2f9a.png'

function Hero() {
  const heroRef = useRef(null)
  const profileRef = useRef(null)
  const glowRef = useRef(null)
  const blobARef = useRef(null)
  const blobBRef = useRef(null)
  const imageContainerRef = useRef(null)
  const mousePosition = useSmoothMousePosition(0.08)

  useGSAP(
    () => {
      const cleanupCallbacks = []

      gsap.from('.hero-reveal', {
        y: 30,
        opacity: 0,
        duration: 1.4,
        ease: 'power4.out',
        stagger: 0.12,
      })

      gsap.to(profileRef.current, {
        y: -18,
        duration: 3.2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })

      gsap.to(glowRef.current, {
        rotate: 360,
        duration: 25,
        ease: 'none',
        repeat: -1,
      })

      gsap.to(blobARef.current, {
        x: 22,
        y: -14,
        duration: 4.2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })

      gsap.to(blobBRef.current, {
        x: -18,
        y: 16,
        duration: 5.1,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })

      gsap.to('.hero-particle', {
        y: 'random(-20, 18)',
        x: 'random(-12, 12)',
        duration: 4.2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.25,
          from: 'random',
        },
      })

      gsap.to('.pulse-glow', {
        scale: 1.05,
        opacity: 1,
        duration: 2.6,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })

      const ctaButtons = gsap.utils.toArray('.cta-btn')
      ctaButtons.forEach((button) => {
        const onEnter = () => {
          gsap.to(button, {
            y: -5,
            scale: 1.05,
            duration: 0.32,
            ease: 'power3.out',
          })
        }
        const onLeave = () => {
          gsap.to(button, {
            y: 0,
            scale: 1,
            duration: 0.38,
            ease: 'power3.out',
          })
        }
        button.addEventListener('mouseenter', onEnter)
        button.addEventListener('mouseleave', onLeave)
        cleanupCallbacks.push(() => {
          button.removeEventListener('mouseenter', onEnter)
          button.removeEventListener('mouseleave', onLeave)
        })
      })

      const heroCols = gsap.utils.toArray('.hero-col')
      const onMove = (event) => {
        const offsetX = (event.clientX / window.innerWidth - 0.5) * 18
        const offsetY = (event.clientY / window.innerHeight - 0.5) * 14
        gsap.to(heroCols, {
          x: (index) => (index - 1) * offsetX * 0.28,
          y: (index) => (1 - index) * offsetY * 0.16,
          duration: 0.85,
          ease: 'power2.out',
        })
      }
      window.addEventListener('mousemove', onMove)
      cleanupCallbacks.push(() => window.removeEventListener('mousemove', onMove))

      return () => {
        cleanupCallbacks.forEach((cleanup) => cleanup())
      }
    },
    { scope: heroRef },
  )

  // 3D tilt effect based on mouse position
  useGSAP(() => {
    if (!imageContainerRef.current || !profileRef.current) return

    const rotateX = mousePosition.y * -8
    const rotateY = mousePosition.x * 8
    const moveX = mousePosition.x * 15
    const moveY = mousePosition.y * 15

    gsap.to(imageContainerRef.current, {
      rotateX,
      rotateY,
      x: moveX,
      y: moveY,
      duration: 0.8,
      ease: 'power2.out',
    })

    // Depth layers for glow effects
    gsap.to(blobARef.current, {
      x: moveX * 0.5,
      y: moveY * 0.5,
      duration: 1,
      ease: 'power2.out',
    })

    gsap.to(blobBRef.current, {
      x: -moveX * 0.3,
      y: -moveY * 0.3,
      duration: 1.2,
      ease: 'power2.out',
    })
  }, {
    scope: heroRef,
    dependencies: [mousePosition.x, mousePosition.y]
  })

  return (
    <section
      ref={heroRef}
      className="relative grid min-h-[780px] grid-cols-1 gap-14 pb-16 pt-12 lg:grid-cols-[1.2fr_1fr_0.8fr] lg:items-center lg:gap-8 lg:pt-14"
    >
      <aside className="hero-reveal pointer-events-none absolute left-[-48px] top-[200px] z-30 hidden flex-col gap-5 lg:flex">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="pointer-events-auto grid h-11 w-11 place-items-center rounded-full border border-white/18 bg-[#0f1730]/92 text-white/75 shadow-[0_0_20px_rgba(0,217,255,0.22)] transition duration-300 hover:border-[#00D9FF]/70 hover:text-[#00D9FF] hover:shadow-[0_0_28px_rgba(0,217,255,0.58)]"
          >
            <Icon size={14} />
          </a>
        ))}
      </aside>

      <div className="hero-col relative z-20 flex max-w-[540px] flex-col justify-center lg:pl-12">
        <span className="hero-reveal mb-7 inline-flex w-fit items-center gap-2.5 rounded-full border border-[#2f4371] bg-[#111b36]/82 px-4 py-2.5 text-[11px] font-semibold tracking-[1.2px] text-white/92 shadow-[0_0_26px_rgba(0,217,255,0.25)]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffd28f] shadow-[0_0_12px_rgba(255,210,143,0.9)]" />
          HELLO, I&apos;M
        </span>

        <h1 className="hero-reveal text-[110px] font-bold leading-[1.02] tracking-[-3.2px] text-white [text-shadow:0_0_24px_rgba(255,255,255,0.16)]">
          Haran
          <span className="mt-3 block bg-gradient-to-r from-[#00D9FF] via-[#56beff] to-[#8B5CF6] bg-clip-text text-[76px] font-semibold tracking-[-1.6px] text-transparent">
            Frontend Developer
          </span>
        </h1>

        <p className="hero-reveal mt-8 max-w-[450px] text-[26px] leading-[1.72] text-[#bfd0ee]">
          I build modern, responsive and animated web experiences.
        </p>

        <div className="hero-reveal mt-11 flex items-center gap-5">
          <button
            type="button"
            className="cta-btn h-[58px] rounded-[16px] border border-[#8B5CF6]/80 bg-gradient-to-r from-[#6d5cff] via-[#9367ff] to-[#d66dff] px-9 text-[13px] font-semibold tracking-[1.3px] text-white shadow-[0_14px_38px_rgba(139,92,246,0.62)] transition duration-300 hover:shadow-[0_0_42px_rgba(139,92,246,0.82)]"
          >
            VIEW MY WORK
          </button>
          <button
            type="button"
            className="cta-btn h-[58px] rounded-[16px] border border-white/26 bg-[#11192f]/84 px-9 text-[13px] font-semibold tracking-[1.3px] text-white/92 shadow-[0_0_30px_rgba(0,0,0,0.45)] transition duration-300 hover:border-[#00D9FF]/58 hover:text-white hover:shadow-[0_0_32px_rgba(0,217,255,0.42)]"
          >
            DOWNLOAD CV
          </button>
        </div>
      </div>

      <div className="hero-col relative z-10 grid place-items-center lg:pr-4" style={{ perspective: '1000px' }}>
        <div ref={profileRef} className="hero-reveal relative" style={{ transformStyle: 'preserve-3d' }}>
          <div
            ref={blobARef}
            className="absolute -left-[80px] top-[60px] h-[180px] w-[180px] rounded-full bg-[#00D9FF]/38 blur-[44px]"
            style={{ transform: 'translateZ(-20px)' }}
          />
          <div
            ref={blobBRef}
            className="absolute -right-[85px] bottom-[50px] h-[200px] w-[200px] rounded-full bg-[#8B5CF6]/42 blur-[50px]"
            style={{ transform: 'translateZ(-30px)' }}
          />
          <div className="absolute inset-[-72px] rounded-full bg-[radial-gradient(circle_at_32%_28%,rgba(0,217,255,0.5),transparent_58%),radial-gradient(circle_at_72%_74%,rgba(139,92,246,0.72),transparent_54%)] blur-[48px]" style={{ transform: 'translateZ(-40px)' }} />
          <div className="hero-particle absolute left-[8%] top-[12%] h-3 w-3 rounded-full bg-[#00D9FF] shadow-[0_0_18px_#00D9FF]" style={{ transform: 'translateZ(20px)' }} />
          <div className="hero-particle absolute right-[10%] top-[14%] h-2.5 w-2.5 rounded-full bg-[#8B5CF6] shadow-[0_0_18px_#8B5CF6]" style={{ transform: 'translateZ(30px)' }} />
          <div className="hero-particle absolute -right-[12px] bottom-[22%] h-2.5 w-2.5 rounded-full bg-[#00D9FF] shadow-[0_0_18px_#00D9FF]" style={{ transform: 'translateZ(15px)' }} />
          <div className="hero-particle absolute left-[4%] bottom-[24%] h-2.5 w-2.5 rounded-full bg-[#8B5CF6] shadow-[0_0_18px_#8B5CF6]" style={{ transform: 'translateZ(25px)' }} />
          <div className="hero-particle absolute left-[16%] top-[38%] h-2 w-2 rounded-full bg-[#a78bfa] shadow-[0_0_14px_#a78bfa]" style={{ transform: 'translateZ(10px)' }} />
          <div className="hero-particle absolute right-[18%] bottom-[36%] h-2 w-2 rounded-full bg-[#67e8f9] shadow-[0_0_14px_#67e8f9]" style={{ transform: 'translateZ(35px)' }} />
          <div
            ref={glowRef}
            className="pulse-glow absolute inset-[-36px] rounded-full bg-[conic-gradient(from_120deg,#00D9FF,rgba(0,217,255,0.12),#8B5CF6,rgba(139,92,246,0.25),#00D9FF)] opacity-95 blur-[1.5px]"
            style={{ transform: 'translateZ(-10px)' }}
          />
          <div className="absolute inset-[10px] rounded-full border border-white/26 shadow-[inset_0_0_34px_rgba(255,255,255,0.26)]" style={{ transform: 'translateZ(5px)' }} />
          <div ref={imageContainerRef} className="relative h-[500px] w-[500px] overflow-hidden rounded-full border border-white/22 bg-[#182440] shadow-[0_0_120px_rgba(0,217,255,0.68),0_0_220px_rgba(139,92,246,0.52),inset_0_0_65px_rgba(0,217,255,0.18)]" style={{ transformStyle: 'preserve-3d' }}>
            <img
              src={referenceImage}
              alt="Haran profile"
              className="h-full w-full scale-[1.75] object-cover object-[50%_18%] contrast-[1.12] saturate-[1.10] brightness-[1.05]"
              style={{ transform: 'translateZ(10px)' }}
            />
          </div>

          <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2.5 rounded-full border border-white/18 bg-[#111a34]/92 px-5 py-2.5 text-[14px] text-white/92 shadow-[0_0_32px_rgba(0,217,255,0.32)] backdrop-blur-xl" style={{ transform: 'translateZ(50px) translateX(-50%)' }}>
            <span className="h-3 w-3 rounded-full bg-[#4dff9f] shadow-[0_0_10px_rgba(77,255,159,0.9)]" />
            Available for work
          </div>
        </div>
      </div>

      <div className="hero-col hero-reveal relative z-20 flex items-center justify-end lg:pr-12">
        <div className="relative font-mono text-[15px] leading-[2.05] text-[#9eb5df]">
          <div>
            const <span className="text-[#2de2ff] [text-shadow:0_0_8px_rgba(45,226,255,0.6)]">haran</span> = {'{'}
          </div>
          <div className="pl-4">
            name: <span className="text-[#ffd891] [text-shadow:0_0_8px_rgba(255,216,145,0.5)]">&quot;Haran&quot;</span>,
          </div>
          <div className="pl-4">
            role: <span className="text-[#9effb8] [text-shadow:0_0_8px_rgba(158,255,184,0.5)]">&quot;Frontend Developer&quot;</span>,
          </div>
          <div className="pl-4">
            passion: <span className="text-[#ffd891] [text-shadow:0_0_8px_rgba(255,216,145,0.5)]">&quot;Building beautiful web</span>
          </div>
          <div className="pl-4">
            <span className="text-[#ffd891] [text-shadow:0_0_8px_rgba(255,216,145,0.5)]">experiences&quot;</span>,
          </div>
          <div className="pl-4">
            skills: [<span className="text-[#c09bff] [text-shadow:0_0_8px_rgba(192,155,255,0.5)]">&quot;React&quot;</span>,{' '}
            <span className="text-[#c09bff] [text-shadow:0_0_8px_rgba(192,155,255,0.5)]">&quot;GSAP&quot;</span>,
          </div>
          <div className="pl-4">
            <span className="text-[#c09bff] [text-shadow:0_0_8px_rgba(192,155,255,0.5)]">&quot;Tailwind&quot;</span>,{' '}
            <span className="text-[#c09bff] [text-shadow:0_0_8px_rgba(192,155,255,0.5)]">&quot;JavaScript&quot;</span>],
          </div>
          <div>{'};'}</div>
          <div className="mt-4 text-[#2de2ff] [text-shadow:0_0_8px_rgba(45,226,255,0.6)]">console.log(haran);</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
