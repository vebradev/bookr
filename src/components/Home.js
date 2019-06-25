import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBooks } from "../state/actionCreators";
import BooksContainer from "./BooksContainer";

class Home extends React.Component {
  render() {
    return (
      <div>
        <BooksContainer />
      </div>
    );
  }
}

export default BooksContainer;