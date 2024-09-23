import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

function Header() {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(alert("Log out successfully"))
      .catch((error) => console.log(error));
  };
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500"
              : "text-white hover:text-blue-400 transition duration-300"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500"
              : "text-white hover:text-blue-400 transition duration-300"
          }
        >
          Orders
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500"
              : "text-white hover:text-blue-400 transition duration-300"
          }
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500"
              : "text-white hover:text-blue-400 transition duration-300"
          }
        >
          Register
        </NavLink>
      </li>
      { user&&
        <>
        <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500"
              : "text-white hover:text-blue-400 transition duration-300"
          }
        >
          Profile
        </NavLink>
      </li>
        <li>
        <NavLink
          to="/member"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500"
              : "text-white hover:text-blue-400 transition duration-300"
          }
        >
          Members
        </NavLink>
      </li>
        </>
      }
    </>
  );

  return (
    <div>
      <div className="navbar bg-gray-900 text-white">
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 p-2 bg-gray-800 text-white rounded-lg shadow-lg"
            >
              {navLinks}
            </ul>
          </div>
          <a className="text-2xl font-bold text-white hover:text-blue-400 transition duration-300">
            YourBrand
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">{navLinks}</ul>
        </div>

        {/* Call to Action Button */}
        <div className="navbar-end">
          {user ? (
            <>
              <span>{user.email}</span>
              <NavLink
                onClick={handleLogout}
                className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white border-none transition duration-300"
              >
                Sign out
              </NavLink>
            </>
          ) : (
            <NavLink
              to="/login"
              className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white border-none transition duration-300"
            >
              Sign in
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
