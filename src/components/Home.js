import { NavLink, Navigate, Outlet, useLocation } from "react-router-dom";

import Loader from "./Loader";
import { useSelector } from 'react-redux';

function Home() {

  const tabasIcons = {
    keksi:"https://raw.githubusercontent.com/ermin1990/glutenfree/master/src/components/tabs/Keksi.svg",
    torte:"https://raw.githubusercontent.com/ermin1990/glutenfree/master/src/components/tabs/Torte.svg",
    monoporcije:"https://raw.githubusercontent.com/ermin1990/glutenfree/master/src/components/tabs/Monoporcije.svg",
    sirove:"https://raw.githubusercontent.com/ermin1990/glutenfree/master/src/components/tabs/Sirove.svg",
    slatkisto:"https://raw.githubusercontent.com/ermin1990/glutenfree/master/src/components/tabs/Slatkistol.svg",
    veganske:"https://raw.githubusercontent.com/ermin1990/glutenfree/master/src/components/tabs/Veganske.svg"
  }

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
      <p className='m-0 mt-2 p-1 text-center'><strong>Kategorije</strong></p>
      <div className="categoryMenu d-flex flex-row  overflow-x-scroll">
        <NavLink className="p-2 px-3 nav-link m-1 catMenu" to="/torte"><img src={tabasIcons.torte} alt="Torte" height={20}/> Torte</NavLink>
        <NavLink className="p-2 px-3 nav-link m-1 catMenu" to="/keksi"><img src={tabasIcons.keksi} height={20} alt="Keksi" />  Keksi</NavLink>
        <NavLink className="p-2 px-3 nav-link m-1 catMenu" to="/monoporcije"><img src={tabasIcons.monoporcije} height={20} alt="Monoporcije" />   Monoporcije</NavLink>
        <NavLink className="p-2 px-3 nav-link m-1 catMenu" to="/veganske"><img src={tabasIcons.veganske} height={20} alt="Veganske" />   Veganski kutak</NavLink>
        <NavLink className="p-2 px-3 nav-link m-1 catMenu" to="/slatkisto"><img src={tabasIcons.slatkisto} height={20} alt="Slatki sto" />  Slatki sto</NavLink>
      </div>
      <div className="mt-2 torte">
        {/* Obavezno ostavite <Outlet> komponentu ovde */}
        <Outlet />
      </div>
    </div>
  );
}

export default Home;




