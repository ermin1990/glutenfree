/* eslint-disable jsx-a11y/anchor-has-content */
// Torta.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

import { BiHealth } from 'react-icons/bi'

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



  const dimCijeneString = torta && torta.dimCijena;
  let dmCijene = [];
  if (dimCijeneString && dimCijeneString !== 'null') {
    dmCijene = dimCijeneString.split(';').map((item) => {
      const [dimenzija, cijena] = item.split('=');
      return { dimenzija, cijena };
    });
  }

  const kolicinaString = torta && torta.kolicina;
  let kolicina = [];
  if (kolicinaString && kolicinaString !== 'null') {
    kolicina = kolicinaString.split(';').map((item) => {
      const [opis, cijena] = item.split('=');
      return { opis, cijena };
    });
  }





  if (!torta) {
    return <div className='container text-center'>
      <Loader />
    </div>;
  }

  return (
    <div className='p-2'>
      <h1 className='text-center text-uppercase font-weight-light text-balance'>{torta.Naziv}</h1>
      <hr />
      <p className='mb-4'>{torta.Opis}</p>

      <p className="text-uppercase font-weight-light">Cijene</p>
      {/* Prikazivanje cijena ukoliko postoje */}
      {dmCijene.length > 0 && (
        <>
          {dmCijene.map((dimenzijaCijena) => (
            <div key={dimenzijaCijena.dimenzija} className='cijenaTr p-2'>
              {dimenzijaCijena.cijena && (
                <div className='d-flex justify-content-between'>
                  <span>
                    {`Promjer ${dimenzijaCijena.dimenzija} | Visina ${torta.visina} cm`}
                  </span>
                  <span className='cijenaText'>
                    {dimenzijaCijena.cijena} KM
                  </span>
                </div>
              )}
            </div>
          ))}
        </>
      )}

      {/* Prikazivanje količina ukoliko postoje */}
      {kolicina.length > 0 && (
        <>
          {kolicina.map((item) => (
            <div key={item.opis} className='cijenaTr p-2'>
              {item.cijena && (
                <div className='d-flex justify-content-between'>
                  <span>
                    {item.opis}
                  </span>
                  <span className='cijenaText'>
                    {item.cijena} KM
                  </span>
                </div>
              )}
            </div>
          ))}
        </>
      )}


      <div className="badge bg-secondary mt-2">Cijene torti su bez dekoracija</div>

      <hr />

      {torta.Alergeni ? (
        <>
          <div className="alergenInfo d-flex justify-content-center">
            <BiHealth /><h3 className='text-center text-uppercase font-weight-light'> Alergen info</h3>
          </div>

          <p>Ova torta može sadržavati alergene: <strong>{torta.Alergeni}</strong></p>
        </>) : null}

    </div>
  );
};

export default Torta;
