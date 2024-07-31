import { useEffect, useState } from "react";
import sliderservice from "../../../services/SliderService";
import { urlImage } from "../../../config";

function Slider() {
  const [sliders, setSliders] = useState([]);
  useEffect(function () {
    (async function () {
      await sliderservice.getByPosition("slideshow").then(function (result) {
        setSliders(result.data.sliders);
      });
    })();
  }, []);
  return (
    <div className="slider mt-2">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          {/* <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button> */}
        </div>
        <div className="carousel-inner">
          {sliders.map(function (slider, index) {
            if (index === 0) {
              return (
                <div className="carousel-item active ms-2">
                  <img
                    src={urlImage + "slider/" + slider.image}
                    width="1132px"
                    height="500px"
                    className="d-block w-80 "
                    alt={slider.image}
                  />
                </div>
              );
            } else {
              return (
                <div className="carousel-item ms-2">
                  <img
                    src={urlImage + "slider/" + slider.image}
                    width="1132px"
                    height="500px"
                    className="d-block w-80 "
                    alt={slider.image}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
export default Slider;
