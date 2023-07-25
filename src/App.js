import { useEffect, useState } from "react";
import fetchApi from "./Services/fetchApi";
import AlbunsList from "./Components/AlbunsList";

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

  return (
    <>
      <div className="container">
        <AlbunsList albuns={albuns} />
      </div>
    </>
  );
}

export default App;
