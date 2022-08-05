import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Stack } from '@mui/material';
import { recipes } from "../utils/recipes";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RecentlyAdded() {
  return (
    <>
      <div className="recently-added-section">
        <h1 className="recently-added-title">Venha descobrir a culinária nordestina!</h1>
        <div className="recently-added-container">
          <button className="carousel-btn">
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <div className="center">
            <h2>Recentemente adicionados</h2>
            <div className="page">
              { recipes.map((recipe, index) => (
                // <CustomImage key={index} imgSrc={recipe.image} pt="11%" />
                <img src={recipe.image} alt="" />
                )) } 
            </div>
          </div>
          <button className="carousel-btn">
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
      <div className="limiter"></div>
    </>
  )
}
