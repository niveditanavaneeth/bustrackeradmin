import React from 'react';


const stop = (props) =>{
		if(props.v)
		{
		
			return (
			<div className="form-group col-md-4">
			<label htmlFor="exampleFormControlSelect1">Stop select</label>
		    <select className="form-control" id="exampleFormControlSelect1">
		    <option defaultValue>choose...</option>
      		<option>1</option>
      		<option>2</option>
      		<option>3</option>
      		<option>4</option>
      		<option>5</option>
    		</select>
			</div>
			);
		 
		}
		else
		{
				return null
		}
		
		

}

export default stop;