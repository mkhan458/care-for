import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact Form Submission:', form);
    alert('Thank you for reaching out! We will get back to you soon.');
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-primary text-center mb-4">Contact Us</h2>
      <div className="row g-5">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input type="tel" className="form-control" name="phone" value={form.phone} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" name="message" rows={4} value={form.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
        <div className="col-md-6">
          <div className="bg-white p-4 rounded shadow-sm h-100">
            <h5 className="fw-bold text-primary mb-3">Contact Information</h5>
            <div><strong>Phone:</strong> (123) 456-7890</div>
            <div><strong>Email:</strong> info@careagency.com</div>
            <div><strong>Address:</strong> 123 Main St, Blackpool, CA</div>
            <div className="mt-4">
              <h6 className="fw-bold text-primary">Hours</h6>
              <div>Mon-Fri: 8am - 6pm</div>
              <div>Sat-Sun: 9am - 4pm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 