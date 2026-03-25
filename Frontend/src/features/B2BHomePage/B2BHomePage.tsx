
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import AboutTrust from './components/AboutTrust';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

/**
 * Modern B2B Industrial E-Commerce Homepage
 * Redesigned from a 3-column layout to a modern mobile-first design.
 */
const B2BHomePage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden">
      {/* 1. Header Section */}
      <Header />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Categories Section */}
        <Categories />

        {/* 4. Products Section */}
        <Products />

        {/* 5. About / Trust Section */}
        <AboutTrust />

        {/* 6. CTA Section */}
        <CTASection />
      </main>

      {/* 7. Footer Section */}
      <Footer />
    </div>
  );
};

export default B2BHomePage;
