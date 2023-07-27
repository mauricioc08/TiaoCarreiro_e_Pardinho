import React from "react";
import fetchApi from "../../Services/fetchApi";
import { toast } from "react-toastify";
import "./albunsCreate.css";

function Index(props) {
  const { albuns } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const year = e.target.year.value;
    const newAlbum = {
      name,
      year,
    };
    if (validateAlbum(newAlbum)) {
      CreateAlbum(newAlbum);
    }
  };

  const validateAlbum = (newAlbum) => {
    let menssage = "";
    albuns.map((item) => {
      if (newAlbum.name == item.name) {
        menssage = "Nome do album já existe";
      }
    });
    if (menssage) {
      toast.error(menssage);
      return false;
    }
    return true;
  };

  const CreateAlbum = (body) => {
    let pathUrl = `api/album`;
    const method = "POST";

    fetchApi(pathUrl, method, body).then((res) => {
      if (res.status) {
        toast.success("Album cadastrado com sucesso");
      } else {
        toast.error("Erro ao criar Album");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="formAddAlbum">
      <label>Nome do Album</label>
      <input type="text" name="name" required />
      <br />
      <label>Ano do album</label>
      <input
        type="number"
        name="year"
        placeholder="AAAA"
        min="1800"
        max="2024"
        required
      ></input>
      <br />
      <input type="submit" value="Criar Album" />
    </form>
  );
}

export default Index;
