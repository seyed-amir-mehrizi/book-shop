import React, { useContext, useState } from 'react'
import { BookListProvider } from '../context/BooksListContext';
import BookDetail from './BookDetail';

function BooksList() {
    const { books } = useContext(BookListProvider);



    return (
        <div className="book-list">
            {books.length > 0 ?
                <ul>
                    {books.map((book) => <BookDetail bookInfo={book} key={book.id} />)}
                </ul>

                :
                <h3>
                    There is no book in the List
                </h3>
                }

        </div>
    )
}

export default BooksList
