import Head from "next/head";
import Plans from "../../components/Plans";
import Units from "../../components/Units";
import ClassesTable from "../../components/ClassesTable";
import UnitHeader from "../../components/UnitHeader";
import UnitGallery from "../../components/UnitGallery";
import dynamic from "next/dynamic";
import UnitDescription from "../../components/UnitDescription";

import Biu from "./img/biu.webp";

export default function Unidades() {
  const UnitMap = dynamic(() => import("../../components/UnitMap"), {
    ssr: false,
  });

  const info = {
    title: "Unidade BG Benedito Bentes",
    description:
      "Em nossas unidades você encontra maquinário exclusivo e profissionais dedicados a cuidar da qualidade dos seus treinos. Conheça nossa unidade hoje mesmo!",
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

  const classes = [
    {
      hour: "6:00",
      classes: [
        { id: 1, name: "BG Cross Funcional" },
        { id: 2, name: "" },
        { id: 3, name: "BG Cross Funcional" },
        { id: 4, name: "" },
        { id: 5, name: "" },
      ],
    },
    {
      hour: "6:40",
      classes: [
        { id: 1, name: "" },
        { id: 2, name: "BG Spinning" },
        { id: 3, name: "" },
        { id: 4, name: "" },
        { id: 5, name: "BG Cross Funcional" },
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
      hour: "17:00",
      classes: [
        { id: 1, name: "BG Alongamento" },
        { id: 2, name: "BG Funcional" },
        { id: 3, name: "BG Along. - ABS" },
        { id: 4, name: "BG Cross Funcional" },
        { id: 5, name: "" },
      ],
    },
    {
      hour: "18:30",
      classes: [
        { id: 1, name: "" },
        { id: 2, name: "BG Zumba" },
        { id: 3, name: "" },
        { id: 4, name: "BG Zumba" },
        { id: 5, name: "" },
      ],
    },
    {
      hour: "19:00",
      classes: [
        { id: 1, name: "BG Cross Funcional" },
        { id: 2, name: "" },
        { id: 3, name: "BG Cross Funcional" },
        { id: 4, name: "" },
        { id: 5, name: "BG Dance" },
      ],
    },
    {
      hour: "20:00",
      classes: [
        { id: 1, name: "BG Cross Funcional" },
        { id: 2, name: "" },
        { id: 3, name: "" },
        { id: 4, name: "BG Spinning" },
        { id: 5, name: "BG Cross Funcional" },
      ],
    },
    {
      hour: "20:10",
      classes: [
        { id: 1, name: "" },
        { id: 2, name: "BG Spinning" },
        { id: 3, name: "" },
        { id: 4, name: "" },
        { id: 5, name: "" },
      ],
    },
    {
      hour: "20:30",
      classes: [
        { id: 1, name: "BG Cross Dance" },
        { id: 2, name: "" },
        { id: 3, name: "BG Dance" },
        { id: 4, name: "" },
        { id: 5, name: "" },
      ],
    },
  ];

  const photos = [
    "/images/biu/1.jpg",
    "/images/biu/2.jpg",
    "/images/biu/3.jpg",
    "/images/biu/4.jpg",
    "/images/biu/5.jpg",
    "/images/biu/6.jpg",
    "/images/biu/7.jpg",
    "/images/biu/8.jpg",
    "/images/biu/9.jpg",
    "/images/biu/10.jpg",
    "/images/biu/11.jpg",
    "/images/biu/12.jpg",
    "/images/biu/13.jpg",
    "/images/biu/14.jpg",
    "/images/biu/15.jpg",
    "/images/biu/16.jpg",
    "/images/biu/17.jpg",
    "/images/biu/18.jpg",
    "/images/biu/19.jpg",
    "/images/biu/20.jpg",
    "/images/biu/21.jpg",
  ];

  const lat = -9.5576419;
  const lng = -35.7438497;

  return (
    <>
      <Head>
        <title>{`BG Fitness - ${info.title}`}</title>
      </Head>
      <UnitHeader cover={"/images/biu/1.jpg"} />
      <UnitDescription title={info.title} description={info.description} />
      <UnitGallery photos={photos} />
      <UnitMap lat={lat} lng={lng} />
      <ClassesTable classes={classes} title="Programação de aulas da unidade" />
      <Plans title="Planos da unidade" planList={info.plans} />
      <Units title="Conheça outras unidades" />
    </>
  );
}
