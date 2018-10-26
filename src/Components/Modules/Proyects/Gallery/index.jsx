// Dependences
import * as React from 'react';
import Masonry from 'react-masonry-component';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import ReactHoverObserver from 'react-hover-observer';
import Iframe from 'react-iframe';


// Assets 
import './Gallery.scss'

const masonryOptions = {
    transitionDuration: 0
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }
const dataIframe = "http://192.168.64.2/ddb/piezas-flybox-halloween/300x250/300x250"
 
class Gallery extends React.Component {
    static propTypes = {
        dataGallery: PropTypes.array.isRequired
    }

    render() {

        const Item = ({ isHovering = false }) => (
            <div className="example__Item">
             isHovering: { isHovering ? 'true' : 'false' }
                { isHovering ? (
                    <div className="embed-responsive ">
                        <Iframe url={dataIframe} 
                        width="300px" 
                        height="250px" 
                        className="embed-responsive-item" 
                        display="block"
                        position="relative"
                        allowFullScreen
                        />
                    </div> 
                ) : (
                    <div></div>
                ) }
                
            </div>
        );

        const childElements = this.props.dataGallery.map(function(element, i){
            const { name, src, grid } = element;
            
            let columns = 4

            if(grid === 2) {
                columns = 8
            }

            return (
                <Col md={columns} sm="6" xs="6" key={i}>
                 <ReactHoverObserver
                    className="element-gallery"
                    hoverDelayInMs={200}
                    hoverOffDelayInMs={300}
                    >
                    <Item val="hola"/>
                </ReactHoverObserver>
                    <div className="element-gallery ">   
                        <img className="element-image" src={src} alt={name} title={name} width="100%"/>
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
                        <div className="cont-iframe">
                            
                        </div>
                    </div>
                </Col>
            );
        });
    
        return (
            <div>
                <Masonry
                    className={'row no-gutters gallery-proyects'} // default ''
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    imagesLoadedOptions={imagesLoadedOptions} // default {}
                >
                    {childElements}
                </Masonry>
            </div>
        );
    }
}
 
export default Gallery;