import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Baloo Chettan 2", cursive;
    font-weight: normal;
    src: local("Baloo Chettan 2"), url('https://fonts.google.com/...') format("truetype");
  }

  body {
    font-family: 'Dosis', sans-serif;
    src: local("Dosis"), url("https://fonts.googleapis.com/css?family=Dosis&display=swap") format("truetype")
      font-size: .8rem;
      color: black;
  }

  a {
      text-decoration: none;
  }

`
export default GlobalStyle;