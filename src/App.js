import BooksList from './components/BooksList/BooksList';
import BookForm from './components/BookForm/BookForm';
import React from 'react';
import shortid from 'shortid';

class App extends React.Component {
  state = {
    books: [
      {
        id: 1,
        title: 'of Mine and Men',
        author: 'John Steinbeck',
      },
      {
        id: 2,
        title: 'the Witcher',
        author: 'Andrzej Sapkowski',
      },
    ],
  };

  removeBook = (bookId) => {
    /* bookId = 1 */
    this.setState({
      books: this.state.books.filter((book) => book.id !== bookId),
    });
  };

  addBook = (newBook) => {
    this.setState({
      books: [
        ...this.state.books,
        { id: shortid(), title: newBook.title, author: newBook.author },
      ],
    });
  };

  render() {
    const { books } = this.state;
    const { addBook, removeBook } = this;

    return (
      <div>
        <h1>Books App</h1>
        <BooksList books={books} removeBook={removeBook} />
        <BookForm addBook={addBook} />
      </div>
    );
  }
}

export default App;
