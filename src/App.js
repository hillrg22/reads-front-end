import React, { Component } from 'react';
import booksLogo from './books_img.jpeg';
import './App.css';
import Header from './components/Header'
import BookList from './components/BookList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BookList />
      </div>
    );
  }
}

export default App;
