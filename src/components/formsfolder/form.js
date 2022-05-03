import React, { useEffect, useRef,useState } from "react";
import "./form.css"


export default function Form(props) {
	const[copy,setcopy]=useState('Copy')
	useEffect(()=>{
		const emaildiv =document.getElementsByClassName("email")
		const text=emaildiv.innerText
		console.log(emaildiv[0])
		console.log(text)
		emaildiv[0].select()
		document.execCommand("copy")
		window.getSelection().removeAllRanges()
		
			},[copy])


	return (
		<div className="formwrapper">
		<div className="formtitle">If You Like Mails</div>
		<div className="hovereffect">
		<textarea className="email">vajbharath665@gmail.com</textarea>
		<div className="copied" onClick={()=>setcopy("Copied")}> {copy}</div>
		</div>
		<div className="message">Ready to hear your story.hit me a message let's talk.</div>

		</div>)
}