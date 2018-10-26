import * as React from 'react';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';

var data = [
	{	
		id: 1,
    "name": "Lorem",
    "src": "https://picsum.photos/300/250/?image=633",
    "grid": 1
  },
  {	
		id: 2,
    "name": "Lorem2",
    "src": "https://picsum.photos/300/250/?image=634",
    "grid": 1
  },
  {	
		id: 3,
    "name": "Lorem3",
    "src": "https://picsum.photos/300/250/?image=635",
    "grid": 1
  },
  {	
		id: 4,
    "name": "Lorem4",
    "src": "https://picsum.photos/1000/250/?image=500",
    "grid": 2
  },
  {	
		id: 5,
    "name": "Lorem5",
    "src": "https://picsum.photos/1000/250/?image=520",
    "grid": 2
  },
  {	
		id: 6,
    "name": "Lorem",
    "src": "https://picsum.photos/300/250/?image=633",
    "grid": 1
  },
  
  {	
		id: 7,
    "name": "Lorem3",
    "src": "https://picsum.photos/300/250/?image=635",
    "grid": 1
  },
  {	
		id: 8,
    "name": "Lorem4",
    "src": "https://picsum.photos/1000/250/?image=500",
    "grid": 2
  },
  {	
		id: 9,
    "name": "Lorem",
    "src": "https://picsum.photos/300/250/?image=635",
    "grid": 1
  },
  {	
		id: 10,
    "name": "Lorem2",
    "src": "https://picsum.photos/300/250/?image=634",
    "grid": 1
  }
];

const dataIframe = "https://d37p6u34ymiu6v.cloudfront.net/d46fde2ebdb458ef0a921fdc75912f6e/index.html"


var Day = React.createClass({
	onMouseOver: function(elem){
		this.props.onHover(this.props.index);
	},
	render: function(){
		
		return <div 
                    className={"day " + this.props.hoverState}
                    onMouseOver={this.onMouseOver} 
                >
                    {this.props.val}
                    <p>{this.props.name}</p>
                    <img src={this.props.src} alt={this.props.name}/>

                    { this.props.hoverState ? (
                        <Iframe url={dataIframe} 
                            width="300px" 
                            height="250px" 
                            className="embed-responsive-item" 
                            display="block"
                            position="relative"
                            allowFullScreen
                        />
                    ) : (
                        <div></div>
                    ) }
				</div>;
	}
})

var Days = React.createClass({
	
	getInitialState: function() {
    return {selected: "", hover: ""};
  },
	getHoverState: function(index) {
		 if(this.state.hover === index) {
			return "current";
		}
		return "";
	},
	onHover: function(index){
		this.setState({hover: index});
	},
	onMouseOut: function(){
		this.setState({hover: ""});
	},
	render: function(){
		var all_days = this.props.list.map(function(d, i){
			return <Day 
                            index={i} 
                            key={d.id} 
                            val={d.grid} 
                            name={d.name} 
                            src={d.src} 
                            hoverState={this.getHoverState(i)} 
                            onHover={this.onHover} />
		}.bind(this));
		return <div onMouseOut={this.onMouseOut}> {all_days}</div>;
	}
});

/*
 * Entry point
 */

ReactDOM.render(
  <Days list={data} />,
  document.getElementById('days')
)