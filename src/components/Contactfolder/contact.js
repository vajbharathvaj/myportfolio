import React, { useEffect, useRef } from "react";
import "./contact.css";



export default function Contact(props) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className="contactwrapper"  data-scroll-section>
			<div className="contacttitle">SHOOT ME A MESSAGE</div>
			<div className="contacttitlestroke">SHOOT ME A MESSAGE</div>
			
			<div className="profile"><img src="/image/images/bharathbluecontact.jpg"/></div>
			<div>
				<div className="contactsvgwrapper">
					<div className="contactsvg" onClick={()=>window.open("/home/hire/", '_blank')}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="216"
							height="213"
							viewBox="0 0 416 413"
						>
							<g
								id="Rectangle_33"
								data-name="Rectangle 33"
								fill="#707070"
								stroke="#707070"
								stroke-width="1"
							>
								<rect
									width="416"
									height="413"
									rx="206.5"
									stroke="none"
								/>
								<rect
									x="0.5"
									y="0.5"
									width="415"
									height="412"
									rx="206"
									fill="none"
								/>
							</g>
						</svg>
					</div>
					<div className="contactme" onClick={()=>window.open("/home/hire/", '_blank')}>Contact Me</div>
						<svg
						className="arrowc"
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
					<svg
						className="arrow2"
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
				<div></div>
				<div></div>
			</div>
		</div>
	);
}
