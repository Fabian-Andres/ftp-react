// Dependences
import * as React from 'react';
import PropTypes from 'prop-types';

// Assets 
// import './Categories.scss'

 
class Categories extends React.Component {

    static propTypes = {
      dataCategories: PropTypes.array.isRequired
    }

    createNavItem = (item) => (
      <li
        key={item.title}
        className="nav-item">
        <a
          className="nav-link"
          rel="noopener noreferrer"
          href={item.link}
          >
          {item.title}
        </a>
      </li>
    )
  
    createNavItems = () => (
      this.props.dataCategories.map(this.createNavItem)
    )
  
    render() {
    
        return (
            <ul className={'categories-proyects'}>
                 {this.createNavItems()}
            </ul>
        );
    }
}
 
export default Categories;