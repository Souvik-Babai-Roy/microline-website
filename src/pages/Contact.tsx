import { useState } from 'react';

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

  // Google Maps embed URL (Kolkata, West Bengal)
  const mapSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.0611614284185!2d88.37951717829274!3d22.464335826888878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02719f1f67499b%3A0x4403e37013f04bc6!2s27%2C%20Harimati%20Sarani%2C%20Barhans%2C%20Garia%2C%20Kolkata%2C%20West%20Bengal%20700084%2C%20India!5e0!3m2!1sen!2sus!4v1778250086506!5m2!1sen!2sus';

  return (
    <div style={{ paddingTop: '74px' }}>
      {/* ============= Header / Breadcrumb ============= */}
      <div className="bg-gradient-dark" style={{ padding: '3.5rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: "url('https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200')",
            backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.1
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="small text-primary" style={{ textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
            <button onClick={() => onNavigate('home')}
              style={{
                background: 'transparent', border: 'none', color: 'var(--primary-accent-light)',
                cursor: 'pointer', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px'
              }}>
              Home
            </button>
            {' / Contact Us'}
          </p>
          <h1 className="text-white display-4 font-weight-bolder">Contact Us</h1>
        </div>
      </div>

      {/* ============= Contact Content ============= */}
      <div className="section py-16">
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '3rem' }}>

            {/* ---------- Left Column: Info + Map ---------- */}
            <div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
                Get In Touch
              </h2>
              <p className="text-secondary mb-4">
                We are always happy to help you. Reach out to us for any inquiries, quotes or collaborations.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                {/* Phone */}
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <p className="font-weight-bold text-primary small mb-1">Phone</p>
                    <p className="text-secondary small">+91 98310 46924</p>
                    <p className="text-secondary small">+91 92268 30914</p>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <p className="font-weight-bold text-primary small mb-1">Email</p>
                    <p className="text-secondary small">sales@microlineindia.com</p>
                    <p className="text-secondary small">info@microlineindia.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <p className="font-weight-bold text-primary small mb-1">Address</p>
                    <p className="text-secondary small">
                      Microline India<br />
                      Kolkata, West Bengal, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="map-container">
                <iframe
                  src={mapSrc}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Microline India Location"
                ></iframe>
              </div>
            </div>

            {/* ---------- Right Column: Form ---------- */}
            <div>
              {submitted ? (
                <div className="text-center" style={{ padding: '4rem 0' }}>
                  <i className="fas fa-check-circle" style={{ fontSize: '4rem', color: 'var(--success)', marginBottom: '1rem' }}></i>
                  <h3 className="text-primary display-4 font-weight-bolder mb-2">Message Sent!</h3>
                  <p className="text-secondary mb-4">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="display-4 font-weight-bolder" style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                    Send a Message
                  </h3>

                  <div className="grid grid-cols-2" style={{ gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div>
                      <label className="small font-weight-bold text-muted" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '0.4rem' }}>
                        Your Name
                      </label>
                      <input type="text" required value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="form-input" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="small font-weight-bold text-muted" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '0.4rem' }}>
                        Email Address
                      </label>
                      <input type="email" required value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="form-input" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label className="small font-weight-bold text-muted" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '0.4rem' }}>
                      Phone Number
                    </label>
                    <input type="tel" value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="form-input" placeholder="+91 XXXXX XXXXX" />
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label className="small font-weight-bold text-muted" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '0.4rem' }}>
                      Subject
                    </label>
                    <input type="text" required value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      className="form-input" placeholder="Product inquiry / Quote request" />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label className="small font-weight-bold text-muted" style={{ textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '0.4rem' }}>
                      Your Message
                    </label>
                    <textarea rows={5} required value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="form-input" placeholder="Describe your requirements..." />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    Send Message <i className="fas fa-paper-plane" style={{ fontSize: '0.9rem' }}></i>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* ============= Footer ============= */}
      <footer className="footer">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
          <p className="text-muted small">&copy; 2024 Microline India. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['home', 'about', 'products', 'services'].map(page => (
              <button key={page} onClick={() => onNavigate(page)}
                className="text-muted small"
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', textTransform: 'capitalize' }}>
                {page}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}