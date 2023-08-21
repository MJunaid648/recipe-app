import styles from "./mobNavbar.module.css";
import { useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQrcode,
  faMagnifyingGlass,
  faList,
  faUser,
  faMessage,
  faCalendar,
  faGear,
  faCircleQuestion,
  faRightFromBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
export default function MobNavbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleToggle = () => {
    setIsDrawerOpen((prev) => !prev);
  };
  const navListItems = [
    { title: "Dashboard", id: 1, icon: faQrcode },
    { title: "Discover Recipes", id: 2, icon: faMagnifyingGlass },
    { title: "My Recipes", id: 3, icon: faList },
    { title: "Clients", id: 4, icon: faUser },
    { title: "Check-Ins", id: 5, icon: faCalendar },
    { title: "Messages", id: 6, icon: faMessage },
    { title: "Account", id: 7, icon: faGear },
    { title: "Help & Support", id: 8, icon: faCircleQuestion },
    { title: "Logout", id: 9, icon: faRightFromBracket },
  ];
  const navList = navListItems.map((item) => {
    return (
      <li key={item.id}>
        <FontAwesomeIcon icon={item.icon} />
        {item.title}
      </li>
    );
  });
  const menu = navList.slice(0, 6);
  const yourAccount = navList.slice(6);
  return (
    <>
      <button
        onClick={handleToggle}
        className={isDrawerOpen ? styles.drawerOpen : styles.drawerClosed}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={isDrawerOpen ? styles.navbar : styles.navClose}>
        <div className="menu">
          <ul>
            <h5 className={styles.navTitle}>MENU</h5>
            {menu}
          </ul>
        </div>
        <div className="account">
          <ul>
            <h5 className={styles.navTitle}>Your Account</h5>
            {yourAccount}
          </ul>
        </div>
      </div>
    </>
  );
}
