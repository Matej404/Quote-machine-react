import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState([]);

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
    .then((response) => response.json())
    .then((data) => {
      setQuotes(data);
      let randomIndex = Math.round(Math.random() * data.length);
      setRandomQuote(data[randomIndex]);
    })
  }, [])

  const getNewQuote = () => {
    let randomIndex = Math.round(Math.random() * quotes.length);
      setRandomQuote(quotes[randomIndex]);
  }

  return (
    <div className="App">
     {randomQuote ? (
       <div>
         <h4>{randomQuote.author}</h4>
         <p>{randomQuote.text}</p>
       </div>
     ) : (<h2>Loading</h2>)}
     <button onClick={getNewQuote}>New quote</button>
    </div>
  );
}

export default App;
