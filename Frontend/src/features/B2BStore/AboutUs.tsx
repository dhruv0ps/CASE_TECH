import { FiCheckCircle, FiAward, FiUsers, FiTool, FiPackage } from 'react-icons/fi';
import Header from '../B2BHomePage/components/Header';
import Footer from '../B2BHomePage/components/Footer';

const milestones = [
  { year: '1990s', title: 'Founded', desc: 'Case-Tech was established as a specialist manufacturer of leather carry cases for the growing Land Mobile Radio market.' },
  { year: '2000s', title: 'Expansion', desc: 'We expanded our product line to include Bar Code/Data Collection cases, cellular holsters, and a full contract leather finishing operation.' },
  { year: '2010s', title: 'OEM & Government', desc: 'Became a preferred OEM supplier for government agencies and police departments across North America, developing heavy-duty Police Duty gear.' },
  { year: 'Today', title: 'Industry Leader', desc: 'We continue to manufacture premium radio cases, belts, and accessories, offering custom and volume orders to clients worldwide.' },
];

const values = [
  { icon: FiAward,   title: 'Quality Materials',      desc: 'We use only the finest leathers and industrial-grade nylons, ensuring every product meets our strict durability standards.' },
  { icon: FiTool,    title: 'In-House Manufacturing', desc: 'Our complete leather finishing and heavy-duty stitching equipment allows us full control over production quality and lead times.' },
  { icon: FiUsers,   title: 'Customer First',         desc: 'From single custom orders to government volume contracts, every client receives personalized attention and best-in-class service.' },
  { icon: FiPackage, title: 'OEM Capability',         desc: 'We manufacture to spec, offering white-label and contract production for distributors, dealers, and large institutional buyers.' },
];

const AboutUs = () => (
  <div className="min-h-screen bg-subtle-50 font-sans flex flex-col">
    <Header />

    {/* ── Hero banner ───────────────────────────────────────── */}
    <div className="relative bg-subtle-950 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 80% at 30% 50%, rgba(8,145,178,0.15) 0%, transparent 70%)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <p className="text-xs font-black tracking-widest uppercase text-cyan-500 mb-4">Our Story</p>
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-6 max-w-3xl">
          Built on Craft.<br />
          <span className="text-subtle-400">Refined by Experience.</span>
        </h1>
        <p className="text-subtle-300 text-xl font-light max-w-2xl leading-relaxed">
          For decades, Case-Tech has been the trusted name in professional radio carry cases, duty belts, and tactical accessories for police, government, and industrial users worldwide.
        </p>
      </div>
    </div>

    {/* ── Who we are ────────────────────────────────────────── */}
    <section className="py-24 bg-white border-b border-subtle-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <p className="text-xs font-black tracking-widest uppercase text-cyan-600 mb-4">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-black text-subtle-950 tracking-tight leading-tight mb-8">
              Manufacturer. Finisher. Partner.
            </h2>
            <div className="space-y-5 text-subtle-600 font-light text-lg leading-relaxed">
              <p>
                We are a manufacturer of cases, straps and accessories for Land Mobile Portable Radios and similar carry cases for business and industry.
              </p>
              <p>
                Because of our need for quality materials, we have complete leather finishing capabilities. We also do contract leather finishing. Our special heavy duty stitching and cutting equipment is used for the manufacture of Police Duty gear.
              </p>
              <p>
                To become a sales rep or distributor of our products please contact{' '}
                <a href="mailto:sales@case-tech.com" className="text-cyan-600 hover:text-cyan-700 font-medium transition-colors underline underline-offset-2">
                  sales@case-tech.com
                </a>
              </p>
            </div>
          </div>

          {/* Stats bento */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: '25+',   sub: 'Years in Business',    dark: false },
              { val: '50k+',  sub: 'Units Manufactured',   dark: true  },
              { val: '100%',  sub: 'In-House Production',  dark: false },
              { val: 'Gov+',  sub: 'Agencies & Clients',   dark: false },
            ].map((s, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${s.dark ? 'bg-subtle-950 border-subtle-800 shadow-2xl shadow-subtle-950/20' : 'bg-subtle-50 border-subtle-200 hover:border-subtle-300'}`}
              >
                <div className={`text-5xl font-black tracking-tight leading-none mb-3 ${s.dark ? 'text-white' : 'text-subtle-950'}`}>{s.val}</div>
                <div className={`text-xs font-bold uppercase tracking-widest ${s.dark ? 'text-subtle-400' : 'text-subtle-500'}`}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── Core values ───────────────────────────────────────── */}
    <section className="py-24 bg-subtle-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-black tracking-widest uppercase text-cyan-600 mb-3">What Drives Us</p>
          <h2 className="text-4xl md:text-5xl font-black text-subtle-950 tracking-tight">Our Core Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-subtle-200 p-8 hover:border-subtle-300 hover:shadow-xl hover:shadow-subtle-200/50 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-subtle-50 group-hover:bg-subtle-950 rounded-xl flex items-center justify-center text-subtle-700 group-hover:text-white transition-all duration-300 mb-6 border border-subtle-200 group-hover:border-subtle-800">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-subtle-950 mb-3">{v.title}</h3>
                <p className="text-subtle-500 text-sm font-light leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ── Timeline ──────────────────────────────────────────── */}
    <section className="py-24 bg-subtle-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 60% at 80% 50%, rgba(8,145,178,0.1) 0%, transparent 70%)' }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs font-black tracking-widest uppercase text-cyan-500 mb-3">Our Journey</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Built Over Decades</h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row gap-8 md:items-center ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Year bubble */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center z-10 flex-shrink-0 shadow-lg shadow-cyan-500/30">
                  <FiCheckCircle size={20} className="text-white" />
                </div>

                {/* Content card */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300">
                    <span className="text-xs font-black tracking-widest uppercase text-cyan-500 mb-2 block">{m.year}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{m.title}</h3>
                    <p className="text-subtle-400 text-sm font-light leading-relaxed">{m.desc}</p>
                  </div>
                </div>

                {/* Empty spacer on the other side */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default AboutUs;
