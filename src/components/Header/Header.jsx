import { Link } from 'react-router-dom';
import { IoWalletOutline } from 'react-icons/io5';
import { FiPlay } from 'react-icons/fi';

import './header.scss';
import { useState } from 'react';

export default function Header() {

  // change nav style when scrolling
  const [isScrolled, setIsScrolled] = useState(false);


  const changeHeader = () => {
    if (window.scrollY >= 10) {
      setIsScrolled(true);
    }
    else {
      setIsScrolled(false);
    }
  }

  window.addEventListener('scroll', changeHeader);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container container">
        <Link to='/'>
          <div className="logo">
            <img src="./images/header/logo.png" alt="" />
          </div>
        </Link>
        <nav className='navbar'>
          <Link to='/marketplace' className="nav-link">Marketplace</Link>
          <Link to='/swap' className="nav-link">Swap</Link>
          <Link to='/stake' className="nav-link">Stake</Link>
          <Link to='/pool' className="nav-link">Pool</Link>
          <Link to='/farm' className="nav-link">Farm</Link>
          <Link to='/booster' className="nav-link">Booster</Link>
        </nav>
        <div className="buttons">
          <button className="btn btn-primary btn-with-icon"><IoWalletOutline size={16} color='#fff' /> Connect Wallet</button>
          <button className="btn btn-secondary btn-with-icon"><FiPlay size={16} color='#fff' /> Play Game</button>
        </div>
      </div>
    </header>
  )
}
