const Footer = () => (
  <footer className="bg-light text-center text-lg-start mt-5 py-4 border-top">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 text-md-start mb-3 mb-md-0">
          <div className="fw-bold">Care Agency</div>
          <div>123 Main St, Blackpool, CA</div>
          <div>Phone: (123) 456-7890</div>
          <div>Email: info@careagency.com</div>
        </div>
        <div className="col-md-6 text-md-end">
          <a href="#" className="me-3 text-primary">Facebook</a>
          <a href="#" className="me-3 text-primary">Instagram</a>
          <a href="#" className="text-primary">LinkedIn</a>
        </div>
      </div>
      <div className="text-muted mt-3">&copy; {new Date().getFullYear()} Care Agency. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer; 