import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [quotes, setQuotes] = useState(['']);
  const [randomQuote, setRandomQuote] = useState();
  const [color, setColor] = useState(['#333300']);

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
    .then((response) => response.json())
    .then((data) => {
      setQuotes(data)
      let randomIndex = Math.round(Math.random() * data.length);
      setRandomQuote(data[randomIndex]);
    })
  }, []);

  const newQuote = () => {
    const colors = ["#800000", "#660066", "#993300", "#003399"];

    const randomColorIndex = Math.round(Math.random() * colors.length);
    setColor(colors[randomColorIndex])

    let randomIndex = Math.round(Math.random() * quotes.length);
      setRandomQuote(quotes[randomIndex]);
  }

  return (
    <div className="behined" style={{background: color}}>
    <div className="App" >
        {randomQuote ? (
          <div className="quote-elements">
            <h3  style={{color: color}}>"{randomQuote.text}"</h3>
            <p style={{color: color}} className="author">- {randomQuote.author || 'Unknown author'}</p>
          </div>
        ) : (<h2>Loading...</h2>)}
         <div className="buttons">
           <div className="media-buttons">
              <a target="_blank" style={{background: color}} className="btn btn-default" href="https://twitter.com/intent/tweet?"><i className="fa fa-twitter"></i></a>
              <a target="_blank" style={{background: color}} className="btn btn-default" href="https://www.tumblr.com/login?"><i className="fa fa-tumblr"></i></a>
            </div>
           <button style={{background: color}} className="new-quote-btn" onClick={newQuote}>New Quote</button>
        </div>
    </div>
    </div>
  );
}

export default App;