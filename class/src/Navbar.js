import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <nav>
        <h1 className="logo">Shoes</h1>
        <ul className="links">
          <li>
           
            <Link to="/">Home</Link>
          </li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
