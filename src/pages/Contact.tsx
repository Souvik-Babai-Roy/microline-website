import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: string) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white pt-16">
      {/* Hero */}
      <div className="bg-[#0a1628] py-14 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200')" }}
        />
        <div className="relative max-w-7xl mx-auto">
          <p className="text-blue-400 text-xs tracking-widest uppercase mb-2">
            <button onClick={() => onNavigate('home')} className="hover:text-white">Home</button>
            {' / Contact Us'}
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Contact Us</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-gray-500 mb-8">
              We are always happy to help you. Reach out to us for any inquiries, quotes or collaborations.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 p-5 bg-blue-50 rounded-xl">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-sm mb-1">Phone</p>
                  <p className="text-gray-600 text-sm">+91 98310 46924</p>
                  <p className="text-gray-600 text-sm">+91 92268 30914</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-blue-50 rounded-xl">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-sm mb-1">Email</p>
                  <p className="text-gray-600 text-sm">sales@microlineindia.com</p>
                  <p className="text-gray-600 text-sm">info@microlineindia.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-blue-50 rounded-xl">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-sm mb-1">Address</p>
                  <p className="text-gray-600 text-sm">
                    Microline India<br />
                    Kolkata, West Bengal, India
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-gray-200 h-48 bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-gray-500 text-sm">Kolkata, West Bengal, India</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle className="w-16 h-16 text-blue-600 mb-4" />
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500 mb-6">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-blue-600 font-semibold hover:text-blue-800 text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">Send a Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Subject</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="Product inquiry / Quote request"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Your Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                    placeholder="Describe your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-lg tracking-wide uppercase text-sm transition-colors flex items-center justify-center gap-2"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
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
        <div className="flex gap-4 text-xs text-gray-500">
          <button onClick={() => onNavigate('home')} className="hover:text-white">Home</button>
          <button onClick={() => onNavigate('about')} className="hover:text-white">About</button>
          <button onClick={() => onNavigate('products')} className="hover:text-white">Products</button>
          <button onClick={() => onNavigate('services')} className="hover:text-white">Services</button>
        </div>
      </div>
    </footer>
  );
}
