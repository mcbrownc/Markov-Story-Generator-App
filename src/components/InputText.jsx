import React from 'react'
import {useState} from 'react';
import Output from './Output.jsx';
import { markovMe } from '../../markovGenerator.js'


const InputText = () => {

  const [message, setMessage] = useState('');
  const [story, setStory] = useState('');

  return (
    <div id="textInput">
      <textarea defaultValue={'A half-remembered dream'} id="w3review" name="w3review" rows="4" cols="50" onChange={(e) => setMessage(e.target.value)} />
      <button onClick={() => {
              setStory(markovMe(message));
            }}>Generate
      </button>
      <Output story={story}/>
    </div>
  )
}

export default InputText;