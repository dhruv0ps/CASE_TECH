import { FiFacebook, FiLinkedin, FiMail, FiPhoneCall } from 'react-icons/fi';
import logo from '../../../assets/CASETECH600.jpg';

const catLinks = [
  'Bar Code/Data Collection Cases', 'Belts', 'Cellular', 'Clearance Items',
  'Contract production', 'Custom orders', 'Land Mobile Radio Products', 'O.E.M. Products', 'Public Safety',
];

const infoLinks = [
  'Leather & Machinery We Use', 'Radiocase Styles', 'About Us',
  'Privacy & Security Policies', 'Terms and Conditions', 'Shipping & Returns', 'Site Map',
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-subtle-950 text-subtle-400 border-t border-white/5">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/5">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-6 inline-block">
              <div className="h-16 w-auto bg-white rounded-xl p-1.5 shadow-2xl overflow-hidden">
                <img src={logo} alt="CASE-TECH" className="h-full w-auto object-contain" />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-subtle-400 font-light mb-8 max-w-xs">
              Manufacturer of cases, straps and accessories for Land Mobile Portable Radios and similar carry cases for business and industry.
            </p>
            <div className="flex gap-3">
              {[FiLinkedin, FiFacebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-subtle-500 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-xs font-black tracking-widest uppercase mb-6">Categories</h4>
            <ul className="space-y-2.5">
              {catLinks.map(l => (
                <li key={l}>
                  <a href="#" className="text-sm text-subtle-500 hover:text-white transition-colors duration-200 font-light">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-white text-xs font-black tracking-widest uppercase mb-6">Information</h4>
            <ul className="space-y-2.5">
              {infoLinks.map(l => (
                <li key={l}>
                  <a href="#" className="text-sm text-subtle-500 hover:text-white transition-colors duration-200 font-light">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-black tracking-widest uppercase mb-6">Reach Us</h4>
            <ul className="space-y-5">
              <li>
                <p className="text-[10px] font-bold tracking-widest uppercase text-subtle-600 mb-1">Email</p>
                <a href="mailto:sales@case-tech.com" className="inline-flex items-center gap-2 text-sm text-white font-medium hover:text-cyan-400 transition-colors">
                  <FiMail size={14} className="text-subtle-500" />
                  sales@case-tech.com
                </a>
              </li>
              <li>
                <p className="text-[10px] font-bold tracking-widest uppercase text-subtle-600 mb-1">Phone</p>
                <a href="tel:9058428294" className="inline-flex items-center gap-2 text-lg font-black text-white hover:text-cyan-400 transition-colors tracking-tight">
                  <FiPhoneCall size={16} className="text-subtle-500" />
                  905-842-8294
                </a>
              </li>
              <li className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-subtle-500 leading-relaxed font-light">
                Government agencies &amp; volume users — contact us for special volume prices.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-subtle-600 font-medium">
          <p>&copy; {year} Case-Tech Inc. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Conditions of Use', 'Contact Us'].map(l => (
              <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
