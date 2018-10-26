// Dependences
import * as React from 'react';

// Assets 
// import './Categories.scss'

const items = [
  {
    "title": "Dr Pepper",
    "link": "/"
  },
  {
    "title": "Coca-cola Zero",
    "link": "/"
  },
  {
    "title": "Coke Zero Sugar 400",
    "link": "/"
  },
  {
    "title": "Cherry Coke",
    "link": "/"
  }
];
 
class Categories extends React.Component {

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
      items.map(this.createNavItem)
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