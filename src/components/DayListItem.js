import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

const showSpots = (spots) => {
  if (!spots) {
    return "no spots";
  } else if (spots === 1) {
    return "1 spot";
  } else {
    return `${spots} spots`;
  }
};

export default function DayListItem(props) {
  const showSpot = showSpots(props.spots);
  let setClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots,
  });
  return (
    <li
      onClick={() => props.setDay(props.name)}
      className={setClass}
      data-testid="day"
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{showSpot} remaining</h3>
    </li>
  );
}
