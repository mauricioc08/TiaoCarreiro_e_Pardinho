import { useEffect, useState } from "react";
import fetchApi from "./Services/fetchApi";
import AlbunsList from "./Components/AlbunsList";
import Header from "./Components/Header";
import Search from "./Components/Search";

function App() {
  const [albuns, setAlbuns] = useState([]);

  const searchAlbum = (params = "") => {
    let pathUrl = "api/album?limit=10&page=1";
    const method = "GET";
    if (params) {
      pathUrl += `&keyword=${params}`;
    }

    fetchApi(pathUrl, method).then((res) => {
      setAlbuns(res.data?.data);
    });
  };

  useEffect(() => {
    searchAlbum();
  }, []);

  const handleSubmit = (searchText) => {
    searchAlbum(searchText);

    console.log(searchText);
  };

  return (
    <>
      <div className="container">
        <Header />
        <div className="content">
          <Search onSubmit={handleSubmit} />
          <AlbunsList albuns={albuns} />
        </div>
      </div>
    </>
  );
}

export default App;
