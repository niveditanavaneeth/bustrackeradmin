import React from 'react';

import './cssfile.css';
import Repeated from './setstatemediacontent';

const setstop =(props)=>{
		return(
			<div>
				<br/><br/>
				<h1 >ENTERSTOPS</h1>
				<center>
				<input type = "text" placeholder = "Busno" onInput = {props.change}/>
				<br/>
				<div>
				<br/>
				<Repeated v = {props.v} change = {props.change}/>
				</div>
				<br/>
				
				<div className="btn-group " role="group" aria-label="First group">
    			<button type="button" className="btn btn-secondary" onClick = {props.submit}>Submit</button>
    			<button type="button" className="btn btn-secondary" onClick = {props.clear}>Clear</button>
  				</div>
  				</center>
			</div>
		);
	
}
export default setstop;