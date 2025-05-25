import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
    <div className="container">
      <Link className="navbar-brand fw-bold text-primary" to="/">
        Care Diglish
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link text-primary fw-bold' : 'nav-link'}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link text-primary fw-bold' : 'nav-link'}>Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link text-primary fw-bold' : 'nav-link'}>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link text-primary fw-bold' : 'nav-link'}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar; 