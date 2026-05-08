import { FaGithub, FaLinkedinIn, FaInstagram, FaArrowUp, FaHeart, FaMapMarkerAlt, FaCode } from 'react-icons/fa'

const navLinks = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Skills', target: 'skills' },
  { label: 'Projects', target: 'projects' },
  { label: 'Experience', target: 'experience' },
  { label: 'Certifications', target: 'certifications' },
  { label: 'Contact', target: 'contact' },
]

const capabilities = [
  'Full Stack Development',
  'UI/UX Design',
  'AI Integration',
  'Mobile Development',
  'Cloud Solutions',
]

const techStack = [
  'React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Python', 'AWS'
]

const socialLinks = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/MoonLight3130' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://linkedin.com/in/haransanthosh' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/h_ar_an_04/' },
]

function Footer({ onNavClick }) {
  const handleNav = (target) => {
    if (onNavClick) {
      const label = target === 'home' ? 'Home' : target.charAt(0).toUpperCase() + target.slice(1)
      onNavClick(label)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative z-10 w-full overflow-hidden bg-[#030612]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[#00D9FF]/6 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-100px] right-[10%] h-[300px] w-[300px] rounded-full bg-[#8B5CF6]/10 blur-[100px]" />

      {/* Top border with glow */}
      <div className="relative h-[1px] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D9FF]/70 to-transparent" />
        <div className="absolute left-1/2 top-0 h-[40px] w-[200px] -translate-x-1/2 bg-[#00D9FF]/20 blur-[20px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1580px] px-6 pt-20 sm:px-12 lg:px-16">
        {/* Hero section */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-2 rounded-full border border-[#00D9FF]/25 bg-[#00D9FF]/8 px-4 py-1.5 text-[12px] font-medium text-[#00D9FF]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4dff9f]" />
            Available for work
          </div>

          <h2 className="mb-3 text-[32px] font-bold tracking-tight text-white sm:text-[40px] lg:text-[48px]">
            Let&apos;s build something
            <span className="bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] bg-clip-text text-transparent"> amazing</span>
            <span className="text-[#00D9FF]">.</span>
          </h2>

          <p className="mb-8 max-w-[500px] text-[15px] leading-relaxed text-[#8a9cc4]">
            Have a project in mind? I&apos;m always open to discussing new opportunities and creative ideas.
          </p>

          <button
            onClick={() => handleNav('contact')}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] px-8 py-3 text-[14px] font-semibold text-[#030612] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,217,255,0.4)]"
          >
            <span className="relative z-10">Start a Conversation</span>
            <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
          </button>
        </div>

        {/* Grid sections */}
        <div className="grid grid-cols-1 gap-12 border-t border-[#1f3257]/40 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <FaCode className="text-[#00D9FF]" size={18} />
              <h3 className="text-[20px] font-bold tracking-wide text-white">
                Haran<span className="text-[#00D9FF]">.</span>
              </h3>
            </div>
            <p className="text-[14px] leading-relaxed text-[#8a9cc4]">
              Crafting digital experiences with code, creativity, and coffee.
            </p>
            <div className="flex items-center gap-2 text-[13px] text-[#5a6d94]">
              <FaMapMarkerAlt size={12} />
              India
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[13px] font-semibold uppercase tracking-[1.4px] text-white/80">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => handleNav(link.target)}
                  className="group flex items-center gap-2 text-left text-[14px] text-[#8a9cc4] transition duration-300 hover:text-[#00D9FF]"
                >
                  <span className="h-[1px] w-0 bg-[#00D9FF] transition-all duration-300 group-hover:w-3" />
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Capabilities */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[13px] font-semibold uppercase tracking-[1.4px] text-white/80">
              What I Do
            </h4>
            <ul className="flex flex-col gap-2.5">
              {capabilities.map((cap) => (
                <li key={cap} className="flex items-center gap-2 text-[14px] text-[#8a9cc4]">
                  <span className="h-1 w-1 rounded-full bg-[#8B5CF6]" />
                  {cap}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack + Social */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h4 className="text-[13px] font-semibold uppercase tracking-[1.4px] text-white/80">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-[#2b4976]/60 bg-[#0d1733]/80 px-2.5 py-1 text-[12px] text-[#c2d3ef]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-[13px] font-semibold uppercase tracking-[1.4px] text-white/80">
                Follow
              </h4>
              <div className="flex gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-9 w-9 place-items-center rounded-lg border border-[#2b4976]/60 bg-[#0d1733]/80 text-[#8a9cc4] transition duration-300 hover:border-[#00D9FF]/70 hover:text-[#00D9FF] hover:shadow-[0_0_16px_rgba(0,217,255,0.3)]"
                  >
                    <social.icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#1f3257]/40 py-8 sm:flex-row">
          <p className="flex items-center gap-1.5 text-[13px] text-[#5a6d94]">
            &copy; {new Date().getFullYear()} Haran Santhosh. All rights reserved.
          </p>

          <button
            onClick={handleScrollTop}
            className="group flex items-center gap-2 text-[13px] font-medium text-[#5a6d94] transition duration-300 hover:text-[#00D9FF]"
          >
            Back to Top
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-[#2b4976]/60 bg-[#0d1733]/80 text-[#8a9cc4] transition duration-300 group-hover:border-[#00D9FF]/70 group-hover:text-[#00D9FF]">
              <FaArrowUp size={10} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
