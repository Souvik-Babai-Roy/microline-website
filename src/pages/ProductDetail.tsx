import { useState } from 'react';
import { productData } from './Products';

interface ProductDetailProps {
  onNavigate: (page: string, data?: unknown) => void;
  product?: (typeof productData)[0];
}

export default function ProductDetail({ onNavigate, product }: ProductDetailProps) {
  const p = product ?? productData[0];
  const [activeTab, setActiveTab] = useState<'specs' | 'apps'>('specs');

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="product-detail-hero bg-gradient-dark">
        <div
          className="product-detail-hero-overlay"
          style={{ backgroundImage: `url('${p.img}')` }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="small text-primary text-uppercase mb-2" style={{ letterSpacing: '1px' }}>
            <button onClick={() => onNavigate('home')} className="breadcrumb-link">
              Home
            </button>
            {' / '}
            <button onClick={() => onNavigate('products')} className="breadcrumb-link">
              Products
            </button>
            {` / ${p.name}`}
          </p>
          <h1 className="text-white display-4 font-weight-bolder">{p.name}</h1>
        </div>
      </div>

      <div className="section py-16">
        <div className="container">
          <div className="grid lg-grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="product-detail-image">
              <img src={p.img} alt={p.name} />
            </div>

            {/* Info */}
            <div>
              <span className="product-badge" style={{ position: 'static', display: 'inline-block', marginBottom: '1rem' }}>
                {p.category}
              </span>
              <h2 className="display-4 font-weight-bolder mb-4" style={{ color: 'var(--text-primary)' }}>
                {p.name}
              </h2>
              <p className="text-secondary mb-4">{p.desc}</p>

              <h3 className="font-weight-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                Key Features
              </h3>
              <ul className="feature-list">
                {p.features.map((f) => (
                  <li key={f}>
                    <i className="fas fa-check-circle"></i>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="btn-group">
                <button onClick={() => onNavigate('contact')} className="btn btn-primary">
                  Request Quote
                </button>
                <button className="btn btn-outline">
                  <i className="fas fa-download mr-2"></i> Download Brochure
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="tabs">
            <div className="tab-header">
              <button
                onClick={() => setActiveTab('specs')}
                className={`tab-btn${activeTab === 'specs' ? ' active' : ''}`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('apps')}
                className={`tab-btn${activeTab === 'apps' ? ' active' : ''}`}
              >
                Applications
              </button>
            </div>
            <div className="tab-panel">
              {activeTab === 'specs' ? (
                <div>
                  {Object.entries(p.specs).map(([key, val]) => (
                    <div key={key} className="spec-row">
                      <span className="spec-key">{key}</span>
                      <span className="spec-value">{val}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="application-list">
                  {[
                    'Antenna pattern measurement',
                    'RCS measurement',
                    'Radome testing',
                    'EMC testing',
                    'Research & development',
                  ].map((app) => (
                    <li key={app}>
                      <i className="fas fa-chevron-right"></i> {app}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Related Products */}
          <h3 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            Related Products
          </h3>
          <div className="related-products-grid sm-grid-cols-3">
            {productData
              .filter((x) => x.id !== p.id)
              .slice(0, 3)
              .map((rel) => (
                <div
                  key={rel.id}
                  className="related-card"
                  onClick={() => onNavigate('product-detail', rel)}
                >
                  <div className="related-card-img">
                    <img src={rel.img} alt={rel.name} />
                  </div>
                  <div className="related-card-body">
                    <p className="category">{rel.category}</p>
                    <h4>{rel.name}</h4>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            paddingTop: '1.5rem',
            paddingBottom: '1.5rem',
          }}
        >
          <p className="text-muted small">&copy; 2024 Microline India. All rights reserved.</p>
          <button onClick={() => onNavigate('contact')} className="btn btn-primary">
            Contact Us
          </button>
        </div>
      </footer>
    </div>
  );
}