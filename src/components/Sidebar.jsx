import { Outlet } from "react-router";
import Logo from "./Logo/Logo";
import AppNav from "./AppNav/AppNav";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Brigi Horvath
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
