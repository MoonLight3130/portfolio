const navLinks = [
  'Home',
  'About',
  'Skills',
  'Projects',
  'Experience',
  'Certifications',
  'Contact',
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2a3c66]/55 bg-[#060b1c]/70 backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-8 py-6 lg:px-14">
        <a
          href="#home"
          className="font-['Poppins'] text-[34px] font-semibold tracking-[-0.8px] text-white"
        >
          Haran<span className="text-[#8B5CF6]">.</span>
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[12px] font-medium uppercase tracking-[1.9px] text-white/82 transition duration-300 hover:text-[#00D9FF]"
            >
              {link}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="group relative hidden h-12 items-center rounded-full border border-[#00D9FF]/45 bg-[#0d1530]/85 px-7 text-[12px] font-semibold uppercase tracking-[1.5px] text-white transition duration-300 hover:border-[#8B5CF6] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] md:inline-flex"
        >
          <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_18%_50%,rgba(0,217,255,0.34),transparent_60%),radial-gradient(circle_at_82%_50%,rgba(139,92,246,0.36),transparent_58%)] opacity-85 transition duration-300 group-hover:opacity-100" />
          <span className="relative z-10">LET&apos;S TALK</span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
