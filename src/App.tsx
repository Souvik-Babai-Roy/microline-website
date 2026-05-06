import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products, { productData } from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Services from './pages/Services';
import Applications from './pages/Applications';
import Achievements from './pages/Achievements';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

type Page = 'home' | 'about' | 'products' | 'product-detail' | 'services' | 'applications' | 'achievements' | 'resources' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<typeof productData[0] | undefined>(undefined);

  const handleNavigate = (page: string, data?: unknown) => {
    if (page === 'product-detail' && data) {
      setSelectedProduct(data as typeof productData[0]);
    }
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const titles: Record<Page, string> = {
      home: 'Microline India - Microwave & RF Technology Since 1997',
      about: 'About Us - Microline India',
      products: 'Products - Microline India',
      'product-detail': selectedProduct ? `${selectedProduct.name} - Microline India` : 'Product - Microline India',
      services: 'Services - Microline India',
      applications: 'Applications - Microline India',
      achievements: 'Achievements - Microline India',
      resources: 'Resources - Microline India',
      contact: 'Contact Us - Microline India',
    };
    document.title = titles[currentPage] ?? 'Microline India';
  }, [currentPage, selectedProduct]);

  const navPage = currentPage === 'product-detail' ? 'products' : currentPage;

  return (
    <div className="min-h-screen">
      <Navbar currentPage={navPage} onNavigate={handleNavigate} />

      {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
      {currentPage === 'about' && <About onNavigate={handleNavigate} />}
      {currentPage === 'products' && <Products onNavigate={handleNavigate} />}
      {currentPage === 'product-detail' && (
        <ProductDetail onNavigate={handleNavigate} product={selectedProduct} />
      )}
      {currentPage === 'services' && <Services onNavigate={handleNavigate} />}
      {currentPage === 'applications' && <Applications onNavigate={handleNavigate} />}
      {currentPage === 'achievements' && <Achievements onNavigate={handleNavigate} />}
      {currentPage === 'resources' && <Resources onNavigate={handleNavigate} />}
      {currentPage === 'contact' && <Contact onNavigate={handleNavigate} />}
    </div>
  );
}
