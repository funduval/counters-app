import React from "react";
import Counter from "./counter";

const Counters = (props) => {
  console.log("props in Counters", props);
  return props.counters.map((counter) => (
    <Counter
      key={counter._id}
      onIncrement={props.onIncrement}
      onDecrement={props.onDecrement}
      onDelete={props.onDelete}
      counter={counter}
    ></Counter>
  ));
};

export default Counters;
