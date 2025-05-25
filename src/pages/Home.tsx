import ServiceCard from '../components/ServiceCard';
import insuranceLogos from '../assets/insuranceLogos';

const Home = () => (
  <div>
    {/* Hero Section */}
    <section className="bg-light position-relative" style={{ minHeight: '60vh', background: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80) center/cover no-repeat' }}>
      <div className="container d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: '60vh', background: 'rgba(255,255,255,0.7)' }}>
        <h1 className="display-4 fw-bold text-primary mb-3">Compassionate In-Home Care You Can Trust</h1>
        <p className="lead mb-4">Personalized, professional, and heartfelt care for your loved ones in Blackpool.</p>
        <a href="#services" className="btn btn-primary btn-lg">Learn More</a>
      </div>
    </section>

    {/* Serving City Section */}
    <section className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-4 text-primary">Serving Blackpool with Quality In-Home Care Options</h2>
      </div>
    </section>

    {/* Service Highlights */}
    <section id="services" className="pb-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <ServiceCard
              image="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
              title="Reliable Senior Care"
              text="Compassionate caregivers and skilled CNAs for your loved ones."
              link="/services"
            />
          </div>
          <div className="col-md-4">
            <ServiceCard
              image="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
              title="Post-Op Recovery Care"
              text="Support and comfort for a speedy recovery at home."
              link="/services"
            />
          </div>
          <div className="col-md-4">
            <ServiceCard
              image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80"
              title="Doula & Post-Partum Support"
              text="Gentle, knowledgeable support for new mothers and families."
              link="/services"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row text-center mb-4">
          <h3 className="fw-bold text-primary">Why Choose Us</h3>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 rounded bg-light h-100">
              <div className="mb-3">
                <i className="bi bi-house-heart-fill display-5 text-primary"></i>
              </div>
              <h5 className="fw-bold">Professional Caregivers</h5>
              <p>Licensed, insured, and trained caregivers dedicated to your well-being.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 rounded bg-light h-100">
              <div className="mb-3">
                <i className="bi bi-people-fill display-5 text-primary"></i>
              </div>
              <h5 className="fw-bold">Supportive Care</h5>
              <p>Personalized care plans and assistance with daily living activities.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 rounded bg-light h-100">
              <div className="mb-3">
                <i className="bi bi-shield-check display-5 text-primary"></i>
              </div>
              <h5 className="fw-bold">Peace of Mind</h5>
              <p>Background-checked staff and a reliable, caring environment for your family.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Insurance Coverage */}
    <section className="py-5" style={{ background: '#f6f9f6' }}>
      <div className="container text-center">
        <h4 className="fw-bold text-primary mb-4">Our Services Can Be Covered by Your Insurance Provider</h4>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 mb-3">
          {insuranceLogos.map((logo, idx) => (
            <img key={idx} src={logo.src} alt={logo.alt} style={{ height: 48 }} className="mx-3" />
          ))}
        </div>
        <div className="text-muted">And Many More...</div>
      </div>
    </section>
  </div>
);

export default Home; 