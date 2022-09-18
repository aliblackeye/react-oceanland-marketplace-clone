import { FaMedium, FaTwitter, FaTelegram } from 'react-icons/fa'
import { BsDiscord } from 'react-icons/bs'
import { Link } from 'react-router-dom';

import './footer.scss';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-container container">
        <div className="left">
          <Link to='/'>
            <div className="logo">
              <img src="./images/header/logo.png" alt="" />
            </div>
          </Link>
        </div>
        <div className="right">
          <a href='#' className='social-icon'><FaMedium size={20} /></a>
          <a href='#' className='social-icon'><FaTwitter size={20} /></a>
          <a href='#' className='social-icon'><BsDiscord size={20} /></a>
          <a href='#' className='social-icon'><FaTelegram size={20} /></a>
        </div>
      </div>
    </footer>
  )
}
