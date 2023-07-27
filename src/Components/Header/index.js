import React from "react";
import "./header.css";
import logo from "../../images/logo.png";

const index = (props) => {
  const { title } = props;
  return (
    <header>
      <img src={logo} alt="Imagem do logo do site" />
      <h1>{title}</h1>
    </header>
  );
};

export default index;
