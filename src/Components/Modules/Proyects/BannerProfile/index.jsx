// Dependences
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

// Assets
import './BannerProfile.scss';
import ramdomImg from './../../../../Assets/images/banner-coke.jpg';


class BannerProfile extends React.Component {
  static propTypes = {
    dataBannerProfile: PropTypes.array.isRequired
  }

  render() {
    const { dataBannerProfile } = this.props;
    const { title } = dataBannerProfile[0];
    return(
      <section className="BannerProfile" id="content-4">
        <div className="section" style={ { backgroundImage: 'url(' + ramdomImg + ')' } }>
          <Container>
              <Row>
                <Col md="9" className="ml-auto mr-auto">
                  <h2 className="title">{title}</h2>
                </Col>
              </Row>
          </Container>
        </div>
      </section>
    );
  }
}

export default BannerProfile;