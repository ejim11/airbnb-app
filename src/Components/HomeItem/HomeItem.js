import classes from "./HomeItem.module.scss";
import { AiFillStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";

const HomeItem = (props) => {
  const [heartState, setHeartState] = useState(false);

  return (
    <div className={classes["item-container"]}>
      <AiFillHeart
        className={`${classes["heart-icon"]} ${
          heartState ? classes["active"] : classes["inactive"]
        }`}
        onClick={() => {
          setHeartState((prevState) => !prevState);
        }}
      />
      <div className={classes["item-img"]}>
        <img src={props.image} alt={props.name} />
      </div>
      <div>
        <p className={classes["name"]}>
          {props.name}
          <span>
            <AiFillStar className={classes["star-icon"]} />
            {props.rating}
          </span>
        </p>
        <p className={classes["item-text"]}>{props.host}</p>
        <p className={classes["item-text"]}>{props.date}</p>
        <p className={classes["item-price"]}>
          <span>${props.price}</span> night
        </p>
      </div>
    </div>
  );
};

export default HomeItem;
