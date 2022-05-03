import React,{useEffect,useRef,useState} from "react"
import Nav from "./Navbar/nav"
import "../index.css"
import Header from "./Headerfolder/header"
import About from "./Aboutfolder/about"
import Project from "./Projectsfolder/project"
import Moreprojects from "./Moreprojectsfolder/moreprojects"
import Contact from "./Contactfolder/contact"
import Uiux from "./Uiuxfolder/uiux"
import LocoScroll from "./Locoscroll"
import Projectsdetails from "./Projectsdetailsfolder/details"
import gsap from "gsap";




export default function  Homepage (props){
	const [details,setDetails]=useState()
	const [detail,setDetail]=useState()
	function displaycallback(argument){
		setDetails(argument)
		
		
	}
	useEffect(()=>{
		console.log("useEffect",details)
	},[details])
	
	LocoScroll(true)

	

	
	return(<div className="Homepage" id="Main" data-scroll-container>
		<Nav />
		<Header />
		<About />
		<Project callback={displaycallback} />
		<Moreprojects />
		<Uiux />
		<Contact />

		</div>
		)

}