const fetchApi = async (pathUrl, method, body = "") => {
  let myHeaders = new Headers();
  myHeaders.append("Content-type", "application/json");
  myHeaders.append("Authorization", "mauricio-cassiano@hotmail.com");
  let data = null;

  let requestOptions = {
    method,
    headers: myHeaders,
    redirect: "follow",
  };

  if (body) {
    requestOptions.body = JSON.stringify(body);
  }
  const response = await fetch(
    `https://tiao.supliu.com.br/${pathUrl}`,
    requestOptions
  );
  if (response.ok) {
    data = await response.json();
  }

  return {
    data,
    status: response.ok,
    message: response.statusText,
  };
};

export default fetchApi;
