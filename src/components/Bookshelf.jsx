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
      {books.map(book => <h1>{book.title}</h1>)}
    </div>
  )
}

export default Bookshelf;