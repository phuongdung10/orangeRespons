import React from "react";
import { Container, Col, Row } from 'react-bootstrap'
import "../myStyle/styleFoot.css";
const BASE_URl = `${process.env.PUBLIC_URL}/assets/`;
let url2 = `${BASE_URl}Vector copy 5.png`;
let url3 = `${BASE_URl}giam-gia-tren-app-store-3-lan-giam-gia-tot-nhat-trong-tuan.png`;
let url4 = `${BASE_URl}global-playstore.png`;
let url5 = `${BASE_URl}appleppay.svg.png`;
let url6 = `${BASE_URl}0001187_cash-on-delivery-with-verification-plugin-for-nopcommerce_300.jpeg`;
let url7 = `${BASE_URl}Visa_Inc._logo.svg.png`;
let url8 = `${BASE_URl}amex.png`;
let url9 = `${BASE_URl}master.jpeg`;
let url10 = `${BASE_URl}mada.png`;
const images = [{ imgUrl: url5 }, { imgUrl: url6 }, { imgUrl: url7 }, { imgUrl: url8 },
{ imgUrl: url9 }, { imgUrl: url10 }]


function Foot() {
    return (
        <div className="icon1_foo">
            <Container fluid>
                <div className="icon1_foo">
                    <Row>
                        <Col md={3}>
                            <ul className="icon2_foo hidden-foot">
                                <li style={{ fontWeight: '500' }}>Who is ORANGE</li>
                                <li>Pharmachies Group</li>
                                <li>Vision</li>
                                <li>Mission</li>
                                <li>Servise points</li>
                            </ul>
                        </Col>
                        <Col md={3}>
                            <ul className="icon2_foo hidden-foot">
                                <li style={{ fontWeight: '500' }}>Contact us</li>
                                <li><i className="bi bi-telephone"></i> 920006277</li>
                                <li><i className="bi bi-envelope"></i> infor@orangepharmacy.sa</li>
                                <li><img src={url2} />  Free Shhipping</li>
                                <li style={{ fontSize: "8px" }}>Free in Riyadhs</li>

                            </ul>
                            <ul className="text-center" style={{ marginTop: "33px", color: "white" }}>
                                <i style={{ padding: "10px" }} className="bi bi-facebook"></i>
                                <i style={{ padding: "10px" }} className="bi bi-twitter"></i>
                                <i style={{ padding: "10px" }} className="bi bi-instagram"></i>
                                <i style={{ padding: "10px" }} className="bi bi-whatsapp"></i>

                            </ul>
                        </Col>
                        <Col md={3} className="hidden-foot">
                            <ul className="icon2_foo">
                                <li style={{ fontWeight: '500' }}>Orange coditions and guaranties</li>
                                <li>Terms and Conditions</li>
                                <li>Privates and Securities</li>
                                <li>Terms or Sale</li>
                                <li>Shipping and returns</li>
                            </ul>
                        </Col>
                        <Col md={3}>
                            <ul className="icon2_foo left-foot">
                                <li style={{ fontWeight: '500' }}>Get the App</li>
                                <li>

                                    <img style={{ width: "135px" }} src={url3} />
                                </li>
                                <li>
                                    <img style={{ width: "135px" }} src={url4} />
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>

                <ul className="icon3_foo hidden-foot">
                    {images.map((items, index) => {
                        return (
                            <li><img style={{ width: "30px" }} src={items.imgUrl} /></li>

                        )
                    })}
                </ul>
                <ul style={{ marginTop: "20px", marginLeft: "430px" }} className="icon4_foo hidden-foot">
                    <li style={{ fontSize: "8px", fontWeight: "400" }}>© COPYRIGHT 2021 ORANGE · ALL RIGHTS RESERVED</li>
                    <li style={{ fontSize: "8px", fontWeight: "400" }}>Privacy Policy</li>
                    <li style={{ fontSize: "8px", fontWeight: "400" }}>Terms & Conditions</li>
                </ul>
            </Container>
        </div>
    );
}

export default Foot;