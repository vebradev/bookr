import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loader from "react-loader-spinner";
import StarRatings from "react-star-ratings";
import styled from "styled-components";
import { getSingleBook } from "../state/actionCreators";

const StMainDiv = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;

  background-color: pink;
`;

const StLoader = styled.div`
  margin: 150px 0 0 0;
  text-align: center;
`;

const StBookDetails = styled.div`
  display: flex;
  flex-direction: row;

  img {
    max-width: 300px;
  }

  h2 {
    font-size: 3em;
    font-weight: bold;

    span {
      color: #999;
    }
  }

  h3 {
    font-size: 2em;
    font-weight: bold;
  }

  .description {
    span {
      font-size: 1.6em;
    }

    p {
      font-size: 1.8em;
    }
  }
`;

const StReviews = styled.div`
  font-size: 1.8em;
`;

const StReview = styled.div`
  padding: 20px;
  margin: 20px 0 10px 0;
  background-color: greenyellow;
  border-radius: 4px;
`;

class SingleBook extends React.Component {
  componentDidMount() {
    console.log("cmp mounted");
    const { id } = this.props.match.params;
    this.props.getSingleBook(id);
  }

  showReviews = () => {
    console.log(this.props.book.reviews);
  };

  render() {
    const { book } = this.props;

    return (
      <StMainDiv>
        {this.props.gettingBooks && (
          <StLoader>
            <Loader type="ThreeDots" color="#064acb" height="40" width="80" />
          </StLoader>
        )}

        {!this.props.gettingBooks && (
          <StBookDetails>
            <div>
              <img src={book.cover_url} alt={book.title} />
            </div>

            <div>
              <h2>
                {book.title} <span>({book.year})</span>
              </h2>
              <h3>Written by [authors]</h3>
              <div className="description">
                <span>Description</span>
                <p>{book.description}</p>
              </div>
            </div>
          </StBookDetails>
        )}

        <StReviews>
          {this.props.book.reviews &&
            this.props.book.reviews.map(review => {
              console.log(review);
              return (
                <StReview key={review.id}>
                  <div>Reviewer: {review.username}</div>
                  <div>Comment: {review.comment}</div>
                  <div>
                    <StarRatings
                      rating={review.rating}
                      starRatedColor="#6927FF"
                      starEmptyColor="#FFD527"
                      numberOfStars={5}
                      name="rating"
                    />
                  </div>
                </StReview>
              );
            })}
        </StReviews>
      </StMainDiv>
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
