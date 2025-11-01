
import Loader from './Loader';
import { Link } from 'react-router-dom';

import ReadMoreIcon from './Utils/ReadMoreIcon';
import SEO from './SEO';


//REDUX
import { useSelector } from 'react-redux';

function Torte() {
    
    const torte = useSelector(state => state.data.data.Torte);

    if (!torte) {
    return <div className='container text-center'>
      <Loader />
    </div>;
  } 

  return(
    <>
      <SEO
        title="Torte - Gluten Free Torte"
        description="Pogledajte našu kolekciju ukusnih gluten free torti. Razne vrste torti bez glutena sa prirodnim sastojcima."
        keywords="gluten free torte, bezglutenske torte, torte bez glutena, narudžba torti"
        url="torte"
      />
      <div className="display-6 text-center">Torte</div>
    {torte.map((torta) => (
            <Link className="nav-link torta p-2 rounded m-2" key={torta.Id} to={`/torta/${torta.Id}`}>
          <li className="nav-link" >
            <h3>{torta.Naziv}</h3>
            <p className='p-3'>{torta.Opis}</p>  
            <span className='opsirnije'><ReadMoreIcon/></span>          
          </li>
          </Link>
        ))}
        </>
  )
}

export default Torte