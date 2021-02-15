import React from "react";

const Counter = (props) => {
  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";

    classes += props.counter.value === 0 ? "danger" : "primary";

    return classes;
  };

  return (
    <div>
      <span className={getBadgeClasses()}>{props.counter.value}</span>
      <button
        className="btn btn-secondary btn-success btn-sm m-2"
        onClick={() => props.onIncrement(props.counter)}
      >
        +
      </button>
      <button
        className="btn btn-secondary btn-warning btn-sm m-2"
        onClick={() => props.onDecrement(props.counter)}
      >
        -
      </button>
      <button
        className="btn btn-secondary btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.counter._id)}
      >
        x
      </button>
    </div>
  );
};

export default Counter;
