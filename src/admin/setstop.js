import React,{ Component } from 'react';
import SetStop from './dynamicstops';

class stops extends Component{
	constructor(props) {
    	super(props)
    	// the initial application state
    	this.state = {
    	change : null,
      submit : null,
    	}
   }
   handlechange(e)
   {
   		//e.preventdefault();
   		this.setState({
   			change : true
   		})
   }
   submit(e)
   {
      this.setState({
        submit : true,
        change : null,
      })
   }
   clear()
   {
   		//e.preventdefault();
   		this.setState(
   		{
   			change : null
   		})
   }
	render(){
	
		return(
			<div className = "setStop">
        <SetStop 
        change = {this.handlechange.bind(this)}
        submit = {this.submit.bind(this)} 
        clear = {this.clear.bind(this)}
        v = {this.state.change}
        />
			</div>
		)
	}
}

export default stops;