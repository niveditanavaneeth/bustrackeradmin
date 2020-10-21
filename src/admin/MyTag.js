import React from 'react';
import Setstop from './setstop';
import Busdetails from './Busdetails';
import Getall from './getall';
import Update from './update';
import Deleted from './deleted';
import Media from './setstatemedia';

const MyApp = (props) => {

		if(props.v1){
			return ( 
				<div>
				<Setstop/>
				<br/>
				</div>
			);
		}
		else if(props.v2){
			return(
				<div>
			  	<Busdetails/>
			  	<br/>
			  	</div>
			);
		} 
		else if(props.v3){
			return(
				<div>
			  	<Getall/>
			  	<br/>
				</div>
			);
		}
		else if(props.v4){
			return(
				<div>
			  	<Update/>
			  	<br/>
			  	</div>
			);
		}
		else if(props.v5)
		{
			return(
				<div>
				<Deleted/>
			  	<br/>
				</div>
			);
		}
		else{
			return <Setstop 
			v1 = {props.v1} 
			v2 = {props.v2}
			v3 = {props.v3}
			v4 = {props.v4}
			v5 = {props.v5}
			click1 = {props.click1} click2 = {props.click2} click3 = {props.click3} click4 = {props.click4} click5 = {props.click5}/>;
		}

	}


export default MyApp;