import React, {useState, useEffect} from "react";
import "./App.css";
import {Image} from "./Image.js"
const axios = require('axios');

let nasaAPI = 'https://api.nasa.gov/planetary/apod?api_key=r2F92MiuirP5Fveu0JZ8uc6kD5yRGVaSlVJraSTQ&date=2012-03-14';


function App() {
  let [API, setAPI] = useState(nasaAPI);
  let [content, setContent] = useState('');
  useEffect(() => {
    axios.get(API)
    .then(res => {
      setContent(res);
    })
    .catch(e => {
      console.log(e)
    });
  }, [API]);
  return (
    <div className="App">
      {content !== ''? <Image imgUrl={content.data.url} title={content.data.title} date={content.data.date} content={content.data.explanation}/>: console.log("Loading...") }
    </div>
  );
}

export default App;
