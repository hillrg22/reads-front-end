import React from 'react'
import Book from './Book.js'


class BookList extends React.Component {
  constructor(props){
      super(props)
    }
    state= {
      books:[] ,
      booksAuthors: [],
    }


  componentDidMount(){
    this.fetchBooks()
    // this.fetchBooksAuthors()

  }

  fetchBooks = () => {
    const context = this
     fetch('http://localhost:3002/author_book')
      .then(response => response.json())
      .then(function(data){
        // console.log('this data', data.books)
        context.setState({books: data.books})
      })
  }

  // fetchBooksAuthors = () => {
  //   const context = this
  //     fetch('http://localhost:3002/author_book')
  //       .then(response => response.json())
  //       .then(function(data){
  //         console.log('author_book data', data.books)
  //         const booksAuthors = data.books.map(book =>{
  //           return(
  //             <div>
  //               <img className = 'thumb'src = {book.cover_url} alt = {book.title} />
  //               <p>{book.first_name} {book.last_name}</p>
  //
  //             </div>
  //           )
  //         })
  //         context.setState({booksAuthors})
  //       })
  // }

  render(){
    return(
      <div>
        <Book books={this.state.books} />
      </div>
    )
  }
}


export default BookList
