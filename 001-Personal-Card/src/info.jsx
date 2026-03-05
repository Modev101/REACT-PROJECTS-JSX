import cardImage from "/public/assets/info-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import Card from "./card.jsx";

function Info() {
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
        <div className="info">
          <div>
            <h1>My Skills</h1>
            <ul>
              <li>HTML</li>
              <li>
                CSS
                <ul>
                  <li>TailWindCSS</li>
                </ul>
              </li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <ul>
                <li>React</li>
              </ul>
              <li>C/C++</li>
              <li>MAT-LAB</li>
            </ul>
            <div className="profile">
              <img onClick={handleImg} src={cardImage} alt="card-image" />
              <span>
                <FontAwesomeIcon icon={faGithub} className="GitHub" />
                <a href="https://github.com/Modev101" target="_blank">
                  Modev101
                </a>
              </span>
            </div>
          </div>
          <h1>My Projects</h1>
          <p>
            I have accomplished a variety of different themed projects, such as:
          </p>
          <ul className="projects-ul">
            <li>
              <h2>Games:</h2>
              <ul>
                <li>
                  Rock Paper Scissors
                  <a
                    href="https://github.com/Modev101/100JSPROJECT/tree/main/Rock-Paper-Scissors"
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://r-p-s-challenge.netlify.app/"
                    target="_blank"
                  >
                    Netlify
                  </a>
                </li>
                <li>
                  Rock Paper Scissors Lizard Spock
                  <a
                    href="https://github.com/Modev101/100JSPROJECT/tree/main/Rock-Paper-Scissors%20-Lizard-Spock"
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://rpsls-challenge-advanced.netlify.app/"
                    target="_blank"
                  >
                    Netlify
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <h2>Service:</h2>
              <ul>
                <li>
                  IP Tracker Location
                  <a
                    href="https://github.com/Modev101/100JSPROJECT/tree/main/IP-Address-Tracker"
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://ip-tracker-maps.netlify.app/"
                    target="_blank"
                  >
                    Netlify
                  </a>
                </li>
                <li>
                  Shorten URL
                  <a
                    href="https://github.com/Modev101/100JSPROJECT/tree/main/URL-Shortening-API"
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://shorten-link-shortly.netlify.app/"
                    target="_blank"
                  >
                    Netlify
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <h2>Blogs:</h2>
              <ul>
                <li>
                  Manage Landing
                  <a
                    href="https://github.com/Modev101/100JSPROJECT/tree/main/Manage-Landing-Page"
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://managepagelanding101.netlify.app/"
                    target="_blank"
                  >
                    Netlify
                  </a>
                </li>
                <li>
                  Dashboard
                  <a
                    href="https://github.com/Modev101/html_and_css_template4/tree/main/Template4"
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a href="https://templatecuatro.netlify.app/" target="_blank">
                    Netlify
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <h2>Fun:</h2>
              <ul>
                <li>
                  Sorting Countries
                  <a
                    href="https://github.com/Modev101/100JSPROJECT/tree/main/Sorting-Countries-With-API"
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://countries-sorting.netlify.app/"
                    target="_blank"
                  >
                    Netlify
                  </a>
                </li>
                <li>
                  To-Do List
                  <a
                    href="https://github.com/Modev101/100JSPROJECT/tree/main/To-Do%20List-App"
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://todo-list-app-master.netlify.app/"
                    target="_blank"
                  >
                    Netlify
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="arrow-left"
            onClick={showInfoCard}
          />
        </div>
      ) : (
        <Card />
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

export default Info;
