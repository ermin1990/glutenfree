import React, { useEffect } from "react";

function Home() {
  const [torte, setTorte] = React.useState(null);

  function handleClick(torta) {
    setTorte(torta);
  }

  useEffect(() => {
    fetch("./torte.json")
      .then(response => response.json())
      .then(data => setTorte(data));
  }, []);

  // Dodajte proveru da li su podaci o tortama dostupni
  if (torte === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      
      <ul>
        {torte.map((torta) => (
          <li key={torta.naziv}>
            <h3>{torta.naziv}</h3>
            <p>{torta.opis}</p>
            <a href={`/torte/${torta.id}`} onClick={() => handleClick(torta)}>
              Detaljnije
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
