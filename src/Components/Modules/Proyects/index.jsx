// Dependences
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// Components
import Gallery from './Gallery';
import BannerProfile from './BannerProfile';
import Categories from './Categories';

// Assets 
import './Proyects.scss';
import banner from "./../../../Assets/images/banner-avianca.jpg";


const dataCategories = [
  // {
  //   "title": "Dr Pepper",
  //   "link": "/"
  // },
  // {
  //   "title": "Coca-cola Zero",
  //   "link": "/"
  // },
  // {
  //   "title": "Coke Zero Sugar 400",
  //   "link": "/"
  // },
  // {
  //   "title": "Cherry Coke",
  //   "link": "/"
  // }
];

const dataGallery = [
  {
    "name": "Lorem",
    "src": "https://picsum.photos/300/250/?image=633",
    "grid": 1
  },
  {
    "name": "Lorem2",
    "src": "https://picsum.photos/300/250/?image=634",
    "grid": 1
  },
  {
    "name": "Lorem3",
    "src": "https://picsum.photos/300/250/?image=635",
    "grid": 1
  },
  {
    "name": "Lorem4",
    "src": "https://picsum.photos/1000/250/?image=500",
    "grid": 2
  },
  {
    "name": "Lorem5",
    "src": "https://picsum.photos/1000/250/?image=520",
    "grid": 2
  },
  {
    "name": "Lorem",
    "src": "https://picsum.photos/300/250/?image=633",
    "grid": 1
  },
  
  {
    "name": "Lorem3",
    "src": "https://picsum.photos/300/250/?image=635",
    "grid": 1
  },
  {
    "name": "Lorem4",
    "src": "https://picsum.photos/1000/250/?image=500",
    "grid": 2
  },
  {
    "name": "Lorem",
    "src": "https://picsum.photos/300/250/?image=635",
    "grid": 1
  },
  {
    "name": "Lorem2",
    "src": "https://picsum.photos/300/250/?image=634",
    "grid": 1
  }
];

const dataBanner = [
  {
    "title": 'Avianca',
    "description": 'Use the sections you need, remove the ones you dont. Create gorgeous prototypes faster than ever!',
    "banner": banner
  }
];



const Proyects = () => (
  <Container fluid>
    <Row>
      <Col md="3" className="pt-4 bg-bloq">
        <div className="bloq">
          <h1 className="h4">Campañas</h1>
          <Categories dataCategories={dataCategories}/>
        </div>
      </Col>
      <Col md="9" xs="12" sm="12">
        <Row className="justify-content-md-center">
          <div className="w-100 mb-5">
            <BannerProfile dataBannerProfile={dataBanner}/>
          </div>
          <Col md="10" lg="9" sm="12">
            <Gallery dataGallery={dataGallery}/>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
)
export default Proyects;
