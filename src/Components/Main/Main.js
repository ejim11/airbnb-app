import FilterList from "../FilterList/FilterList";
import HomeList from "../HomesList/HomeList";
import classes from "./Main.module.scss";
import { FaMap } from "react-icons/fa";

const Main = () => {
  return (
    <main>
      <FilterList />
      <section className={classes["home-list"]}>
        <HomeList />
      </section>
      <div className={classes["show-map"]}>
        Show map <FaMap className={classes["map-icon"]} />
      </div>
    </main>
  );
};

export default Main;
