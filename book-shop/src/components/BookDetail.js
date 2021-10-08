
import React, { useContext } from 'react'
import { BookListProvider } from '../context/BooksListContext';

function BookDetail({ bookInfo }) {
    // const { removeBook } = useContext(BookListProvider);
    const { dispatch } = useContext(BookListProvider);


    const deleteBook = () => {
        // removeBook(bookInfo.id);
        dispatch({type : 'REMOVE_BOOK' , id : bookInfo.id})
    }
    return (
        <div>
            <li onClick={deleteBook}>
                <div className="title">{bookInfo.title}</div>
                <div className="author">{bookInfo.author}</div>
            </li>
        </div>
    )
}

export default BookDetail
