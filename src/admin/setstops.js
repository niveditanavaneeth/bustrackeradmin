import React,{ Component } from 'react';
import Stop from './addstop';
import SetStop from './setstop';

class stops extends Component{
	constructor(props) {
    	super(props)
    	// the initial application state
    	this.state = {
    	change : null
    	}
   }
   handlechange(e)
   {
   		e.preventdefault();
   		this.setState({
   			change : true
   		})
   }
   clear(e)
   {
   		e.preventdefault();
   		this.setState(
   		{
   			change : null
   		})
   }
	render(){
	
		return(
			<div>
			{
        (this.state.change) ?
        <SetStop change

        
      }
			</div>
		)
	}
}

export default stops;