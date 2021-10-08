import React , {useContext, useState} from 'react'
import { BookList } from '../context/BooksListContext';
function Navbar() {
    const {books} = useContext(BookList);
    console.log("books : " , books);
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
