import { FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../../assets/CASETECH600.jpg';

const navLinks = [
  { name: 'Home',            href: '/' },
  { name: 'Products',        href: '/products' },
  { name: 'Custom Orders',   href: '/contact' },
  { name: 'About Us',        href: '/about' },
  { name: 'Contact',         href: '/contact' },
];

const Header = () => {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate  = useNavigate();
  const location  = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-white/90 backdrop-blur-xl shadow-md border-b border-subtle-200/60' : 'bg-white/70 backdrop-blur-xl border-b border-subtle-200/40'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <button onClick={() => navigate('/')} className="flex items-center gap-3 flex-shrink-0 group">
              <div className="h-12 w-auto overflow-hidden rounded-lg border border-subtle-200 shadow-sm group-hover:shadow-md transition-shadow">
                <img src={logo} alt="CASE-TECH" className="h-full w-auto object-cover" />
              </div>
            </button>

            {/* Desktop nav — pill */}
            <nav className="hidden lg:flex items-center gap-1 bg-subtle-50/80 border border-subtle-200 rounded-full px-3 py-2 shadow-sm backdrop-blur-sm">
              {navLinks.map(link => {
                const active = location.pathname === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${active ? 'bg-subtle-950 text-white shadow-md' : 'text-subtle-600 hover:text-subtle-950 hover:bg-subtle-100'}`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Request a Quote CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="mailto:sales@case-tech.com"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-subtle-950 text-white text-sm font-bold tracking-wide hover:bg-subtle-800 transition-colors shadow-lg shadow-subtle-950/10 hover:shadow-subtle-950/20 active:scale-95"
              >
                Request a Quote
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(o => !o)}
              className="lg:hidden p-2 rounded-xl bg-subtle-100 text-subtle-800 hover:bg-subtle-200 transition-colors border border-subtle-200"
              aria-label="Toggle menu"
            >
              {open ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {open && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-subtle-200 shadow-2xl animate-fade-in-down">
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl text-subtle-800 font-semibold text-base hover:bg-subtle-100 hover:text-subtle-950 transition-colors border border-transparent hover:border-subtle-200"
                >
                  {link.name}
                  <span className="text-subtle-400 text-sm">→</span>
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="mailto:sales@case-tech.com"
                  className="block w-full text-center px-6 py-4 rounded-2xl bg-subtle-950 text-white font-bold text-base hover:bg-subtle-800 transition-colors shadow-xl"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
