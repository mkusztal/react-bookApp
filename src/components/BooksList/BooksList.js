const BooksList = ({ books, removeBook }) => {
  return (
    /* With the 'map' we go through all the elements of the array (like through loops for), but in the case we go back to the new array */
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.title} by {book.author}
          <button onClick={() => removeBook(book.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
