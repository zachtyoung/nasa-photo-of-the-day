import React, {useState, useEffect} from "react";
import "./App.css";
import {Image} from "./Image.js"
const axios = require('axios');

let nasaAPI = 'https://api.nasa.gov/planetary/apod?api_key=r2F92MiuirP5Fveu0JZ8uc6kD5yRGVaSlVJraSTQ&date=2012-03-14';


function App() {
  let [API, setAPI] = useState(nasaAPI);
  let [content, setContent] = useState({});
  useEffect(() => {
    axios.get(API)
    .then(res => {
      setContent(res.data);
    })
    .catch(e => {
      console.log(e)
    });
  }, [API]);
  return (
    <div className="App">
      <Image imgUrl={content.url} title={content.title} date={content.date} explanation={content.explanation}/>
    </div>
  );
}

export default App;
