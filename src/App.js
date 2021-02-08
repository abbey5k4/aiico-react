import React from "react"
import './App.css';
import Banner from "./components/Banner";
import Header from "./components/Header";
import Main from "./components/Main";
import Media from "./components/Media";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Main />
      <Services />
      <Media />
    </div>
  );
}

export default App;
