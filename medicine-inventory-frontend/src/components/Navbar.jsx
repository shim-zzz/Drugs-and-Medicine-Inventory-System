import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        Medicine Inventory
      </div>

      <div className="navbar-links">
        <Link to="/medicines">Medicine</Link>
        <Link to="/add-medicine">Add Medicine</Link>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;