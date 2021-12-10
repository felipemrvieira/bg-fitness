import React from "react";
// import Link from "next/link";
import Image from "next/image";

import testimonials from "./testimonials.module.scss";
import alessandro from "./img/alessandro.png";
import ariana from "./img/ariana.png";
import jose from "./img/jose.png";
import kitty from "./img/kitty.png";
import lucas from "./img/lucas.png";
import rachel from "./img/rachel.png";
import renato from "./img/renato.png";

const Testimonials: React.FC = () => {
  return (
    <section className={testimonials.sectionContainer}>
      <div className={testimonials.sectionContent}>
        <div className={testimonials.testimonialsHeader}>
          <span>Depoimentos</span>
          <p>O que nossos clientes dizem sobre nós</p>
        </div>
        <div className={testimonials.testimonials}>
          <div className={testimonials.testimonial}>
            <p>
              &quot;Fiz uma aula experimental na BG e quase fiz a matrícula ao
              fim do treino. Tanto o atendimento dos funcionários, quanto a
              estrutura e maquinários não deixaram nada a desejar.
              Recomendo!&quot;
            </p>
            <div className={testimonials.writter}>
              <div className={testimonials.writterPicWrapper}>
                <Image
                  className={testimonials.writterPic}
                  src={lucas}
                  alt="Unidade BG Biu"
                />
              </div>
              <div className={testimonials.writterName}>Lucas Santos</div>
            </div>
          </div>
          <div className={testimonials.testimonial}>
            <p>
              &quot;Academia TOP, com uma boa quantidade de equipamentos e
              disponibiliza uma variedade de aulas. Os professores são bem
              atenciosos e capacitados.&quot;
            </p>
            <div className={testimonials.writter}>
              <div className={testimonials.writterPicWrapper}>
                <Image
                  className={testimonials.writterPic}
                  src={rachel}
                  alt="Unidade BG Biu"
                />
              </div>
              <div className={testimonials.writterName}>
                Rachel Barbosa Acioli
              </div>
            </div>
          </div>
          <div className={testimonials.testimonial}>
            <p>
              &quot;Excelente academia a BGFitness,a unidade Jatiúca tem um
              espaço perfeito, maquinários modernos e profissionais muito
              capacitados e prontos para ajudar o cliente em todas as
              necessidades.&quot;
            </p>
            <div className={testimonials.writter}>
              <div className={testimonials.writterPicWrapper}>
                <Image
                  className={testimonials.writterPic}
                  src={kitty}
                  alt="Unidade BG Biu"
                />
              </div>
              <div className={testimonials.writterName}>Kitty Gomes</div>
            </div>
          </div>
          <div className={testimonials.testimonial}>
            <p>
              &quot;Academia muito boa ampla, com equipamentos de primeira,
              obedecem todas as normas sanitárias e com ótimos atendentes&quot;
            </p>
            <div className={testimonials.writter}>
              <div className={testimonials.writterPicWrapper}>
                <Image
                  className={testimonials.writterPic}
                  src={alessandro}
                  alt="Unidade BG Biu"
                />
              </div>
              <div className={testimonials.writterName}>Alessandro Mendes</div>
            </div>
          </div>
          <div className={testimonials.testimonial}>
            <p>
              &quot;Academia bem equipada, com grande diversidade de aulas e sem
              dúvidas tem a melhor assistência de profissionais das academias
              aqui de Maceió! Recomendo super!!&quot;
            </p>
            <div className={testimonials.writter}>
              <div className={testimonials.writterPicWrapper}>
                <Image
                  className={testimonials.writterPic}
                  src={ariana}
                  alt="Unidade BG Biu"
                />
              </div>
              <div className={testimonials.writterName}>Ariana Magalhães</div>
            </div>
          </div>
          <div className={testimonials.testimonial}>
            <p>
              &quot;Equipamentos Top, refrigerado, super limpo, muitos
              profissionais para dar orientação, estacionamento, vestiário com
              chuveiros e um ótimo preço. Recomendo.&quot;
            </p>
            <div className={testimonials.writter}>
              <div className={testimonials.writterPicWrapper}>
                <Image
                  className={testimonials.writterPic}
                  src={renato}
                  alt="Unidade BG Biu"
                />
              </div>
              <div className={testimonials.writterName}>Renato Prado</div>
            </div>
          </div>
          <div className={testimonials.testimonial}>
            <p>
              &quot;Lugar ótimo! conforto e segurança a atenção dos
              profissionais são sem sombra de dúvidas ótima ! &quot;
            </p>
            <div className={testimonials.writter}>
              <div className={testimonials.writterPicWrapper}>
                <Image
                  className={testimonials.writterPic}
                  src={jose}
                  alt="Unidade BG Biu"
                />
              </div>
              <div className={testimonials.writterName}>José Souza</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
