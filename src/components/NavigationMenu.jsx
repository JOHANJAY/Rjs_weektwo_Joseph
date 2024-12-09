import { NavLink, useNavigate } from "react-router-dom";

const NavigationMenu = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate("/");
  const goToAbout = () => navigate("/about");
  const goToContact = () => navigate("/contact");

  return (
    <nav className="space-x-4">
      <NavLink
        to="/"
        style={({ isActive }) => ({
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }) => ({
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        Contact
      </NavLink>
      <NavLink
        to="/posts"
        style={({ isActive }) => ({
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        Posts
      </NavLink>

      <div className="mt-4">
        <button
          onClick={goToHome}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Go to Home
        </button>
        <button
          onClick={goToAbout}
          className="px-4 py-2 bg-green-500 text-white rounded ml-2"
        >
          Go to About
        </button>
        <button
          onClick={goToContact}
          className="px-4 py-2 bg-purple-500 text-white rounded ml-2"
        >
          Go to Contact
        </button>
      </div>
    </nav>
  );
};

export default NavigationMenu;
