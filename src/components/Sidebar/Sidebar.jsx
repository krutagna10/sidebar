import { IonIcon } from "@ionic/react";
import { logOutOutline, menuOutline } from "ionicons/icons";
import navLinks from "../../data/data";
import "./Sidebar.css";
import { useState } from "react";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleToggleSidebarIsOpen() {
    setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
  }

  console.log(isSidebarOpen);

  return (
    <aside
      className={`sidebar flex flex-col justify-between gap ${
        isSidebarOpen ? "sidebar--open" : ""
      }`}
    >
      <div className="sidebar__content flow">
        <div className="flex items-center justify-between gap">
          {isSidebarOpen && (
            <a href="#" className="sidebar__link sidebar__link--logo">
              <h1>Coding</h1>
            </a>
          )}
          <button
            className="sidebar__toggle-btn grid place-content-center"
            onClick={handleToggleSidebarIsOpen}
          >
            <IonIcon className="fs-400" icon={menuOutline} />
          </button>
        </div>
        <nav className="sidebar__nav">
          <ul className="sidebar__nav-list flex flex-col gap">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <a className="sidebar__link sidebar__link--nav flex items-center gap" href="#">
                  <IonIcon
                    className="sidebar__nav-icon fs-300"
                    icon={navLink.icon}
                  />
                  {isSidebarOpen && (
                    <span className="sidebar__nav-text">{navLink.text}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <a href="#" className="sidebar__link sidebar__link--logout flex items-center gap">
        <IonIcon className="sidebar__logout-icon fs-300" icon={logOutOutline} />
        {isSidebarOpen && <span className="sidebar__logout-text">Log out</span>}
      </a>
    </aside>
  );
}

export default Sidebar;
