
import Loader from '../Loader';
import { Link } from 'react-router-dom';

import ReadMoreIcon from '../Utils/ReadMoreIcon';


//REDUX
import { useSelector } from 'react-redux';

function MiniTorte() {
    
    const torte = useSelector(state => state.data.data.Minitorte);

    if (!torte) {
    return <div className='container text-center'>
      <Loader />
    </div>;
  } 

  return(
    <>
    <div className="display-6 text-center">Mini Torte</div>
    {torte.map((torta) => (
            <Link className="nav-link torta p-2 rounded m-2" key={torta.Id} to={`/minitorte/${torta.Id}`}>
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

export default MiniTorte