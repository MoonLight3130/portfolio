import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import emailjs from '@emailjs/browser'
import { FaArrowLeft, FaEnvelope, FaGithub, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhone, FaPaperPlane, FaCheck, FaExclamationCircle } from 'react-icons/fa'

const socialLinks = [
  { icon: FaGithub, label: 'GitHub', handle: '@MoonLight3130', href: 'https://github.com/MoonLight3130' },
  { icon: FaLinkedinIn, label: 'LinkedIn', handle: 'linkedin.com/in/haransanthosh', href: 'https://linkedin.com/in/haransanthosh' },
  { icon: FaInstagram, label: 'Instagram', handle: '@h_ar_an_04', href: 'https://www.instagram.com/h_ar_an_04/' },
]

// EmailJS configuration from environment variables
// Add your keys in .env file and restart the dev server
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function ContactPage({ onBack }) {
  const pageRef = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('')

  useGSAP(
    () => {
      gsap.from('.contact-reveal', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        delay: 0.2,
      })
    },
    { scope: pageRef },
  )

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate that EmailJS is configured
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error')
      setErrorMsg('EmailJS not configured. Please add your keys to the .env file.')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      const form = formRef.current
      if (!form) return

      const formData = new FormData(form)

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.get('from_name'),
          from_email: formData.get('from_email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
        },
        PUBLIC_KEY,
      )

      setStatus('success')
      form.reset()

      // Auto-reset status after 4 seconds
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err?.text || 'Failed to send message. Please try again.')
    }
  }

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

        <div className="contact-reveal mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#2f4371] bg-[#111b36]/82 px-4 py-2.5 text-[11px] font-semibold tracking-[1.2px] text-white/92 shadow-[0_0_26px_rgba(0,217,255,0.25)]">
          <FaEnvelope className="text-[#ffd28f]" />
          GET IN TOUCH
        </div>

        <h1 className="contact-reveal mb-6 text-[72px] font-bold leading-[1.05] tracking-[-2px] text-white [text-shadow:0_0_24px_rgba(255,255,255,0.16)]">
          Let's Connect
          <span className="mt-2 block bg-gradient-to-r from-[#00D9FF] via-[#56beff] to-[#8B5CF6] bg-clip-text text-[48px] font-semibold tracking-[-1px] text-transparent">
            & Collaborate
          </span>
        </h1>

        <p className="contact-reveal mb-16 max-w-[700px] text-[20px] leading-[1.7] text-[#aec2e1]">
          Have a project in mind or want to discuss opportunities? I'm always open to
          interesting collaborations and conversations about technology.
        </p>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <div className="contact-reveal relative overflow-hidden rounded-[22px] border border-[#2b4976]/80 bg-[#0a1228]/90 p-7 shadow-[inset_0_0_40px_rgba(0,217,255,0.08),0_14px_48px_rgba(2,8,25,0.6),0_0_28px_rgba(0,217,255,0.06)]">
              <h3 className="mb-6 text-[20px] font-semibold text-white">Contact Info</h3>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-full border border-[#2f4371] bg-[#111b36] text-[#00D9FF] shadow-[0_0_16px_rgba(0,217,255,0.3)]">
                    <FaEnvelope size={16} />
                  </div>
                  <div>
                    <p className="text-[12px] uppercase tracking-wider text-[#8a9cc4]">Email</p>
                    <p className="text-[15px] font-medium text-white">haransanthosh123@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-full border border-[#2f4371] bg-[#111b36] text-[#8B5CF6] shadow-[0_0_16px_rgba(139,92,246,0.3)]">
                    <FaPhone size={15} />
                  </div>
                  <div>
                    <p className="text-[12px] uppercase tracking-wider text-[#8a9cc4]">Phone</p>
                    <p className="text-[15px] font-medium text-white">9633379651</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-full border border-[#2f4371] bg-[#111b36] text-[#00D9FF] shadow-[0_0_16px_rgba(0,217,255,0.3)]">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <p className="text-[12px] uppercase tracking-wider text-[#8a9cc4]">Location</p>
                    <p className="text-[15px] font-medium text-white">TVM, KERALA</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-[#1f3257]/60 pt-6">
                <p className="mb-4 text-[13px] uppercase tracking-wider text-[#8a9cc4]">Social Links</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group grid h-11 w-11 place-items-center rounded-full border border-white/18 bg-[#0f1730]/92 text-white/75 shadow-[0_0_20px_rgba(0,217,255,0.22)] transition duration-300 hover:border-[#00D9FF]/70 hover:text-[#00D9FF] hover:shadow-[0_0_28px_rgba(0,217,255,0.58)]"
                    >
                      <social.icon size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-reveal overflow-hidden rounded-[22px] border border-[#2b4976]/80 bg-gradient-to-br from-[#0a1228]/90 to-[#0d1a38]/90 p-7 shadow-[0_14px_48px_rgba(2,8,25,0.6)]">
              <h3 className="mb-3 text-[20px] font-semibold text-white">Availability</h3>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#4dff9f] shadow-[0_0_10px_rgba(77,255,159,0.9)]" />
                <span className="text-[15px] font-medium text-[#4dff9f]">Open for work</span>
              </div>
              <p className="text-[14px] leading-[1.65] text-[#8a9cc4]">
                Currently available for freelance projects, full-time roles, and consulting opportunities.
                Response time: within 24 hours.
              </p>
            </div>
          </div>

          <div className="contact-reveal relative overflow-hidden rounded-[22px] border border-[#2b4976]/80 bg-[#0a1228]/90 p-8 shadow-[inset_0_0_40px_rgba(0,217,255,0.08),0_14px_48px_rgba(2,8,25,0.6),0_0_28px_rgba(0,217,255,0.06)]">
            <h3 className="mb-6 text-[24px] font-semibold text-white">Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[13px] uppercase tracking-wider text-[#8a9cc4]">Name</label>
                  <input
                    name="from_name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[#2b4976]/80 bg-[#070f24]/80 px-5 py-3.5 text-[15px] text-white outline-none transition-all placeholder:text-[#4a5b82] focus:border-[#00D9FF]/60 focus:shadow-[0_0_20px_rgba(0,217,255,0.2)]"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-[13px] uppercase tracking-wider text-[#8a9cc4]">Email</label>
                  <input
                    name="from_email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-[#2b4976]/80 bg-[#070f24]/80 px-5 py-3.5 text-[15px] text-white outline-none transition-all placeholder:text-[#4a5b82] focus:border-[#00D9FF]/60 focus:shadow-[0_0_20px_rgba(0,217,255,0.2)]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[13px] uppercase tracking-wider text-[#8a9cc4]">Subject</label>
                <input
                  name="subject"
                  type="text"
                  placeholder="Project inquiry"
                  className="w-full rounded-xl border border-[#2b4976]/80 bg-[#070f24]/80 px-5 py-3.5 text-[15px] text-white outline-none transition-all placeholder:text-[#4a5b82] focus:border-[#00D9FF]/60 focus:shadow-[0_0_20px_rgba(0,217,255,0.2)]"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-[13px] uppercase tracking-wider text-[#8a9cc4]">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full resize-none rounded-xl border border-[#2b4976]/80 bg-[#070f24]/80 px-5 py-3.5 text-[15px] text-white outline-none transition-all placeholder:text-[#4a5b82] focus:border-[#00D9FF]/60 focus:shadow-[0_0_20px_rgba(0,217,255,0.2)]"
                  required
                />
              </div>

              {/* Status Messages */}
              {status === 'error' && (
                <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-[14px] text-red-400">
                  <FaExclamationCircle />
                  {errorMsg}
                </div>
              )}

              {status === 'success' && (
                <div className="flex items-center gap-2 rounded-xl border border-[#4ade80]/30 bg-[#4ade80]/10 px-4 py-3 text-[14px] text-[#4ade80]">
                  <FaCheck />
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`flex w-full items-center justify-center gap-3 rounded-xl px-8 py-4 text-[14px] font-semibold uppercase tracking-[1.5px] text-white shadow-[0_14px_38px_rgba(139,92,246,0.4)] transition duration-300 ${status === 'success'
                  ? 'border border-[#4ade80]/50 bg-[#4ade80]/20'
                  : status === 'error'
                    ? 'border border-red-500/50 bg-gradient-to-r from-[#ff6b6b] via-[#ff8e8e] to-[#ff5252]'
                    : 'border border-[#8B5CF6]/80 bg-gradient-to-r from-[#6d5cff] via-[#9367ff] to-[#d66dff] hover:shadow-[0_0_42px_rgba(139,92,246,0.6)]'
                  } ${status === 'loading' ? 'cursor-wait opacity-80' : 'cursor-pointer'}`}
              >
                {status === 'loading' ? (
                  <>
                    <svg className="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <FaCheck className="text-[#4ade80]" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
