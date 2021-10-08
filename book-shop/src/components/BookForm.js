import React, { useState,useContext } from 'react';
import { BookListProvider } from '../context/BooksListContext';

function BookForm() {
    const [title , setTitle] = useState('');
    const [author , setAuthor] = useState('');
    // const {addBook} = useContext(BookListProvider);
    const {dispatch} = useContext(BookListProvider);


    const handleSubmit = (e)=>{
        e.preventDefault();
        // addBook(title , author);
        dispatch({type : 'ADD_BOOK' , book : {
            title , author
        }})
        setAuthor('');
        setTitle('');


    } 
    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <input type="text" placeholder="Enter The Title" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
                <input type="text" placeholder="Enter the Author" value={author} onChange={(e)=>setAuthor(e.target.value)} required/>
                <input type="submit"  value="add Book"/>

            </form>
        </div>
    )
}

export default BookForm
