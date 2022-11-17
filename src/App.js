import React from "react";
import { markovMe } from '../markovGenerator.js'
import {useState} from 'react';
import './styles/styles.scss';
import Header from './components/Header.jsx'
import InputText from "./components/InputText.jsx";
import Bookshelf from "./components/Bookshelf.jsx";



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
        <div className="mainContainer">
          <Header />
          <InputText />
          <Bookshelf />



          {/* <Header />
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
        <div id="markovResult">
            <p>{story}</p>
        </div> */}
      </div>
    )
}

export default App