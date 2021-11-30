import React from "react";
// import Link from "next/link";

import differentials from "./differentials.module.scss";

const Differentials: React.FC = () => {
  return (
    <section className={differentials.sectionContainer}>
      <div className={differentials.sectionContent}>
        <div className={differentials.differentials}>
          <div className={differentials.differential}>
            <div className={differentials.box}></div>
            <p>Musculação com maquinário exclusivo</p>
          </div>
          <div className={differentials.differential}>
            <div className={differentials.box}></div>
            <p>Acompanhamento de treino com profissional formado</p>
          </div>
          <div className={differentials.differential}>
            <div className={differentials.box}></div>
            <p>Planos e condições de pagamento especiais</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
