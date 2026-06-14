import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";
import { menuCards } from "../data/MainPageText";
import { FaUniversity, FaUserGraduate, FaBullhorn } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import "./MenuButtonCard.css";

const icons: Record<string, ReactNode> = {
  university: <FaUniversity className="menu-icon" />,
  graduate: <FaUserGraduate className="menu-icon" />,
  users: <HiUsers className="menu-icon" />,
  notice: <FaBullhorn className="menu-icon" />,
};

export const MenuCard = () => {
  const navigate = useNavigate();

  return (
    <section className="menu-section">
      {menuCards.map((card) => (
        <div
          key={card.path}
          className="menu-card"
          onClick={() => navigate(card.path)}
        >
          <div>
            {icons[card.iconType]}
            <h3 className="menu-card-title">{card.title}</h3>
            <p className="menu-card-desc">{card.description}</p>
          </div>

          <button className="menu-card-btn">❯</button>
        </div>
      ))}
    </section>
  );
};