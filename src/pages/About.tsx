import { Award, Users, Cpu, Globe, CheckCircle } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="bg-white pt-16">
      {/* Breadcrumb hero */}
      <div className="bg-[#0a1628] py-14 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&w=1200')" }}
        />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-blue-400 text-xs tracking-widest uppercase mb-2">
            <button onClick={() => onNavigate('home')} className="hover:text-white">Home</button>
            {' / About Us'}
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">About Microline India</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Who We Are */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Microline India, a name resonant with innovation in microwave technology, offers a cutting-edge technology in visualization of electromagnetic waves. Since 1997 we are providing innovative Microwave and RF solutions, advancing the technology to global reach with new heights.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              With the designing experience and innovations ideas backed by skilled manpower, Microline produces finest quality products designed in-house assuring the products to be versatile and rugged in trend with modern technologies.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our distinction is our satisfied customers; we take all efforts to serve them with best of our expertise.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Microline India Office"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Award, value: 'Since 1997', label: 'Delivering Innovation' },
            { icon: Cpu, value: 'In-house', label: 'Design & Development' },
            { icon: CheckCircle, value: 'Custom Solutions', label: 'As Per Requirement' },
            { icon: Globe, value: 'Pan India', label: 'Support' },
          ].map((s) => (
            <div key={s.label} className="text-center p-6 bg-blue-50 rounded-xl">
              <s.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <p className="text-gray-900 font-extrabold text-lg">{s.value}</p>
              <p className="text-gray-500 text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-[#0a1628] text-white rounded-xl p-8">
            <h3 className="text-xl font-extrabold mb-4 text-blue-400">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To deliver world-class microwave and RF solutions that empower research institutions, defence organizations, and industries across India and beyond, through relentless innovation and unwavering commitment to quality.
            </p>
          </div>
          <div className="bg-blue-600 text-white rounded-xl p-8">
            <h3 className="text-xl font-extrabold mb-4">Our Vision</h3>
            <p className="text-blue-100 leading-relaxed">
              To become the leading indigenous manufacturer of microwave and RF instruments in India, recognized globally for precision engineering, customer satisfaction, and technological excellence.
            </p>
          </div>
        </div>

        {/* Team highlights */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
            Our <span className="text-blue-600">Core Strengths</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { title: 'In-House Design', desc: 'End-to-end product design from concept to prototype, ensuring optimal performance.' },
            { title: 'Advanced Manufacturing', desc: 'State-of-the-art fabrication facilities for precision microwave components.' },
            { title: 'Quality Testing', desc: 'Rigorous testing protocols to ensure every product meets the highest standards.' },
            { title: 'Custom Solutions', desc: 'Tailored microwave and RF solutions designed to meet specific client requirements.' },
            { title: 'Technical Support', desc: 'Expert guidance and after-sales support from our skilled engineering team.' },
            { title: 'R&D Capabilities', desc: 'Continuous research and development to stay at the forefront of RF technology.' },
          ].map((item) => (
            <div key={item.title} className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200">
              <div className="w-2 h-8 bg-blue-600 rounded mb-4" />
              <h3 className="text-gray-900 font-bold text-base mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => onNavigate('contact')}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-3.5 rounded tracking-wide uppercase text-sm transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Footer */}
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
