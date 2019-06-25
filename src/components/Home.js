import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBooks } from "../state/actionCreators";
import Book from "./Book";

class Home extends React.Component {
  componentDidMount = () => {
    this.props.getBooks();
  };

  render() {
    if (this.props.gettingBooks) {
      return <div>Loading</div>;
    }
    return <Book />;
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getBooks
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Home);
