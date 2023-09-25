import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Home() {
    const [torte, setTorte] = useState([]);

    useEffect(() => {
      fetch("https://script.googleusercontent.com/macros/echo?user_content_key=zp6nwN5FM6Uq1fgnRQzznCykG8TmQo8pUJuLp7UykPDn4s-cV-2YND3nQaSjFz4zLspvLBN9hdEDvhVdaDUTI3jZFkyQgFXfm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNS7UXIeGXtbZQZFLgt_THB7bUyy9Ud8UkurzdBJaU_JVyA8lKpDetryrfTQoBQqv8MXI1sJtYWf3FAx2nbSGvgRPLZHYuNsvQ&lib=MiKh8JCTgRUKxMr0TGL4E_k7ZqzPT3b1K")
        .then(response => response.json())
        .then(data => setTorte(data.data));
    }, []);

   

  // Dodajte proveru da li su podaci o tortama dostupni
  if (torte === null) {
    return <div className='btn btn-info'>Podaci se učitavaju, molimo Vas sačekajte!</div>;
  }

  return (
    <div className="p-2">
      <div className="text-center mt-3"><h3>Torte</h3></div>
      <div className="torte">
        {torte.map((torta) => (
            <Link className="nav-link" key={torta.Id} to={`/torte/${torta.Id}`}>
          <li className="nav-link" >
            <h3>{torta.Naziv}</h3>
            <p>{torta.Opis}</p>            
          </li>
          </Link>
        ))}
        </div>
    </div>
  );
}

export default Home;
