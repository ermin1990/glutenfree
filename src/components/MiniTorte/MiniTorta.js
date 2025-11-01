/* eslint-disable jsx-a11y/anchor-has-content */
// Torta.js

import { useParams } from "react-router-dom";
import Loader from "../Loader";
import { useSelector } from "react-redux";
import AlergenInfo from "../Utils/AlergenInfo";

const Torta = () => {
  const { id } = useParams();
  const torta = useSelector((state) => state.data.data.Minitorte[id - 1]);


  const dimCijeneString = torta && torta.dimCijena;
  let dmCijene = [];
  if (dimCijeneString && dimCijeneString !== "null") {
    dmCijene = dimCijeneString.split("/").map((item) => {
      const [promjer, visina, komada, cijena] = item.split(",");
      return { promjer, visina, komada, cijena };
    });
  }

  let singlPrice;
  if (dimCijeneString && dimCijeneString !== "null") {
    singlPrice = dimCijeneString;
  }

  const kolicinaString = torta && torta.kolicina;
  let kolicina = [];
  if (kolicinaString && kolicinaString !== "null") {
    kolicina = kolicinaString.split(";").map((item) => {
      const [opis, cijena] = item.split("=");
      return { opis, cijena };
    });
  }

  if (!torta) {
    return (
      <div className="container text-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="p-2">
      <h1 className="text-center text-uppercase font-weight-light text-balance">
        {torta.Naziv}
      </h1>
      <hr />
      <p className="mb-4">{torta.Opis}</p>


      {dmCijene.length > 0 ? (
        <>
          <p className="text-uppercase font-weight-light">Cijene</p>
          {/* Prikaz cijena sa promjerom, visinom i komadima, ili samo cijena ako nema tih detalja */}
          {dmCijene.map((dimenzijaCijena, index) => (
            <div key={index} className="table cijenaTr p-2 torteLista">
              {dimenzijaCijena.promjer && dimenzijaCijena.visina && dimenzijaCijena.komada ? (
                <>
                  {/* Ako imamo detalje kao što su promjer, visina i komada */}
                  <div className="d-flex justify-content-between gap-2 align-items-center">
                    <span>
                      {`Promjer: ${dimenzijaCijena.promjer} cm`}<br />
                      {`Visina: ${dimenzijaCijena.visina} cm`}<br />
                      {`Komada: ${dimenzijaCijena.komada}`}
                    </span>
                    <span className="cijenaText veciFont">{dimenzijaCijena.cijena} KM</span>
                  </div>
                </>
              ) : (
                <>
                  {/* Ako nemamo detalje o dimenzijama, prikaži samo raspon cijena */}
                  <div className="d-flex justify-content-between">
                    <span>Cijena</span>
                    <span className="cijenaText veciFont">{singlPrice} KM</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </>
      ) : kolicina.length > 0 ? (
        <>
          {/* Prikaz samo cijena ako nema promjera, visine i komada */}
          {kolicina.map((item, index) => (
            <div key={index} className="table cijenaTr m-1 p-2">
              {item.cijena && (
                <div className="d-flex justify-content-between">
                  <span>{item.opis}</span>
                  <span className="cijenaText">{item.cijena} KM</span>
                </div>
              )}
            </div>
          ))}
        </>
      ) : (
        <p className="text-center">Cijene trenutno nisu dostupne.</p>
      )}




      <AlergenInfo item={torta} />


    </div>
  );
};
export default Torta;
