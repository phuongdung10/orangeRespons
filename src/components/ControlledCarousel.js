import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://placekitten.com/500/500"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              ultrices ac dolor nec vestibulum.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://placekitten.com/500/500"
            alt="Third slide"
          />

<Carousel.Caption>
            <h3>Second slide</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://placekitten.com/500/500"
            alt="Third slide"
          />

<Carousel.Caption>
            <h3>Third slide</h3>
            <p>
              Integer non ante ut arcu imperdiet maximus. Pellentesque id metus
              porttitor,
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <p>{index}</p>
    </>
  );
}