
import React from 'react'

function BookDetail({bookInfo}) {

    return (
        <div>

            <li>
                <div>{bookInfo.title}</div>
                <div>{bookInfo.author}</div>

            </li>
        </div>
    )
}

export default BookDetail
