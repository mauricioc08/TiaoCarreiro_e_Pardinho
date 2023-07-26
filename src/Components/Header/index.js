import React from "react";
import "./header.css";
import logo from "../../images/logo.png";

const index = () => {
  return (
    <header>
      <img src={logo} alt="Imagem do logo do site" />
      <h1>Discografia</h1>
    </header>
  );
};

export default index;
