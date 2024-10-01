import React from 'react'
import { FaUserAlt, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>
        INGN
      </div>
      <ul className={styles.navLinks}>
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
        <FaBars className={styles.icon} />
      </div>
    </nav>
  );
};