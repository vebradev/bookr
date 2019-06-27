import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loader from "react-loader-spinner";
import StarRatings from "react-star-ratings";
import Ratings from "react-ratings-declarative";
import styled from "styled-components";
import { getSingleBook, getReviews, postReview } from "../state/actionCreators";

class SingleBook extends React.Component {
  state = {
    reviews: [],
    reviewObj: {
      book_id: this.props.match.params.id,
      rating: 5,
      comment: "",
      user_id: localStorage.getItem("id")
    }
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getSingleBook(id);
    this.props.getReviews();
    this.setState({
      reviews: this.props.reviews
    })
  }

  handleChange = e => {
    this.setState({
      reviewObj: {
        ...this.state.reviewObj,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.postReview(this.state.reviewObj);
    this.props.history.push(`/book/${this.props.match.params.id}?`);
    this.setState({
      reviewObj: {
        comment: "",
        rating: 0
      }
    });
  };

  changeRating = newRating => {
    this.setState({
      reviewObj: {
        ...this.state.reviewObj,
        rating: newRating
      }
    });
  };

  render() {
    const { book } = this.props;
    console.log(this.props);

    return (
      <StMainDiv>
        {this.props.gettingBooks && (
          <StLoader>
            <Loader type="ThreeDots" color="#064acb" height="40" width="80" />
          </StLoader>
        )}

        {!this.props.gettingBooks && (
          <>
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

            <StReviews>
              {this.props.reviews &&
                this.props.reviews.map(review => {
                  if (
                    review.book_id.toString() === this.props.match.params.id
                  ) {
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
                            starDimension="20px"
                            starSpacing="0"
                          />
                        </div>
                      </StReview>
                    );
                  } else {
                    return null;
                  }
                })}

              <form action="" onSubmit={this.handleSubmit}>
                <input
                  placeholder="Comment"
                  type="text"
                  name="comment"
                  onChange={this.handleChange}
                  value={this.state.reviewObj.comment}
                />

                <Ratings
                  rating={this.state.reviewObj.rating}
                  widgetEmptyColors="#FFD527"
                  widgetHoverColors="#064acb"
                  widgetRatedColors="#064acb"
                  changeRating={this.changeRating}
                  widgetDimensions="20px"
                  widgetSpacings="0"
                >
                  <Ratings.Widget />
                  <Ratings.Widget />
                  <Ratings.Widget />
                  <Ratings.Widget />
                  <Ratings.Widget />
                </Ratings>

                <button>Post</button>
              </form>
            </StReviews>
          </>
        )}
      </StMainDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    book: state.mainReducer.book,
    gettingBooks: state.mainReducer.gettingBooks,
    reviews: state.mainReducer.reviews,
    postingReview: state.mainReducer.postingReview
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getSingleBook,
      getReviews,
      postReview
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(SingleBook);

const StMainDiv = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
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
  border: 1px solid #f1f1f1;
  border-radius: 4px;
`;
