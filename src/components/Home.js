import { NavLink, Navigate, Outlet, useLocation } from "react-router-dom";

import Loader from "./Loader";
import { useSelector } from 'react-redux';

function Home() {

  const data = useSelector((state) => state.data);
  const location = useLocation();


  var navigate = false;

  if (location.pathname === "/") {
    // Ako ste na početnoj stranici, preusmerite na "/torte"
    navigate = true;
  }


  if (!data) {
    return <div className='container text-center'>
      <Loader />
    </div>;
  }

  return (
    <div className="p-2">
      {navigate && (
        <Navigate to={"/torte"} />
      )}
      <p className='m-0 mt-2 p-1'><strong>Kategorije</strong></p>
      <div className="categoryMenu d-flex flex-row overflow-x-scroll">
        <NavLink className="p-2 px-3 nav-link m-1 catMenu" to="/torte">Torte</NavLink>
        <NavLink className="p-2 px-3 nav-link m-1 catMenu" to="/keksi">Keksi</NavLink>
        <NavLink className="p-2 px-3 nav-link m-1 catMenu" to="/monoporcije">Monoporcije</NavLink>
        <NavLink className="p-2 px-3 nav-link m-1 catMenu" to="/veganske">Veganske</NavLink>
        <NavLink className="p-2 px-3 nav-link m-1 catMenu" to="/slatkisto">Slatki sto</NavLink>
      </div>
      <div className="mt-2 torte">
        {/* Obavezno ostavite <Outlet> komponentu ovde */}
        <Outlet />
      </div>
    </div>
  );
}

export default Home;




