import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="board between">
    <Link to="/about" className="col-6 header-button">
      About the Dev
    </Link>
    <Link to="/" className="col-6 header-button">
      Search
    </Link>
  </nav>
);

export default Navbar;
