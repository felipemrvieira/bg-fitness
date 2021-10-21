import React from "react";
// import Link from "next/link";

import plans from "./plans.module.scss";

const Plans: React.FC = () => {
  return (
    <section className={plans.sectionContainer}>
      <div className={plans.sectionContent}>
        <h2 className={plans.sectionTitle}>Escolha seu plano</h2>
        <div className={plans.plansWrapper}>
          <div className={plans.plan}>
            <header>
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

          <div className={plans.plan}>Platinum</div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
