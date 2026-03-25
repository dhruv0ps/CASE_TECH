import { useState } from 'react';
import { FiMail, FiPhoneCall, FiMapPin, FiClock, FiSend, FiCheck } from 'react-icons/fi';
import Header from '../B2BHomePage/components/Header';
import Footer from '../B2BHomePage/components/Footer';

type FormState = { name: string; company: string; email: string; phone: string; subject: string; message: string };
const INIT: FormState = { name: '', company: '', email: '', phone: '', subject: '', message: '' };

const Contact = () => {
  const [form, setForm]         = useState<FormState>(INIT);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate a short async operation before confirming
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const contactCards = [
    {
      icon: FiPhoneCall,
      title: 'Call Us',
      value: '905-842-8294',
      sub: 'Mon – Fri, 9am – 5pm EST',
      href: 'tel:9058428294',
      cta: 'Call now',
    },
    {
      icon: FiMail,
      title: 'Email Sales',
      value: 'sales@case-tech.com',
      sub: 'We reply within 1 business day',
      href: 'mailto:sales@case-tech.com',
      cta: 'Send email',
    },
    {
      icon: FiMapPin,
      title: 'Office',
      value: 'Ontario, Canada',
      sub: 'Serving clients worldwide',
      href: undefined,
      cta: undefined,
    },
    {
      icon: FiClock,
      title: 'Business Hours',
      value: 'Mon – Fri',
      sub: '9:00 am – 5:00 pm EST',
      href: undefined,
      cta: undefined,
    },
  ];

  return (
    <div className="min-h-screen bg-subtle-50 font-sans flex flex-col">
      <Header />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <div className="relative bg-subtle-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 80% at 70% 50%, rgba(8,145,178,0.15) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <p className="text-xs font-black tracking-widest uppercase text-cyan-500 mb-4">Get In Touch</p>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-6 max-w-2xl">
            Let's Talk<br />
            <span className="text-subtle-400">Business.</span>
          </h1>
          <p className="text-subtle-300 text-xl font-light max-w-xl leading-relaxed">
            Government agencies and volume users — please contact us for special pricing. We reply within one business day.
          </p>
        </div>
      </div>

      {/* ── Contact cards row ─────────────────────────────────── */}
      <div className="bg-white border-b border-subtle-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-1 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactCards.map((c, i) => {
              const Icon = c.icon;
              const inner = (
                <div key={i} className={`group flex flex-col gap-4 p-6 bg-white rounded-2xl border border-subtle-200 shadow-sm hover:shadow-xl hover:shadow-subtle-200/50 hover:-translate-y-1 hover:border-subtle-300 transition-all duration-300 ${c.href ? 'cursor-pointer' : ''}`}>
                  <div className="w-11 h-11 bg-subtle-50 border border-subtle-200 rounded-xl flex items-center justify-center text-subtle-700 group-hover:bg-subtle-950 group-hover:border-subtle-800 group-hover:text-white transition-all duration-300">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black tracking-widest uppercase text-subtle-400 mb-1">{c.title}</p>
                    <p className="text-base font-bold text-subtle-950 leading-tight">{c.value}</p>
                    <p className="text-xs text-subtle-500 font-light mt-0.5">{c.sub}</p>
                  </div>
                  {c.cta && (
                    <span className="text-xs font-black tracking-widest uppercase text-cyan-600 group-hover:text-cyan-500 transition-colors mt-auto">{c.cta} →</span>
                  )}
                </div>
              );
              return c.href ? <a href={c.href} key={i} className="block">{inner}</a> : <div key={i}>{inner}</div>;
            })}
          </div>
        </div>
      </div>

      {/* ── Form + info split ─────────────────────────────────── */}
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Left info panel */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <p className="text-xs font-black tracking-widest uppercase text-cyan-600 mb-3">Why Contact Us?</p>
              <h2 className="text-3xl md:text-4xl font-black text-subtle-950 tracking-tight mb-6 leading-tight">
                Custom orders, volume quotes, and partnership enquiries welcome.
              </h2>
              <ul className="space-y-3">
                {[
                  'Custom OEM case manufacturing',
                  'Government & agency bulk orders',
                  'Leather finishing contracts',
                  'Sales rep / distributor enquiries',
                  'Product information & pricing',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-subtle-600 text-base font-light">
                    <span className="flex-shrink-0 w-5 h-5 bg-cyan-50 rounded-full flex items-center justify-center text-cyan-600 border border-cyan-200">
                      <FiCheck size={11} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick info block */}
            <div className="bg-subtle-950 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-cyan-500 rounded-full blur-3xl opacity-20 pointer-events-none" />
              <p className="text-xs font-black tracking-widest uppercase text-cyan-400 mb-4">Direct Contact</p>
              <div className="space-y-4">
                <a href="tel:9058428294" className="flex items-center gap-3 text-white hover:text-cyan-400 transition-colors">
                  <FiPhoneCall size={16} className="text-subtle-500" />
                  <span className="text-xl font-black tracking-tight">905-842-8294</span>
                </a>
                <a href="mailto:sales@case-tech.com" className="flex items-center gap-3 text-subtle-300 hover:text-cyan-400 transition-colors text-sm font-medium">
                  <FiMail size={16} className="text-subtle-500" />
                  sales@case-tech.com
                </a>
              </div>
            </div>
          </div>

          {/* Right form card */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-subtle-200 shadow-xl shadow-subtle-200/50 p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-6 animate-fade-in-up">
                  <div className="w-20 h-20 bg-green-50 border-2 border-green-200 rounded-full flex items-center justify-center text-green-500 shadow-xl shadow-green-100">
                    <FiCheck size={36} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-subtle-950 mb-2">Message Sent!</h3>
                    <p className="text-subtle-500 font-light text-base max-w-sm">
                      Thanks for reaching out. We'll get back to you within one business day.
                    </p>
                  </div>
                  <button onClick={() => { setForm(INIT); setSubmitted(false); }} className="px-6 py-3 bg-subtle-950 text-white text-sm font-bold rounded-full hover:bg-cyan-600 transition-colors">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="mb-8">
                    <h2 className="text-2xl font-black text-subtle-950 tracking-tight mb-1">Send a Message</h2>
                    <p className="text-subtle-500 text-sm font-light">Fill in the form below and we'll get back to you promptly.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-black tracking-widest uppercase text-subtle-500 mb-2">Full Name *</label>
                      <input
                        required name="name" value={form.name} onChange={handleChange}
                        className="w-full px-4 py-3 bg-subtle-50 border border-subtle-200 rounded-xl text-subtle-950 placeholder-subtle-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition text-sm font-medium"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black tracking-widest uppercase text-subtle-500 mb-2">Company</label>
                      <input
                        name="company" value={form.company} onChange={handleChange}
                        className="w-full px-4 py-3 bg-subtle-50 border border-subtle-200 rounded-xl text-subtle-950 placeholder-subtle-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition text-sm font-medium"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-black tracking-widest uppercase text-subtle-500 mb-2">Email *</label>
                      <input
                        required type="email" name="email" value={form.email} onChange={handleChange}
                        className="w-full px-4 py-3 bg-subtle-50 border border-subtle-200 rounded-xl text-subtle-950 placeholder-subtle-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition text-sm font-medium"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black tracking-widest uppercase text-subtle-500 mb-2">Phone</label>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange}
                        className="w-full px-4 py-3 bg-subtle-50 border border-subtle-200 rounded-xl text-subtle-950 placeholder-subtle-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition text-sm font-medium"
                        placeholder="+1 (800) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black tracking-widest uppercase text-subtle-500 mb-2">Subject *</label>
                    <select
                      required name="subject" value={form.subject} onChange={handleChange}
                      className="w-full px-4 py-3 bg-subtle-50 border border-subtle-200 rounded-xl text-subtle-950 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition text-sm font-medium appearance-none cursor-pointer"
                    >
                      <option value="">Select a subject…</option>
                      <option>Request a Quote</option>
                      <option>Custom / OEM Order</option>
                      <option>Become a Distributor</option>
                      <option>Product Information</option>
                      <option>Government / Volume Pricing</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black tracking-widest uppercase text-subtle-500 mb-2">Message *</label>
                    <textarea
                      required name="message" value={form.message} onChange={handleChange} rows={5}
                      className="w-full px-4 py-3 bg-subtle-50 border border-subtle-200 rounded-xl text-subtle-950 placeholder-subtle-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition text-sm font-medium resize-none"
                      placeholder="Describe your requirements, quantities, or any questions…"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 py-4 bg-subtle-950 text-white font-bold text-base rounded-xl hover:bg-cyan-600 transition-all duration-300 shadow-lg shadow-subtle-950/10 hover:shadow-cyan-500/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <><FiSend size={18} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
