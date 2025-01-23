import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav className="bg-[#D9C5A8] text-white p-4 shadow-md">
        <ul className="flex space-x-6 justify-between mx-10 text-2xl">
          <li>
            <Link
              to="/"
              className="transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/create"
              className="transition-colors duration-300"
            >
              Create Post
            </Link>
          </li>
        </ul>
      </nav>
  );
};

export default Header;
