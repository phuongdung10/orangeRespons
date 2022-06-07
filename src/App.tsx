import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Body from './components/Body';
import Content from './components/Content';
import Content1 from './components/Content1';
import Content2 from './components/Content2';
import Content3 from './components/Content3';
import Foot from './components/Foot'
import Whatsapp from './components/Whatsapp';

function App() {
  return (
    <Container fluid>
      <Header />
      <div style={{ paddingBottom: "150px", paddingLeft: "20px" }} className="fixed-bottom">
        <Whatsapp />
      </div>
      <Body />
      <Content />
      <Content1 />
      <Content2 />
      <Content3 />
      <Foot />
    </Container>
  );
}

export default App;
