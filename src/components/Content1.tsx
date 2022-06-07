import React from "react";
import { Container, Col, Row, Carousel } from "react-bootstrap";
import '../myStyle/styleContent.css';
import ItemCarousel_1 from './ItemCarousel_1';
const BASE_URL1 = `${process.env.PUBLIC_URL}/assets/`;
let url1 = `${BASE_URL1}banner_image1636516352.png`;
let url2 = `${BASE_URL1}banner_image1644404021.png`;
let url3 = `${BASE_URL1}banner_image1636516344.png`;
let url4 = `${BASE_URL1}banner_image1644404046.png`;
const images = [{ imgUrl: url1 }, { imgUrl: url2 }]
const images1 = [{ imgUrl: url2 }, { imgUrl: url1 }]
function Content1() {
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
                <Row className="text-center">
                    {images1.map(items => {
                        return (

                            < Col sm={12} md={6} xxl={6} style={{ paddingTop: "20px" }}>
                                <div>
                                    <img src={items.imgUrl} className="img-fluid" alt="Responsive image" />
                                </div>
                            </Col>
                        )
                    })}
                </Row>


                {/* ---------------------------------------------------------------------------- */}
                <Row style={{ paddingTop: "100px" }}>
                    <ItemCarousel_1 />
                </Row>
            </Container>
        </div >

    );
}

export default Content1;