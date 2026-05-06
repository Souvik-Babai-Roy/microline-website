import { CheckCircle, ChevronRight } from 'lucide-react';

interface AchievementsProps {
  onNavigate: (page: string) => void;
}

const achievements = [
  'Developed RS Control Circuit (DAC 16bit) 64 channel for TCS Innovation Lab, Kolkata',
  'Microwave Lab for NIT Meera, NIT Sikkim, NIT Jamshedpur, NIT Silchar, NIT Durgapur, NIT Goa, NIT Warangal, NIT Rourkela, Tripura University',
  'Microwave Scanner for SISIR Radar',
  'Microwave Anechoic Chamber for IEM Kolkata, TCS Kolkata, NIT Jamshedpur, NIT Sikkim and more',
  'Custom made Waveguides for DRDO research and Researchers',
  'Microwave 3D Anechoic Chamber for major defence organizations',
  'Custom RF Components for space applications',
  'Antenna Measurement Systems for leading research institutions',
  'Microstrip Antenna fabrication for satellite communication projects',
  'Lab setup for 15+ National Institutes of Technology across India',
];

const clients = [
  { name: 'National Institutes of Technology', count: '15+', desc: 'NITs across India' },
  { name: 'DRDO', count: '5+', desc: 'Projects completed' },
  { name: 'TCS Innovation Labs', count: '3', desc: 'Major installations' },
  { name: 'Private R&D', count: '50+', desc: 'Industry clients' },
];

export default function Achievements({ onNavigate }: AchievementsProps) {
  return (
    <div className="bg-white pt-16">
      {/* Hero */}
      <div className="bg-[#0a1628] py-14 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&w=1200')" }}
        />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-blue-400 text-xs tracking-widest uppercase mb-2">
            <button onClick={() => onNavigate('home')} className="hover:text-white">Home</button>
            {' / Achievements'}
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Our Achievements</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {clients.map((c) => (
            <div key={c.name} className="text-center p-6 bg-blue-600 rounded-xl text-white">
              <p className="text-4xl font-extrabold mb-1">{c.count}</p>
              <p className="font-bold text-sm mb-1">{c.name}</p>
              <p className="text-blue-200 text-xs">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Achievements list */}
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
              Notable <span className="text-blue-600">Accomplishments</span>
            </h2>
            <div className="space-y-3">
              {achievements.map((a) => (
                <div key={a} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Anechoic Chamber"
                className="w-full h-56 object-cover"
              />
              <div className="p-4 bg-[#0a1628]">
                <p className="text-white font-bold text-sm">Microwave 3D Anechoic Chamber</p>
                <p className="text-gray-400 text-xs mt-1">State-of-the-art facility for antenna testing</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Lab Setup"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-[#0a1628]">
                <p className="text-white font-bold text-sm">Microwave Laboratory Setup</p>
                <p className="text-gray-400 text-xs mt-1">Complete lab setups for NIT campuses</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">
            Our <span className="text-blue-600">Journey</span>
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-blue-200" />
            {[
              { year: '1997', event: 'Microline India founded in Kolkata' },
              { year: '2002', event: 'First major project with NIT Durgapur' },
              { year: '2008', event: 'Expanded to Defence sector, first DRDO project' },
              { year: '2015', event: 'Supplied Microwave Labs to 10+ NITs' },
              { year: '2020', event: 'Launched 3D Anechoic Chamber product line' },
              { year: '2024', event: 'Serving 500+ satisfied customers across India' },
            ].map((item, i) => (
              <div key={item.year} className={`relative flex items-center gap-8 mb-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-4 bg-white border border-blue-200 rounded-xl shadow-sm hover:shadow-md transition-shadow`}>
                    <p className="text-blue-600 font-extrabold text-lg">{item.year}</p>
                    <p className="text-gray-700 text-sm">{item.event}</p>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md flex-shrink-0 relative z-10" />
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => onNavigate('contact')}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-3.5 rounded tracking-wide uppercase text-sm transition-colors flex items-center gap-2 mx-auto"
          >
            View More <ChevronRight className="w-4 h-4" />
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
