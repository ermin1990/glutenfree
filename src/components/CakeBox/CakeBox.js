import Loader from '../Loader';
import { Link } from 'react-router-dom';


//REDUX
import { useSelector } from 'react-redux';
import ReadMoreIcon from '../Utils/ReadMoreIcon';
import SEO from '../SEO';


function CakeBox() {

  const cakebox = useSelector(state => state.data.data["Cake box"]);

  if (!cakebox) {
    return <div className='container text-center'>
      <Loader />
    </div>;
  }

  return (
    <>
      <SEO
        title="Cake Box - Gluten Free Cake Box"
        description="Gluten free cake box proizvodi. Bezglutenski kolači i slatkiši u praktičnom pakovanju. Minimalna narudžba 6 komada."
        keywords="cake box, gluten free cake box, bezglutenski cake box, pakovani slatkiši"
        url="cake-box"
      />
      <div className="display-6 text-center">Cake box <br />
      <p className='btn btn-sm btn-secondary'>Minimalna količina za narudžbu 6 Komada </p></div>

      {cakebox.map((cake) => (
        <Link className="nav-link torta p-2 m-2 rounded" key={cake.Id} to={`/cake-box/${cake.Id}`}>
          <li className="nav-link" >
            <h3>{cake.Naziv}</h3>
            {cake.Opis !== "null" && cake.Opis && (
              <p className='p-2'>{cake.Opis}</p>
            )}
            <span className='opsirnije'><ReadMoreIcon/></span>
          </li>
        </Link>
      ))}
    </>
  )
}

export default CakeBox