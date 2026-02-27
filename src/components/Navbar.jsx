import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>LEFT HAND SOLUTIONS</h2>
      <div>
        <a href="#process">Process</a>
        <a href="#templates">Templates</a>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
