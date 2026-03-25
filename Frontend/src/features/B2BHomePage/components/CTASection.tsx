import { FiMail, FiPhoneCall, FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-white py-0">

      {/* ── Split layout: dark left | light right ─────────── */}
      <div className="flex flex-col lg:flex-row min-h-[440px]">

        {/* Dark left: headline */}
        <div className="relative lg:w-1/2 bg-subtle-950 px-8 sm:px-12 lg:px-16 py-20 flex flex-col justify-center overflow-hidden">
          {/* Cyan haze */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-cyan-500 rounded-full blur-[120px] opacity-10 pointer-events-none" />
          <div className="relative z-10">
            <p className="text-[11px] font-black tracking-[0.3em] uppercase text-cyan-500 mb-6">Work With Us</p>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-md">
              Ready for<br />Industrial-Grade<br />
              <span className="text-subtle-400">Gear?</span>
            </h2>
          </div>
        </div>

        {/* Light right: actions */}
        <div className="lg:w-1/2 px-8 sm:px-12 lg:px-16 py-20 flex flex-col justify-center gap-8 border-l border-subtle-100">
          <p className="text-subtle-500 text-lg font-light leading-relaxed max-w-md">
            Whether you need a single custom order or thousands of OEM units — contact our team for a quote within one business day.
          </p>

          {/* Contact cards */}
          <div className="flex flex-col gap-4">
            <a
              href="mailto:sales@case-tech.com"
              className="group flex items-center justify-between px-6 py-4 bg-subtle-950 text-white rounded-2xl hover:bg-cyan-600 transition-all duration-300 shadow-xl shadow-subtle-950/10 hover:shadow-cyan-500/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <FiMail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-widest uppercase text-white/50">Email Sales</p>
                  <p className="font-bold text-sm">sales@case-tech.com</p>
                </div>
              </div>
              <FiArrowRight size={18} className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </a>

            <a
              href="tel:9058428294"
              className="group flex items-center justify-between px-6 py-4 bg-subtle-50 text-subtle-950 border border-subtle-200 rounded-2xl hover:border-subtle-400 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white border border-subtle-200 rounded-xl flex items-center justify-center text-subtle-700">
                  <FiPhoneCall size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-widest uppercase text-subtle-400">Call Us Directly</p>
                  <p className="font-black text-lg tracking-tight">905-842-8294</p>
                </div>
              </div>
              <FiArrowRight size={18} className="text-subtle-300 group-hover:text-subtle-950 group-hover:translate-x-1 transition-all" />
            </a>
          </div>

          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 text-sm font-black text-subtle-400 hover:text-subtle-950 transition-colors group w-fit tracking-widest uppercase"
          >
            Open Contact Form <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

    </section>
  );
};

export default CTASection;
