import React, { useState } from 'react';
import axios from "axios"
import './App.css';

function App() {
  const [randomJoke, setRandomJoke] = useState("");

  const getJoke = () => {
    axios.get("https://official-joke-api.appspot.com/random_joke").then(
            (response) => {
              setRandomJoke(response.data.setup + "... :)" + response.data.punchline);
            }
        )
  }
  return (
    <div className="container">
      <h2>Get random Jokes to make your day!</h2>
      <h1>{randomJoke}</h1>
      <button className="btn" onClick={getJoke}>Click for a Joke</button>
    </div>
  );
}

export default App;
