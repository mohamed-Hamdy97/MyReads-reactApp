import React, { Component } from 'react'
import propTypes from 'prop-types'


class BookFounded extends Component {
    state = {
        foundedBooks: []
    }

    handlebooksFounded = (SearchedBooks, ShelfedBooks) => {
        const FilteredBook = SearchedBooks.map((item) => {
            ShelfedBooks.forEach((element) => {
                if (item.id === element.id) {
                    item.shelf = element.shelf
                }

            })
            if (!item.shelf) {
                item.shelf = 'none'
            }
            return item
        })
        this.setState({
            foundedBooks: FilteredBook
        })

    }

    active = (e, book) => {
        if (e.target.value !== book.shelf) {
            this.props.changeBookShelf(e.target.value, book)
        }
    }

    componentDidMount() {

        this.handlebooksFounded(this.props.searchedBooks, this.props.ShelfedBooks)
    }
    componentWillReceiveProps(nextProps) {
        this.handlebooksFounded(nextProps.searchedBooks, nextProps.ShelfedBooks)
    }

    render() {
        const { foundedBooks } = this.state

        return (
            <div className="search-books-results" >
                <ol className="books-grid">
                    {foundedBooks.filter((item) => {
                        return item.authors && item.imageLinks
                    }).map((item) => (
                        <li key={item.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: `url(${item.imageLinks.thumbnail})` }}></div>
                                    <div className="book-shelf-changer">
                                        <select onChange={(e) => { this.active(e, item) }} defaultValue={item.shelf} className='selection'>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading" className={item.shelf === 'currentlyReading' ? 'yes' : ''}>Currently Reading</option>
                                            <option value="wantToRead" >Want to Read</option>
                                            <option value="read" >Read</option>
                                            <option value="none" >None</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <span className={`fa fa-star ${item.averageRating>0?'checked':''}`} ></span>
                                    <span className={`fa fa-star ${item.averageRating>1?'checked':''}`}></span>
                                    <span className={`fa fa-star ${item.averageRating>2?'checked':''}`}></span>
                                    <span className={`fa fa-star ${item.averageRating>3?'checked':''}`}></span>
                                    <span className={`fa fa-star ${item.averageRating>4?'checked':''}`}></span>
                                </div>
                                <div className="book-title">{item.title}</div>
                                <div className="book-authors">{item.authors.join('  -  ')}</div>
                            </div>
                        </li>
                    ))}

                </ol>
            </div>
        )
    }

}

BookFounded.propTypes = {
    searchedBooks: propTypes.array.isRequired,
    ShelfedBooks: propTypes.array.isRequired,
    handleOnSearch: propTypes.func.isRequired,
    changeBookShelf: propTypes.func.isRequired,
}

export default BookFounded

