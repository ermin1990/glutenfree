/* eslint-disable jsx-a11y/anchor-has-content */
// Torta.js

import { useParams } from "react-router-dom";
import Loader from "../Loader";

import { useSelector } from "react-redux";

import AlergenInfo from "../Utils/AlergenInfo";

const Keks = () => {
  const { id } = useParams();
  const keks = useSelector((state) => state.data.data.Keksi[id - 1]);

  const dimCijeneString = keks && keks.dimCijena;
  let dmCijene = [];
  if (dimCijeneString && dimCijeneString !== "null") {
    dmCijene = dimCijeneString.split(";").map((item) => {
      const [dimenzija, cijena] = item.split("=");
      return { dimenzija, cijena };
    });
  }

  const kolicinaString = keks && keks.kolicina;
  let kolicina = [];
  if (kolicinaString && kolicinaString !== "null") {
    kolicina = kolicinaString.split(";").map((item) => {
      const [opis, cijena] = item.split("=");
      return { opis, cijena };
    });
  }

  if (!keks) {
    return (
      <div className="container text-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="p-2">
      <h1 className="text-center text-uppercase font-weight-light text-balance">
        {keks.Naziv}
      </h1>
      <hr />
      {keks.Opis !== "null" && keks.Opis && (
          <p className="mb-4">{keks.Opis}</p> 
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
                    {`Promjer ${dimenzijaCijena.dimenzija} | Visina ${keks.visina} cm`}
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

      <div className="badge bg-secondary mt-2">Cijene su bez dekoracija</div>

      <AlergenInfo item={keks} />

    </div>
  );
};

export default Keks;
