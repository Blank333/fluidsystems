import logo from "../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <img src={logo} alt='logo' className='logo' />
    </header>
  );
}

export default Header;
