import React from "react";
import { markovMe } from '../markovGenerator.js'
import {useState} from 'react';


const App = () =>{

  const [message, setMessage] = useState('');
  const [story, setStory] = useState('');

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
        <>
          <div class="header">
            <h1>Phantasmagoria/Athenaeum of Qud</h1>
          </div>
          <div id="textInput">
            <textarea defaultValue={'A half-remembered dream'} id="w3review" name="w3review" rows="4" cols="50" onChange={(e) => setMessage(e.target.value)} />

            <button onClick={() => {
              setStory(markovMe(message));
            }}>Generate</button>
            <button onClick={() => {
              saveStory({title: 'test', description: story})
              .then(data => {
                console.log(data)
              })
            }}>Save</button>
        </div>
        <div>
            <p id="markovResult">{story}</p>
        </div>
      </>
    )
}

export default App