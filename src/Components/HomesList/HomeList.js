import data from "../../data";
import HomeItem from "../HomeItem/HomeItem";
import classes from "./HomeList.module.scss";

const HomeList = () => {
  const homesList = data.map((item, i) => (
    <HomeItem
      key={i}
      image={item.images[0]}
      name={item.name}
      rating={item.rating}
      host={item.host}
      date={item.date}
      price={item.price}
    />
  ));
  return <div className={classes["list-container"]}>{homesList}</div>;
};

export default HomeList;
