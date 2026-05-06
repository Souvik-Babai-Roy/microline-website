import { ChevronRight } from 'lucide-react';

interface ApplicationsProps {
  onNavigate: (page: string) => void;
}

const apps = [
  {
    title: 'Defence & Security',
    img: 'https://images.pexels.com/photos/4116714/pexels-photo-4116714.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Radar systems, electronic warfare, antenna testing for defence applications.',
    items: ['Radar cross-section measurement', 'Electronic warfare systems', 'Antenna testing for missiles', 'Communication jamming analysis'],
  },
  {
    title: 'Space & Satellite',
    img: 'https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Satellite communication components, antenna characterization, and RF testing for space-grade applications.',
    items: ['Satellite antenna testing', 'RF component qualification', 'Thermal vacuum compatible assemblies', 'High-frequency waveguides'],
  },
  {
    title: 'Academic Research',
    img: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Complete microwave laboratory setups, training benches, and research instruments for universities and institutes.',
    items: ['Microwave lab setup', 'Student training benches', 'Antenna measurement systems', 'Research collaboration'],
  },
  {
    title: 'Industrial Microwave',
    img: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Industrial heating, material testing, and process monitoring using microwave technology.',
    items: ['Material characterization', 'Non-destructive testing', 'Process monitoring', 'Industrial heating solutions'],
  },
  {
    title: 'Telecommunications',
    img: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'RF components and test equipment for 4G/5G base stations and wireless communication infrastructure.',
    items: ['5G antenna testing', 'Base station components', 'Beamforming antenna arrays', 'mmWave testing'],
  },
  {
    title: 'Automotive Radar',
    img: 'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Compact anechoic chambers and test setups for automotive radar and ADAS system validation.',
    items: ['ADAS radar testing', '77 GHz antenna measurement', 'Compact range testing', 'OTA testing solutions'],
  },
];

export default function Applications({ onNavigate }: ApplicationsProps) {
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
            {' / Applications'}
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Applications</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-2">Industry Verticals</p>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Where Our <span className="text-blue-600">Solutions Are Applied</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {apps.map((app) => (
            <div key={app.title} className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-44 overflow-hidden">
                <img
                  src={app.img}
                  alt={app.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-gray-900 font-extrabold text-lg mb-2">{app.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{app.desc}</p>
                <ul className="space-y-1">
                  {app.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                      <ChevronRight className="w-3 h-3 text-blue-500 flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0a1628] rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-extrabold text-white mb-3">Have a Specific Application?</h3>
          <p className="text-gray-400 mb-6">Our engineers can design custom solutions for your unique requirements.</p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-3.5 rounded tracking-wide uppercase text-sm transition-colors"
          >
            Discuss Your Application
          </button>
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
