import React from 'react'
import { Link } from 'react-router-dom'

function OpenSearch() {

    return (
        <div className="open-search">
            <Link to='/search' className='searchBtn'>
            </Link>
        </div>
    )

}

export default OpenSearch