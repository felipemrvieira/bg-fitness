import React, { useState, useCallback } from "react";
import Button from "../Button";
import Link from "next/link";

import unitDescription from "./unitDescription.module.scss";
interface Props {
  title?: string;
  description?: string;
}

const UnitDescription: React.FC<Props> = ({ title, description }) => {
  return (
    <section className={unitDescription.sectionContainer}>
      <div className={unitDescription.sectionContent}>
        <h2 className={unitDescription.sectionTitle}>{title}</h2>
        <div>
          <p>{description}</p>
          <Link href="http://www.bgfitness.com.br/BG_MATRICULA/">
            <a target="_blank">
              <Button
                label="Matricule-se hoje mesmo!"
                style={{ margin: "36px auto 12px auto", width: "450px" }}
              />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UnitDescription;
