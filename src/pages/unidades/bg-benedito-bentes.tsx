import Head from "next/head";
import Plans from "../../components/Plans";
import Units from "../../components/Units";
import ClassesTable from "../../components/ClassesTable";
import UnitHeader from "../../components/UnitHeader";
import UnitGallery from "../../components/UnitGallery";
import dynamic from "next/dynamic";
import UnitDescription from "../../components/UnitDescription";

import Image from "next/image";
import Farol from "./img/farol.jpeg";
import Biu from "./img/biu.webp";
import Jatiuca from "./img/praia.jpg";

export default function Unidades() {
  const UnitMap = dynamic(() => import("../../components/UnitMap"), {
    ssr: false,
  });

  const info = {
    title: "Unidade BG Benedito Bentes",
    description: "Unidades do BG Fitness",
    location: { lat: -23.56498, lng: -46.63818 },
    plans: [
      {
        title: "BG Gold",
        price: "R$ 99,90",
        advantages: [
          "Aulas particulares",
          "Aulas de ginástica",
          "Aulas de musculação",
          "Aulas de pilates",
          "Aulas de crossfit",
          "Aulas de yoga",
        ],
        enrolmentFee: "R$ 129,90",
        annualFee: "R$ 149,90",
      },
      {
        title: "BG Platinum",
        price: "R$ 129,90",
        advantages: [
          "Aulas particulares",
          "Aulas de ginástica",
          "Aulas de musculação",
          "Aulas de pilates",
          "Aulas de crossfit",
          "Aulas de yoga",
        ],
        enrolmentFee: "R$ 129,90",
        annualFee: "R$ 149,90",
      },
    ],
  };

  const photos = [Farol.src, Biu.src, Jatiuca.src];

  const lat = -9.620599;
  const lng = -35.739508;

  return (
    <>
      <Head>
        <title>{`BG Fitness - ${info.title}`}</title>
      </Head>
      <UnitHeader />
      <UnitDescription title={info.title} description={info.description} />
      <UnitGallery photos={photos} />
      <UnitMap lat={lat} lng={lng} />
      <ClassesTable title="Programação de aulas da unidade" />
      <Plans title="Planos da unidade" planList={info.plans} />
      <Units title="Conheça outras unidades" />
    </>
  );
}
