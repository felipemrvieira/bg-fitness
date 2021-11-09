import React, { useState, useCallback } from "react";
import Button from "../Button";
// import Link from "next/link";

import unitDescription from "./unitDescription.module.scss";

const UnitDescription: React.FC = () => {
  return (
    <section className={unitDescription.sectionContainer}>
      <div className={unitDescription.sectionContent}>
        <h2 className={unitDescription.sectionTitle}>
          Unidade BG Benedito Bentes
        </h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat
            ducimus iste aut vero? Harum voluptates expedita quidem eius
            inventore aliquid accusamus quos atque, officiis ipsa cum,
            blanditiis voluptatem quas. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Reprehenderit deserunt corrupti adipisci eaque
            eveniet, laboriosam tempora saepe modi porro quos et vel corporis
            laborum exercitationem debitis! Fugit ea provident quibusdam?
          </p>
          <Button
            label="Matricule-se hoje mesmo!"
            style={{ margin: "36px auto 12px auto", width: "450px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default UnitDescription;
