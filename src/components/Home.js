
import { NavLink, Outlet, Navigate} from 'react-router-dom';


function Home() {
    
  

  return (
    <div className="p-2">
      <p className='m-0 mt-2 p-1'><strong>Kategorije</strong></p>
      <div className="categoryMenu d-flex">
      <NavLink className="p-2 nav-link m-1 catMenu" to="/torte">Torte</NavLink>
      <NavLink className="p-2 nav-link m-1 catMenu" to="/muffins">Cupcakes</NavLink>
      </div>
      <div className="mt-2 torte">
      <Navigate to="/torte" replace/>
        <Outlet/>
        </div>
    </div>
  );
}

export default Home;
