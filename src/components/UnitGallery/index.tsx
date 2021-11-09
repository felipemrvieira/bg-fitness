import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
// import Link from "next/link";

import unitGallery from "./unitGallery.module.scss";

import Image from "next/image";
import Farol from "./img/farol.jpeg";
import Biu from "./img/biu.webp";
import Jatiuca from "./img/praia.jpg";

const UnitGallery: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    Farol.src,
    Biu.src,
    Jatiuca.src,
    Farol.src,
    Biu.src,
    Jatiuca.src,
    Farol.src,
    Biu.src,
    Jatiuca.src,
    Farol.src,
    Biu.src,
    Jatiuca.src,
    Farol.src,
    Biu.src,
    Jatiuca.src,
    Farol.src,
    Biu.src,
    Jatiuca.src,
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <section className={unitGallery.sectionContainer}>
      <div className={unitGallery.sectionContent}>
        <h2 className={unitGallery.sectionTitle}>Galeria de fotos</h2>
        <div>
          {images.map((src, index) => (
            <Image
              className={unitGallery.unitPic}
              src={src}
              key={index}
              alt="Unidade BG Biu"
              onClick={() => openImageViewer(index)}
              width="150"
              height="150"
            />
          ))}

          {isViewerOpen && (
            <ImageViewer
              src={images}
              currentIndex={currentImage}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default UnitGallery;
