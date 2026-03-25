import { useState } from 'react';
import { FiShoppingCart, FiCreditCard, FiShield, FiRotateCcw, FiChevronLeft, FiChevronRight, FiMail } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Header from '../B2BHomePage/components/Header';
import Footer from '../B2BHomePage/components/Footer';

const product = {
  id: '330-400MC65',
  name: 'Chest Pack for MC65',
  model: '330-400MC65',
  price: 80.00,
  tag: 'Barcode & Data',
  desc: [
    'This is a 1000 denier Kodra nylon chest pack designed to carry the Motorola/Symbol MC65 computer. There is a zippered pocket and a pen holder as well as the holder for the computer.',
    'The shoulder straps allow for a wide variety of size adjustment and the plastic side release buckles facilitate easy attachment and removal.',
  ],
  note: 'Shown with a small radio in the pocket. Many other models available.',
  images: [
    'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=700&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=700&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=700&auto=format&fit=crop&q=80',
  ],
  related: ['Radio Belt Clip Assembly', 'Leather OEM Holster', 'Nylon Duty Strap'],
};

const trust = [
  { icon: FiCreditCard,  label: 'Secure\nCheckout' },
  { icon: FiShield,      label: '1-Year\nWarranty' },
  { icon: FiRotateCcw,   label: '30-Day\nReturns' },
];

const ProductDetail = () => {
  const [active, setActive]     = useState(0);
  const [qty, setQty]           = useState(1);
  const navigate                = useNavigate();

  return (
    <div className="min-h-screen bg-subtle-50 font-sans flex flex-col">
      <Header />

      {/* Breadcrumb bar */}
      <div className="bg-white border-b border-subtle-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-1.5 text-xs font-semibold text-subtle-400">
            <a href="/" className="hover:text-subtle-950 transition-colors">Home</a>
            <FiChevronRight size={12} />
            <a href="/products" className="hover:text-subtle-950 transition-colors">Bar Code/Data Collection Cases</a>
            <FiChevronRight size={12} />
            <span className="text-subtle-950">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* ── Image Gallery ─────────────────────────────────── */}
          <div className="flex flex-col gap-4 lg:sticky lg:top-28">
            {/* Main image */}
            <div className="bg-white rounded-3xl border border-subtle-200 shadow-sm aspect-square flex items-center justify-center p-8 overflow-hidden relative group">
              <img
                src={product.images[active]}
                alt={product.name}
                key={active}
                className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
              {/* Prev / Next arrows */}
              {product.images.length > 1 && (
                <>
                  <button onClick={() => setActive(a => (a - 1 + product.images.length) % product.images.length)} className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-subtle-200 rounded-full flex items-center justify-center text-subtle-600 hover:text-subtle-950 hover:border-subtle-400 transition-colors shadow-sm opacity-0 group-hover:opacity-100">
                    <FiChevronLeft size={18} />
                  </button>
                  <button onClick={() => setActive(a => (a + 1) % product.images.length)} className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-subtle-200 rounded-full flex items-center justify-center text-subtle-600 hover:text-subtle-950 hover:border-subtle-400 transition-colors shadow-sm opacity-0 group-hover:opacity-100">
                    <FiChevronRight size={18} />
                  </button>
                </>
              )}
            </div>
            {/* Thumbs */}
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 ${active === i ? 'border-cyan-500 shadow-md shadow-cyan-500/20 scale-[1.02]' : 'border-subtle-200 hover:border-subtle-400 opacity-70 hover:opacity-100'} bg-white flex items-center justify-center p-2`}
                >
                  <img src={img} alt="" className="max-h-full w-auto object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* ── Product Info ──────────────────────────────────── */}
          <div className="flex flex-col">
            {/* Tag + Back */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-subtle-950 text-white text-[10px] font-black tracking-widest uppercase rounded-full">{product.tag}</span>
              <button onClick={() => navigate('/products')} className="inline-flex items-center gap-1 text-xs font-bold text-subtle-400 hover:text-subtle-950 transition-colors">
                <FiChevronLeft size={14} /> Back to list
              </button>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-black text-subtle-950 tracking-tight leading-tight mb-3">
              {product.name}
            </h1>

            {/* Model + Stock */}
            <div className="flex items-center gap-3 mb-8">
              <span className="px-3 py-1 bg-subtle-100 text-subtle-700 text-xs font-bold rounded-md uppercase tracking-wider">
                Model [{product.model}]
              </span>
              <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-md border border-green-200">
                In Stock
              </span>
            </div>

            {/* Price */}
            <div className="text-6xl font-black text-subtle-950 mb-10 tracking-tight">
              <sup className="text-2xl font-bold text-subtle-400 align-top mt-4">$</sup>
              {product.price.toFixed(2)}
            </div>

            {/* Description */}
            <div className="space-y-4 mb-8">
              {product.desc.map((d, i) => (
                <p key={i} className="text-subtle-600 font-light leading-relaxed text-base">{d}</p>
              ))}
            </div>

            {/* Note */}
            <div className="flex gap-3 items-start bg-amber-50 border border-amber-200 rounded-xl p-4 mb-10">
              <span className="text-amber-500 mt-0.5 flex-shrink-0">ℹ</span>
              <p className="text-amber-800 text-sm font-medium leading-relaxed">{product.note}</p>
            </div>

            {/* Purchase Card */}
            <div className="bg-white rounded-2xl border border-subtle-200 shadow-xl shadow-subtle-200/50 p-6 mb-6">
              <div className="flex gap-3 mb-5">
                <div className="flex items-center border border-subtle-200 rounded-xl overflow-hidden">
                  <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-10 h-12 flex items-center justify-center text-subtle-600 hover:bg-subtle-100 transition-colors font-bold text-lg">−</button>
                  <span className="w-12 h-12 flex items-center justify-center font-black text-lg text-subtle-950 border-x border-subtle-200">{qty}</span>
                  <button onClick={() => setQty(q => q + 1)} className="w-10 h-12 flex items-center justify-center text-subtle-600 hover:bg-subtle-100 transition-colors font-bold text-lg">+</button>
                </div>
                <button className="flex-1 flex items-center justify-center gap-3 bg-subtle-950 text-white font-bold text-base rounded-xl hover:bg-cyan-600 transition-colors shadow-lg shadow-subtle-950/10 hover:shadow-cyan-500/20 active:scale-95">
                  <FiShoppingCart size={20} />
                  Add to Cart
                </button>
              </div>
              <a href="mailto:sales@case-tech.com" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-subtle-200 text-subtle-700 text-sm font-semibold hover:bg-subtle-50 transition-colors">
                <FiMail size={16} /> Contact Sales for Volume Pricing
              </a>

              {/* Trust pills */}
              <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-subtle-100">
                {trust.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-2 text-center">
                    <div className="w-10 h-10 rounded-full bg-subtle-50 border border-subtle-200 flex items-center justify-center text-subtle-600">
                      <Icon size={18} />
                    </div>
                    <p className="text-[10px] font-bold text-subtle-400 leading-tight whitespace-pre-line uppercase tracking-wide">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related */}
            <div>
              <p className="text-xs font-black tracking-widest uppercase text-subtle-400 mb-3">Related Products</p>
              <div className="flex flex-wrap gap-2">
                {product.related.map(r => (
                  <span key={r} className="px-3 py-1.5 bg-white border border-subtle-200 text-subtle-600 text-xs font-semibold rounded-lg hover:border-subtle-400 hover:text-subtle-950 transition-colors cursor-pointer">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
