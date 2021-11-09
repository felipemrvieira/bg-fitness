import React from "react";
import Link from "next/link";
import Image from "next/image";

import header from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={header.headerContainer}>
      <div className={header.headerContent}>
        <Link href="/" passHref={true}>
          <div className={header.logoContainer}>
            <Image
              src="/images/logo.png"
              alt="Logo BG Fitness"
              // width="250"
              // height="58.33"
              layout="fill"
            />
          </div>
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
