import React,{ Component } from 'react';
import MyTag from './mytagmedia';
import Setstatemedia from './setstatemedia';

class Choice extends Component {
	constructor(props) {
    super(props)
    // the initial application state
    this.state = {
      enterStop : null,
      busStop : null,
      busDetails : null,
      update : null,
      deleted : null,

    }
  
    }
	handleclick1(e)
	{
		e.preventDefault();
		this.setState(
		{
			enterStop : true,
      		busStop : null,
      		busDetails : null,
      		update : null,
      		deleted : null,
		})
	}
	handleclick2(e)
	{
		e.preventDefault();
		this.setState(
		{
			busStop : true,
			enterStop : null,
      		busDetails : null,
      		update : null,
      		deleted : null,
		})
	}
	handleclick3(e)
	{
		e.preventDefault();
		this.setState(
		{
			busDetails : true,
			enterStop : null,
      		busStop : null,
      		update : null,
      		deleted : null,
		})
	}
	handleclick4(e)
	{
		e.preventDefault();
		this.setState(
		{
			update : true,
			enterStop : null,
      		busStop : null,
      		busDetails : null,
      		deleted : null,
		})
	}

	handleclick5(e)
	{
		e.preventDefault();
		this.setState(
		{
			deleted : true,
			enterStop : null,
      		busStop : null,
      		busDetails : null,
      		update : null,
		})
		console.log(this.state.deleted)
	}

	onBack()
	{
		this.setState(
		{
			enterStop : null,
      		busStop : null,
      		busDetails : null,
      		update : null,
      		deleted : null,
		})
	}

	
	render(){
	return(
		<div className = "selector">
			<Setstatemedia v1 = {this.state.enterStop} 
			v2 = {this.state.busStop}
			v3 = {this.state.busDetails}
			v4 = {this.state.update}
			v5 = {this.state.deleted}
			click2 = {this.handleclick2.bind(this)} 
			click1 = {this.handleclick1.bind(this)} 
			click3 = {this.handleclick3.bind(this)}
			click4 = {this.handleclick4.bind(this)}
			click5 = {this.handleclick5.bind(this)}
			back = {this.onBack.bind(this)}
			/>	
		</div>
	);
	}
}

export default Choice;