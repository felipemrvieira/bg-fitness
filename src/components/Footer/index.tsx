import React from "react";
import Link from "next/link";

import footer from "./footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={footer.footerContainer}>
      <div className={footer.footerContent}>
        <Link href="/" passHref={true}>
          <img src="/images/logo.png" alt="Logo BG Fitness" />
        </Link>
        <nav>
          <div className={footer.navItem}>
            <div className={footer.navLabel}>Legal</div>
            <Link href="/regulamentos-e-contratos" passHref={true}>
              <a className={footer.navLink}>Regulamentos e Contratos</a>
            </Link>
            <Link href="/termos-de-uso" passHref={true}>
              <a className={footer.navLink}>Termos de uso da academia</a>
            </Link>
          </div>
          <div className={footer.navItem}>
            <div className={footer.navLabel}>Institucional</div>
            <a className={footer.navLink}>Sobre</a>
            <Link href="/trabalhe-conosco" passHref={true}>
              <a className={footer.navLink}>Trabalhe conosco</a>
            </Link>
          </div>
          <div className={footer.navItem}>
            <div className={footer.navLabel}>Redes Sociais</div>
            <Link href="https://www.instagram.com/bg.fitness/" passHref={true}>
              <a className={footer.navLink}>Instagram</a>
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCRsenFUuLE8TKYqJVSEZruQ/featured"
              passHref={true}
            >
              <a className={footer.navLink}>Youtube</a>
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
