import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const LOGO = { name: "AI융합학부", path: "/" };

const menuItems = [
  { name: "홈", path: "/" },
  { name: "학부 정보", path: "/information" },
  { name: "교수진", path: "/professor" },
  { name: "학부 학생회", path: "/student-council" },
  { name: "공지사항", path: "/notice" },
];

function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to={LOGO.path} className="logo" onClick={closeMenu}>
          {LOGO.name}
        </Link>

        <div className="hamburger" onClick={toggleMenu} aria-label="메뉴">☰</div>

        <div className={`menu ${isOpen ? "open" : ""}`}>
          {menuItems.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              className={pathname === path || (path !== "/" && pathname.startsWith(path)) ? "active" : ""}
              onClick={closeMenu}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;