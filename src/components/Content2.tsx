import React from "react";
import { Container, Col, Row, Carousel } from "react-bootstrap";
import '../myStyle/styleContent.css';
import ItemCarousel_2 from './ItemCarousel_2';

const BASE_URL = `${process.env.PUBLIC_URL}/assets/`;

let url1 = `${BASE_URL}banner_image1644404105.png`;
let url2 = `${BASE_URL}banner_image1644404171.png`;
let url3 = `${BASE_URL}banner_image1636516402.png`;
const images = [{ imgUrl: url2 }, { imgUrl: url1 }]
const images1 = [{ imgUrl: url3 }, { imgUrl: url1 }]

function Content2() {
    return (
        <div className="icon_cont">
            <Container fluid>
                <div style={{ fontSize: "30px", paddingBottom: "40px", fontWeight: "500" }} className="text-center">
                    Shop by Mother & Child Offers
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
                <Row className="text-center" >
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

                {/* ---------------------------------------------------------------------------- */}
                <Row style={{ paddingTop: "100px" }}>

                    <ItemCarousel_2 />
                </Row>
            </Container>
        </div>
    );
}

export default Content2;