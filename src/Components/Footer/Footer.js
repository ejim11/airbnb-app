import classes from "./Footer.module.scss";
import { TbWorld } from "react-icons/tb";
import { FaAngleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p>© Airbnb, Inc.</p>
      <ul>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Sitemap</li>
        <li>Destinations</li>
      </ul>
      <p className={classes["text-1"]}>
        <TbWorld />
        English (US)
      </p>
      <p className={classes["text-2"]}>$ USD</p>
      <p className={classes["text-3"]}>
        Support & resources
        <FaAngleUp />
      </p>
    </footer>
  );
};

export default Footer;
