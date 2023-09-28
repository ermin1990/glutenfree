
import Loader from '../Loader';
import { Link } from 'react-router-dom';


//REDUX
import { useSelector } from 'react-redux';


function SlatkiStoAll() {
    
    const itemAll = useSelector(state => state.data.data.SlatkiSto);

    if (!itemAll) {
    return <div className='container text-center'>
      <Loader />
    </div>;
  } 

  return(
    <>
    <div className="display-6 text-center">Slatki sto</div>
    {itemAll.map((item) => (
            <Link className="nav-link torta p-2 rounded" key={item.Id} to={`/slatki/${item.Id}`}>
          <li className="nav-link" >
            <h3>{item.Naziv}</h3>
            {item.Opis !== "null" && item.Opis && (
          <p>{item.Opis}</p> 
        )}
                       
          </li>
          </Link>
        ))}
        </>
  )
}

export default SlatkiStoAll