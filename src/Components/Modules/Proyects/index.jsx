// Dependences
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// Components
import Gallery from './Gallery'
import BannerProfile from './BannerProfile'

// Assets 
import './Proyects.scss';

const dataGallery = [
  {
    "name": "Lorem",
    "src": "https://picsum.photos/300/300/?image=633"
  },
  {
    "name": "Lorem2",
    "src": "https://picsum.photos/305/400/?image=634"
  },
  {
    "name": "Lorem3",
    "src": "https://picsum.photos/300/300/?image=635"
  },
  {
    "name": "Lorem4",
    "src": "https://picsum.photos/1000/500/?image=500"
  },
  {
    "name": "Lorem5",
    "src": "https://picsum.photos/1000/500/?image=520"
  },
  {
    "name": "Lorem",
    "src": "https://picsum.photos/300/300/?image=633"
  },
  {
    "name": "Lorem2",
    "src": "https://picsum.photos/305/400/?image=634"
  },
  {
    "name": "Lorem3",
    "src": "https://picsum.photos/300/300/?image=635"
  },
  {
    "name": "Lorem4",
    "src": "https://picsum.photos/1000/500/?image=500"
  },
  {
    "name": "Lorem5",
    "src": "https://picsum.photos/1000/500/?image=520"
  },
  
];

const dataBanner = [
  {
    "title": 'coke',
    "description": 'Use the sections you need, remove the ones you dont. Create gorgeous prototypes faster than ever!'
  }
];



const Proyects = () => (
  <Container fluid>
    <Row>
      <Col md="3" className="pt-4 bg-bloq">
        <div className="bloq">
          <h1 className="h4">Campañas</h1>
          <p>Hello!</p>
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
