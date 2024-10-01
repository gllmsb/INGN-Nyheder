import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';
import { Footer } from '../components/Footer/Footer';

export const MainLayout = () => {
  return (
    <div className={styles.MainLayout}>
            <Navbar/>
        <main className={styles.mainContent}>
            <Outlet/>   
        </main>
        <Footer/>
    </div>
  )
}
