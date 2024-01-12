
import Logo from '../components/Logo';
import { NavLink } from 'react-router-dom';
import { BiSolidCake } from 'react-icons/bi';
import { MdWoman } from 'react-icons/md';
import { HiClipboardList } from 'react-icons/hi';
import { GiOrangeSlice } from 'react-icons/gi';

function Menu() {


  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid position-relative text-center">

        <button
          className="navbar-toggler bg-color2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-start bg-color2 "
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title d-flex m-auto" id="offcanvasNavbarLabel">
              <Logo className="align-items-md-center "  />
            </h5>
            <button
              type="button"
              className="btn-close text-white bg-color2"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body d-flex flex-row justify-content-center">
            <ul className="navbar-nav gap-2">
              <li className="nav-item catMenu" data-bs-dismiss="offcanvas" >
                <NavLink
                  to="/"
                  className="nav-link"
                >
                  <BiSolidCake /> Početna
                </NavLink>
              </li>
              <li className="nav-item catMenu" data-bs-dismiss="offcanvas">
                <NavLink
                  to="/howtocut"
                  className="nav-link"
                >
                  <GiOrangeSlice/> Kako sjeći tortu
                </NavLink>
              </li>
              <li className="nav-item catMenu" data-bs-dismiss="offcanvas">
                <NavLink
                  to="/about"
                  className="nav-link"
                >
                  <MdWoman/>  O meni
                </NavLink>
              </li>
              <li className="nav-item catMenu" data-bs-dismiss="offcanvas">
                <NavLink
                  to="/info"
                  className="nav-link"
                >
                  <HiClipboardList/> Važne informacije
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Menu;
