import React from 'react'


const Book = ({books}) => {

  const formatAuthors = (data) => {
    const authors = data.authors
    let authorString = ''

    for (let i=0; i<authors.length; i++){
      if(!authorString.length){
        authorString += authors[i].first_name + ' ' + authors[i].last_name
      }
      else{
        authorString += ', ' + authors[i].first_name + ' ' + authors[i].last_name
      }
    }
    console.log("author string", authorString)
    return authorString
  }


  return books.map(book => {
  return(
        <div className= "bookList">
          <img className = "thumb" src = {book.book_cover_url} alt = {book.book_title} />
          <h2 className = "title">{book.book_title}</h2>
          {/* <p className = "author"> by: {book.authors[0].first_name} {book.authors[0].last_name}</p> */}
          <p className = "author"> by: {formatAuthors(book)} </p>
          <p className = "description">Description: {book.book_description}</p>
        </div>
      )
  }
)
}







export default Book
