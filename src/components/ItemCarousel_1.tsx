import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../myStyle/styleContent.css';
const BASE_URL = `${process.env.PUBLIC_URL}/assets/Rectangle 11 `;

let url19 = `${BASE_URL}(1) 2.png`;
let url23 = `${BASE_URL}(2) 2.png`;
let url24 = `${BASE_URL}(3).png`;
let url25 = `${BASE_URL}(4).png`;
const images = [{ imageUrl: url19, title: "Sun Protection Face", title1: " Lorem Ipsum Sit Dolor" },
{ imageUrl: url23, title: "Sun Protection Face", title1: " Lorem Ipsum Sit Dolor" },
{ imageUrl: url24, title: "Sun Protection Face", title1: " Lorem Ipsum Sit Dolor" },
{ imageUrl: url23, title: "Sun Protection Face", title1: " Lorem Ipsum Sit Dolor" },
{ imageUrl: url19, title: "Sun Protection Face", title1: " Lorem Ipsum Sit Dolor" },
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        partialVisibilityGutter: 10
    },
    tablet1: {
        breakpoint: { max: 1366, min: 768 },
        items: 3,
        partialVisibilityGutter: 100
    },
    tablet: {
        breakpoint: { max: 768, min: 464 },
        items: 2,
        partialVisibilityGutter: 100
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 10
    }
};
console.log(images);

function ItemCarousel_1() {
    return (
        <Container className="text-center">
            <Carousel responsive={responsive}

            >
                    {images.map((items, index) => {
                        return (
                            <div key={index}>
                                <div className="container1 ">
                                    <img src={items.imageUrl} />
                                    <p style={{ paddingTop: "80px" }}>{items.title}</p>
                                    <p>{items.title1}</p>
                                    <div style={{ marginTop: "10px" }} className="overlay text-center">
                                        <div className="box_content">Add to Cart</div>
                                        <div className="box1_content"><i className="bi bi-heart"></i></div>
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                
            </Carousel>
        </Container>
    );
}
export default ItemCarousel_1;
