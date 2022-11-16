import React from "react";

const App = () =>{
  const handleClick = () => {
    fetch('http://localhost:8080/test')
    .then((response) => response.json())
    .then((data) => console.log(data));
  }


  async function saveStory(url = 'http://localhost:8080/story', data = {title: 'test', description: 'testing'}) {
    const response = await fetch(url, {
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


  // const saveStory = () => {
  //   fetch('http://localhost:8080/story'), {
  //     method: 'POST',
  //     mode: 'cors',
  //     body: JSON.stringify({title: 'test', description: 'testingtesting'}),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     }
  //   }
  // }


    return (
        <>
    <div class="header">
        <h1>Phantasmagoria/Athenaeum of Qud</h1>
      </div>
      <div id="textInput">
        <textarea defaultValue={'A half-remembered dream'} id="w3review" name="w3review" rows="4" cols="50" />

        <button onClick={() => handleClick()}>Generate</button>

        <button onClick={() => {
          saveStory()
          .then(data => {
            console.log(data)
          })
        }}>Save</button>
      </div>
      </>
    )
}

export default App