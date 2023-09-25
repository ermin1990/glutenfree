import React, { useEffect, useState } from "react";

function Home() {
    const [torte, setTorte] = useState([]);

    useEffect(() => {
      fetch("https://raw.githubusercontent.com/ermin1990/glutenfree/master/public/torte.json")
        .then(response => response.json())
        .then(data => setTorte(data));
    }, []);

  // Dodajte proveru da li su podaci o tortama dostupni
  if (torte === null) {
    return <div className='container'>Podaci se učitavaju, molimo Vas sačekajte!</div>;
  }

  return (
    <div>
      <div className="text-center mt-3"><h3>Torte</h3></div>
      <div className="torte container">
        {torte.map((torta) => (
            <a className="nav-link" href={`/torte/${torta.id}`}>
          <li className="nav-link" key={torta.naziv}>
            <h3>{torta.naziv}</h3>
            <p>{torta.opis}</p>            
          </li>
          </a>
        ))}
        </div>
    </div>
  );
}

export default Home;
