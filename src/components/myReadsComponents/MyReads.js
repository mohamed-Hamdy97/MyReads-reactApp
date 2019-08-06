import React from 'react'
import propTypes from 'prop-types'
import Shelf from './shelves'
import OpenSearch from './opensearch';


function MyReads(props) {

    const { allReads, changeBookShelf } = props

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Shelf changeBookShelf={changeBookShelf} allReads={allReads} />
                    <OpenSearch />
                </div>
            </div>
        </div>
    )

}
MyReads.propTypes = {
    allReads: propTypes.array.isRequired,
    changeBookShelf: propTypes.func.isRequired,
}

export default MyReads