const About = () => (
  <div className="container py-5">
    <div className="row align-items-center mb-5">
      <div className="col-md-6 mb-4 mb-md-0">
        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80" alt="Founder" className="img-fluid rounded shadow" />
      </div>
      <div className="col-md-6">
        <h2 className="fw-bold text-primary mb-3">Our Mission</h2>
        <p className="lead">To provide compassionate, professional, and personalized in-home care that empowers individuals and families to thrive in the comfort of their own homes.</p>
        <h4 className="fw-bold text-primary mt-4">A Message from Our Founder</h4>
        <p>"At Care Agency, we believe every person deserves dignity, respect, and heartfelt support. Our team is dedicated to making a positive difference in the lives of those we serve."</p>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-12">
        <h3 className="fw-bold text-primary mb-3">Our Values</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-light">Compassion and empathy in every interaction</li>
          <li className="list-group-item bg-light">Professionalism and integrity</li>
          <li className="list-group-item bg-light">Personalized care for every client</li>
          <li className="list-group-item bg-light">Continuous learning and improvement</li>
        </ul>
      </div>
    </div>
  </div>
);

export default About; 