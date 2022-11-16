import React from "react";

const App = () =>{
  const handleClick = () => {
    fetch()
  }


    return (
        <>
    <div class="header">
        <h1>Phantasmagoria/Athenaeum of Qud</h1>
      </div>
      <div id="textInput">
        <textarea defaultValue={'A half-remembered dream'} id="w3review" name="w3review" rows="4" cols="50" />

        <button onClick={() => console.log('buttonTest')}>Generate</button>

        <input type="button" value="Save" />
      </div>
      </>
    )
}

export default App