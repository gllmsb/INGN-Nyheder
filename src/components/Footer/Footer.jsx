import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumn}>
        <h4>Adresse</h4>
        <p>Intet nyt - Godt nyt ApS</p>
        <p>Tulipanvej 232</p>
        <p>7320</p>
        <p>Valby Øster</p>
      </div>
      <div className={styles.footerColumn}>
        <h4>Links</h4>
        <p>vikanweb.dk</p>
        <p>overpådenandenside.dk</p>
        <p>retsinformation.dk</p>
        <p>nogetmednews.dk</p>
      </div>
      <div className={styles.footerColumn}>
        <h4>Politik</h4>
        <p>Privatlivspolitik</p>
        <p>Cookiepolitik</p>
        <p>Købsinformation</p>
        <p>Delingspolitik</p>
      </div>
      <div className={styles.footerColumn}>
        <h4>Kontakt</h4>
        <p>ign@nyhed.dk</p>
        <p>telefon: 23232323</p>
        <p>fax: 123123-333</p>
      </div>
    </footer>
  )
}
