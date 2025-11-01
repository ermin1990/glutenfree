
import Loader from '../Loader';
import { Link } from 'react-router-dom';


//REDUX
import { useSelector } from 'react-redux';
import ReadMoreIcon from '../Utils/ReadMoreIcon';
import SEO from '../SEO';


function Monoporcije() {

  const monoporcije = useSelector(state => state.data.data.Entremetmonoporcije);

  if (!monoporcije) {
    return <div className='container text-center'>
      <Loader />
    </div>;
  }

  return (
    <>
      <SEO
        title="Entremet Monoporcije - Gluten Free Monoporcije"
        description="Ukusne gluten free entremet monoporcije. Bezglutenske monoporcije sa premium sastojcima. Minimalna narudžba 3 komada."
        keywords="entremet monoporcije, gluten free monoporcije, bezglutenske monoporcije, deserti"
        url="entremet-monoporcije"
      />
      <div className="display-6 text-center">Entremet monoporcije <br />
      <p className='btn btn-sm btn-secondary'>Minimalma količina za narudžbu 3 Komada </p></div>
      
      {monoporcije.map((monoporcija) => (
        <Link className="nav-link torta p-2 m-2 rounded" key={monoporcija.Id} to={`/entremet-monoporcija/${monoporcija.Id}`}>
          <li className="nav-link" >
            <h3>{monoporcija.Naziv}</h3>
            {monoporcija.Opis !== "null" && monoporcija.Opis && (
              <p className='p-2'>{monoporcija.Opis}</p>
            )}
          </li>
          <span className='opsirnije'> <ReadMoreIcon/> </span>  
        </Link>
      ))}
    <hr />
      <div className="display-6 text-center">Dostupni okusi</div>
      <p className='pt-2 text-start text-sm-center'>Mousse od vanilije i maka sa dodatkom slatkih marelica <br />Mousse od pistacija sa dodatkom malina <br />
      Mousse od tamne čokolade čokolade sa dodatkom višnji <br /> Mousse od mliječne čokolade; Cheescake i limun krema.
      </p>
    </>
  )
}

export default Monoporcije