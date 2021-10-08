
import BooksListContext from './context/BooksListContext';
import Navbar from './components/Navbar';
import BooksList from './components/BooksList';
function App() {
  return (
    <div className="App">
      <BooksListContext>
        <Navbar />
        <BooksList />
      </BooksListContext>
    </div>
  );
}

export default App;
