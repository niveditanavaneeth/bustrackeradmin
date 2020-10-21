import React,{ Component } from 'react';
const para = (props) =>
{
		if(props.v)
		{
			return <p>here comes bus details</p>
		}
		else
		{
			return null
		}
}

export default para;