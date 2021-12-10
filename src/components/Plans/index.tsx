import React from "react";
import Link from "next/link";

import plans from "./plans.module.scss";

interface Props {
  title: string;
}

const Plans: React.FC<Props> = ({ title }) => {
  return (
    <section className={plans.sectionContainer}>
      <div className={plans.sectionContent}>
        <h2 className={plans.sectionTitle}>{title}</h2>
        <div className={plans.plansWrapper}>
          <div className={plans.plan}>
            <header className={plans.gold}>
              <span>bg</span>
              <p className={plans.planName}>Gold</p>
              <Link href="http://www.bgfitness.com.br/BG_MATRICULA/">
                <a className={plans.button} target="_blank">
                  <span>a partir de</span>
                  <p>R$ 99,90</p>
                </a>
              </Link>
            </header>
            <div className={plans.body}>
              <div>
                <p className={plans.label}>
                  Taxa de adesão <s>R$ 129,90</s>
                </p>
                <p className={plans.label}>
                  Intercalada <s>R$ 149,90</s>
                </p>
              </div>
              <div className={plans.advantagesWrapper}>
                <div className={plans.advantage}>
                  <div></div>
                  <p>TAXA ZERO</p>
                </div>
                <div className={plans.advantage}>
                  <div></div>
                  <p>Acesso à uma unidade</p>
                </div>
                <div className={plans.advantage}>
                  <div></div>
                  <p>Horário livre</p>
                </div>
                <div className={plans.advantage}>
                  <div></div>
                  <p>Acesso à modalidades do horário</p>
                </div>
                <div className={plans.advantage}>
                  <div></div>
                  <p>Cancelamento sem multa após 4 meses</p>
                </div>
              </div>
            </div>
          </div>

          <div className={plans.plan}>
            <header className={plans.platinum}>
              <span>bg</span>
              <p className={plans.planName}>Platinum</p>
              <Link href="http://www.bgfitness.com.br/BG_MATRICULA/">
                <a className={plans.button} target="_blank">
                  <span>a partir de</span>
                  <p>R$ 129,90</p>
                </a>
              </Link>
            </header>
            <div className={plans.body}>
              <div>
                <p className={plans.label}>Taxa de adesão R$ 129,90</p>
                <p className={plans.label}>Intercalada R$ 149,90</p>
              </div>
              <div className={plans.advantagesWrapper}>
                <div className={plans.advantage}>
                  <div></div>
                  <p>Avaliação grátis</p>
                </div>
                <div className={plans.advantage}>
                  <div></div>
                  <p>Acesso à todas as unidades</p>
                </div>
                <div className={plans.advantage}>
                  <div></div>
                  <p>Horário livre</p>
                </div>
                <div className={plans.advantage}>
                  <div></div>
                  <p>Acesso à todas as modalidades</p>
                </div>
                <div className={plans.advantage}>
                  <div></div>
                  <p>Acesso às cadeiras de massagem</p>
                </div>
              </div>
            </div>
            <div className={plans.tag}>Mais popular</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
