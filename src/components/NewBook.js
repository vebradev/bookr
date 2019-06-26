import React from "react";
import axios from "axios";

class NewBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      author: ""
    };
  }

  addBook = event => {
    event.preventDefault()

    const newBook = {
      name: this.state.name,
      author: this.state.author
    }

    axios
      .post('https://lambda-bookr.herokuapp.com/api/books/', newBook)
      .then(res => {
        this.setState({ books: res.data })
      })
      .catch(err => console.log(err))

    this.setState({
      name: '',
      author: ''
    })
  }

  inputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return(
      <div className="books">
        <form onSubmit={this.addBook}>
          <input onChange={this.inputChange} placeholder="name" value={this.state.name} name="name" />
          <input onChange={this.inputChange} placeholder="author" value={this.state.author} name="author" />
          <button type="submit">Add Book</button>
        </form>
      </div>
    )
  }
}

export default NewBook;
