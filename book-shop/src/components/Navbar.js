import React , {useContext, useState} from 'react'
import { BookListProvider } from '../context/BooksListContext';
function Navbar() {
    const {books} = useContext(BookListProvider);

    return (
        <div className="navbar">
            <h1>
                My Books List
            </h1>
            <p>
                You have {books.length} books for Reading
            </p>
        </div>
    )
}

export default Navbar
