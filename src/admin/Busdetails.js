import React,{ Component } from 'react';
import Para from './busdetailspara';

class busdetails extends Component{
	constructor(props) {
    	super(props)
    	// the initial application state
    	this.state = {
    	change : null
    	}
   	}
   	handlechange(e)
   	{
   		//e.preventdefault();
   		this.setState({
   			change : true
   		})
   	}
	render()
	{
		return(
			<div>
			<h1 >BUSDETAILS </h1>
			<br/>
			<input type = "text" placeholder = "enter busno"/>
			<button type="button" className="btn btn-secondary" onClick = {this.handlechange.bind(this)}>Submit</button>
			<div>
			<br/>
			<Para v = {this.state.change}/>
			</div>
			</div>
		);
	}
}
export default busdetails;