import React from 'react';

interface ResourcesProps {
  onNavigate: (page: string) => void;
}

const catalogues = [
  { title: 'Product Catalogue 2024', type: 'PDF', size: '4.2 MB', desc: 'Complete product line catalogue with specifications.' },
  { title: 'Anechoic Chamber Brochure', type: 'PDF', size: '2.1 MB', desc: 'Detailed brochure for our 3D Anechoic Chamber systems.' },
  { title: 'Antenna Products Guide', type: 'PDF', size: '1.8 MB', desc: 'Comprehensive guide to our antenna product range.' },
  { title: 'Waveguide Selection Chart', type: 'PDF', size: '0.9 MB', desc: 'Quick reference for selecting the right waveguide.' },
  { title: 'Lab Setup Brochure', type: 'PDF', size: '3.5 MB', desc: 'Complete guide to our microwave laboratory setup offerings.' },
];

const videos = [
  { title: 'Microwave 3D Anechoic Chamber Demo', duration: '5:32', thumb: 'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { title: 'Antenna Measurement System Walkthrough', duration: '8:14', thumb: 'https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { title: 'NIT Lab Setup Installation', duration: '3:45', thumb: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { title: 'RF Component Manufacturing Process', duration: '6:20', thumb: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

export default function Resources({ onNavigate }: ResourcesProps) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="page-hero bg-gradient-dark">
        <div
          className="page-hero-overlay"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&w=1200')",
          }}
        />
        <div className="container page-hero-content">
          <p className="small text-primary text-uppercase mb-2" style={{ letterSpacing: '1px' }}>
            <button onClick={() => onNavigate('home')} className="breadcrumb-link">
              Home
            </button>
            {' / Resources'}
          </p>
          <h1 className="text-white display-4 font-weight-bolder">Resources (Catalogues &amp; Videos)</h1>
        </div>
      </div>

      <div className="section py-16">
        <div className="container">
          {/* Catalogues */}
          <div className="mb-16">
            <div className="resources-heading">
              <i className="fas fa-file-alt"></i>
              <h2>Catalogues &amp; <span>Brochures</span></h2>
            </div>
            <div className="space-y-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {catalogues.map((cat) => (
                <div key={cat.title} className="catalogue-item">
                  <div className="catalogue-info">
                    <div className="file-badge">{cat.type}</div>
                    <div>
                      <p className="catalogue-title">{cat.title}</p>
                      <p className="catalogue-meta">{cat.desc} • {cat.size}</p>
                    </div>
                  </div>
                  <button className="btn btn-primary">
                    <i className="fas fa-download mr-2"></i> Download
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Videos */}
          <div>
            <div className="resources-heading">
              <i className="fas fa-play"></i>
              <h2>Product <span>Videos</span></h2>
            </div>
            <div className="grid grid-cols-2 sm-grid-cols-2 lg-grid-cols-4 gap-6">
              {videos.map((video) => (
                <div key={video.title} className="video-card">
                  <div className="video-thumb">
                    <img src={video.thumb} alt={video.title} />
                    <div className="video-play-overlay">
                      <div className="video-play-btn">
                        <i className="fas fa-play" style={{ marginLeft: '2px' }}></i>
                      </div>
                    </div>
                    <span className="video-duration">{video.duration}</span>
                  </div>
                  <p className="video-title">{video.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
          <p className="text-muted small">&copy; 2024 Microline India. All rights reserved.</p>
          <button onClick={() => onNavigate('contact')} className="btn btn-primary">
            Contact Us
          </button>
        </div>
      </footer>
    </div>
  );
}