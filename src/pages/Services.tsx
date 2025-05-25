const services = [
  {
    title: 'Post-Op Recovery Care',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
    text: 'Support and comfort for a speedy recovery at home.'
  },
  {
    title: 'Senior Companion Care',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    text: 'Friendly companionship and assistance for seniors.'
  },
  {
    title: 'Dementia Care',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80',
    text: 'Specialized care for those living with dementia.'
  },
  {
    title: 'Respite for Family Caregivers',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    text: 'Short-term relief for family caregivers.'
  },
  {
    title: 'Doula and Post-Partum Support',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    text: 'Gentle, knowledgeable support for new mothers and families.'
  },
];

const Services = () => (
  <div className="container py-5">
    <h2 className="fw-bold text-primary text-center mb-5">Our Services</h2>
    <div className="row g-4">
      {services.map((service, idx) => (
        <div className="col-md-4" key={idx}>
          <div className="card h-100 shadow-sm border-0" style={{ background: '#f6f9f6' }}>
            <img src={service.image} className="card-img-top" alt={service.title} />
            <div className="card-body">
              <h5 className="card-title text-primary fw-bold">{service.title}</h5>
              <p className="card-text">{service.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Services; 