import {BsFacebook, BsInstagram, BsTelephone} from 'react-icons/bs';
import {MdSms} from 'react-icons/md';


const Footer = () => {
  return (
    <footer className="text-dark text-center py-4 ">
      <hr />
      <div className="container">
        <div className="justify-content-evenly gap-3 d-flex flex-wrap">
          
          <a className="nav-link" href="https://instagram.com/gospodjicasarlota" target="_blank" rel="noreferrer"><BsInstagram/> @gospodjicasarlota</a>
          <a className="nav-link" href="https://facebook.com/gospodjicasarlotaIIGlutenfree"><BsFacebook/> Gospođica Šarlota</a>
          <a className="nav-link" href="tel:061 946 958"><BsTelephone/>  061 946 958</a>
          <a className="nav-link" href="sms:+387061946958;?&body=Napište koja vas torta zanima"><MdSms/> SMS 061 946 958</a>
          
        </div>
      </div>
      <div className='m-0 mt-3 opacity-25'>Created by: Ermin Selimović | Infinity Creative Studio</div>
    </footer>
  );
};

export default Footer;
