// Torta.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Torta = () => {
  const urlApi = "https://script.googleusercontent.com/macros/echo?user_content_key=zp6nwN5FM6Uq1fgnRQzznCykG8TmQo8pUJuLp7UykPDn4s-cV-2YND3nQaSjFz4zLspvLBN9hdEDvhVdaDUTI3jZFkyQgFXfm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNS7UXIeGXtbZQZFLgt_THB7bUyy9Ud8UkurzdBJaU_JVyA8lKpDetryrfTQoBQqv8MXI1sJtYWf3FAx2nbSGvgRPLZHYuNsvQ&lib=MiKh8JCTgRUKxMr0TGL4E_k7ZqzPT3b1K";
  const { id } = useParams();
  const [torta, setTorta] = useState(null);

  const fetchData = async () => {
    const response = await fetch(urlApi);
    const json = await response.json();
    setTorta(json.data[id - 1]);
  };

  useEffect(() => {
    fetchData();
  }, [id]); // Dodajte id u zavisnosti kako bi se fetchData pozvala kada se promeni id

  if (!torta) {
    return <div className='container'></div>;
  }

    return (
      <div className='p-2'>
        <h1>{torta.Naziv}</h1>
        <p>{torta.Opis}</p>
        <p>Alergen info: <strong> {torta.Alergeni}</strong></p>
        
        <div className="display-5 mb-2">Cijene</div>
        <table className='container table table-light tabela table-hover table-borderless'>
          
          <thead>
            <tr>
              <th scope='col'>Veličina</th>
              <th>Cijena</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope='row'>
                Promjer 18 cm | Visina 15 cm
              </td>
              <td>
              {torta.Cijene["18cm"]} KM
              </td>
            </tr>
            <tr>
            <td>
                Promjer 22 cm | Visina 15 cm
              </td>
              <td>
              {torta.Cijene["22cm"]} KM
              </td>
            </tr>
            <tr>
            <td>
                Promjer 24 cm | Visina 15 cm
              </td>
              <td>
              {torta.Cijene["24cm"]} KM
              </td>
            </tr>
          </tbody>
          <div className="badge bg-secondary mt-2">Cijene torti su bez dekoracija</div>
        </table>
      </div>
  );
};

export default Torta;
