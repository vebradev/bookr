import { Link } from "react-router-dom";
import React from "react";
import StarRatings from "react-star-ratings";
import { connect } from "react-redux";
import styled from "styled-components";

class Book extends React.Component {
  render() {
    const { id, cover_url, title, authors, average } = this.props.book;
    return (
      <>
        <StyledLink
          to={{
            pathname: `book/${id}`,
            props: {
              book: this.props.book,
              reviews: this.props.reviews,
            },
          }}
        >
          <StyledThumbnail background={cover_url} />
          <StyledBookDetails>
            <span className="title">{title}</span>
            <ul>
              {authors.map((author) => {
                return <li key={author.id}>{author.name}</li>;
              })}
            </ul>
            <span className="rating">
              <StarRatings
                rating={average}
                starRatedColor="#6927FF"
                starEmptyColor="#837dff80"
                numberOfStars={5}
                name="rating"
                starDimension="20px"
                starSpacing="0"
              />
            </span>
          </StyledBookDetails>
        </StyledLink>
      </>
    );
  }
}

export default connect((state) => state, {})(Book);

const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  width: 330px;
  height: auto;
  margin: 0 0 50px 0;
  text-decoration: none;
  color: inherit;

  &:hover {
    & > div:first-of-type {
      transition: all 0.3s;
      box-shadow: 0px 0px 30px -10px #b6b6b6;
    }
  }
`;

const StyledThumbnail = styled.div`
  width: 130px;
  height: 195px;
  background: ${(props) => `url(${props.background}) no-repeat top center`};
  background-size: cover;
  border-radius: 8px;
  box-shadow: 0px 10px 23px 8px #cfcfcf;
  transition: all 0.3s;
`;

const StyledBookDetails = styled.div`
  font-family: "Roboto", sans-serif;
  width: 180px;
  font-size: 1.5em;
  line-height: 1.4em;
  margin: 0 0 1em 0;
  padding: 15px 0 0 0;

  .title {
    font-weight: 500;
    font-size: 1.2em;
  }

  li {
    margin-bottom: -3px;
    color: #888;
  }

  .rating {
    margin-top: 20px;
    display: block;
  }
`;
