// Torta.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Torta = () => {

    const { id } = useParams();
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


  // Pronađi tortu sa odgovarajućim ID-om
  const selectedTorta = torte.find(torta => torta.id === parseInt(id));

  if (!selectedTorta) {
    return <div>Torta nije pronađena.</div>;
  }

  return (
    <div>
      <h1>{selectedTorta.naziv}</h1>
      <p>{selectedTorta.opis}</p>
      <p>Cene (18cm/22cm/24cm): {selectedTorta.cijene["18cm"]} KM / {selectedTorta.cijene["22cm"]} KM / {selectedTorta.cijene["24cm"]} KM</p>
      <p>Alergeni: {selectedTorta.alergeni.join(', ')}</p>
    </div>
  );
};

export default Torta;
