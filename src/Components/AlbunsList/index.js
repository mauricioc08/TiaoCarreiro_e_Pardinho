import React from "react";

const AlbunsList = (props) => {
  const { albuns } = props;
  const formatDuration = (duration) => {
    if (!duration) return "--:--";

    let minuts = parseInt(duration / 60);
    let seconds = duration % 60;
    if (seconds < 10) {
      seconds = "0" + seconds.toString();
    }
    return `${minuts}:${seconds}`;
  };

  return (
    <>
      <div>
        {albuns &&
          albuns.map((item) => {
            return (
              <div key={item?.id}>
                <h3>
                  Album: {item?.name}, {item?.year}
                </h3>
                <table>
                  <thead>
                    <tr>
                      <th>Nº</th>
                      <th>Faixa</th>
                      <th>Duração</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item?.tracks.length ? (
                      item?.tracks.map((track) => {
                        return (
                          <tr key={track?.id}>
                            <td>{track?.number}</td>
                            <td>{track?.title}</td>
                            <td>{formatDuration(track?.duration)}</td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td>#</td>
                        <td>Este album não tem faixa</td>
                        <td>
                          <a href="#">Add Faixa</a>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
                <br />
                <br />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default AlbunsList;
