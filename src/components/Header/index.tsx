import React from "react";
import Link from "next/link";

import header from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={header.headerContainer}>
      <div className={header.headerContent}>
        <Link href="/">
          <img src="/images/logo.png" alt="Logo BG Fitness" />
        </Link>{" "}
        <nav>
          <Link href="/unidades">
            <a>Unidades</a>
          </Link>

          <a>Conheça</a>
          <a>Matricule-se</a>
          <a>Atendimento</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
