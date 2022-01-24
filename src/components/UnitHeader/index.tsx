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
  cover?: string;
}

const UnitHeader: React.FC<Props> = ({ title, cover }) => {
  return (
    <section className={unitHeader.sectionContainer}>
      <div className={unitHeader.sectionContent}>
        <div className={unitHeader.imageWrapper}>
          <Image
            className={unitHeader.unitPic}
            src={cover}
            alt="Unidade BG Biu"
            // width={260}
            // height={56}
            layout="fill"
          />
        </div>

        <h2 className={unitHeader.sectionTitle}>{title}</h2>
      </div>
    </section>
  );
};

export default UnitHeader;
