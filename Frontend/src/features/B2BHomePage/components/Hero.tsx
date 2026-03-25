import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/CASETECH600.jpg';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-subtle-950">

      {/* ── Background video ───────────────────────────────── */}
      <video
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4" type="video/mp4" />
      </video>

      {/* Gradient veil — heavier at bottom so text on dark bg reads well */}
      <div className="absolute inset-0 bg-gradient-to-b from-subtle-950/80 via-subtle-950/60 to-subtle-950" />
      {/* Cyan brand haze top-right */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-cyan-500 rounded-full blur-[200px] opacity-[0.07] pointer-events-none" />

      {/* ── Content ────────────────────────────────────────── */}
      <div className="relative z-10 flex-grow flex flex-col">

        {/* Top split bar: logo slug + government notice */}
        <div className="border-b border-white/5 flex items-center justify-between px-6 sm:px-10 py-5">
          {/* Inline logo slug */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-auto bg-white rounded-lg overflow-hidden p-1 shadow-xl">
              <img src={logo} alt="CASE-TECH" className="h-full w-auto object-contain" />
            </div>
            <span className="text-white/80 font-black tracking-tight text-lg hidden sm:inline">CASE-TECH</span>
          </div>
          <p className="text-white/40 text-[11px] font-semibold tracking-widest uppercase hidden md:block">
            Government &amp; Volume Pricing Available — <a href="mailto:sales@case-tech.com" className="text-cyan-500 hover:text-cyan-300 transition-colors">Contact Us</a>
          </p>
        </div>

        {/* Main hero content — bottom-anchored like luxury brands */}
        <div className="flex-grow flex flex-col justify-end max-w-7xl mx-auto w-full px-6 sm:px-10 pb-20 pt-20">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-8 w-fit">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-500" />
            </span>
            <span className="text-[11px] font-black tracking-[0.3em] uppercase text-white/50">
              Precision. Durability. Trust.
            </span>
          </div>

          {/* Display headline — massive, edgy */}
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-black text-white leading-[0.9] tracking-tighter mb-10 max-w-5xl">
            Cases Built<br />
            for the<br />
            <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300 animate-gradient-x">
              Field.
            </em>
          </h1>

          {/* Subtext + CTA row */}
          <div className="flex flex-col md:flex-row md:items-end gap-10">
            <p className="text-subtle-300 text-lg md:text-xl font-light leading-relaxed max-w-lg">
              Manufacturer of radio cases, duty belts, and tactical accessories for Land Mobile Portable Radios — trusted by police, government, and industrial operators worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:ml-auto flex-shrink-0">
              <button
                onClick={() => navigate('/products')}
                className="group flex items-center gap-3 px-7 py-4 bg-white text-subtle-950 font-black text-sm tracking-wide rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-2xl hover:shadow-cyan-400/30 whitespace-nowrap"
              >
                Browse Products
                <span className="w-7 h-7 bg-subtle-950 group-hover:bg-subtle-950 text-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <FiArrowRight size={14} />
                </span>
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="flex items-center justify-center gap-2 px-7 py-4 text-white font-bold text-sm tracking-wide rounded-full border border-white/15 hover:border-white/40 hover:bg-white/5 transition-all duration-300 whitespace-nowrap"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom ticker strip ─────────────────────────────── */}
      <div className="relative z-10 border-t border-white/5 bg-white/3 backdrop-blur-sm overflow-hidden py-4">
        <div className="flex gap-16 animate-marquee whitespace-nowrap w-max">
          {[
            'Land Mobile Radio Cases', 'Police Duty Belts', 'OEM Manufacturing', 
            'Contract Leather Finishing', 'Barcode & Data Collection Cases', 
            'Custom Orders Welcome', 'Government Volume Pricing', 'Cellular Holsters',
            'Land Mobile Radio Cases', 'Police Duty Belts', 'OEM Manufacturing', 
            'Contract Leather Finishing', 'Barcode & Data Collection Cases', 
            'Custom Orders Welcome', 'Government Volume Pricing', 'Cellular Holsters',
          ].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 text-white/30 text-xs font-bold tracking-widest uppercase">
              <span className="w-1 h-1 bg-cyan-500 rounded-full flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
