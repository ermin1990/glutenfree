/* eslint-disable jsx-a11y/anchor-has-content */
// Torta.js

import { useParams } from "react-router-dom";
import Loader from "../Loader";

import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import AlergenInfo from "../Utils/AlergenInfo";


const Keks = () => {
  const { id } = useParams();
 
  const veganska = useSelector((state) => state.data.data.Veganske[id - 1]);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!veganska) {
        // Ako nemate podatke, sačekajte 2 sekunde prije nego što prikažete sadržaj
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }

      // Ovdje možete dodati svoju logiku za preuzimanje podataka ako je potrebno
      // fetchDataAndSetState();

      // Postavite showContent na true nakon što su podaci dostupni
      setShowContent(true);
    };

    fetchData();
  }, [id, veganska]);


  if (!showContent) {
    return (
      <div className="container text-center">
        <Loader />
      </div>
    );
  }

  const dimCijeneString = veganska && veganska.dimCijena;
  let dmCijene = [];
  if (dimCijeneString && dimCijeneString !== "null") {
    dmCijene = dimCijeneString.split(";").map((item) => {
      const [dimenzija, cijena] = item.split("=");
      return { dimenzija, cijena };
    });
  }

  const kolicinaString = veganska && veganska.kolicina;
  let kolicina = [];
  if (kolicinaString && kolicinaString !== "null") {
    kolicina = kolicinaString.split(";").map((item) => {
      const [opis, cijena] = item.split("=");
      return { opis, cijena };
    });
  }

  

  return (
    <div className="p-2">
      <h1 className="text-center text-uppercase font-weight-light text-balance">
        {veganska.Naziv}
      </h1>
      <hr />
      {veganska.Opis !== "null" && veganska.Opis && (
          <p className="mb-4">{veganska.Opis}</p> 
        )}

      <p className="text-uppercase font-weight-light">Cijene</p>
      {/* Prikazivanje cijena ukoliko postoje */}
      {dmCijene.length > 0 && (
        <>
          {dmCijene.map((dimenzijaCijena) => (
            <div
              key={dimenzijaCijena.dimenzija}
              className="table cijenaTr m-1 p-2"
            >
              {dimenzijaCijena.cijena && (
                <div className="d-flex justify-content-between">
                  <span>
                    {`Promjer ${dimenzijaCijena.dimenzija} | Visina ${veganska.visina} cm`}
                  </span>
                  <span className="cijenaText">
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
            <div key={item.opis} className="table cijenaTr m-1 p-2">
              {item.cijena && (
                <div className="d-flex justify-content-between">
                  <span>{item.opis}</span>
                  <span className="cijenaText">{item.cijena} KM</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}

      <AlergenInfo item={veganska} />
    </div>
  );
};

export default Keks;
