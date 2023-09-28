
import Loader from '../Loader';
import { Link } from 'react-router-dom';


//REDUX
import { useSelector } from 'react-redux';


function Keksi() {
    
    const keksi = useSelector(state => state.data.data.Keksi);

    if (!keksi) {
    return <div className='container text-center'>
      <Loader />
    </div>;
  } 

  return(
    <>
    <div className="display-6 text-center">Keksi</div>
    {keksi.map((keks) => (
            <Link className="nav-link torta p-2 rounded" key={keks.Id} to={`/keks/${keks.Id}`}>
          <li className="nav-link" >
            <h3>{keks.Naziv}</h3>
            {keks.Opis !== "null" && keks.Opis && (
          <p>{keks.Opis}</p> 
        )}            
          </li>
          </Link>
        ))}
        </>
  )
}

export default Keksi