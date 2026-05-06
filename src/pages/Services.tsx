import { Radio, Cpu, Settings, FlaskConical, Headphones, ChevronRight } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

const services = [
  {
    icon: Radio,
    title: 'Microstrip Antenna Fabrication',
    desc: 'High-precision microstrip antenna design and fabrication. Custom designs for specific frequency bands, gain requirements, and polarization specifications.',
    highlights: ['Custom frequency bands', 'Prototype to production', 'PCB-based and cavity-backed designs'],
  },
  {
    icon: Cpu,
    title: 'Microwave Planar & Non-Planar Fabrication',
    desc: 'Custom microwave circuits and components. Design and fabrication of complex microwave circuits on various substrates including Rogers and PTFE materials.',
    highlights: ['Rogers, PTFE, FR4 substrates', 'Multilayer PCB capability', 'Tight tolerance machining'],
  },
  {
    icon: Settings,
    title: 'Microwave Related Projects',
    desc: 'End-to-end project support for researchers & industries. Complete turnkey solutions from design to delivery for microwave and RF related research projects.',
    highlights: ['Research collaboration', 'Industry partnerships', 'DRDO/ISRO project support'],
  },
  {
    icon: FlaskConical,
    title: 'Laboratory Setup & Installation',
    desc: 'Complete lab setup for educational institutions and R&D labs. Comprehensive microwave laboratory setup including instruments, test benches, and training materials.',
    highlights: ['Full lab design', 'Equipment supply & installation', 'Training & documentation'],
  },
  {
    icon: Headphones,
    title: 'Consultation & Technical Support',
    desc: 'Expert guidance from conception to product development. Our experienced team provides technical consultation for microwave and RF technology projects.',
    highlights: ['Design consultation', 'Technology transfer', 'Troubleshooting support'],
  },
];

export default function Services({ onNavigate }: ServicesProps) {
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
            {' / Services'}
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Our Services</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-2">What We Do</p>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Comprehensive <span className="text-blue-600">RF & Microwave Services</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            From design and fabrication to lab setup and technical consultation, we provide end-to-end services for all your microwave and RF needs.
          </p>
        </div>

        <div className="space-y-6 mb-16">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group flex flex-col md:flex-row gap-6 p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-blue-100 group-hover:bg-blue-600 flex items-center justify-center transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-gray-900 font-bold text-lg mb-2">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                    <ul className="flex flex-wrap gap-2">
                      {service.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-1 text-xs text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                          <ChevronRight className="w-3 h-3" /> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="text-gray-200 font-extrabold text-5xl select-none flex-shrink-0 hidden md:block">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#0a1628] rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-extrabold text-white mb-3">Need a Custom Solution?</h3>
          <p className="text-gray-400 mb-6">Talk to our experts today and let us help you achieve your goals.</p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-3.5 rounded tracking-wide uppercase text-sm transition-colors"
          >
            Contact Us
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
