import React, { Component } from 'react';
import booksLogo from './books_img.jpeg';
import './App.css';
import Header from './components/Header'
import BookList from './components/BookList'

class App extends Component {
  constructor(props){
      super(props)
    }
    state= {
      teacher: false,
      student: {
        clicked: false,
        selected: null
      }
    }

  // selectedClass = () =>{ this.state.teacher.selected ? "button1 selected" : "button1"}
  //
  // componendDidUpdate() {
  //   this.selectedClass()
  // }


  onTeacherClick = (e) =>{
    e.preventDefault()
    this.setState({
      teacher: false,
      student: {
        clicked: false,
        selected: null
      }
    })
  }

  onStudentClick = (e) =>{
    e.preventDefault()
    this.setState({
      student: {
        clicked: !this.state.student.clicked,
        selected: 'selected'
      },
      teacher: {
        clicked: false,
        selected: null
      }
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <p>I am a:   </p>
        <a href="" onClick={this.onTeacherClick}  className="button1" >Teacher</a>
        <a href="" onClick={this.onStudentClick}   className="button1">Student</a>
        <BookList />
      </div>
    );
  }
}

export default App;
