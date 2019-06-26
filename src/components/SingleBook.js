import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import { getSingleBook } from "../state/actionCreators";

const StyledLoader = styled.div`
  margin: 150px;
  text-align: center;
`;

class SingleBook extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getSingleBook(id);
  }
  render() {
    const { book } = this.props;
    return (
      <div>
          {this.props.gettingBooks && <StyledLoader><Loader type="ThreeDots" color="#064acb" height="40" width="80" /></StyledLoader>}
        {book.title}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    book: state.mainReducer.book,
    gettingBooks: state.mainReducer.gettingBooks,
    reviews: state.mainReducer.reviews,
    gettingReviews: state.mainReducer.gettingReviews
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getSingleBook
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(SingleBook);
