import React, { Component } from "react";
import { render } from "react-dom";
import Homepage from "./components/homepage";
import "./index.css";
import ReactDOM from "react-dom";

import {
	BrowserRouter as Router,
	Switch,
	Link,
	Redirect,
	Route,
} from "react-router-dom";
import Mainpage from "./components/mainpage";



export default class App extends Component{
	constructor(props){
		super(props)
		console.log("logginggg")

	}

	render (){
		return(
			<div>
			<Mainpage />

		   </div>

		)
	}
}
const appDiv = document.getElementById("app");
render(<App />, appDiv);





