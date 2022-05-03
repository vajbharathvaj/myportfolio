import React, { useEffect, useRef ,useState} from "react";
import "./header.css";
import useOnScreen from "../../utils/Onscreen";
import cn from "classnames";
import {gsap} from "gsap";

import SplitText from "../../utils/SplitText.min";

export default function Header(props) {
	const [reveal,setReveal]=useState(false)
	const [splittedtext,setsplittedtext]=useState(false)
	const [papercontent,setpapercontent]=useState(false)
	const [width,setwidth]=useState(7.8)
	
	const plane=useRef()
	const myScreen=useOnScreen(plane)
	
	useEffect(()=>{

		if (myScreen){
			setReveal(myScreen)
			console.log("myscreen")}

	},[myScreen])
	useEffect(()=>{
			const splitline= new SplitText(".Classyweb",{type:"lines", linesClass: "header1",})
			const splitline2= new SplitText(".Classyweb",{type:"lines", linesClass: "header2",})
			
			
			gsap.from(splitline.lines,{ y:-170,duration:1.2,ease:"Power3.easeOut"})
			gsap.to(splitline.lines,{opacity:1,duration:0.6,ease:"Power3.easeOut"})
	
			
			
	},[reveal])
	useEffect(()=> {
			const round=document.querySelector(".papper-content p")
			const splitel=round.innerText.split('')
			
			
			round.innerHTML=splitel.map((char,i)=>`<span style=transform:rotate(${i*width}deg)>${char}</span>`).join("")
			console.log(splitel,"rounded el")
			setpapercontent(true)},[splittedtext])



	return (
	
		<div className={cn("header",{"is-revealed":myScreen})}  data-scroll-section>
		<div className="Classyweb">
			CLASSY WEBSITES
			</div>
			<div  className={cn("papper-content-wrapper",{"revealed":papercontent})}>
			<div className="papper-content">
			<svg
				className="circle1"
					xmlns="http://www.w3.org/2000/svg"
					width="620"
					height="686"
					viewBox="0 0 1437 1362"
				>
					<g
						id="Ellipse_7"
						data-name="Ellipse 7"
						fill="none"
						stroke="#fff"
						stroke-width="45"
					>
						<ellipse
							cx="718.5"
							cy="681"
							rx="718.5"
							ry="681"
							stroke="none"
						/>
						<ellipse
							cx="718.5"
							cy="681"
							rx="709"
							ry="671.5"
							fill="none"
						/>
					</g>
				</svg>
		
				<div className="textpep">

				<p> Transform Your Paper Ball Into Paper Plane  »»</p>
				</div>
			</div>
			
				<div className="plane"  ref={plane}>
				<svg
				id ="plane"
					width="71"
					height="68"
					viewBox="0 0 462 158"
					xmlns="http://www.w3.org/2000/svg"
				>
					<polygon
						fill="#AFAFAF"
						points="460.677372 154.02541985249582 112.27640346205379 37.526354395849026 118.43089243363123 143.63228782574265"
					></polygon>
					<polygon
						fill="#F3F2F4"
						points="112.27640346205379 37.526354395849026 182.5756836521094 0 460.677372 154.02541985249582"
					></polygon>
					<polygon
						fill="#F3F2F4"
						points="77.95038878705539 55.79415513766142 460.677372 154.02541985249582 0 97.24778589337853"
					></polygon>
				</svg>
			</div>
			</div>
			<div className="arrow">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="145.281"
					height="143.412"
					viewBox="0 0 145.281 153.412"
				>
					<path
						id="arrow-small"
						d="M75.67,101.82c-3.83,3.823-14.712,15.9-18.6,19.687-1.109,1.08-2.828,3.087-4.771,3.508C60.237,80.045,43.6,27.9,2.495,1.5,1.523.875.54,1.15.254,2.162.081,2.775-.063,4.122,6.328,9c33.958,27.28,51.226,73.961,41.686,114.767a20.164,20.164,0,0,1-3.475-4.521c-5.78-8.515-11.341-17.137-17.009-25.7-1.466-2.215-2.02,1.448-2.159,2.3a10.651,10.651,0,0,0,1.77,7.3c3.608,5.453,6.785,10.635,10.393,16.088,2.893,4.371,4.949,8.546,8.857,12.4,3.021,2.983,3.692,2.851,7.58.266,5.313-3.532,9.916-8.684,14.254-13.011,1.71-1.707,9.938-10.846,9.675-12.841C77.834,105.525,76.894,100.6,75.67,101.82Z"
						transform="translate(84.765 -0.341) rotate(39)"
						fill="#fff"
						stroke="#fff"
						stroke-width="1"
						fill-rule="evenodd"
					/>
				</svg>
			</div>
			<div className="arrow2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="230"
					height="10"
					viewBox="0 0 476 10"
				>
					<g
						id="Rectangle_34"
						data-name="Rectangle 34"
						transform="translate(0 10) rotate(-90)"
						fill="#fff"
						stroke="#707070"
						stroke-width="1"
					>
						<rect width="10" height="490" rx="5" stroke="none" />
						<rect
							x="0.5"
							y="0.5"
							width="9"
							height="490"
							rx="4.5"
							fill="none"
						/>
						>
					</g>
				</svg>
			</div>
			
		</div>
	);
}
