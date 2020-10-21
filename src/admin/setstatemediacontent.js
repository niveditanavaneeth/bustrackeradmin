import React from 'react';
import Repeated from './returnnull';

const content = (props) =>
{
		for (var i = 0; i < 2; i++) {
			return(
				<Repeated v = {props.v} change = {props.change}/>
				);
		}
	
}

export default content;