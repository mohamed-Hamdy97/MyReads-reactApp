import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import * as BooksAPI from '../../BooksAPI'


class QuerySearch extends Component {
    state = {
        query: ''
    }
    handleInputChanges = (e) => {
        const query=e.target.value
        this.setState({
            query: query 
        })
        
        if (query.trim() !== '') {
            BooksAPI.search(query.trim())
                .then((books) => {
                    if (!books.error) {
                        this.props.onSearch(books)

                    } else {
                        this.props.onSearch([])

                    }

                })
        } else {
            this.props.onSearch([])

        }


    }
    render() {
        const { query } = this.state
        return (
            <div className="search-books-bar">
                <Link
                    to='/'
                    className="close-search"
                >Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={query}
                        onChange={this.handleInputChanges}
                    />
                </div>
            </div>
        )
    }

}
QuerySearch.propTypes={
    onSearch:propTypes.func.isRequired
}

export default QuerySearch  

