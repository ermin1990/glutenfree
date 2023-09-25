// Torta.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Torta = () => {

    const { id } = useParams();
    const [torte, setTorte] = useState([]);

    useEffect(() => {
      fetch("https://script.googleusercontent.com/macros/echo?user_content_key=zp6nwN5FM6Uq1fgnRQzznCykG8TmQo8pUJuLp7UykPDn4s-cV-2YND3nQaSjFz4zLspvLBN9hdEDvhVdaDUTI3jZFkyQgFXfm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNS7UXIeGXtbZQZFLgt_THB7bUyy9Ud8UkurzdBJaU_JVyA8lKpDetryrfTQoBQqv8MXI1sJtYWf3FAx2nbSGvgRPLZHYuNsvQ&lib=MiKh8JCTgRUKxMr0TGL4E_k7ZqzPT3b1K")
      .then(response => response.json())
        .then(data => setTorte(data.data));
    }, []);


    console.log(torte)

// Dodajte proveru da li su podaci o tortama dostupni
if (torte === null) {
    return <div className='container'>Podaci se učitavaju, molimo Vas sačekajte!</div>;
  }


  // Pronađi tortu sa odgovarajućim ID-om
  const selectedTorta = torte.find(torta => torta.Id === parseInt(id));


  return (
    <div className='p-2'>
      <h1>{selectedTorta.Naziv}</h1>
      <p>{selectedTorta.Opis}</p>
      <p>Alergen info: <strong> {selectedTorta.Alergeni.join(', ')}</strong></p>
      
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
            {selectedTorta.Cijene["18cm"]} KM
            </td>
          </tr>
          <tr>
          <td>
              Promjer 22 cm | Visina 15 cm
            </td>
            <td>
            {selectedTorta.Cijene["22cm"]} KM
            </td>
          </tr>
          <tr>
          <td>
              Promjer 24 cm | Visina 15 cm
            </td>
            <td>
            {selectedTorta.Cijene["24cm"]} KM
            </td>
          </tr>
        </tbody>
        <div className="badge bg-secondary mt-2">Cijene torti su bez dekoracija</div>
      </table>
    </div>
  );
};

export default Torta;
