
import Loader from './Loader';
import { Link } from 'react-router-dom';


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
    <div className="display-6 text-center">Torte</div>
    {torte.map((torta) => (
            <Link className="nav-link torta p-2 rounded" key={torta.Id} to={`/torta/${torta.Id}`}>
          <li className="nav-link" >
            <h3>{torta.Naziv}</h3>
            <p>{torta.Opis}</p>            
          </li>
          </Link>
        ))}
        </>
  )
}

export default Torte