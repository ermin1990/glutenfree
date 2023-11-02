
import Loader from './Loader';
import { Link } from 'react-router-dom';


//REDUX
import { useSelector } from 'react-redux';
import { MdNavigateNext } from 'react-icons/md';


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
            <Link className="nav-link torta p-2 rounded m-2" key={torta.Id} to={`/torta/${torta.Id}`}>
          <li className="nav-link" >
            <h3>{torta.Naziv}</h3>
            <p className='p-3'>{torta.Opis}</p>  
            <span className='opsirnije'><MdNavigateNext size={25}/></span>          
          </li>
          </Link>
        ))}
        </>
  )
}

export default Torte