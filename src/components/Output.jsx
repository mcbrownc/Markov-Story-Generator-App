import React from 'react';
import {useState} from 'react';




const Output = (props) => {

  const [title, setTitle] = useState('');

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
    <div className="header">
      <p>{props.story}</p>
      <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} />
      <button onClick={() => {
        saveStory({title: title, description: props.story})
        .then(data => {
                console.log(data)
        })
        }}>Save
      </button>
    </div>
  )
}

export default Output;