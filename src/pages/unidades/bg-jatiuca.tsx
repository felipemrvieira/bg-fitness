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
    title: "Unidade BG Jatiúca",
    description:
      "Em nossas unidades você encontra maquinário exclusivo e profissionais dedicados a cuidar da qualidade dos seus treinos. Conheça nossa unidade hoje mesmo!",
    location: { lat: -23.56498, lng: -46.63818 },
    plans: [
      {
        title: "BG Gold",
        price: "R$ 119,90",
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
      hour: "6:20",
      classes: [
        { id: 1, name: "BG Bike" },
        { id: 2, name: "" },
        { id: 3, name: "BG Bike" },
        { id: 4, name: "" },
        { id: 5, name: "BG Bike" },
      ],
    },
    {
      hour: "7:00",
      classes: [
        { id: 1, name: "" },
        { id: 2, name: "BG Cross Funcional" },
        { id: 3, name: "" },
        { id: 4, name: "BG Cross Funcional" },
        { id: 5, name: "" },
      ],
    },
    {
      hour: "7:15",
      classes: [
        { id: 1, name: "BG ABS/Alongamento" },
        { id: 2, name: "" },
        { id: 3, name: "BG ABS/Alongamento" },
        { id: 4, name: "" },
        { id: 5, name: "BG ABS/Alongamento" },
      ],
    },
    {
      hour: "8:00",
      classes: [
        { id: 1, name: "BG Dance" },
        { id: 2, name: "Zumba" },
        { id: 3, name: "BG Dance" },
        { id: 4, name: "Zumba" },
        { id: 5, name: "BG Ritmos" },
      ],
    },
    {
      hour: "18:00",
      classes: [
        { id: 1, name: "BG Bike" },
        { id: 2, name: "Zumba" },
        { id: 3, name: "BG Bike" },
        { id: 4, name: "Zumba" },
        { id: 5, name: "" },
      ],
    },
    {
      hour: "19:00",
      classes: [
        { id: 1, name: "BG Dance" },
        { id: 2, name: "BG Dance" },
        { id: 3, name: "BG Dance" },
        { id: 4, name: "BG Dance" },
        { id: 5, name: "BG Dance" },
      ],
    },
  ];

  const photos = [
    "/images/jatiuca/1.jpg",
    "/images/jatiuca/2.jpg",
    "/images/jatiuca/3.jpg",
    "/images/jatiuca/4.jpg",
    "/images/jatiuca/5.jpg",
    "/images/jatiuca/6.jpg",
    "/images/jatiuca/7.jpg",
    "/images/jatiuca/8.jpg",
    "/images/jatiuca/9.jpg",
    "/images/jatiuca/10.jpg",
    "/images/jatiuca/11.jpg",
    "/images/jatiuca/12.jpg",
    "/images/jatiuca/13.jpg",
    "/images/jatiuca/14.jpg",
    "/images/jatiuca/15.jpg",
    "/images/jatiuca/16.jpg",
    "/images/jatiuca/17.jpg",
  ];

  const lat = -9.64821;
  const lng = -35.70299;

  return (
    <>
      <Head>
        <title>{`BG Fitness - ${info.title}`}</title>
      </Head>
      <UnitHeader cover={"/images/jatiuca/1.jpg"} />
      <UnitDescription title={info.title} description={info.description} />
      <UnitGallery photos={photos} />
      <UnitMap lat={lat} lng={lng} />
      <ClassesTable classes={classes} title="Programação de aulas da unidade" />
      <Plans title="Planos da unidade" planList={info.plans} />
      <Units title="Conheça outras unidades" />
    </>
  );
}
