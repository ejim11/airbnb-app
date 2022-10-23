import classes from "./FilterList.module.scss";
import filterListData from "./FilterListData";
import { useState, useRef } from "react";
import { FilterIcon } from "../UI/Icons/Icons";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const FilterList = () => {
  const listRef = useRef(null);
  const [activeFIlter, setActiveFilter] = useState(0);
  const [scrollState, setScrollState] = useState(0);
  console.log(scrollState);
  // list items
  const filterListItems = filterListData.map((item, i) => (
    <li
      key={i}
      onClick={() => {
        setActiveFilter(i);
      }}
      className={i === activeFIlter ? classes["active"] : classes["inactive"]}
    >
      <div className={classes["filter-img"]}>
        <img src={item.image} alt={item.text} />
      </div>
      <p>{item.text}</p>
    </li>
  ));

  const scroll = (value) => {
    listRef.current.scrollLeft += value;
    console.log(listRef);
    // setScrollState(listRef.current.scrollLeft);
    setScrollState((prevState) => prevState + value);
    console.log(listRef.current.scrollLeft);
  };

  return (
    <div className={classes["container"]}>
      <div className={classes["list-container"]}>
        <div
          className={`${classes["left-angle-box"]} ${
            scrollState === 0
              ? classes["hide-l-angle"]
              : classes["display-l-angle"]
          }`}
          onClick={() => {
            scroll(-300);
          }}
        >
          <FaAngleLeft />
        </div>
        <div
          className={`${classes["right-angle-box"]} ${
            scrollState >= 1200
              ? classes["hide-r-angle"]
              : classes["display-r-angle"]
          }`}
          onClick={() => {
            scroll(300);
          }}
        >
          <FaAngleRight />
        </div>
        <ul ref={listRef}>{filterListItems}</ul>
      </div>
      <div className={classes["filter-box"]}>
        <div>
          <FilterIcon />
          Filters
        </div>
      </div>
    </div>
  );
};

export default FilterList;
