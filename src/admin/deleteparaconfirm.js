import React,{ Component } from 'react';
const para = (props) =>
{
		if(props.v)
		{
			return <p>deleted</p>
		}
		else
		{
			return null
		}
}

export default para;