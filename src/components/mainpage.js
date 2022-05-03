import React, { useRef, useEffect } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Link,
	Redirect,
	Route,
} from "react-router-dom";
import Projectsdetails from "./Projectsdetailsfolder/details";
import Form from "./formsfolder/form";
import Homepage from "./homepage";


export default function Mainpage(props) {

	console.log("mainpage")
	return (
		<div  id="Mainpage">
			<Router>
				<Switch>
					<Route exact path="/home/main"  component={Homepage} />
					<Route path="/home/detail/:projectcode" render={(props)=>{return <Projectsdetails {...props} />} }/>
					<Route path="/home/hire" component={Form}/>
				</Switch>
			</Router>

		
		</div>
	);
}
