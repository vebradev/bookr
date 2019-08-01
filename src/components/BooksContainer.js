import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import Loader from "react-loader-spinner";
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

const StLoader = styled.div`
  margin: 150px 0 0 0;
  text-align: center;
`;

class BooksContainer extends React.Component {
  componentDidMount = () => {
    this.props.getBooks();
  };

  render() {
    const { books, gettingBooks } = this.props;
    return (
      <StyledDiv>
        {gettingBooks && (
          <StLoader>
            <Loader type="ThreeDots" color="#064acb" height="40" width="80" />
          </StLoader>
        )}

        {books.map(book => (
          <Book book={book} key={book.id} />
        ))}
      </StyledDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.mainReducer.books,
    gettingBooks: state.mainReducer.gettingBooks
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
