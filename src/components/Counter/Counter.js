import React from "react";
import { connect } from "react-redux";
import { increaseCounter, decreaseCounter } from "../../state/actions/counter";

const Counter = props => {
  const increaseCounter = () => {
    props.increaseCounter();
  };

  const decreaseCounter = () => {
    props.decreaseCounter();
  };

  return (
    <div className="counter">
      <h2>Redux Counter</h2>
      <p>{props.counter}</p>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

export default connect(
  mapStateToProps,
  { increaseCounter, decreaseCounter }
)(Counter);
