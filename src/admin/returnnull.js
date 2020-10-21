import React from 'react';
import Addstop from './addstop';
//add center tag here
const stop = (props) =>{
			
				return (
					<div>
					<Addstop v={props.v} c = {props.change}/>
					</div>
					);
		
			
}


export default stop;