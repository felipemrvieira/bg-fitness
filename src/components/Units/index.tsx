import React from "react";
// import Link from "next/link";

import units from "./units.module.scss";
import Farol from "./img/farol.jpeg";
import Biu from "./img/biu.webp";
import Jatiuca from "./img/praia.jpg";
import Image from "next/image";
import Button from "../Button";

interface Props {
  title: string;
}

const Units: React.FC<Props> = ({ title }) => {
  return (
    <section className={units.sectionContainer}>
      <div className={units.sectionContent}>
        <h2 className={units.sectionTitle}>{title}</h2>
        <div className={units.units}>
          <div className={units.unit}>
            <div className={units.unitHeader}>
              <Image className={units.unitPic} src={Biu} alt="Unidade BG Biu" />
            </div>
            <div className={units.unitBody}>
              <span>Unidade</span>
              <h3 className={units.unitTitle}>BG Benedito Bentes</h3>
              <p className={units.unitDescription}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                laborum et vero quibusdam!
              </p>
              <Button label="Fazer tour virtual" />
            </div>
          </div>
          <div className={units.unit}>
            <div className={units.unitHeader}>
              <Image
                className={units.unitPic}
                src={Farol}
                alt="Unidade BG Biu"
              />
            </div>
            <div className={units.unitBody}>
              <span>Unidade</span>
              <h3 className={units.unitTitle}>BG Farol</h3>
              <p className={units.unitDescription}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                laborum et vero quibusdam!
              </p>
              <Button label="Fazer tour virtual" />
            </div>
          </div>
          <div className={units.unit}>
            <div className={units.unitHeader}>
              <Image
                className={units.unitPic}
                src={Jatiuca}
                alt="Unidade BG Biu"
              />
            </div>
            <div className={units.unitBody}>
              <span>Unidade</span>
              <h3 className={units.unitTitle}>BG Jatiúca</h3>
              <p className={units.unitDescription}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                laborum et vero quibusdam!
              </p>
              <Button label="Fazer tour virtual" />
            </div>
          </div>
          <div className={units.unit}>
            <div className={units.unitHeader}>
              <Image className={units.unitPic} src={Biu} alt="Unidade BG Biu" />
            </div>
            <div className={units.unitBody}>
              <span>Unidade</span>
              <h3 className={units.unitTitle}>BG Ponta Verde</h3>
              <p className={units.unitDescription}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                laborum et vero quibusdam!
              </p>
              <Button label="Fazer tour virtual" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Units;
