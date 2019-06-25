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
    const { books, gettingBooks } = this.props;
    if (gettingBooks) {
      return <div>Books being loaded. Stay put.</div>;
    }
    return (
      <div>
        {books.map(book => (
          <Book book={book} key={book.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.mainReducer.books
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
