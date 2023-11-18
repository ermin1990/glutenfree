
import Loader from '../Loader';
import { Link } from 'react-router-dom';


//REDUX
import { useSelector } from 'react-redux';
import ReadMoreIcon from '../Utils/ReadMoreIcon';


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
            <Link className="nav-link torta m-2 p-2 rounded" key={veganska.Id} to={`/veganska/${veganska.Id}`}>
          <li className="nav-link" >
            <h3>{veganska.Naziv}</h3>
            {veganska.Opis !== "null" && veganska.Opis && (
          <p className='p-2'>{veganska.Opis}</p> 
        )}
                       
          </li>
          <span className='opsirnije'> <ReadMoreIcon /> </span>  
          </Link>
        ))}
        </>
  )
}

export default Veganske