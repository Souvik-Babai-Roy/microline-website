import { useState } from 'react';
import { CheckCircle, Download, ChevronRight } from 'lucide-react';
import { productData } from './Products';

interface ProductDetailProps {
  onNavigate: (page: string, data?: unknown) => void;
  product?: typeof productData[0];
}

export default function ProductDetail({ onNavigate, product }: ProductDetailProps) {
  const p = product ?? productData[0];
  const [activeTab, setActiveTab] = useState<'specs' | 'apps'>('specs');

  return (
    <div className="bg-white pt-16">
      {/* Hero */}
      <div className="bg-[#0a1628] py-14 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url('${p.img}')` }} />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-blue-400 text-xs tracking-widest uppercase mb-2">
            <button onClick={() => onNavigate('home')} className="hover:text-white">Home</button>
            {' / '}
            <button onClick={() => onNavigate('products')} className="hover:text-white">Products</button>
            {` / ${p.name}`}
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">{p.name}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src={p.img} alt={p.name} className="w-full h-80 object-cover" />
          </div>

          {/* Info */}
          <div>
            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block">
              {p.category}
            </span>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">{p.name}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{p.desc}</p>

            <h3 className="text-gray-900 font-bold text-base mb-3">Key Features</h3>
            <ul className="space-y-2 mb-8">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3 rounded tracking-wide uppercase text-sm transition-colors"
              >
                Request Quote
              </button>
              <button className="flex items-center gap-2 border border-blue-300 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded text-sm transition-colors">
                <Download className="w-4 h-4" /> Download Brochure
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border border-gray-200 rounded-xl overflow-hidden mb-16">
          <div className="flex border-b border-gray-200">
            {(['specs', 'apps'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 text-sm font-bold uppercase tracking-wide transition-colors ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab === 'specs' ? 'Specifications' : 'Applications'}
              </button>
            ))}
          </div>
          <div className="p-6">
            {activeTab === 'specs' ? (
              <div className="divide-y divide-gray-100">
                {Object.entries(p.specs).map(([key, val]) => (
                  <div key={key} className="flex py-3">
                    <span className="w-1/2 text-gray-500 text-sm font-medium">{key}</span>
                    <span className="w-1/2 text-gray-900 text-sm font-semibold">{val}</span>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="space-y-3">
                {['Antenna pattern measurement', 'RCS measurement', 'Radome testing', 'EMC testing', 'Research & development'].map((app) => (
                  <li key={app} className="flex items-center gap-2 text-sm text-gray-700">
                    <ChevronRight className="w-4 h-4 text-blue-600" /> {app}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Related */}
        <h3 className="text-xl font-extrabold text-gray-900 mb-6">Related Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {productData.filter((x) => x.id !== p.id).slice(0, 3).map((rel) => (
            <div
              key={rel.id}
              className="group border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => onNavigate('product-detail', rel)}
            >
              <img src={rel.img} alt={rel.name} className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-4">
                <p className="text-blue-600 text-xs font-semibold mb-1">{rel.category}</p>
                <h4 className="text-gray-900 font-bold text-sm">{rel.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

function Footer({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <footer className="bg-[#0a1628] text-gray-300 mt-8">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-xs">&copy; 2024 Microline India. All rights reserved.</p>
        <button
          onClick={() => onNavigate('contact')}
          className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-6 py-2.5 rounded tracking-wide uppercase transition-colors"
        >
          Contact Us
        </button>
      </div>
    </footer>
  );
}
