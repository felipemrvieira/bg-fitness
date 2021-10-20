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
            <a>Regulamentos</a>
            <a>Termos de uso da academia</a>
            <a>Contratos</a>
          </div>
          <div className={footer.navItem}>
            <div className={footer.navLabel}>Institucional</div>
            <a>Sobre</a>
            <a>Unidades</a>
            <a>Trabalhe conosco</a>
          </div>
          <div className={footer.navItem}>
            <div className={footer.navLabel}>Redes Sociais</div>
            <a>Instagram</a>
            <a>Youtube</a>
            <a>Spotify</a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
