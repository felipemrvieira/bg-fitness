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
    title: "Unidade BG Ponta Verde",
    description:
      "Em nossas unidades você encontra maquinário exclusivo e profissionais dedicados a cuidar da qualidade dos seus treinos. Conheça nossa unidade hoje mesmo!",
    location: { lat: -23.56498, lng: -46.63818 },
    plans: [
      {
        title: "BG Gold",
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
      hour: "6:15",
      classes: [
        { id: 1, name: "BG Cross Funcional" },
        { id: 2, name: "" },
        { id: 3, name: "BG Cross Funcional" },
        { id: 4, name: "" },
        { id: 5, name: "" },
      ],
    },
    {
      hour: "7:15",
      classes: [
        { id: 1, name: "Alongamento / Mobil." },
        { id: 2, name: "BG Spinning" },
        { id: 3, name: "Alongamento / Mobil." },
        { id: 4, name: "BG Spinning" },
        { id: 5, name: "" },
      ],
    },
    {
      hour: "8:00",
      classes: [
        { id: 1, name: "BG Zumba" },
        { id: 2, name: "BG Dance" },
        { id: 3, name: "BG Zumba" },
        { id: 4, name: "BG Dance" },
        { id: 5, name: "" },
      ],
    },
    {
      hour: "9:00",
      classes: [
        { id: 1, name: "" },
        { id: 2, name: "BG Localizada" },
        { id: 3, name: "" },
        { id: 4, name: "BG Localizada" },
        { id: 5, name: "" },
      ],
    },
    {
      hour: "18:00",
      classes: [
        { id: 1, name: "BG Spinning" },
        { id: 2, name: "BG ABS" },
        { id: 3, name: "BG Spinning" },
        { id: 4, name: "BG ABS" },
        { id: 5, name: "" },
      ],
    },
    {
      hour: "19:00",
      classes: [
        { id: 1, name: "BG Zumba" },
        { id: 2, name: "BG Dance" },
        { id: 3, name: "BG Zumba" },
        { id: 4, name: "BG Dance" },
        { id: 5, name: "" },
      ],
    },
    {
      hour: "20:00",
      classes: [
        { id: 1, name: "BG Jump" },
        { id: 2, name: "" },
        { id: 3, name: "BG Jump" },
        { id: 4, name: "" },
        { id: 5, name: "" },
      ],
    },
  ];

  const photos = [
    "/images/pontaverde/1.JPG",
    "/images/pontaverde/2.JPG",
    "/images/pontaverde/3.JPG",
    "/images/pontaverde/4.JPG",
    "/images/pontaverde/5.JPG",
    "/images/pontaverde/6.JPG",
    "/images/pontaverde/7.JPG",
    "/images/pontaverde/8.JPG",
    "/images/pontaverde/9.JPG",
    "/images/pontaverde/10.JPG",
    "/images/pontaverde/11.JPG",
    "/images/pontaverde/12.JPG",
    "/images/pontaverde/13.JPG",
  ];

  const lat = -9.66345;
  const lng = -35.70175;

  return (
    <>
      <Head>
        <title>{`BG Fitness - ${info.title}`}</title>
      </Head>
      <UnitHeader cover={"/images/pontaverde/1.jpg"} />
      <UnitDescription title={info.title} description={info.description} />
      <UnitGallery photos={photos} />
      <UnitMap lat={lat} lng={lng} />
      <ClassesTable classes={classes} title="Programação de aulas da unidade" />
      <Plans title="Planos da unidade" planList={info.plans} />
      <Units title="Conheça outras unidades" />
    </>
  );
}
