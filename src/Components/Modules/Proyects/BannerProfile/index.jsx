// Dependences
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

// Assets
import './BannerProfile.scss';


class BannerProfile extends React.Component {
  static propTypes = {
    dataBannerProfile: PropTypes.array.isRequired
  }

  render() {
    const { dataBannerProfile } = this.props;
    const { title, banner } = dataBannerProfile[0];
    return(
      <section className="BannerProfile" id="content-4">
        <div className="section" style={ { backgroundImage: 'url(' + banner + ')' } }>
          <Container>
              <Row>
                <Col md="10" className="ml-auto mr-auto">
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