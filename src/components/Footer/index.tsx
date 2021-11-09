import React from "react";
import Link from "next/link";

import footer from "./footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={footer.footerContainer}>
      <div className={footer.footerContent}>
        <img src="/images/logo.png" alt="Logo BG Fitness" />
        <nav>
          <div className={footer.navItem}>
            <div className={footer.navLabel}>Legal</div>
            <a className={footer.navLink}>Regulamentos</a>
            <a className={footer.navLink}>Termos de uso da academia</a>
            <a className={footer.navLink}>Contratos</a>
          </div>
          <div className={footer.navItem}>
            <div className={footer.navLabel}>Institucional</div>
            <a className={footer.navLink}>Sobre</a>
            <a className={footer.navLink}>Unidades</a>
            <a className={footer.navLink}>Trabalhe conosco</a>
          </div>
          <div className={footer.navItem}>
            <div className={footer.navLabel}>Redes Sociais</div>
            <a className={footer.navLink}>Instagram</a>
            <a className={footer.navLink}>Youtube</a>
            <a className={footer.navLink}>Spotify</a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
