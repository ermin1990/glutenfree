
import { Link } from 'react-router-dom';
import {MdNavigateNext} from 'react-icons/md'

//REDUX
import { useSelector } from 'react-redux';
import Loader from '../Loader';


function Dekoracije() {
    
    const items = useSelector(state => state.data.data.Dekoracije);

    if (!items) {
    return <div className='container text-center'>
      <Loader />
    </div>;
  } 

  return(
    <>
    <div className="display-6 text-center">Dekoracije</div>
    {items.map((item) => (
            <Link className="nav-link torta p-2 m-2 rounded bg-color2" key={item.Id} to={`/dekoracija/${item.Id}`}>
          <li className="nav-link" >
            <h3>{item.Naziv}</h3>
            <p className='p-2'>{item.Opis}</p>
            <span className='opsirnije'><MdNavigateNext size={25}/></span>            
          </li>
          </Link>
        ))}
        </>
  )
}

export default Dekoracije