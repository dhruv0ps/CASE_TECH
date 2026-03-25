import { useNavigate } from 'react-router-dom';

const stats = [
  { val: '25+',   label: 'Years of Manufacturing' },
  { val: '100%',  label: 'In-House Production'    },
  { val: '50k+',  label: 'Units Delivered'         },
  { val: 'OEM',   label: 'Contract Capability'     },
];

const AboutTrust = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-subtle-950 relative overflow-hidden">

      {/* Cyan haze bottom-left */}
      <div className="absolute -bottom-60 -left-60 w-[700px] h-[700px] bg-cyan-400 rounded-full blur-[200px] opacity-[0.06] pointer-events-none" />

      {/* ── Stat ribbon ─────────────────────────────────────── */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
            {stats.map(s => (
              <div key={s.val} className="py-10 px-8 first:pl-0 last:pr-0 flex flex-col gap-2">
                <span className="text-5xl font-black text-white tracking-tight leading-none">{s.val}</span>
                <span className="text-[11px] font-bold tracking-widest text-subtle-500 uppercase">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Pull-quote + copy ───────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-20 items-center">

        {/* Big quote typography */}
        <div>
          <p className="text-[11px] font-black tracking-[0.3em] uppercase text-cyan-500 mb-8">Our Promise</p>
          <blockquote className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            "Quality materials.<br />
            <span className="text-subtle-500">Complete finishing.</span><br />
            On every order."
          </blockquote>
        </div>

        {/* Right copy */}
        <div className="space-y-6">
          <p className="text-subtle-300 text-lg font-light leading-relaxed">
            We are a manufacturer of cases, straps and accessories for Land Mobile Portable Radios and similar carry cases for business and industry. Because of our need for quality materials, we have complete leather finishing capabilities.
          </p>
          <p className="text-subtle-400 text-base font-light leading-relaxed">
            We also do contract leather finishing. Our special heavy duty stitching and cutting equipment is used for the manufacture of Police Duty gear. Government agencies and volume users please contact us for special volume prices.
          </p>
          <p className="text-subtle-400 text-base font-light leading-relaxed">
            To become a sales rep or distributor of our products please contact{' '}
            <a href="mailto:sales@case-tech.com" className="text-cyan-500 hover:text-cyan-300 transition-colors underline underline-offset-4">
              sales@case-tech.com
            </a>
          </p>

          <div className="pt-4 flex gap-4">
            <button
              onClick={() => navigate('/about')}
              className="px-6 py-3 bg-white text-subtle-950 font-black text-sm rounded-full hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Our Story
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3 border border-white/15 text-white font-black text-sm rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTrust;
