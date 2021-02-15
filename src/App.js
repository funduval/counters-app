import "./App.css";
import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { _id: 1, value: 0 },
      { _id: 2, value: 0 },
      { _id: 3, value: 0 },
      { _id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];

    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({
      counters,
    });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];

    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({
      counters,
    });
  };

  handleDelete = (id) => {
    const countersClone = [...this.state.counters];

    const counters = countersClone.filter((c) => c._id !== id);

    this.setState({
      counters,
    });
  };

  render() {
    console.log("this.state.counters", this.state.counters);
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
