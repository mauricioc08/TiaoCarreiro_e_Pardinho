import { useEffect, useState } from "react";
import fetchApi from "./Services/fetchApi";
import AlbunsList from "./Components/AlbunsList";

function App() {
  const [albuns, setAlbuns] = useState([]);

  const searchAlbum = () => {
    const pathUrl = "api/album?limit=10&page=1";
    const method = "GET";

    fetchApi(pathUrl, method).then((res) => {
      setAlbuns(res.data?.data);
    });
  };

  useEffect(() => {
    searchAlbum();
  }, []);

  return (
    <>
      <AlbunsList albuns={albuns} />
    </>
  );
}

export default App;
