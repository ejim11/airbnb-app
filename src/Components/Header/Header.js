import Logo from "../UI/Logo/Logo";
import { FiSearch } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <Logo />
      <div className={classes["options-div"]}>
        <p>Anywhere</p>
        <p className={classes["middle-div"]}>Any week</p>
        <p className={classes["last-div"]}>Add guests</p>
        <div className={classes["search-box"]}>
          <FiSearch className={classes["search-icon"]} />
        </div>
      </div>
      <p className={classes["host-paragraph"]}>Become a Host</p>
      <div className={classes["world-box"]}>
        <TbWorld className={classes["world-icon"]} />
      </div>
      <div className={classes["user-box"]}>
        <FiMenu className={classes["menu-icon"]} />
        <FaUserCircle className={classes["user-icon"]} />
      </div>
    </header>
  );
};

export default Header;
