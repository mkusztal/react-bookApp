import { useState } from 'react';

const BookForm = (props) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const { addBook } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle('');
    setAuthor('');
    addBook({ title: title, author: author });
  };

  return (
    <form onSubmit={handleSubmit}>
      Title:
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      Author:
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button>Add book</button>
    </form>
  );
};

export default BookForm;
