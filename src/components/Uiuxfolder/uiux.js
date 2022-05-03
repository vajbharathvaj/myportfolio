import React, { useEffect, useRef,useState } from "react";
import "./uiux.css";
import useOnScreen from "../../utils/Onscreen";
import cn from "classnames";
import {gsap} from "gsap";
import SplitText from "../../utils/SplitText.min";

export default function Uiux(props) {
	const [reveal,setReveal]=useState(false)
	const uiux=useRef()
	const myScreen=useOnScreen(uiux)
	useEffect(()=>{

		if (myScreen){
			setReveal(myScreen)
			console.log("myscreen5")}

	},[myScreen])
const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
	return (
		<div className={cn("uiwrapper",{"is-revealed":reveal})}  data-scroll-section>
			<div className="low"> UI/UX Designs</div>
		
			<div className="imagewrapper" >

				<div className="uiimage"><img src="/image/images/uiux/uxui.png" /></div>
			
			<div ref={uiux} className="designsvg">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="507"
					height="378"
					viewBox="0 0 907 378"
				>
					<text
						id="Designs"
						transform="translate(1 189)"
						fill="none"
						stroke="#fff"
						stroke-width="1"
						font-size="168"
						font-family="ArialMT, Arial"
					>
						<tspan x="103.475" y="152">
							DESIGNS
						</tspan>
					</text>
					<text
						id="Designs-2"
						data-name="Designs"
						transform="translate(1 1)"
						fill="#fff"
						stroke="#fff"
						stroke-width="1"
						font-size="168"
						font-family="ArialMT, Arial"
					>
						<tspan x="103.475" y="152">
							DESIGNS
						</tspan>
					</text>
				</svg>
				</div>
			</div>
			<div className="uisvg">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="364"
					height="418"
					viewBox="0 0 564 518"
				>
					<text
						id="UI_UX"
						data-name="UI/UX"
						transform="translate(1 165)"
						fill="#fff"
						stroke="#262323"
						stroke-width="1"
						font-size="168"
						font-family="ArialMT, Arial"
					>
						<tspan x="56.973;" y="152">
							UI/UX
						</tspan>
					</text>
					<text
						id="UI_UX-2"
						data-name="UI/UX"
						transform="translate(1 329)"
						fill="none"
						stroke="#fff"
						stroke-width="1"
						font-size="168"
						font-family="ArialMT, Arial"
					>
						<tspan x="56.973;" y="152">
							UI/UX
						</tspan>
					</text>
					<text
						id="UI_UX-3"
						data-name="UI/UX"
						transform="translate(1 1)"
						fill="none"
						stroke="#fff"
						stroke-width="1"
						font-size="168"
						font-family="ArialMT, Arial"
					>
						<tspan x="56.973;" y="152">
							UI/UX
						</tspan>
					</text>
				</svg>
			</div>
		</div>
	);
}
