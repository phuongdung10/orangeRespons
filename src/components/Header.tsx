import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import '../myStyle/styleHeader.css'
const BASE_URL = `${process.env.PUBLIC_URL}/assets/`;
const BASE_URL1 = `${process.env.PUBLIC_URL}/assets/vector`;

let url1 = `${BASE_URL}Ellipse 1.png`;
let url5 = `${BASE_URL}ar 1.png`;
let url_2 = `${BASE_URL}vector.png`;
let url1_2 = `${BASE_URL1} (1).png`;
let url2_2 = `${BASE_URL1} (2).png`;
let url3_2 = `${BASE_URL1} (3).png`;
let url4_2 = `${BASE_URL1} (4).png`;
let url5_2 = `${BASE_URL1} (5).png`;
let url6 = `${BASE_URL1} (6).png`;
let url7 = `${BASE_URL1} (7).png`;
let url8 = `${BASE_URL1} (8).png`;
let url9 = `${BASE_URL1} (9).png`;
let url10 = `${BASE_URL1} (10).png`;
let url11 = `${BASE_URL1} (11).png`;
let url12 = `${BASE_URL1} (12).png`;
let url13 = `${BASE_URL1} (13).png`;
let url14 = `${BASE_URL1} (14).png`;
let url15 = `${BASE_URL1} (15).png`;
let url16 = `${BASE_URL1} (16).png`;
let url17 = `${BASE_URL1} (17).png`;
let url18 = `${BASE_URL1} (18).png`;
let url19 = `${BASE_URL1} (19).png`;
let url20 = `${BASE_URL1} (20).png`;
let url21 = `${BASE_URL1} (21).png`;
let url23 = `${BASE_URL}Rectangle 7.png`;
let url24 = `${BASE_URL}banner_image1648115859.png`;
function Header() {
    return (
        <div className="icon_header">
            <Container fluid>
                <Row>
                    <Col>
                        <div className="icon1_header">
                            <li><p>Info: 920006277</p></li>
                            <li><img className="hidden-header" src={url1} /></li>
                            <li><p className="hidden-header" >About</p></li>
                            <li><img className="hidden-header" src={url1} /></li>
                            <li><p className="hidden-header" >Branches</p></li>
                        </div>
                    </Col>
                    <Col>
                        <div className="icon1_header">
                            <li><p>Information</p></li>
                            <li><img className="hidden-header" src={url1} /></li>
                            <li><i className="bi bi-person"></i></li>
                            <li><p className="hidden-header" >Accout</p></li>
                            <li><img className="hidden-header" src={url1} /></li>
                            <li><img className="hidden-header" src={url5} /></li>
                            <li><p className="hidden-header" >Arabic</p></li>


                        </div>
                    </Col>
                </Row>
                {/* --------------------------------------- */}
                <Row style={{ marginTop: "20px" }}>
                    <Col xs={12} sm={12} md={4}>
                        <div style={{ marginLeft: "20px" }}>
                            <img src={url_2} />
                            <img src={url1_2} />
                            <img src={url2_2} />
                            <img src={url3_2} />
                            <img src={url4_2} />
                            <img src={url5_2} />
                            <img src={url6} />
                            <img src={url7} />
                            <img src={url8} />
                            <img src={url9} />
                            <img src={url10} />
                            <img src={url11} />
                        </div>
                        <div style={{ marginLeft: "100px" }} className="hidden-header">
                            <img src={url12} />
                            <img src={url13} />
                            <img src={url14} />
                            <img src={url15} />
                            <img src={url16} />
                            <img src={url17} />
                            <img src={url18} />
                            <img src={url19} />
                            <img src={url20} />
                            <img src={url21} />
                        </div>
                    </Col>
                    <Col xs={12} sm={9} md={5}>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Seach for a product, brand, category..."
                                aria-describedby="basic-addon5" />
                            <span className="input-group-text" id="basic-addon5"><i className="bi bi-search"></i></span>
                        </div>
                    </Col>
                    <Col style={{marginBottom:"30px"}} xs={1} sm={1} md={1}>
                        <div className="box_header text-center">
                            <div style={{ paddingTop: "4px" }}>
                                <i className="bi bi-heart"></i>
                                <i className="hidden-header">Wishlist</i>
                            </div>
                        </div>
                    </Col>
                    <Col xs={1} sm={1} md={2}>
                        <div className="box1_header text-center">
                            <div style={{ paddingTop: "3px" }}>
                                <i className="bi bi-basket3"></i>
                                <i className="hidden-header">Shopping Cart</i>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="icon3_header hidden-header">
                        <div className="icon4_header">
                            <li>Offers</li>
                            <li>|</li>
                            <li>Medications</li>
                            <li>Vitamins & Supplements</li>
                            <li>Makeup &Beauty</li>
                            <li>Skin Care</li>
                            <li>Hair Care</li>
                            <li>Personal Care</li>
                            <li>Mother & Child Care</li>
                            <li>Medical Devices & Equipments</li>
                        </div>

                    </div>
                </Row>
                <Carousel style={{ marginTop: "10px" }}>
                    <Carousel.Item interval={1000}>
                        <img className="d-block w-100" src={url23} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img className="d-block w-100" src={url24} alt="second slide" />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
}

export default Header;