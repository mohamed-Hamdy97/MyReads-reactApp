import React from 'react'
import { Route } from 'react-router-dom'
import SearchComponent from './SearchComponent/searchPageComponent'
import MyReads from './myReadsComponents/MyReads';
import * as BooksAPI from '../BooksAPI'
import './App.css'


class BooksApp extends React.Component {
  state = {
    allBooks: [],

  }

  handleBooksCategories = (shelf, book) => {

    BooksAPI.update(book, shelf)
      .then(() => {
        BooksAPI.getAll()
          .then((data) => {
            this.setState({
              allBooks: data
            })

          })

      })

  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((data) => {
        this.setState({
          allBooks: data
        })

      })
  }


  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <SearchComponent
            changeBookShelf={this.handleBooksCategories}
            allReads={this.state.allBooks}
          />
        )} />
        <Route exact path='/' render={() => (
          <MyReads
            allReads={this.state.allBooks}
            changeBookShelf={this.handleBooksCategories}
          />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
