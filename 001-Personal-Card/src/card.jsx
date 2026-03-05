import cardImage from "/public/assets/card-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Info from "./info.jsx";

function Card() {
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImg = (e) => {
    setSelectedImg({
      src: e.target.src,
      alt: e.target.alt,
    });
  };

  const closeOverlay = () => {
    setSelectedImg(null);
  };
  const [showInfo, setShowInfo] = useState(false);
  const showInfoCard = () => {
    setShowInfo(true);
  };

  return (
    <>
      {!showInfo ? (
        <div className="main">
          <div className="card">
            <img onClick={handleImg} src={cardImage} alt="card-image" />
            <h2>Modev101</h2>
            <p>
              Im an MCS university student and I like coding and building stuff
            </p>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="arrow-right"
              onClick={showInfoCard}
            />
          </div>
        </div>
      ) : (
        <Info />
      )}

      {selectedImg && (
        <div className="overlay" onClick={closeOverlay}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImg.src} alt={selectedImg.alt} />
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
