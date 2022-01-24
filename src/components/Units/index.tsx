import React from "react";
import Link from "next/link";

import units from "./units.module.scss";
import Farol from "./img/farol.jpeg";
import Biu from "./img/biu.webp";
import Jatiuca from "./img/praia.jpg";
import PontaVerde from "./img/pontaverde.jpg";
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
                Avenida Cachoeira do Meirim, 33 - Benedito Bentes, Maceió - AL,
                57084-040
              </p>
              <Link href="/unidades/bg-benedito-bentes" passHref={true}>
                <a>
                  <Button label="Conheça a unidade" />
                </a>
              </Link>
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
                Avenida Fernandes Lima, 3204a - Gruta de Lourdes, Maceió - AL,
                57052-403
              </p>
              <Link href="/unidades/bg-farol" passHref={true}>
                <a>
                  <Button label="Conheça a unidade" />
                </a>
              </Link>
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
                Rua Marechal Antônio Guedes Muniz, 112 - Jatiúca, Maceió - AL,
                57036-670
              </p>
              <Link href="/unidades/bg-jatiuca" passHref={true}>
                <a>
                  <Button label="Conheça a unidade" />
                </a>
              </Link>
            </div>
          </div>
          <div className={units.unit}>
            <div className={units.unitHeader}>
              <Image
                className={units.unitPic}
                src={PontaVerde}
                alt="Unidade BG Biu"
              />
            </div>
            <div className={units.unitBody}>
              <span>Unidade</span>
              <h3 className={units.unitTitle}>BG Ponta Verde</h3>
              <p className={units.unitDescription}>
                Rua Valdo Omena, 152 - Ponta Verde, Maceió - AL, 57035170
              </p>
              <Link href="/unidades/bg-ponta-verde" passHref={true}>
                <a>
                  <Button label="Conheça a unidade" />
                </a>
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Units;
