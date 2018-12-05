import React from 'react'



class BookList extends React.Component {
  constructor(props){
      super(props)
    }
    state= {
      books:[] ,
    }


  componentDidMount(){

    console.log('component did mount')
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
            <p>{book.title}</p>
          )
        })
        context.setState({books})
      })
  }

  render(){
    return(
      <div>
        <p>Books go here</p>
        {this.state.books}
      </div>
    )
  }
}


export default BookList
