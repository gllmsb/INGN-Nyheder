import React, { useState } from 'react'
import { FaUserAlt, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>
        <Link to="/">INGN</Link>
      </div>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ''}`}>
        <li><Link to="/">Alle</Link></li>
        <li><Link to="/indland">Indland</Link></li>
        <li><Link to="/udland">Udland</Link></li>
        <li><Link to="/teknologi">Teknologi</Link></li>
        <li><Link to="/sport">Sport</Link></li>
        <li><Link to="/politik">Politik</Link></li>
        <li><Link to="/samfund">Samfund</Link></li>
      </ul>

      <div className={styles.icons}>
        <FaUserAlt className={styles.icon} />
        <FaBars className={styles.icon} onClick={toggleMenu} />
      </div>
    </nav>
  );
};