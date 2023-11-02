import React from 'react'
import { BiHealth } from 'react-icons/bi';


function AlergenInfo({item}) {
    
  return (
    <>
    {item.Alergeni !== "null" && item.Alergeni && (
        <>
          <hr />
          <div className="alergenInfo d-flex justify-content-center">
            <BiHealth />
            <h3 className="text-center text-uppercase font-weight-light">
              {" "}
              Alergen info
            </h3>
          </div>

          <p>
            <strong>{item.Alergeni}</strong>
          </p>
        </>
      )}
      </>
  )
}

export default AlergenInfo