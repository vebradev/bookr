import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
`;

const StyledCover = styled.img``;

const StyledInfo = styled.div`
  margin: 0 0 0 40px;
  padding: 40px 0 0 0;
  font-family: "Roboto Mono", monospace;
  font-size: 1.5em;
  letter-spacing: -1px;
  word-spacing: -2px;

  span {
      display: block;
  }
`;

class BookPage extends React.Component {
  render() {
    const {
      id,
      cover_url,
      title,
      year,
      description,
      average,
      publisher
    } = this.props.location.bookProps.book;
    return (
      <StyledDiv>
        <div>
          <img src={cover_url} alt="" />
        </div>
        <StyledInfo>
          <ul>
            <li>Title <span>{title}</span></li>
            <li>{year}</li>
            <li>Description <span>{description}</span></li>
            <li>Rating <span>{average}</span></li>
            <li>Publisher <span>{publisher}</span></li>
          </ul>
        </StyledInfo>
      </StyledDiv>
    );
  }
}

export default BookPage;
