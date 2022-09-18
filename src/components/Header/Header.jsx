import { Link } from 'react-router-dom';
import { IoWalletOutline } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';

import { FiPlay } from 'react-icons/fi';

import './header.scss';
import { useState } from 'react';

export default function Header() {

  // change nav style when scrolling
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const changeHeader = () => {
    if (window.scrollY >= 10) {
      setIsScrolled(true);
    }
    else {
      setIsScrolled(false);
    }
  }

  window.addEventListener('scroll', changeHeader);

  const handleClick = () => {
    
  }

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container container">
        <Link to='/'>
          <div className="logo">
            <img src="./images/header/logo.png" alt="" />
          </div>
        </Link>
        <nav className='navbar'>
          <Link to='/#' className="nav-link">Marketplace</Link>
          <Link to='/#' className="nav-link">Swap</Link>
          <Link to='/#' className="nav-link">Stake</Link>
          <Link to='/#' className="nav-link">Pool</Link>
          <Link to='/#' className="nav-link">Farm</Link>
          <Link to='/#' className="nav-link">Booster</Link>
        </nav>


        <div className="buttons">
          <button className="btn btn-primary btn-with-icon"><IoWalletOutline size={16} color='#fff' /> Connect Wallet</button>
          <button className="btn btn-secondary btn-with-icon"><FiPlay size={16} color='#fff' /> Play Game</button>
          <div className="hamburger-menu" onClick={(e) => handleClick(e)}>
            <GiHamburgerMenu color='#197aff' size={24} />
          </div>
        </div>
      </div>
    </header>
  )
}
