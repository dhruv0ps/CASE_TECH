import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

// Category data — real product images from case-tech.com
const categories = [
  {
    name: 'Land Mobile Radio',
    tag: 'Core Product',
    desc: 'Hard leather & nylon holsters engineered for LMR portables.',
    img: 'https://case-tech.com/cart/images/15-5400.gif',
    fallback: 'https://case-tech.com/cart/images/16-700N.gif',
    wide: true,
  },
  {
    name: 'Police Duty Gear',
    tag: 'Duty & Safety',
    desc: 'Heavy-duty belts and cases built to police specification.',
    img: 'https://case-tech.com/cart/images/55-3000.gif',
    fallback: 'https://case-tech.com/cart/images/330-400A.jpg',
    wide: false,
  },
  {
    name: 'Bar Code & Data Collection',
    tag: 'Industrial',
    desc: 'Rugged carry solutions for scanners and data terminals.',
    img: 'https://case-tech.com/cart/images/MC65nylon.jpg',
    fallback: 'https://case-tech.com/cart/images/207-110mt.gif',
    wide: false,
  },
  {
    name: 'OEM & Custom Orders',
    tag: 'Contract',
    desc: 'End-to-end leather finishing and OEM volume manufacturing.',
    img: 'https://case-tech.com/cart/images/200-08.jpg',
    fallback: 'https://case-tech.com/cart/images/55-220.jpg',
    wide: true,
  },
];

const Categories = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-subtle-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] font-black tracking-[0.25em] uppercase text-cyan-600 mb-3">Product Lines</p>
            <h2 className="text-4xl md:text-5xl font-black text-subtle-950 tracking-tight leading-none">
              Every Sector.<br />Every Requirement.
            </h2>
          </div>
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center gap-2 text-sm font-black text-subtle-500 hover:text-subtle-950 transition-colors group flex-shrink-0"
          >
            All Products
            <span className="w-8 h-8 border-2 border-subtle-200 group-hover:border-subtle-950 group-hover:bg-subtle-950 group-hover:text-white rounded-full flex items-center justify-center transition-all">
              <FiArrowRight size={14} />
            </span>
          </button>
        </div>

        {/* Masonry-style 2-row grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[260px]">
          {categories.map((cat, i) => (
            <div
              key={i}
              onClick={() => navigate('/products')}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${cat.wide && i === 0 ? 'lg:col-span-2' : ''} ${cat.wide && i === 3 ? 'lg:col-span-2' : ''}`}
            >
              {/* BG image — real product photo from case-tech.com with white bg overlay for visibility */}
              <div className="absolute inset-0 bg-slate-800" />
              <img
                src={cat.img}
                alt={cat.name}
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = (cat as any).fallback; }}
                className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-[10px] font-black tracking-widest text-cyan-400 uppercase mb-2">{cat.tag}</span>
                <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-2 group-hover:text-cyan-300 transition-colors duration-300">{cat.name}</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-400 translate-y-2 group-hover:translate-y-0 transform">
                  {cat.desc}
                </p>
                <div className="flex items-center gap-2 mt-3 text-white/50 group-hover:text-cyan-400 transition-colors duration-300">
                  <span className="text-xs font-black tracking-widest uppercase">Explore</span>
                  <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
