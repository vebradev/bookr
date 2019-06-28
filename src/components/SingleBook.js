import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loader from "react-loader-spinner";
import StarRatings from "react-star-ratings";
import Ratings from "react-ratings-declarative";
import styled from "styled-components";
import {
  getSingleBook,
  postReview,
  deleteReview,
  updateReview
} from "../state/actionCreators";

class SingleBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newReview: {
        book_id: this.props.match.params.id,
        comment: "",
        rating: 0,
        user_id: localStorage.getItem("id")
      }
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getSingleBook(id);
  }

  handleChange = e => {
    this.setState({
      newReview: {
        ...this.state.newReview,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.postReview(this.state.newReview);
  };

  changeRating = newRating => {
    this.setState({
      newReview: {
        ...this.state.newReview,
        rating: newRating
      }
    });
  };

  deleteReview = id => {
    this.props.deleteReview(id);
  };

  updateReview = id => {
    const updatedReview = {
      comment: this.state.newReview.comment
    };
    this.props.updateReview(id, updatedReview);
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

        {this.props.book.authors && (
          <>
            <StBookDetails>
              <div>
                <img src={book.cover_url} alt={book.title} />
              </div>

              <div className="info">
                <h2>
                  {book.title} <span>({book.year})</span>
                </h2>
                {this.props.book.authors.map(author => {
                  return (
                    <span className="authors" key={author.id}>
                      {author.name}
                    </span>
                  );
                })}
                <div className="description">
                  <p>{book.description}</p>
                </div>
              </div>
            </StBookDetails>

            <StReviews>
              <h3>User reviews</h3>
              {this.props.reviews &&
                this.props.reviews.map(review => {
                  return (
                    <StReview key={review.id}>
                      <div className="username">{review.username}</div>
                      <div>
                        <StarRatings
                          rating={review.rating}
                          starRatedColor="#6927FF"
                          starEmptyColor="#837dff80"
                          numberOfStars={5}
                          name="rating"
                          starDimension="20px"
                          starSpacing="0"
                        />
                      </div>
                      <div className="comment">{review.comment}</div>

                      {localStorage.getItem("username") === review.username ? (
                        <div className="controls">
                          <input
                            placeholder="Updated review"
                            type="text"
                            name="comment"
                            onChange={this.handleChange}
                            value={this.state.newReview.comment}
                          />
                          <button onClick={() => this.updateReview(review.id)}>
                            Update
                          </button>
                          <span>🤔</span>
                          <button
                            className="delete"
                            onClick={() => this.deleteReview(review.id)}
                          >
                            Delete
                          </button>
                        </div>
                      ) : null}
                    </StReview>
                  );
                })}

              <div className="reviewForm">
                <h3>Leave a review</h3>
                <form action="" onSubmit={this.handleSubmit}>
                  <input
                    className="reviewInput"
                    placeholder="Review"
                    type="text"
                    name="comment"
                    onChange={this.handleChange}
                    value={this.state.newReview.comment}
                  />

                  <Ratings
                    rating={this.state.newReview.rating}
                    widgetEmptyColors="#837dff80"
                    widgetHoverColors="#541BD7"
                    widgetRatedColors="#6927FF"
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
              </div>
              
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
    postingReview: state.mainReducer.postingReview,
    deleteReview: state.mainReducer.deleteReview,
    updatingReview: state.mainReducer.updatingReview
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getSingleBook,
      postReview,
      deleteReview,
      updateReview
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
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  margin: 50px 0 40px 0;
  padding: 0 0 40px 0;
  border-bottom: 1px dashed #e9e9e9;

  img {
    max-width: 300px;
    box-shadow: 0px 10px 23px 8px #cfcfcf;
    border-radius: 8px;
    margin: 0 40px 0 0;
  }

  .info {
    width: 600px;

    .authors {
      font-size: 1.6em;
      font-weight: 500;
      color: #888;
    }
  }

  h2 {
    font-size: 2.5em;
    font-weight: bold;

    span {
      font-size: 0.7em;
      color: #999;
      display: block;
      margin: 10px 0;
    }
  }

  h3 {
    font-size: 2em;
    font-weight: bold;
  }

  p {
    font-size: 1.7em;
    margin: 20px 0;
    line-height: 1.2em;
  }
`;

const StReviews = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 1.8em;
  margin: 50px 0 50px 0;

  h3 {
    font-size: 1.4em;
    font-weight: 500;
    margin: 30px 0;
  }

  .reviewInput {
    font-size: 0.8em;
    padding: 12px;
    margin: 0 10px 0 0;
    border-radius: 2px;
    border: 1px solid #c9c9c9;
  }

  button {
    font-size: 1em;
    background-color: #6927ff;
    color: #fff;
    border: 0;
    border-radius: 2px;
    padding: 10px 15px;
    margin: 0 0 0 15px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: #4a00f3;
    }
  }
`;

const StReview = styled.div`
  padding: 30px;
  margin: 20px 0 10px 0;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
  background-color: #f2f2f2;

  &:last-child {
    margin: 0 0 30px 0;
  }

  .username {
    font-size: 1.1em;
    font-weight: 600;
    margin: 0 0 5px 0;
  }

  .comment {
    margin: 20px 0 20px 0;
  }

  .controls {
    border-top: 1px dashed #c9c9c9;
    padding: 20px 0 0 0;
    margin-top: 30px;
    display: flex;
    align-items: center;

    input {
      font-size: 0.8em;
      padding: 12px;
      margin: 0 10px 0 0;
      border-radius: 2px;
      border: 1px solid #c9c9c9;
    }

    button {
      font-size: 1em;
      background-color: #6927ff;
      color: #fff;
      border: 0;
      border-radius: 2px;
      padding: 10px 15px;
      margin: 0 0 0 0;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background-color: #4a00f3;
      }

      &.delete {
        background-color: red;

        &:hover {
          background-color: #e60000;
        }
      }
    }

    span {
      font-size: 1em;
      margin: 0 15px;
    }
  }
`;
