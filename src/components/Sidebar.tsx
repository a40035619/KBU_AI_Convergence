import { useState } from "react";
import type {
  SidebarSectionStructure,
  SidebarSubItem,
} from "../data/InformationPageText";
import "./Sidebar.css";

interface SidebarProps {
  headerTitle: string;
  menuData: SidebarSectionStructure[];
  onItemClick: (key: string) => void;
}

function Sidebar({
  headerTitle,
  menuData,
  onItemClick,
}: SidebarProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    () => {
      const initialState: Record<string, boolean> = {};

      menuData.forEach((section, index) => {
        initialState[section.sectionKey] = index === 0;
      });

      return initialState;
    }
  );

  const handleToggleSection = (sectionKey: string) => {
    setOpenSections((prev) => {
      const isCurrentOpen = !!prev[sectionKey];

      if (!isCurrentOpen) {
        const nextState: Record<string, boolean> = {};

        menuData.forEach((section) => {
          nextState[section.sectionKey] =
            section.sectionKey === sectionKey;
        });

        return nextState;
      }

      return {
        ...prev,
        [sectionKey]: false,
      };
    });
  };

  return (
    <div className="information-sidebar">
      <div className="sidebar-header">{headerTitle}</div>

      {menuData.map((section) => {
        const isOpen = !!openSections[section.sectionKey];

        return (
          <div
            className="sidebar-section"
            key={section.sectionKey}
          >
            <div
              className="sidebar-title"
              onClick={() =>
                handleToggleSection(section.sectionKey)
              }
            >
              <div
                className={`sidebar-arrow ${
                  isOpen ? "open" : "closed"
                }`}
              />
              {section.title}
            </div>

            {isOpen &&
              section.items.map((item: SidebarSubItem) => (
                <div
                  className="sidebar-item"
                  key={item.key}
                  onClick={() => onItemClick(item.key)}
                >
                  {item.name}
                </div>
              ))}
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;