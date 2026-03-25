import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

// Magazine-style alternating product spotlights — ref: Motorola Solutions product pages
const spotlights = [
  {
    id: '330-400MC65',
    eyebrow: 'Featured Product',
    name: 'Chest Pack for MC65',
    model: '330-400MC65',
    price: '$80.00',
    desc: [
      '1000 denier Kodra nylon chest pack designed to carry the Motorola/Symbol MC65 computer.',
      'Zippered pocket and a pen holder as well as a holder for the computer. Shoulder straps allow wide size adjustment — plastic side-release buckles for easy attachment.',
    ],
    img: 'https://case-tech.com/cart/images/MC65nylon.jpg',
    imgFallback: 'https://case-tech.com/cart/images/330-400A.jpg',
    imgPos: 'right', // image on right
    accent: 'cyan',
  },
  {
    id: '2',
    eyebrow: 'Police & Duty',
    name: 'Land Mobile Radio Holster',
    model: 'LMR-HDL',
    price: 'Contact for Pricing',
    desc: [
      'Heavy-duty full-grain leather holster manufactured with our special heavy-duty stitching equipment.',
      'Fits a wide range of Land Mobile Portable Radios. Available with D-ring, swivel, or belt-loop attachment. Government volume pricing available.',
    ],
    img: 'https://case-tech.com/cart/images/15-5400.gif',
    imgFallback: 'https://case-tech.com/cart/images/16-700N.gif',
    imgPos: 'left', // image on left
    accent: 'slate',
  },
];

const accentMap: Record<string, { badge: string; btn: string; line: string }> = {
  cyan:  { badge: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20',  btn: 'bg-cyan-500 hover:bg-cyan-400 text-white shadow-cyan-500/20',   line: 'bg-cyan-500' },
  slate: { badge: 'bg-subtle-100 text-subtle-700 border-subtle-200', btn: 'bg-subtle-950 hover:bg-subtle-800 text-white',                   line: 'bg-subtle-950' },
};

const Products = () => {
  const navigate = useNavigate();

  return (
    <section className="py-0 bg-white">
      {spotlights.map((product, i) => {
        const isRight = product.imgPos === 'right';
        const theme   = accentMap[product.accent];

        return (
          <div
            key={product.id}
            className={`flex flex-col ${isRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[70vh] ${i % 2 === 0 ? 'bg-white' : 'bg-subtle-50'}`}
          >
            {/* ── Image half ───────────────────────────────── */}
            <div className="relative w-full lg:w-1/2 min-h-[400px] overflow-hidden bg-slate-100 flex items-center justify-center">
              <img
                src={product.img}
                alt={product.name}
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = (product as any).imgFallback; }}
                className="w-full h-full object-contain p-8 hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Model badge pinned to corner */}
              <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md text-white text-xs font-black tracking-widest uppercase px-4 py-2 rounded-full border border-white/10">
                Model: {product.model}
              </div>
            </div>

            {/* ── Text half ────────────────────────────────── */}
            <div className="w-full lg:w-1/2 flex items-center">
              <div className={`px-8 sm:px-12 lg:px-16 py-16 lg:py-24 max-w-xl ${isRight ? 'lg:ml-0' : 'lg:ml-auto'}`}>
                {/* Accent line */}
                <div className={`w-12 h-1 rounded-full mb-8 ${theme.line}`} />

                <p className={`text-[11px] font-black tracking-[0.25em] uppercase px-3 py-1 rounded-full border w-fit mb-4 ${theme.badge}`}>
                  {product.eyebrow}
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-subtle-950 tracking-tight leading-tight mb-6">
                  {product.name}
                </h2>

                {product.desc.map((d, j) => (
                  <p key={j} className="text-subtle-500 font-light text-base leading-relaxed mb-4 last:mb-8">
                    {d}
                  </p>
                ))}

                <div className="flex items-center gap-4">
                  <span className="text-3xl font-black text-subtle-950 tracking-tight">{product.price}</span>
                  <button
                    onClick={() => navigate(`/products/${product.id}`)}
                    className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-black rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 ${theme.btn}`}
                  >
                    View Product <FiArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* View all row */}
      <div className="border-t border-subtle-100 py-12 flex justify-center">
        <button
          onClick={() => navigate('/products')}
          className="inline-flex items-center gap-3 text-sm font-black text-subtle-500 hover:text-subtle-950 tracking-widest uppercase transition-colors group"
        >
          View All Products
          <span className="w-9 h-9 border-2 border-subtle-200 group-hover:border-subtle-950 group-hover:bg-subtle-950 group-hover:text-white rounded-full flex items-center justify-center transition-all">
            <FiArrowRight size={15} />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Products;
