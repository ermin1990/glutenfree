import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Loader from "./Loader";

function Home() {
    
    const urlApi = "https://script.googleusercontent.com/macros/echo?user_content_key=zp6nwN5FM6Uq1fgnRQzznCykG8TmQo8pUJuLp7UykPDn4s-cV-2YND3nQaSjFz4zLspvLBN9hdEDvhVdaDUTI3jZFkyQgFXfm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNS7UXIeGXtbZQZFLgt_THB7bUyy9Ud8UkurzdBJaU_JVyA8lKpDetryrfTQoBQqv8MXI1sJtYWf3FAx2nbSGvgRPLZHYuNsvQ&lib=MiKh8JCTgRUKxMr0TGL4E_k7ZqzPT3b1K";
    const [torte, setTorte] = useState(null);


    const fetchData = async () => {
      const response = await fetch(urlApi);
      const json = await response.json();
      setTorte(json.data);
    };


    useEffect(() => {
      fetchData();
    }, []);

   

    if (!torte) {
    return <div className='container text-center'>
      <Loader />
    </div>;
  }

  return (
    <div className="p-2">
      <div className="text-center mt-3"><h3>Torte</h3></div>
      <div className="torte">
        {torte.map((torta) => (
            <Link className="nav-link torta p-2 rounded" key={torta.Id} to={`/torte/${torta.Id}`}>
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
