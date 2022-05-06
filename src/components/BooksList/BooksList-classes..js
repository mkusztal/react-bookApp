import React from 'react';

class BooksList extends React.Component {
  render() {
    return (
      /* With the 'map' we go through all the elements of the array (like through loops for), but in the case we go back to the new array */
      <ul>
        {this.props.books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
            <button onClick={() => this.props.removeBook(book.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
export default BooksList;
