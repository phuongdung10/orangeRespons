import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../myStyle/styleBody.css'

const BASE_URl = `${process.env.PUBLIC_URL}/assets/`;
let url1 = `${BASE_URl}banner_image1644403526.png`;
let url2 = `${BASE_URl}banner_image1644403563.png`;
let url3 = `${BASE_URl}banner_image1644403596.png`;
let url4 = `${BASE_URl}banner_image1644403622.png`;
let url5 = `${BASE_URl}banner_image1636516295.png`;
const images = [{ imgUrl: url1 }, { imgUrl: url2 }, { imgUrl: url3 }, { imgUrl: url4 }]
function Body() {
    return (
        <div className='icon_body'>
            <Container fluid>
                <div>
                    <h3 className="text-center">Shop by Offers</h3>
                </div>
                <Row className='text-center'>
                    {images.map(items => {
                        return (
                            <Col xs={6} sm={6} md={6} lg={3}>
                                <div className='icon2_body'>
                                    <img className="respon-body" src={items.imgUrl} alt="Responsive image" />
                                </div>
                            </Col>
                        )
                    })}
                </Row>
                <Row>
                    <Col sm={12} md={12} xl={12}>
                        <div className='text-center'>
                            <img className="d-relative w-100" src={url5} />

                        </div>
                    </Col>
                </Row>

            </Container>
        </div >
    );
}
export default Body;