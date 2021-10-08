import React , {useContext, useState} from 'react'
import { BookListProvider } from '../context/BooksListContext';
import BookDetail from './BookDetail';

function BooksList() {
    const {books} = useContext(BookListProvider);



    return (
        <div className="book-list">
            <ul>
                {books.map((book)=> <BookDetail  bookInfo={book} key={book.id}/>)}
            </ul>
           
        </div>
    )
}

export default BooksList
