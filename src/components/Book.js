import React from "react";
import { booleanLiteral } from "@babel/types";

class Book extends React.Component {
  render() {
    const { cover_url, title, authors, year, average } = this.props.book
    return (
        <div>
            {/* <img src={cover_url} alt={title} /> */}
            <span>{title}</span>
            <span>{year}</span>
            <span>{average}</span>
        </div>
    );
  }
}

export default Book;
