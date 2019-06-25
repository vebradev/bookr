import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Book extends React.Component {
  render() {
    const { id, cover_url, title, year, average } = this.props.book;
    return (
      <StyledLink
        to={{
          pathname: `book/${id}`,
          bookProps: {
            book: this.props.book
          }
        }}
      >
        <StyledDiv>
          <StyledImg src={cover_url} alt={title} />
          <span className="title">{title}</span>
          <span className="year">{year}</span>
          <span className="rating">Rating: {average}</span>
        </StyledDiv>
      </StyledLink>
    );
  }
}

export default Book;

const StyledLink = styled(Link)`
  font-family: "Roboto Mono", monospace;
  letter-spacing: -1px;
  word-spacing: -2px;
  background-color: #fff;
  border: 1px solid #cacece;
  border-radius: 4px;
  width: 250px;
  height: auto;
  margin: 0 0 20px 0;
  padding: 20px;
  text-decoration: none;
  color: inherit;

  &:hover {
    transition: all 0.3s;
    box-shadow: 0px 0px 30px -10px #064acb;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;

  a {
    color: inherit;
    text-decoration: none;
  }

  span {
    font-size: 1.5em;

    &.title {
      font-weight: bold;
      margin: 15px 0 5px 0;
    }

    &.year {
      margin: 5px 0 10px 0;
      font-weight: 500;
      font-size: 1.3em;
      font-style: italic;
      color: #777;
    }

    &.rating {
      font-size: 1.3em;
    }
  }
`;

const StyledImg = styled.img`
  width: 240px;
  margin: 0 auto;
`;
