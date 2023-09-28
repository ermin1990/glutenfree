
import Loader from '../Loader';
import { Link } from 'react-router-dom';


//REDUX
import { useSelector } from 'react-redux';


function Veganske() {
    
    const veganske = useSelector(state => state.data.data.Veganske);

    if (!veganske) {
    return <div className='container text-center'>
      <Loader />
    </div>;
  } 

  return(
    <>
    <div className="display-6 text-center">Veganske torte</div>
    {veganske.map((veganska) => (
            <Link className="nav-link torta p-2 rounded" key={veganska.Id} to={`/veganska/${veganska.Id}`}>
          <li className="nav-link" >
            <h3>{veganska.Naziv}</h3>
            {veganska.Opis !== "null" && veganska.Opis && (
          <p>{veganska.Opis}</p> 
        )}
                       
          </li>
          </Link>
        ))}
        </>
  )
}

export default Veganske