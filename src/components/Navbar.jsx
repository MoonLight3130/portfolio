import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

const navLinks = [
  'Home',
  'About',
  'Skills',
  'Projects',
  'Experience',
  'Certifications',
  'Contact',
]

function Navbar({ onNavClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (link) => {
    setIsMenuOpen(false)
    if (onNavClick) onNavClick(link)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2a3c66]/55 bg-[#060b1c]/70 backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-6 py-5 lg:px-14 lg:py-6">
        <button
          type="button"
          onClick={() => handleNavClick('Home')}
          className="font-['Poppins'] text-[28px] font-semibold tracking-[-0.8px] text-white lg:text-[34px]"
        >
          Haran<span className="text-[#8B5CF6]">.</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link}
              type="button"
              onClick={() => handleNavClick(link)}
              className="text-[12px] font-medium uppercase tracking-[1.9px] text-white/82 transition duration-300 hover:text-[#00D9FF]"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <button
          type="button"
          onClick={() => handleNavClick('Contact')}
          className="group relative hidden h-12 items-center rounded-full border border-[#00D9FF]/45 bg-[#0d1530]/85 px-7 text-[12px] font-semibold uppercase tracking-[1.5px] text-white transition duration-300 hover:border-[#8B5CF6] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] md:inline-flex lg:flex"
        >
          <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_18%_50%,rgba(0,217,255,0.34),transparent_60%),radial-gradient(circle_at_82%_50%,rgba(139,92,246,0.36),transparent_58%)] opacity-85 transition duration-300 group-hover:opacity-100" />
          <span className="relative z-10">LET&apos;S TALK</span>
        </button>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-[#0f1730]/92 text-white/75 lg:hidden"
          aria-label="Toggle menu"
        >
          <FaBars size={18} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="border-t border-[#2a3c66]/55 bg-[#060b1c]/95 px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link}
                type="button"
                onClick={() => handleNavClick(link)}
                className="text-left text-[14px] font-medium uppercase tracking-[1.5px] text-white/82 transition duration-300 hover:text-[#00D9FF]"
              >
                {link}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick('Contact')}
              className="mt-4 w-full h-12 rounded-full border border-[#00D9FF]/45 bg-[#0d1530]/85 text-[12px] font-semibold uppercase tracking-[1.5px] text-white transition duration-300 hover:border-[#8B5CF6] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)]"
            >
              LET&apos;S TALK
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar
