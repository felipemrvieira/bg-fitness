import Head from "next/head";
// import styles from "../../styles/home.module.scss";
import Section from "../components/PageSection";
import Units from "../components/Units";

export default function Trabalhe() {
  return (
    <>
      <Head>
        <title>BG Fitness - Trabalhe conosco!</title>
      </Head>

      <Section title="Trabalhe Conosco">
        <div>
          Deseja fazer parte do time BG Fitness?
          <br /> Envie seu currículo atualizado para gerencia@bgfitness.com.br
          informando qual a vaga deseja.
        </div>
      </Section>
    </>
  );
}
