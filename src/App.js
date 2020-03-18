import React, { useState, useEffect} from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import axios from "axios"

function App() {
  const [photoData, setPhotoData] = useState()
  
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=FGCZsJFBXabVegt65TpC5aQRYrI7KVcEa41DTlw1&date=2012-03-14")
      .then(response => {
        setPhotoData(response.data)
      })
      .catch(console.log)
  }, [])

  if (!photoData) return <h3>Loading...</h3>;

  return (
    <div className="App">
    
      <Header title={photoData.title} />
      <Main image={photoData.url} description={photoData.explanation} />
      <Footer copyright={photoData.copyright} date={photoData.date} />
    </div>
  );
}

export default App;
