import React,{ Component } from 'react';
import Para from './deletepara';
import ParaC from './deleteparaconfirm';

class deletedetails extends Component{
	constructor(props) {
    	super(props)
    	// the initial application state
    	this.state = {
    	change : null,
    	confirm : null,
    	}
   	}
   	handlechange(e)
   	{
   		//e.preventdefault();
   		this.setState({
   			change : true
   		})
   	}
   	handleconfirm(e)
   	{
   		this.setState(
   		{
   			confirm : true
   		})
   	}
	render()
	{
		return(
			<div>
			<h1>delete</h1>
			<input type = "text" placeholder = "enter busno"/>
			<button type="button" className="btn btn-secondary" onClick = {this.handlechange.bind(this)}>delete</button>
			<div>
			<br/>
			<Para v = {this.state.change}/>
			</div>
			<button type="button" className="btn btn-secondary" onClick = {this.handleconfirm.bind(this)}>Confirm</button>
			<div>
			<ParaC v = {this.state.confirm}/>
			</div>
			</div>
		);
	}
}
export default deletedetails;