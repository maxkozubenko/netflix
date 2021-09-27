import React from "react";
import { FagsContainer } from "./containers/Fags.js";
import FooterContainer from "./containers/Footer.js";
import JumbotronContainer from "./containers/Jumbotron.js";

function App() {
  return (
    <>
      <JumbotronContainer />
      <FagsContainer />
      <FooterContainer />
    </>
  );
}

export default App;
