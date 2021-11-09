import React from "react";
// import Link from "next/link";

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
              <div className={plans.button}>
                <span>a partir de</span>
                <p>R$ 82,90</p>
              </div>
            </header>
            <div className={plans.body}>
              <div>
                <p className={plans.label}>Taxa de adesão R$ 129,90</p>
                <p className={plans.label}>Anuidade R$ 149,90</p>
              </div>
              <div className={plans.advantagesWrapper}>
                <div className={plans.advantage}>
                  <div></div>
                  <p>Vantagem do plano gold</p>
                </div>
                <div className={plans.advantage}>
                  <div></div>
                  <p>Vantagem do plano gold</p>
                </div>
                <div className={plans.advantage}>
                  <div></div>
                  <p>Vantagem do plano gold</p>
                </div>
                <div className={plans.advantage}>
                  <div></div>
                  <p>Vantagem do plano gold</p>
                </div>
                <div className={plans.advantage}>
                  <div></div>
                  <p>Vantagem do plano gold</p>
                </div>
              </div>
            </div>
          </div>

          <div className={plans.plan}>
            <header className={plans.platinum}>
              <span>bg</span>
              <p className={plans.planName}>Platinum</p>
              <div className={plans.button}>
                <span>a partir de</span>
                <p>R$ 82,90</p>
              </div>
            </header>
            <div className={plans.body}>
              <div>
                <p className={plans.label}>Taxa de adesão R$ 129,90</p>
                <p className={plans.label}>Anuidade R$ 149,90</p>
              </div>
              <div className={plans.advantagesWrapper}>
                <div className={plans.advantage}>
                  <div></div>
                  <p>Vantagem do plano gold</p>
                </div>
                <div className={plans.advantage}>
                  <div></div>
                  <p>Vantagem do plano gold</p>
                </div>
                <div className={plans.advantage}>
                  <div></div>
                  <p>Vantagem do plano gold</p>
                </div>
                <div className={plans.advantage}>
                  <div></div>
                  <p>Vantagem do plano gold</p>
                </div>
                <div className={plans.advantage}>
                  <div></div>
                  <p>Vantagem do plano gold</p>
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
