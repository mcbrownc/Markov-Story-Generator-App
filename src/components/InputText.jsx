import React from 'react'
import {useState} from 'react';
import Output from './Output.jsx';
import { markovMe } from '../../markovGenerator.js'


const InputText = () => {

  const [message, setMessage] = useState('');
  const [story, setStory] = useState('');
  const [title, setTitle] = useState('');

  async function getStory(name) {
    await fetch(`http://localhost:8080/${name}`)
    .then(data => data.json())
    .then(data => setStory(data.description))
  }
  
  async function deleteStory(name) {
    await fetch(`http://localhost:8080/${name}`, {
      method: 'DELETE',
      body: JSON.stringify(name)
    })
    .then(data => data.json())
    .then(data => console.log(data))
  }

  async function updateStory(book) {
    await fetch(`http://localhost:8080/${book.title}`, {
      method: 'PATCH',
      body: JSON.stringify(data)
    })
    .then(data => data.json())
    .then(data => console.log(data))
  }

  async function saveStory(data) {
    const response = await fetch('http://localhost:8080/story', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return response.json();
  }

  return (
    <div className="input">
      <div className='generate'>
        <textarea defaultValue={'A half-remembered dream ...'} id="w3review" name="w3review" rows="10" cols="40" onChange={(e) => setMessage(e.target.value)} />
        <button onClick={() => {
                setStory(markovMe(message));
              }}>Generate
        </button>
      </div>
      <div className='recall'>
        <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} />
        <button onClick={() => {
          saveStory({title: title, description: story})
          .then(data => {
                  console.log(data)
          })
          }}>Keep
        </button>
        <button onClick={() => {
                getStory(title);
              }}>Recall
        </button>
        <button onClick={() => {
                deleteStory(title);
              }}>Forget
        </button>
        <button onClick={() => {
                updateStory({title: title, description: story});
              }}>Update
        </button>
      </div>
      <Output story={story}/>
    </div>
  )
}

export default InputText;