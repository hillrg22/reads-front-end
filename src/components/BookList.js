import React from 'react'



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

  render(){
    return(
      <div>
        {this.state.books}
      </div>
    )
  }
}


export default BookList
