import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Movie } from "../../api/movie";
import { moviesQO } from "../../react-query/movies";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setToggle(window.scrollY > 100));

    return () => window.removeEventListener("scroll", () => setToggle(false));
  }, []);

  return (
    <div className={`navbar ${toggle && "navbar-background"}`}>
      <img
        className="navbar-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="navbar-avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Logo"
      />
    </div>
  );
};

export default Navbar;