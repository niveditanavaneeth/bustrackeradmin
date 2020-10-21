import React from 'react';
import Mytag from './MyTag';
import Setstatemediacontent from './setstatemediacontent'

const media = (props) => {
	
	return(
		<div className = "maindiv">
		
  		<div className="container-fluid">
  			<div className="row">
        		<nav className="col-md-2 d-none d-md-block bg-light sidebar">
          			<div className="sidebar-sticky">
            			<ul className="nav flex-column">
            			<li>
            				<button type="button" className="btn btn-light btn-block" onClick={props.onSignOut}>Sign out</button>
            			</li>
              				<li className="nav-item">
                				<button type="button" className="btn btn-light btn-block" onClick = {props.click1}>ENTERSTOPS</button>
              				</li>
              				<li className="nav-item">
                				<button type="button" className="btn btn-light btn-block" onClick = {props.click2}>ENTERSTOPS</button>
              				</li>
				             <li className="nav-item">
				                <button type="button" className="btn btn-light btn-block" onClick = {props.click3}>ENTERSTOPS</button>
				             </li>
				             <li className="nav-item">
				                <button type="button" className="btn btn-light btn-block" onClick = {props.click4}>ENTERSTOPS</button>
				             </li>
				             <li className="nav-item">
				                <button type="button" className="btn btn-light btn-block" onClick = {props.click5}>ENTERSTOPS</button>
				             </li>
            			</ul>
           			</div>
        		</nav>
        		<main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          			
          		<Mytag v1 = {props.v1} 
				v2 = {props.v2}
				v3 = {props.v3}
				v4 = {props.v4}
				v5 = {props.v5}
				click1 = {props.click1} click2 = {props.click2} click3 = {props.click3} click4 = {props.click4} click5 = {props.click5}/>
          			
          		</main>
          		}
          	</div>
        </div>	


		
		</div>
	)
}
export default media;
