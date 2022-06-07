import React from "react";
import { Container, Col, Row, Carousel } from "react-bootstrap";
import '../myStyle/styleContent.css';
import ItemCarousel_2 from './ItemCarousel_2'
const BASE_URL1 = `${process.env.PUBLIC_URL}/assets/`;
let url1 = `${BASE_URL1}banner_image1644404199.png`;
let url2 = `${BASE_URL1}Rectangle 3.png`;
let url4 = `${BASE_URL1}banner_image1644404171-2.png`;
let url5 = `${BASE_URL1}banner_image1636516445 2.png`
let url6 = `${BASE_URL1}banner_image1636516836 2.png`
let url7 = `${BASE_URL1}banner_image1636516482.png`;
let url8 = `${BASE_URL1}banner_image1644308976.png`;
let url9 = `${BASE_URL1}banner_image1644308991.png`;
let url10 = `${BASE_URL1}banner_image1644309007.png`;
let url11 = `${BASE_URL1}banner_image_mobile1644375396.png`;



const images = [{ imgUrl: url1 }, { imgUrl: url2 }]
const images1 = [{ imgUrl: url5 }, { imgUrl: url4 }, { imgUrl: url6 }]
const images2 = [{ imgUrl: url8 }, { imgUrl: url9 }, { imgUrl: url10 }]


function Content3() {
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
                <Row className="text-center" style={{ paddingTop: "10px" }}>
                    <Col xs={12} sm={12} xxl={4}>
                        <img style={{ paddingTop: "20px" }} className="hidden-img" src={url5} />
                        <img style={{ paddingTop: "20px"}} className="hidden-img1" src={url4} />
                        <img style={{ paddingTop: "20px" }} className="hidden-img" src={url6} />
                    </Col>
                </Row>

                {/* ---------------------------------------------------------------------------- */}
                <Row style={{ paddingTop: "100px" }}>
                    <ItemCarousel_2 />
                </Row>
                <img style={{ paddingBottom: "40px" }} className="d-relative w-100" src={url7} />
                <Row>
                <img style={{ paddingBottom: "30px" }} className="d-relative w-100 respon1-foot "src={url11} />
                    {
                        images2.map((items, index) => {
                            return (
                                <Col xs={4} sm={4} md={4} xl={4}>
                                    <img style={{ paddingBottom: "30px" }} className="respon-foot" src={items.imgUrl} />
                                </Col>
                            )
                        }
                        )
                    }
                </Row>
            </Container>
        </div>

    );
}

export default Content3;