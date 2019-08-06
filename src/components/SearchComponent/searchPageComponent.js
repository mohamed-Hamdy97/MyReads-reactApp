import React, { Component } from 'react'
import propTypes from 'prop-types'
import BookFounded from './booksFounded'
import QuerySearch from './querySearch'

class SearchComponent extends Component {
    state = {
        foundedBooks: []
    }
    
    handleOnSearch = (SearchedBooks) => {

        this.setState({
            foundedBooks: SearchedBooks
        })

    }

    render() {
        const { changeBookShelf, allReads } = this.props
        return (
            <div className="search-books">

                <QuerySearch
                    onSearch={this.handleOnSearch}
                />
                <BookFounded
                    searchedBooks={this.state.foundedBooks}
                    changeBookShelf={changeBookShelf}
                    ShelfedBooks={allReads}
                    handleOnSearch={this.handleOnSearch}
                />

            </div>
        )
    }

}

SearchComponent.propTypes = {
    allReads: propTypes.array.isRequired,
    changeBookShelf: propTypes.func.isRequired,
}

export default SearchComponent
