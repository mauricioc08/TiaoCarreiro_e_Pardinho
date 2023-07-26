import React from "react";
import fetchApi from "../../Services/fetchApi";

function Index() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const year = e.target.year.value;
    const newAlbum = {
      name,
      year,
    };
    CreateAlbum(newAlbum);
  };

  const CreateAlbum = (body) => {
    let pathUrl = `api/album`;
    const method = "POST";

    fetchApi(pathUrl, method, body).then((res) => {
      if (res.status) {
        alert("Album cadastrado com sucesso");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome do Album</label>
      <input type="text" name="name" />
      <br />
      <label>Ano do album</label>
      <input
        type="number"
        name="year"
        placeholder="YYYY"
        min="1800"
        max="2024"
      ></input>
      <br />
      <input type="submit" value="Criar" />
    </form>
  );
}

export default Index;
