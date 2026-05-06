import { Download, Play, FileText } from 'lucide-react';

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
    <div className="bg-white pt-16">
      <div className="bg-[#0a1628] py-14 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&w=1200')" }}
        />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-blue-400 text-xs tracking-widest uppercase mb-2">
            <button onClick={() => onNavigate('home')} className="hover:text-white">Home</button>
            {' / Resources'}
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Resources (Catalogues &amp; Videos)</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Catalogues */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-extrabold text-gray-900">
              Catalogues &amp; <span className="text-blue-600">Brochures</span>
            </h2>
          </div>
          <div className="space-y-4">
            {catalogues.map((cat) => (
              <div key={cat.title} className="flex items-center justify-between p-5 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all duration-200 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-extrabold text-xs">{cat.type}</span>
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold text-sm">{cat.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{cat.desc} • {cat.size}</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded transition-colors">
                  <Download className="w-3.5 h-3.5" /> Download
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Videos */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Play className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-extrabold text-gray-900">
              Product <span className="text-blue-600">Videos</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video) => (
              <div key={video.title} className="group cursor-pointer rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={video.thumb}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                      <Play className="w-5 h-5 text-white ml-1" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                    {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-gray-900 font-semibold text-sm leading-tight">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
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
