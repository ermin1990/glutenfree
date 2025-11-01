/* eslint-disable jsx-a11y/anchor-has-content */
// CakeBoxItem.js

import { useParams } from "react-router-dom";
import Loader from "../Loader";
import { useSelector } from "react-redux";
import AlergenInfo from "../Utils/AlergenInfo";

const CakeBoxItem = () => {
  const { id } = useParams();
  const cakebox = useSelector((state) => state.data.data["Cake box "]);
  console.log("Cake box data:", cakebox);
  const cake = cakebox ? cakebox[id - 1] : null;

  const kolicinaString = cake && cake.kolicina;
  let kolicina = [];
  if (kolicinaString && kolicinaString !== "null") {
    kolicina = kolicinaString.split(";").map((item) => {
      const [opis, cijena] = item.split("=");
      return { opis, cijena };
    });
  }

  if (!cake) {
    return (
      <div className="container text-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="p-2">
      <h1 className="text-center text-uppercase font-weight-light text-balance">
        {cake.Naziv}
      </h1>
      <hr />
      <p className="mb-4">{cake.Opis}</p>

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

      <AlergenInfo item={cake} />

      <div className="bg-secondary p-2 rounded mt-3">
        <h4 className="mt-1 text-center text-color1">Odaberi dekoraciju za tortu</h4>
        <a className="p-2 px-3 nav-link m-1 bg-color2 rounded text-center decoHover" href="/dekoracije">
          Dekoracije
        </a>
      </div>
    </div>
  );
};

export default CakeBoxItem;