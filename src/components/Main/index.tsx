import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";

import main from "./main.module.scss";

const Main: React.FC = () => {
  return (
    <section className={main.sectionContainer}>
      <div className={main.sectionContent}>
        <div className={main.callToAction}>
          <span>Conheça a BG Fitness</span>
          <h1>Academia pertinho de você, do seu jeito!</h1>
          <p>
            Com 4 unidades em bairros bem localizados, certamente há uma BG
            pertinho de você. Vem conhecer!
          </p>
          <div className={main.buttonWrapper}>
            <Link href="http://www.bgfitness.com.br/BG_MATRICULA/">
              <a target="_blank">
                <div className={main.button}>
                  <ArrowForwardIosIcon className={main.buttonIcon} />
                </div>
                <span>Quero me matricular!</span>
              </a>
            </Link>
          </div>
        </div>
        <div className={main.video}>
          <iframe
            width="100%"
            height="380"
            src="https://www.youtube.com/embed/9kOiZOqdJAU?rel=0&amp;controls=0&amp;showinfo=0"
            frameBorder="0"
            // gesture="media"
            allow="encrypted-media"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Main;
