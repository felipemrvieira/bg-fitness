import React from "react";
// import Link from "next/link";
import Table from "react-bootstrap/Table";

import unitHeader from "./unitHeader.module.scss";

import Image from "next/image";
import Farol from "./img/farol.jpeg";
import Biu from "./img/biu.webp";
import Jatiuca from "./img/praia.jpg";

interface Props {
  title?: string;
}

const UnitHeader: React.FC<Props> = ({ title }) => {
  return (
    <section className={unitHeader.sectionContainer}>
      <div className={unitHeader.sectionContent}>
        <Image
          className={unitHeader.unitPic}
          src={Farol}
          alt="Unidade BG Biu"
          layout="fill"
        />

        <h2 className={unitHeader.sectionTitle}>{title}</h2>
      </div>
    </section>
  );
};

export default UnitHeader;
