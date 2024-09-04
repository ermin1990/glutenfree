
import Loader from '../Loader';
import { Link } from 'react-router-dom';


//REDUX
import { useSelector } from 'react-redux';
import ReadMoreIcon from '../Utils/ReadMoreIcon';


function Macaronsi() {

  const monoporcije = useSelector(state => state.data.data.Macaronsi);

  if (!monoporcije) {
    return <div className='container text-center'>
      <Loader />
    </div>;
  }

  return (
    <>
      <div className="display-6 text-center">Macaronsi<br /></div>
      
      {monoporcije.map((item) => (
        <Link className="nav-link torta p-2 m-2 rounded" key={item.Id} to={`/macaronsi/${item.Id}`}>
          <li className="nav-link" >
            <h3>{item.Naziv}</h3>
            {item.Opis !== "null" && item.Opis && (
              <p className='p-2'>{item.Opis}</p>
            )}
          </li>
          <span className='opsirnije'> <ReadMoreIcon/> </span>  
        </Link>
      ))}
      
    </>
  )
}

export default Macaronsi