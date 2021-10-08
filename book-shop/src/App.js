
import BooksListContext from './context/BooksListContext';
import Navbar from './components/Navbar';
import BooksList from './components/BooksList';
import BookForm from './components/BookForm';
function App() {
  return (
    <div className="App">
      <BooksListContext>
        <Navbar />
        <BooksList />
        <BookForm />
      </BooksListContext>
    </div>
  );
}

export default App;
