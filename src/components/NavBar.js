// for navbar we use react-burger-menu link-https://www.npmjs.com/package/react-burger-menu
import './Navbar.css';
import { slide as Menu } from 'react-burger-menu';

function showSettings(event) {
  event.preventDefault();
}

function NavBar() {
  return (
    <div>
      <Menu isOpen={false}>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a onClick={showSettings} className="menu-item--small" href="">
          Settings
        </a>
      </Menu>
    </div>
  );
}

export default NavBar;
