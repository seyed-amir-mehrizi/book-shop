
import BooksListContext from './context/BooksListContext';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <BooksListContext>
        <Navbar />
      </BooksListContext>
    </div>
  );
}

export default App;
