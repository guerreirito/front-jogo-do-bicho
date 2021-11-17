import React from "react";
import axios from "axios";
import "./App.css"

function App() {

  async function getData() {
    const response = await axios.get("https://api-jogo-do-bicho.herokuapp.com/");
    const data = await response.data;
    const root = document.querySelector("#root");
    const body = document.querySelector("body");
    root.innerHTML = data;
    const tables = root.querySelectorAll("table");

    root.innerHTML = ""

    tables.forEach(item => {
      root.appendChild(item)
    })

    body.appendChild(root)
  }

  React.useEffect(() => {
    getData();
  }, []);

  return <></>;
}

export default App;
