import {BsFacebook, BsInstagram, BsTelephone} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-dark text-center py-4 ">
      <hr />
      <div className="container">
        <div className="justify-content-around gap-3 d-flex flex-wrap">
          
          <Link className="nav-link" to=""><BsFacebook/> Gospođica Šarlota</Link>
          <Link className="nav-link" to="instagram.com/gospodjicasarlota" target="_blank"><BsInstagram/> @gospodjicasarlota</Link>
          <Link className="nav-link" to="tel:061 946 958"><BsTelephone/>  061 946 958</Link>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
