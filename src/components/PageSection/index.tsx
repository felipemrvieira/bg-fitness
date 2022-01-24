import React, { Children } from "react";
import Link from "next/link";

import section from "./section.module.scss";

interface Props {
  title: string;
}

const Section: React.FC<Props> = ({ title, children }) => {
  return (
    <section className={section.sectionContainer}>
      <div className={section.sectionContent}>
        <h2 className={section.sectionTitle}>{title}</h2>
        <div className={section.content}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
