import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Work Sans', sans serif;
  background-color: #0E0F10;
  min-height: 100vh;
}

ul,
ol,
li {
  margin: 0;
  padding: 0;
  list-style: none;
  
}

a{
  color: inherit;
  text-decoration: none;
}

h1,
h2 {
  font-size: 30px;
  margin: 0;
  font-family: "Press Start 2P";
}

.container{
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

}

button {
  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 134px;
  height: 56px;
  background-color: #FFFF00;
  border-radius: 20px;
  cursor: pointer;
  border: none;
  font-family: "Press Start 2P";
  margin: 30px;
}
`;

export default GlobalStyles;
