import React, { useState } from "react";
import { Row, Col } from "antd";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import video1 from "../../Assets/Projects/Video1.mp4";
import video2 from "../../Assets/Projects/Video2.mp4";
import Image3 from "../../Assets/Projects/3.jpg";
import Image4 from "../../Assets/Projects/4.jpg";
import Image06 from "../../Assets/Projects/06.jpg";
import Image11F from "../../Assets/Projects/11-F.jpg";
import Image1748492272991 from "../../Assets/Projects/1748492272991.jpg";
import ImageArtWork03 from "../../Assets/Projects/Art Work-03.jpg";
import ImageBPrint from "../../Assets/Projects/B-Print.jpg";
import ImageBeer02 from "../../Assets/Projects/BEER-02.jpg";
import ImageBeer03 from "../../Assets/Projects/BEER-03.jpg";
import ImageBeerXmasFinal from "../../Assets/Projects/BEER-XMAS-Final.jpg";
import ImageBKKV01 from "../../Assets/Projects/BK KV-01.jpg";
import ImageBrands from "../../Assets/Projects/Brands.jpg";
import ImageCancer from "../../Assets/Projects/Cancer.jpg";
import ImageCloseup from "../../Assets/Projects/closeup.jpg";
import ImageCloseup2 from "../../Assets/Projects/Closeup2.jpg";
import ImageCoverBF2 from "../../Assets/Projects/Cover-B-F-2.jpg";
import ImageCoverMock from "../../Assets/Projects/Cover-mock.jpg";
import ImageDoubleSpread from "../../Assets/Projects/Double-spread.jpg";
import ImageExpo from "../../Assets/Projects/Expo.jpg";
import ImageExpo2 from "../../Assets/Projects/Expo2.jpg";
import ImageGift1 from "../../Assets/Projects/Gift1.jpg";
import ImageGift5 from "../../Assets/Projects/Gift5.jpg";
import ImageIVF from "../../Assets/Projects/IVF.jpg";
import ImageKV2 from "../../Assets/Projects/kv2.jpg";
import ImageLeaflet01 from "../../Assets/Projects/Leaflet-01.jpg";
import ImageLogo from "../../Assets/Projects/Logo.jpg";
import ImageLogo2 from "../../Assets/Projects/Logo2.jpg";
import ImageMagicCoconut from "../../Assets/Projects/Magic-coconut.jpg";
import ImageMagicCone from "../../Assets/Projects/Magic-cone.jpg";
import ImageMockNew22 from "../../Assets/Projects/mock-new22.jpg";
import velvet from "../../Assets/Projects/velvet-01.jpg";

import "./ProjectCards.css";

const images = [
  video1, video2, Image3, Image4, Image06, Image11F,
  Image1748492272991, ImageArtWork03, ImageBPrint, ImageBeer02,
  ImageBeer03, ImageBeerXmasFinal, ImageBKKV01, ImageBrands, ImageCancer,
  ImageCloseup, ImageCloseup2, ImageCoverBF2, ImageCoverMock, ImageDoubleSpread,
  ImageExpo, ImageExpo2, ImageGift1, ImageGift5, ImageIVF, ImageKV2,
  ImageLeaflet01, ImageLogo, ImageLogo2, ImageMagicCoconut, ImageMagicCone, ImageMockNew22, velvet
];

function Projects() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleMediaClick = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const currentMedia = images[lightboxIndex];
  const isVideo = currentMedia.endsWith(".mp4");

  return (
    <div className="project-section" style={{ padding: "2rem" }}>
      <Particle />
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row gutter={[16, 16]} justify="center">
          {images.map((media, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <ProjectCard media={media} onClick={() => handleMediaClick(index)} />
            </Col>
          ))}
        </Row>

        {lightboxOpen && (
          <div className="media-modal-overlay" onClick={() => setLightboxOpen(false)}>
            <div className="media-modal-content" onClick={(e) => e.stopPropagation()}>
              {isVideo ? (
                <video
                  src={currentMedia}
                  controls
                  autoPlay
                  preload="metadata"
                  style={{ maxWidth: "90vw", maxHeight: "80vh" }}
                />
              ) : (
                <img
                  src={currentMedia}
                  alt="Project Media"
                  style={{ maxWidth: "90vw", maxHeight: "80vh" }}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
