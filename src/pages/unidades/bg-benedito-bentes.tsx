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

  const info = {
    title: "Unidade BG Benedito Bentes",
    description: "Unidades do BG Fitness",
    location: { lat: -23.56498, lng: -46.63818 },
    plans: [
      {
        title: "BG Gold",
        price: "R$ 89,90",
        advantages: [
          "Aulas particulares",
          "Aulas de ginástica",
          "Aulas de musculação",
          "Aulas de pilates",
          "Aulas de crossfit",
          "Aulas de yoga",
        ],
        enrolmentFee: "R$ 89,90",
        annualFee: "R$ 89,90",
      },
      {
        title: "BG Platinum",
        price: "R$ 89,90",
        advantages: [
          "Aulas particulares",
          "Aulas de ginástica",
          "Aulas de musculação",
          "Aulas de pilates",
          "Aulas de crossfit",
          "Aulas de yoga",
        ],
        enrolmentFee: "R$ 89,90",
        annualFee: "R$ 89,90",
      },
    ],
  };

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
