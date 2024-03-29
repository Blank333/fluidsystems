import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className='footer'>
      <p>
        <strong>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</strong>
      </p>
      <ul className='segments'>
        <li>CHEMICALS & PROCESS</li>
        <li>POWER</li>
        <li>WATER & WASTE WATER</li>
        <li>OILS & GAS</li>
        <li>PHARMA</li>
        <li>SUGARS & DISTILLERIES</li>
        <li>PAPER & PULP</li>
        <li>MARINE & DEFENCE</li>
        <li>METAL & MINING</li>
        <li>FOOD & BEVERAGE</li>
        <li>PETROCHEMICAL & REFINERIES</li>
        <li>SOLAR</li>
        <li>BUILDING</li>
        <li>HVAC</li>
        <li>FIRE FIGHTING</li>
        <li>AGRICULTURE & RESIDENTIAL</li>
      </ul>
      <ul className='links'>
        <li>
          <FontAwesomeIcon icon={faPhone} className='phone linkIcon' />
          Toll Free <strong>1800 200 1234</strong>
        </li>
        <li>
          <FontAwesomeIcon icon={faFacebook} className='linkIcon ' />
          <a href='https://www.facebook.com/cripumps'>www.facebook.com/cripumps</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faGlobe} className='linkIcon' />
          <a href='https://www.crigroups.com'>www.crigroups.com</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
