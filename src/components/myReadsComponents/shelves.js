import React from 'react'
import propTypes from 'prop-types'


function Shelf(props) {

    const { allReads, changeBookShelf } = props
    const shelves = [
        { title: 'Currently Reading', key: 'currentlyReading' },
        { title: 'Want To Read', key: 'wantToRead' },
        { title: 'Read', key: 'read' },

    ];

    const active = (e, book) => {
        if (e.target.value !== book.shelf) {
            changeBookShelf(e.target.value, book)
        }

    }


    return (
        <div>
            {shelves.map((shelf) => (
                <div className="bookshelf" key={shelf.key}>
                    <h2 className="bookshelf-title">{shelf.title}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {allReads.map((item) => (
                                item.shelf === shelf.key ? (
                                    <li key={item.id}>
                                        <div className="book">
                                            <div className="book-top">
                                                <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: `url(${item.imageLinks.thumbnail})` }}></div>
                                                <div className="book-shelf-changer">
                                                    <select onClick={(e) => { active(e, item) }} defaultValue={item.shelf}>
                                                        <option value="move" disabled>Move to...</option>
                                                        <option value="currentlyReading" >Currently Reading</option>
                                                        <option value="wantToRead" >Want to Read</option>
                                                        <option value="read">Read</option>
                                                        <option value="none">None</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <span className={`fa fa-star ${item.averageRating > 0 ? 'checked' : ''}`} ></span>
                                                <span className={`fa fa-star ${item.averageRating > 1 ? 'checked' : ''}`}></span>
                                                <span className={`fa fa-star ${item.averageRating > 2 ? 'checked' : ''}`}></span>
                                                <span className={`fa fa-star ${item.averageRating > 3 ? 'checked' : ''}`}></span>
                                                <span className={`fa fa-star ${item.averageRating > 4 ? 'checked' : ''}`}></span>
                                            </div>
                                            <div className="book-title">{item.title}</div>
                                            <div className="book-authors">{item.authors.join(' -  ')}</div>
                                        </div>
                                    </li>
                                ) : ''
                            ))}
                        </ol>
                    </div>
                </div>
            ))}
        </div>
    )

}

Shelf.propTypes = {
    allReads: propTypes.array.isRequired,
    changeBookShelf: propTypes.func.isRequired
}

export default Shelf

