import { useEffect, useState } from 'react';
import { avatar, close, logo, menu } from '../assets';
import Cart from './cart';
function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = async () => {
    setOpenMenu((prev) => !prev);
    const menu = document.querySelector('.nav-list');
    const cash = document.querySelector('.cash');

    menu.classList.toggle('show');
    cash.classList.toggle('show');
  };

  useEffect(() => {
    const closeMenuOnScroll = () => {
      if (openMenu) {
        toggleMenu();
      }
    };

    window.addEventListener('scroll', closeMenuOnScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', closeMenuOnScroll);
    };
  }, [openMenu]);
  return (
    <header className="header">
      <nav className="main-nav" role="navigation">
        <div className="cash"></div>
        <div className="logo-list-divider">
          <img
            src={openMenu ? close : menu}
            alt="menu"
            className="burger"
            width={17}
            height={15}
            onClick={toggleMenu}
          />
          <img src={logo} alt="logo" height={20} width={138} />
          <ul className="nav-list">
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact </a>
            </li>
          </ul>
        </div>
        <div className="cart-img">
          <Cart />
          <img
            src={avatar}
            alt="profile"
            width={54}
            height={54}
            className="avatar"
          />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
