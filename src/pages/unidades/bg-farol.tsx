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
    title: "Unidade BG Farol",
    description:
      "Em nossas unidades você encontra maquinário exclusivo e profissionais dedicados a cuidar da qualidade dos seus treinos. Conheça nossa unidade hoje mesmo!",
    location: { lat: -23.56498, lng: -46.63818 },
    plans: [
      {
        title: "BG Gold",
        price: "R$ 109,90",
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

  const classes = [
    {
      hour: "7:00",
      classes: [
        { id: 1, name: "BG Cross Funcional" },
        { id: 2, name: "BG Spinning" },
        { id: 3, name: "BG Cross Funcional" },
        { id: 4, name: "BG Spinning" },
        { id: 5, name: "BG GAP/ABS" },
      ],
    },
    {
      hour: "8:00",
      classes: [
        { id: 1, name: "BG Dance" },
        { id: 2, name: "BG Alongamento / Mobil." },
        { id: 3, name: "BG Dance" },
        { id: 4, name: "BG Alongamento / Mobil." },
        { id: 5, name: "BG Dance" },
      ],
    },
    {
      hour: "7:00",
      classes: [
        { id: 1, name: "BG Dance" },
        { id: 2, name: "BG Alongamento" },
        { id: 3, name: "BG Dance" },
        { id: 4, name: "BG Spinning e BG Along." },
        { id: 5, name: "BG Dance" },
      ],
    },
    {
      hour: "18:00",
      classes: [
        { id: 1, name: "BG Funcional" },
        { id: 2, name: "BG Spinning" },
        { id: 3, name: "BG Funcional" },
        { id: 4, name: "BG Spinning" },
        { id: 5, name: "BG Funcional" },
      ],
    },
    {
      hour: "19:00",
      classes: [
        { id: 1, name: "BG Dance" },
        { id: 2, name: "BG Cross Funcional" },
        { id: 3, name: "BG Dance" },
        { id: 4, name: "BG Cross Funcional" },
        { id: 5, name: "BG Dance" },
      ],
    },
    {
      hour: "20:00",
      classes: [
        { id: 1, name: "BG Abdominal" },
        { id: 2, name: "" },
        { id: 3, name: "BG GAP" },
        { id: 4, name: "" },
        { id: 5, name: "" },
      ],
    },
    {
      hour: "20:10",
      classes: [
        { id: 1, name: "" },
        { id: 2, name: "BG Dance" },
        { id: 3, name: "" },
        { id: 4, name: "BG Dance" },
        { id: 5, name: "" },
      ],
    },
  ];

  const photos = [
    "/images/farol/1.jpg",
    "/images/farol/2.jpg",
    "/images/farol/3.jpg",
    "/images/farol/4.jpg",
    "/images/farol/5.jpg",
    "/images/farol/6.jpg",
    "/images/farol/7.jpg",
    "/images/farol/8.jpg",
    "/images/farol/9.jpg",
    "/images/farol/10.jpg",
    "/images/farol/11.jpg",
    "/images/farol/12.jpg",
    "/images/farol/13.jpg",
    "/images/farol/14.jpg",
    "/images/farol/15.jpg",
    "/images/farol/16.jpg",
    "/images/farol/17.jpg",
    "/images/farol/18.jpg",
    "/images/farol/19.jpg",
    "/images/farol/20.jpg",
    "/images/farol/21.jpg",
  ];

  const lat = -9.62131;
  const lng = -35.7387;

  return (
    <>
      <Head>
        <title>{`BG Fitness - ${info.title}`}</title>
      </Head>
      <UnitHeader cover={"/images/farol/1.jpg"} />
      <UnitDescription title={info.title} description={info.description} />
      <UnitGallery photos={photos} />
      <UnitMap lat={lat} lng={lng} />
      <ClassesTable classes={classes} title="Programação de aulas da unidade" />
      <Plans title="Planos da unidade" planList={info.plans} />
      <Units title="Conheça outras unidades" />
    </>
  );
}
