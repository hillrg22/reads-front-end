import React from 'react'
import Book from './Book.js'


class BookList extends React.Component {
  constructor(props){
      super(props)
    }
    state= {
      books:[] ,

    }


  componentDidMount(){
    this.fetchBooks()
  }

  fetchBooks = () => {
    const context = this
     // fetch('http://localhost:3002/author_book')
     fetch('https://galvanize-reads-rh.herokuapp.com/author_book')
      .then(response => response.json())
      .then(function(data){
        context.setState({books: data.books})
      })
  }


  render(){
    return(
      <div>
        <Book books={this.state.books} />
      </div>
    )
  }
}


export default BookList
