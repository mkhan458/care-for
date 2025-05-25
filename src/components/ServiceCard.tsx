interface ServiceCardProps {
  image: string;
  title: string;
  text: string;
  link: string;
}

const ServiceCard = ({ image, title, text, link }: ServiceCardProps) => (
  <div className="card h-100 shadow-sm border-0" style={{ background: '#f6f9f6' }}>
    <img src={image} className="card-img-top" alt={title} />
    <div className="card-body d-flex flex-column">
      <h5 className="card-title text-primary fw-bold">{title}</h5>
      <p className="card-text flex-grow-1">{text}</p>
      <a href={link} className="btn btn-primary mt-3 align-self-start">Learn More</a>
    </div>
  </div>
);

export default ServiceCard; 