import { useState } from 'react';
import { FiSliders, FiGrid, FiList, FiSearch, FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Header from '../B2BHomePage/components/Header';
import Footer from '../B2BHomePage/components/Footer';

const sidebarCategories = [
  { name: 'Bar Code/Data Collection Cases', active: true },
  { name: 'Belts',                          active: false },
  { name: 'Cellular',                       active: false },
  { name: 'Clearance Items',                active: false },
  { name: 'Contract production',            active: false },
  { name: 'Custom orders',                  active: false },
  { name: 'Land Mobile Radio Products',     active: false },
  { name: 'O.E.M. Products',               active: false },
  { name: 'Public Safety',                  active: false },
  { name: 'Shipping/Customs Fees',          active: false },
];

const products = [
  {
    id: '330-400MC65',
    name: 'Chest Pack for MC65',
    model: '330-400MC65',
    price: 80.00,
    shortDesc: '1000 denier Kodra nylon chest pack for the Motorola/Symbol MC65 computer — zippered pocket, pen holder, and adjustable shoulder straps with plastic side-release buckles.',
    image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=600&auto=format&fit=crop&q=70',
    tag: 'Barcode & Data',
  },
  {
    id: '330-401',
    name: 'Chest Pack for MC70',
    model: '330-401',
    price: 85.00,
    shortDesc: '1000 denier Kodra nylon chest pack for the Motorola/Symbol MC70 — rugged design with reflective strip and quick-release shoulder straps.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&auto=format&fit=crop&q=70',
    tag: 'Barcode & Data',
  },
];

const ProductList = () => {
  const [view, setView] = useState<'list' | 'grid'>('list');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-subtle-50 font-sans flex flex-col">
      <Header />

      {/* Page hero banner */}
      <div className="bg-white border-b border-subtle-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs font-semibold text-subtle-400 mb-6">
            <a href="/" className="hover:text-subtle-950 transition-colors">Home</a>
            <FiChevronRight size={12} />
            <span className="text-subtle-950">Bar Code/Data Collection Cases</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-black text-subtle-950 tracking-tight mb-2">
            Bar Code / Data Collection Cases
          </h1>
          <p className="text-subtle-500 text-lg font-light">cases for scanners and printers</p>
        </div>
      </div>

      {/* Layout */}
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 flex flex-col lg:flex-row gap-8">

        {/* ── Sidebar ─────────────────────────────────────────── */}
        <aside className="w-full lg:w-60 flex-shrink-0 space-y-6">
          <div className="bg-white rounded-2xl border border-subtle-200 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-subtle-100">
              <h3 className="text-xs font-black tracking-widest uppercase text-subtle-950">Categories</h3>
            </div>
            <ul className="py-2">
              {sidebarCategories.map(cat => (
                <li key={cat.name}>
                  <a
                    href="#"
                    className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-colors ${cat.active ? 'text-cyan-600 bg-cyan-50 border-r-2 border-cyan-500' : 'text-subtle-600 hover:bg-subtle-50 hover:text-subtle-950'}`}
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* We Accept */}
          <div className="bg-white rounded-2xl border border-subtle-200 shadow-sm p-5 text-center">
            <p className="text-[10px] font-black tracking-widest uppercase text-subtle-400 mb-4">We Accept</p>
            <div className="flex justify-center items-center gap-2">
              <div className="font-black italic text-blue-700 text-2xl leading-none">Pay</div>
              <div className="font-black italic text-blue-900 text-2xl leading-none">Pal</div>
            </div>
          </div>
        </aside>

        {/* ── Product list ─────────────────────────────────────── */}
        <div className="flex-grow flex flex-col min-w-0">

          {/* Toolbar */}
          <div className="bg-white rounded-2xl border border-subtle-200 shadow-sm px-5 py-3.5 mb-6 flex items-center justify-between gap-4 flex-wrap">
            {/* Search */}
            <div className="relative flex-grow max-w-xs">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-subtle-400" size={16} />
              <input
                type="text"
                placeholder="Search products…"
                className="w-full pl-9 pr-4 py-2 text-sm bg-subtle-50 border border-subtle-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
              />
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="text-xs text-subtle-400 font-medium hidden sm:inline">{products.length} results</span>
              <div className="relative">
                <select className="appearance-none bg-subtle-50 border border-subtle-200 text-subtle-700 py-2 pl-4 pr-9 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm font-medium cursor-pointer">
                  <option>Featured</option>
                  <option>Price: Low → High</option>
                  <option>Price: High → Low</option>
                </select>
                <FiSliders className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-subtle-500" size={14} />
              </div>
              {/* View toggle */}
              <div className="flex bg-subtle-50 rounded-lg border border-subtle-200 p-0.5 gap-0.5">
                <button onClick={() => setView('grid')} className={`p-2 rounded-md transition-colors ${view === 'grid' ? 'bg-white shadow-sm text-subtle-950' : 'text-subtle-400 hover:text-subtle-700'}`}><FiGrid size={16} /></button>
                <button onClick={() => setView('list')} className={`p-2 rounded-md transition-colors ${view === 'list' ? 'bg-white shadow-sm text-subtle-950' : 'text-subtle-400 hover:text-subtle-700'}`}><FiList size={16} /></button>
              </div>
            </div>
          </div>

          {/* Products */}
          {view === 'list' ? (
            <div className="space-y-4">
              {products.map(prod => (
                <div
                  key={prod.id}
                  onClick={() => navigate(`/products/${prod.id}`)}
                  className="group bg-white rounded-2xl border border-subtle-200 shadow-sm hover:shadow-xl hover:shadow-subtle-200/50 hover:border-subtle-300 transition-all duration-300 overflow-hidden flex flex-col sm:flex-row cursor-pointer"
                >
                  {/* Img */}
                  <div className="relative sm:w-52 h-52 flex-shrink-0 bg-subtle-50 overflow-hidden flex items-center justify-center p-4">
                    <img src={prod.image} alt={prod.name} className="max-h-full w-auto object-contain group-hover:scale-110 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-subtle-950 text-white text-[9px] font-black tracking-widest uppercase rounded-full">{prod.tag}</span>
                  </div>
                  {/* Info */}
                  <div className="flex-grow p-6 flex flex-col justify-between">
                    <div>
                      <p className="text-[10px] font-black tracking-widest uppercase text-subtle-400 mb-1">Model: {prod.model}</p>
                      <h3 className="text-xl font-bold text-subtle-950 group-hover:text-cyan-600 transition-colors mb-3">{prod.name}</h3>
                      <p className="text-subtle-500 text-sm font-light leading-relaxed line-clamp-3">{prod.shortDesc}</p>
                    </div>
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-subtle-100">
                      <span className="text-2xl font-black text-subtle-950">${prod.price.toFixed(2)}</span>
                      <button className="px-5 py-2.5 bg-subtle-950 text-white text-xs font-bold rounded-lg hover:bg-cyan-600 transition-colors shadow-md hover:shadow-cyan-500/20 active:scale-95">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {products.map(prod => (
                <div
                  key={prod.id}
                  onClick={() => navigate(`/products/${prod.id}`)}
                  className="group bg-white rounded-2xl border border-subtle-200 shadow-sm hover:shadow-xl hover:shadow-subtle-200/50 hover:border-subtle-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col"
                >
                  <div className="relative h-52 bg-subtle-50 overflow-hidden flex items-center justify-center p-4">
                    <img src={prod.image} alt={prod.name} className="max-h-full w-auto object-contain group-hover:scale-110 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-subtle-950 text-white text-[9px] font-black tracking-widest uppercase rounded-full">{prod.tag}</span>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-[10px] font-black tracking-widest uppercase text-subtle-400 mb-1">Model: {prod.model}</p>
                    <h3 className="text-lg font-bold text-subtle-950 group-hover:text-cyan-600 transition-colors mb-2 line-clamp-2">{prod.name}</h3>
                    <p className="text-subtle-500 text-sm font-light leading-relaxed line-clamp-2 flex-grow">{prod.shortDesc}</p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-subtle-100">
                      <span className="text-xl font-black text-subtle-950">${prod.price.toFixed(2)}</span>
                      <span className="text-subtle-400 group-hover:text-cyan-600 transition-colors text-sm font-bold">View →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductList;
