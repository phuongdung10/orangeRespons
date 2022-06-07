import React from "react";
import { Container, Col, Row, Carousel, CarouselItem } from "react-bootstrap";
import '../myStyle/styleContent.css';
import ItemCarousel from "./ItemCarousel"
const BASE_URl = `${process.env.PUBLIC_URL}/assets/`;

let url2 = `${BASE_URl}banner_image1644403944.png`;
let url3 = `${BASE_URl}banner_image1644403988.png`;
let url4 = `${BASE_URl}banner_image1644404046.png`;
let url5 = `${BASE_URl}banner_image1644404199.png`;
const images = [{ imgUrl: url2 }, { imgUrl: url3 }]
const images1 = [{ imgUrl: url4 }, { imgUrl: url5 }]
function Content() {
    return (
        <div className="icon_cont">
            <Container fluid>
                <div style={{ fontSize: "30px", paddingBottom: "40px", fontWeight: "500" }} className="text-center">
                    Shop by Beauty Offers
                </div>
                <Row className="text-center">
                    {images.map(items => {
                        return (
                            <Col sm={12} md={6} xxl={6} style={{ paddingTop: "20px" }}>
                                <div>
                                    <img src={items.imgUrl} className="img-fluid" alt="Responsive image" />
                                </div>
                            </Col>
                        )
                    })}
                </Row>
                <Row className="text-center">
                    {images1.map(items => {
                        return (
                            <Col sm={12} md={6} xxl={6} style={{ paddingTop: "20px" }}>
                                <div>
                                    <img src={items.imgUrl} className="img-fluid" alt="Responsive image" />
                                </div>
                            </Col>
                        )
                    })}
                </Row>
                {/*||||||||   -------- ---------------------------------------------------------------------------- */}
                <Row style={{ paddingTop: "50px" }}>
                    <ItemCarousel />
                </Row>
            </Container>
        </div>
    );
}

export default Content;