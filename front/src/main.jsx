import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalStyle } from './style/GlobalStyles.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < GlobalStyle />
      <App />
  </React.StrictMode>,
)

//Realizamos un if por si el foco esta fuera de la ventana
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Contratame  | ONLINE";
  
  } else {
    document.title = "Contratame  | ONLINE";

  }
});



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
