// Dependences
import * as React from 'react';
import Masonry from 'react-masonry-component';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';

// Assets 
import './Gallery.scss'

const masonryOptions = {
    transitionDuration: 0
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }
 
class Gallery extends React.Component {
    static propTypes = {
        dataGallery: PropTypes.array.isRequired
    }
    render() {
        const childElements = this.props.dataGallery.map(function(element, i){
            const { name, src } = element;
           return (
                <Col md="4" sm="6" xs="6" key={i}>
                    <div className="element-gallery ">   
                        <img className="element-image" g src={src} alt={name} title={name} width="100%"/>
                        <div className="flex author flex-row">
                            <div className="avatar">
                                <i className="now-ui-icons location_bookmark"></i>
                            </div>
                            <div className="details">
                                <p>
                                    <b>{name}</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            );
        });
    
        return (
            <Masonry
                className={'row no-gutters gallery-proyects'} // default ''
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {childElements}
            </Masonry>
        );
    }
}
 
export default Gallery;