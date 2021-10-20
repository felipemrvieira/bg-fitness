import Head from "next/head";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>BG Fitness - Início</title>
      </Head>
      <h1 className={styles.title}>Home</h1>
    </>
  );
}
