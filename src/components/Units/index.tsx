import React from "react";
// import Link from "next/link";

import units from "./units.module.scss";

const Units: React.FC = () => {
  return (
    <section className={units.sectionContainer}>
      <div className={units.sectionContent}>
        <h2 className={units.sectionTitle}>Nossas unidades</h2>
      </div>
    </section>
  );
};

export default Units;
