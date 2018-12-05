import React from 'react'



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
    this.fetchBooksAuthors()

  }

  fetchBooks = () => {
    const context = this
     fetch('http://localhost:3002/books')
      .then(response => response.json())
      .then(function(data){
        console.log('data', data.books)
        const books = data.books.map(book => {
          return(
            <div className= "bookList">
              <img className = "thumb" src = {book.cover_url} alt = {book.title} />
              <h2 className = "title">{book.title}</h2>
              <p className = "author"> by: Author</p>
              <p>{book.description}</p>
            </div>
          )
        })
        context.setState({books})
      })
  }

  fetchBooksAuthors = () => {
    const context = this
      fetch('http://localhost:3002/author_book')
        .then(response => response.json())
        .then(function(data){
          console.log('author_book data', data.books)
          const booksAuthors = data.books.map(book =>{
            return(
              <div>
                <img className = 'thumb'src = {book.cover_url} alt = {book.title} />
                <p>{book.first_name} {book.last_name}</p>

              </div>
            )
          })
          context.setState({booksAuthors})
        })
  }

  render(){
    return(
      <div>
        {this.state.books}
        {this.state.booksAuthors}
      </div>
    )
  }
}


export default BookList
