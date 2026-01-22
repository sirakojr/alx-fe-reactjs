import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav" style={{ backgroundColor: "black", padding: "5vh" , justifyContent: "center", display: "flex"}}>
      <Link
        to="/"
        style={{ color: "blue", padding: "10px", textDecoration: "none" }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{ color: "blue", padding: "10px", textDecoration: "none" }}
      >
        About
      </Link>
      <Link
        to="/services"
        style={{ color: "blue", padding: "10px", textDecoration: "none" }}
      >
        Services
      </Link>
      <Link
        to="/contact"
        style={{ color: "blue", padding: "10px", textDecoration: "none" }}
      >
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
