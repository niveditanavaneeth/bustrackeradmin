import React from 'react';
import Choice from './choice'; 
import './cssfile.css';

const user =(props) =>{

	//input bus number
	//get json object
	//parse the json obj
	//display the lat and long
	//get the values frm the server and replace in the place of value attribute
     
   
      return (
		<div className="main-div">
      	<Choice onSignOut = {props.onSignOut}/>
      	</div>
	);
      
}

export default user;