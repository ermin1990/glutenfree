/* eslint-disable jsx-a11y/anchor-has-content */
// Torta.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

import {BiHealth} from 'react-icons/bi'

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
    return <div className='container text-center'>
      <Loader />
    </div>;
  }

  console.log(torta);

    return (
      <div className='p-2'>
        <h1 className='text-center text-uppercase font-weight-light text-balance'>{torta.Naziv}</h1>
        <hr />
        <p className='mb-3'>{torta.Opis}</p>
               
        <p className="mt-4 text-uppercase font-weight-light">Cijene</p>
        <table className='container'>
          
          <thead>
            <tr>
              <th scope='col'></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope='row'>
                Promjer 18 cm | Visina 15 cm
              </td>
              <td className='cijenaText'>
              {torta.dimenzija18} KM
              </td>
            </tr>
            <tr>
            <td>
                Promjer 22 cm | Visina 15 cm
              </td>
              <td className='cijenaText'>
              {torta.dimenzija22} KM
              </td>
            </tr>
            <tr>
            <td>
                Promjer 24 cm | Visina 15 cm
              </td>
              <td className='cijenaText'>
              {torta.dimenzija24} KM
              </td>
            </tr>
          </tbody>
          <div className="badge bg-secondary mt-2">Cijene torti su bez dekoracija</div>
        </table>

        <hr />

        {torta.Alergeni ? (
          <>
        <div className="alergenInfo d-flex justify-content-center">
        <BiHealth/><h3 className='text-center text-uppercase font-weight-light'> Alergen info</h3>
        </div>
        
        <p>Ova torta može sadržavati alergene: <strong>{torta.Alergeni}</strong></p>
        </>) : null}
        
      </div>
  );
};

export default Torta;
