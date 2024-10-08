/* eslint-disable jsx-a11y/anchor-has-content */
// Torta.js

import { NavLink, useParams } from "react-router-dom";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import AlergenInfo from "./Utils/AlergenInfo";

const Torta = () => {
  const { id } = useParams();
  const torta = useSelector((state) => state.data.data.Torte[id - 1]);

  const dimCijeneString = torta && torta.dimCijena;
  let dmCijene = [];
  if (dimCijeneString && dimCijeneString !== "null") {
    dmCijene = dimCijeneString.split("/").map((item) => {
      const [promjer, visina,  komada, cijena] = item.split(",");
      return { promjer, visina,  komada, cijena };
    });
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

      {dmCijene.length > 0 && (
        <>
      <p className="text-uppercase font-weight-light">Cijene</p>
      {/* Display prices if available */}
      
        
          {dmCijene.map((dimenzijaCijena, index) => (
            <div key={index} className="table cijenaTr p-2 torteLista">
              {dimenzijaCijena.cijena && (
                <>
                <div className="d-flex justify-content-between gap-2 align-items-center ">
                  <span>
                    {`Promjer: ${dimenzijaCijena.promjer} cm`}<br/>
                    {`Visina: ${dimenzijaCijena.visina} cm`}<br/>
                    {`Komada: ${dimenzijaCijena.komada}`}
                  </span>
  
                  
                  <span className="cijenaText veciFont">{dimenzijaCijena.cijena} KM</span>
                  
                </div>
                </>
              )}
            </div>
          ))}
        </>
      )}

      {/* Display quantities if available */}
      {kolicina.length > 0 && (
        <>
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
      )}

      <AlergenInfo item={torta} />

      {(dmCijene.length > 0 || kolicina.length > 0) && (
  <div className="bg-secondary p-2 rounded text-center text-color1 mt-2">
    Cijene su bez dekoracija
  </div>
)}
      

      <div className="bg-secondary p-2 rounded mt-3">
        <h4 className="mt-1 text-center text-color1">Odaberi dekoraciju za tortu</h4>
        <NavLink className="p-2 px-3 nav-link m-1 bg-color2 rounded text-center decoHover" to="/dekoracije">
          Dekoracije
        </NavLink>
      </div>
    </div>
  );
};

export default Torta;
