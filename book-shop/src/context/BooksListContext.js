

import React, { createContext, useState } from 'react';
import {v4 as uuid} from 'uuid'
export const BookList = createContext();
function BooksListContext(props) {
    const [books, setBook] = useState([
        {
            id: 1,
            "title": "Eloquent JavaScript, Third Edition",
            "author": "Marijn Haverbeke",
        },
        {
            id: 2,
            "title": "Practical Modern JavaScript",
            "author": "Nicolás Bevacqua"
        }
    ]);

    const addBook = (title , author) => {
        setBook([books] , {title , author , id : uuid()})
    }

    const removeBook = (id) => {
        setBook(books.filter(book=>book.id !==id));
    }
    return (
        <div>
            <BookList.Provider value={{books , removeBook , addBook}}>
                {props.children}
            </BookList.Provider>
        </div>
    )
}

export default BooksListContext
