import Head from "next/head";
// import styles from "../../styles/home.module.scss";
import Differentials from "../components/Differentials";
import Main from "../components/Main";
import Plans from "../components/Plans";
import Testimonials from "../components/Testimonials";
import Units from "../components/Units";

export default function Home() {
  return (
    <>
      <Head>
        <title>BG Fitness - Início</title>
      </Head>
      <Main />
      <Differentials />
      <Plans planList={[]} title="Nossos Planos" />
      <Units title="Nossas unidades" />
      <Testimonials />
    </>
  );
}
