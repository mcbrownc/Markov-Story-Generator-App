import React from "react";

const App = () =>{
    return (
        <>
    <div class="header">
        <h1>Phantasmagoria/Athenaeum of Qud</h1>
      </div>
      <div id="textInput">
        <textarea id="w3review" name="w3review" rows="4" cols="50">
          I recall a whisper of a dream once dreamt
        </textarea>
        <input type="button" value="Generate" />
      </div>
      </>
    )
}

// class App extends React.Component{
//     render(){
//         return(
//         <h1>
//             Welcome to React App thats build using Webpack and Babel separately
//         </h1>
//         );
//     }
// }

export default App