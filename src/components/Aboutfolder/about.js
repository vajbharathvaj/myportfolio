import React, { useEffect, useRef,useState } from "react";
import "./about.css";
import useOnScreen from "../../utils/Onscreen";
import cn from "classnames";
import {gsap} from "gsap";


import SplitText from "../../utils/SplitText.min";

export default function About(props) {
		const [reveal,setReveal]=useState(false)
	const square=useRef()
	const myScreen=useOnScreen(square)
	useEffect(()=>{

		if (myScreen){
			setReveal(myScreen)
			console.log("myscreen2")}

	},[myScreen])
	return (
		<div id="about"className={cn("about",{"is-revealed":reveal})} data-scroll-section>
			<div className="circle">
				<svg
				className="circles"
					xmlns="http://www.w3.org/2000/svg"
					width="683"
					height="686"
					viewBox="0 0 1437 1362"
				>
					<g
						id="Ellipse_7"
						data-name="Ellipse 7"
						fill="none"
						stroke="#fff"
						stroke-width="25"
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

		
			</div>
				
				<div ref={square} className="centersquare">
					{" "}
					Hey ! Here this is Bharathvaj ! , an experienced fullstack
					developer.Curious and Fascinating person,who have already worked in
					many highly demanded enthusiastic projects.
					
				</div>
			<div className="smilie">
		
			</div>

			<div className="imagewrapper">
				<div className="imagediv"><img src="/image/images/leftdiv2.jpg" /></div>
				<div className="imagediv2"><img src= "/image/images/leftdiv3.jpg" /></div>
			</div>
			<div className="biosection">
				<div className="smiliesvg">
				</div>

				<div className="biocontent">
					Love to scale up your business with my 2 years of
					experience. Both frontend and backend will be crafted like a
					pro.
				</div>
				<div className="biocontent2"></div>
				<div className="bioimg"><img src="/image/images/bharathblueshirtleft.jpg"/></div>
			</div>
			<div className="longarrow">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="255.511"
					height="1134.9"
					viewBox="0 0 255.511 1134.9"
				>
					<path
						id="Path_13"
						data-name="Path 13"
						d="M2227.923,381.662l-.975,1101.837h236.14l-27.357-10.432v20.352l32.113-9.921"
						transform="translate(-2221.944 -381.657)"
						fill="none"
						stroke="#fff"
						stroke-width="10"
					/>
					<g
						id="Polygon_1"
						data-name="Polygon 1"
						transform="translate(255.511 1066.9) rotate(90)"
						fill="#f5f5f5"
					>
						<path
							d="M 67.05535125732422 49.5 L 0.944648802280426 49.5 L 34 0.8891894221305847 L 67.05535125732422 49.5 Z"
							stroke="none"
						/>
						<path
							d="M 34 1.778385162353516 L 1.889297485351562 49 L 66.11070251464844 49 L 34 1.778385162353516 M 34 0 L 68 50 L 0 50 L 34 0 Z"
							stroke="none"
							fill="#fafafa"
						/>
					</g>
				</svg>
			</div>
		</div>
	);
}
