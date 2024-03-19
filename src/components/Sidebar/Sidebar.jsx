import { IonIcon } from "@ionic/react";
import { homeOutline, gridOutline, searchOutline, notificationsOutline, calculatorOutline, bookmarkOutline, settingsOutline, helpCircleOutline } from "ionicons/icons";
import "./Sidebar.css";

function Sidebar() {
  const navLinks = [
    {
      icon: homeOutline,
      text: "Home",
    },
    {
      icon: gridOutline,
      text: "Dashboard",
    },
    {
      icon: searchOutline,
      text: "Dashboard",
    },
    {
      icon: notificationsOutline,
      text: "Notifications"
    },
    {
      icon: calculatorOutline,
      text: "Appointments"
    },
    {
      icon: bookmarkOutline,
      text: "Bookmarks"
    },
    {
      icon: settingsOutline,
      text: "Settings"
    },
    {
      icon: helpCircleOutline,
      text: "Help"
    },
  ]

  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <ul className="sidebar__nav-list">
          {navLinks.map((navLink, index) => (
            <li className="sidebar__nav-link" key={index}>
              <IonIcon className="sidebar__nav-icon" icon={navLink.icon} />
              <span className="sidebar__nav-text">{navLink.text}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
