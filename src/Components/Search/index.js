import React, { useState } from "react";
import "./search.css";

function Index(props) {
  const { onSubmit } = props;
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === "") {
      alert("Digite algo");
      return;
    }
    onSubmit(search);
  };

  const handleChange = (e) => {
    const searchText = e.target.value;

    if (searchText === "") {
      onSubmit(searchText);
    }

    setSearch(searchText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Digite uma palavra chave <br />{" "}
        <input type="text" value={search} onChange={handleChange} />
      </label>

      <button>Procurar</button>
    </form>
  );
}

export default Index;
