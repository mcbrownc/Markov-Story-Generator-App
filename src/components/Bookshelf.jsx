import React from 'react'
import { useEffect, useState } from 'react';

const Bookshelf = () => {

  const [books, setBooks] = useState([{
    title: '',
    description: 'b'
  }])

  useEffect(() => {
    fetch('http://localhost:8080/db')
    .then(data => {
      return data.json();
    })
    .then(data => setBooks(data))
  })

  return (
    <div className="bookList">
      <h2>Titles</h2>
      <hr></hr>
      <div className='books'>
        {books.map(book => <li>{book.title}</li>)}
      </div>
    </div>
  )
}

export default Bookshelf;