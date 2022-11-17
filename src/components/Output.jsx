import React from 'react';
import {useState} from 'react';




const Output = (props) => {

  const [title, setTitle] = useState('');

  return (
    <div className="output">
      <p>{props.story}</p>
    </div>
  )
}

export default Output;