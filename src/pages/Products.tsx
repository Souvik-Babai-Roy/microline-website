import { ChevronRight, Eye } from 'lucide-react';

interface ProductsProps {
  onNavigate: (page: string, data?: unknown) => void;
}

export const productData = [
  {
    id: 'anechoic-chamber',
    category: 'Microwave Test Systems',
    name: 'Microwave 3D Anechoic Chamber',
    img: 'https://images.pexels.com/photos/4116714/pexels-photo-4116714.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Microline India provides state of the art 3D Anechoic Chambers for accurate testing of antennas, radomes and microwave components in a controlled environment.',
    features: ['Fully automated system', 'Low reflection & high absorption', 'Wide frequency range', 'Precision positioning', 'User-friendly software'],
    specs: {
      'Frequency Range': '400 MHz – 40 GHz',
      'Quiet Zone': 'Up to 2m / 3m',
      'Positioner Type': 'Azimuth, Elevation, Polarization',
      'Control System': 'PC Based Automation',
      'Absorber Type': 'Pyramidal / Hybrid',
    },
  },
  {
    id: 'microwave-scanner',
    category: 'Microwave Test Systems',
    name: 'Microwave 3D Scanner',
    img: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'High-precision 3D scanning system for characterizing antenna patterns and near-field measurements.',
    features: ['3-axis movement', 'High precision stepper motors', 'PC controlled automation', 'Custom scan path support'],
    specs: {
      'Frequency Range': '1 GHz – 40 GHz',
      'Scan Volume': 'Up to 2m x 2m x 2m',
      'Positioning Accuracy': '±0.1mm',
      'Control System': 'PC Based',
    },
  },
  {
    id: 'microstrip-antenna',
    category: 'Antennas',
    name: 'Microstrip Planar Antenna',
    img: 'https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Custom microstrip planar and non-planar antennas designed and fabricated for research and industry applications.',
    features: ['Custom frequency bands', 'High gain variants', 'Compact form factor', 'VSWR < 2'],
    specs: {
      'Frequency Range': '1 GHz – 18 GHz',
      'Gain': 'Up to 20 dBi',
      'Polarization': 'Linear / Circular',
      'Substrate': 'Rogers / FR4',
    },
  },
  {
    id: 'pyramidal-horn',
    category: 'Antennas',
    name: 'Microwave Pyramidal Horn Antennas',
    img: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Standard gain pyramidal horn antennas across multiple frequency bands for antenna testing and calibration.',
    features: ['Standard gain reference', 'Low side lobes', 'Rugged construction', 'Wide band coverage'],
    specs: {
      'Frequency Range': '1 GHz – 40 GHz',
      'Gain': '10 – 25 dBi',
      'Polarization': 'Linear',
      'Material': 'Aluminium / Brass',
    },
  },
  {
    id: 'waveguide',
    category: 'Waveguides & Accessories',
    name: 'Custom Waveguides',
    img: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Precision machined waveguides in standard and custom dimensions for microwave signal transmission.',
    features: ['Custom dimensions', 'Low loss', 'Precision flanges', 'Multiple band options'],
    specs: {
      'Frequency Range': '1 GHz – 110 GHz',
      'Material': 'Aluminium / Brass / Copper',
      'Flange': 'Standard / Custom',
      'Finish': 'Silver / Gold Plated',
    },
  },
  {
    id: 'test-bench',
    category: 'Microwave Test Systems',
    name: 'Microwave Test Bench & Antenna Trainer',
    img: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Complete microwave test benches and antenna training setups for educational institutions and R&D labs.',
    features: ['Complete lab setup', 'Student-friendly interface', 'Multiple experiments', 'Technical manual included'],
    specs: {
      'Frequency Range': '2.4 GHz / 9.4 GHz',
      'Applications': 'Education / Research',
      'Setup': 'Table-top',
      'Manual': 'Included',
    },
  },
];

const categories = ['All', 'Microwave Test Systems', 'Antennas', 'Waveguides & Accessories'];

export default function Products({ onNavigate }: ProductsProps) {
  return (
    <div className="bg-white pt-16">
      {/* Hero */}
      <div className="bg-[#0a1628] py-14 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1200')" }}
        />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-blue-400 text-xs tracking-widest uppercase mb-2">
            <button onClick={() => onNavigate('home')} className="hover:text-white">Home</button>
            {' / Products'}
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Our Products</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-5 py-2 rounded-full border border-blue-200 text-sm font-semibold text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productData.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-gray-900 font-bold text-base mb-2 leading-tight">{product.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{product.desc}</p>
                <button
                  onClick={() => onNavigate('product-detail', product)}
                  className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors"
                >
                  <Eye className="w-4 h-4" /> View Details <ChevronRight className="w-4 h-4" />
                </button>
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
