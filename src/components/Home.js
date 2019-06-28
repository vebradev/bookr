import React from "react";
import styled from "styled-components";
import BooksContainer from "./BooksContainer";

const StyledDiv = styled.div`
    max-width: 1100px;
    margin: 0 auto;
`;

class Home extends React.Component {
  render() {
    return (
      <StyledDiv>
        <BooksContainer />
      </StyledDiv>
    );
  }
}

export default Home;