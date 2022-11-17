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

  return (
    <div id="textInput">
      <textarea defaultValue={'A half-remembered dream'} id="w3review" name="w3review" rows="4" cols="50" onChange={(e) => setMessage(e.target.value)} />
      <button onClick={() => {
              setStory(markovMe(message));
            }}>Generate
      </button>
      <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} />
      <button onClick={() => {
              getStory(title);
            }}>Recall
      </button>
      <Output story={story}/>
    </div>
  )
}

export default InputText;