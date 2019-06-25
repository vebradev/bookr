import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { getBooks } from "../state/actionCreators";
import Book from "./Book";

const StyledDiv = styled.div`
    padding: 20px;
    margin: 40px 0 0 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

class BooksContainer extends React.Component {
  componentDidMount = () => {
    this.props.getBooks();
  };

  render() {
    const { books, gettingBooks } = this.props;
    if (gettingBooks) {
      return <div>Books being loaded. Stay put.</div>;
    }
    return (
      <StyledDiv>
        {books.map(book => (
          <Book book={book} key={book.id} />
        ))}
      </StyledDiv>
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
)(BooksContainer);
