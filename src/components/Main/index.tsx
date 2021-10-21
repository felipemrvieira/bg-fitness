import React from "react";
// import Link from "next/link";

import main from "./main.module.scss";

const Main: React.FC = () => {
  return (
    <section className={main.sectionContainer}>
      <div className={main.sectionContent}>
        <div className={main.callToAction}>
          <span>Lorem ipsum dolor sit amet</span>
          <h1>Academia pertinho de você, do seu jeito!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
            consectetur adipisicing elit.
          </p>
          <div className={main.buttonWrapper}>
            <div className={main.button}></div>
            <a>Saiba mais</a>
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
