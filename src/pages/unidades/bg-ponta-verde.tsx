import Head from "next/head";
import Plans from "../../components/Plans";
import Units from "../../components/Units";
import ClassesTable from "../../components/ClassesTable";
import UnitHeader from "../../components/UnitHeader";
import UnitGallery from "../../components/UnitGallery";
import dynamic from "next/dynamic";
import UnitDescription from "../../components/UnitDescription";

export default function Unidades() {
  const UnitMap = dynamic(() => import("../../components/UnitMap"), {
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>BG Fitness - Unidade BG Ponta Verde</title>
      </Head>
      <UnitHeader />
      <UnitDescription />
      <UnitGallery />
      <UnitMap />
      <ClassesTable title="Programação de aulas da unidade" />
      <Plans title="Planos da unidade" />
      <Units title="Conheça outras unidades" />
    </>
  );
}
