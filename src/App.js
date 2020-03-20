import React, { useState, useEffect} from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import axios from "axios";
import Styled from "styled-components";
import Video from "./video/Particles.mp4"
import GlobalStyle from "./global"

const BackgroundContainer = Styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 5%;
border-radius: 0 5%;
padding: 1%;

width: 60%;
background: rgba(202, 208, 241, 0.8); 
color:black;
text-align: center;

`
const VideoBackground =  Styled.div `
display: flex;
justify-content: center;
position: fixed;


`
function App() {
  const [photoData, setPhotoData] = useState()
  const [date, setDate] = useState("2012-03-14")
  const changeDate = e => setDate(e.target.value)
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=FGCZsJFBXabVegt65TpC5aQRYrI7KVcEa41DTlw1&date=${date}`)
      .then(response => {
        console.log(response.data)
        setPhotoData(response.data)
      })
      .catch(console.log)
  }, [date])

  if (!photoData) return <h3>Loading...</h3>;

  return (
    <VideoBackground>
      <GlobalStyle />
      
      
          <video style={{zIndex:-1, position:"fixed"}} autoPlay loop muted>
            <source src={Video} type='video/mp4' />
          </video>
        
        
        <BackgroundContainer>
            <Header title={photoData.title} />
            
            <Main type={photoData.media_type} url={photoData.url} description={photoData.explanation} />
            <Footer copyright={photoData.copyright} date={photoData.date} inputDate={date} changeDate={changeDate} />
          </BackgroundContainer>
        
          </VideoBackground>
  );
}

export default App;
