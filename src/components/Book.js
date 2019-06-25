import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  font-family: "Roboto Mono", monospace;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #cacece;
  border-radius: 4px;
  width: 230px;
  height: auto;
  margin: 0 0 20px 0;
  padding: 30px;

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
  width: 220px;
  margin: 0 auto;
`;

class Book extends React.Component {
  render() {
    const { cover_url, title, authors, year, average } = this.props.book;
    return (
      <StyledDiv>
        <StyledImg src={cover_url} alt={title} />
        <span className="title">{title}</span>
        <span className="year">{year}</span>
        <span className="rating">Rating: {average}</span>
      </StyledDiv>
    );
  }
}

export default Book;
