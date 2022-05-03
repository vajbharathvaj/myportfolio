import React, { useEffect, useRef } from "react";
import "./nav.css";


export default function Nav(props) {

	const scrolltoproject=()=>{window.scrollTo({top:300,behaviour:"smooth"}
		)
	console.log("clickeddd")}
	return (
		<div className="navsection" data-scroll-section>
			<div className="nav">
				<div className="bharath"
					
				>
					Bharathvaj
				</div>
				<div
				className="navdes"
					
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="60.458"
						height="30"
						viewBox="0 0 86.458 30"
					>
						<g
							id="Component_2_1"
							data-name="Component 2 – 1"
							transform="translate(0 5)"
						>
							<path
								id="Path_19"
								data-name="Path 19"
								d="M2813.042-30H2899.5"
								transform="translate(-2813.042 30)"
								fill="#fff"
								stroke="#f5f5f5"
								stroke-width="10"
							/>
							<line
								id="Line_1"
								data-name="Line 1"
								x2="86"
								transform="translate(0.458 20)"
								fill="none"
								stroke="#fafafa"
								stroke-width="10"
							/>
						</g>
					</svg>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						fontSize: "14px",
					}}
				>
					<div style={{ paddingRight: "20px" }} onClick={scrolltoproject} className="contact"></div>
					<div className="hire" onClick={()=>window.open("/home/hire/", '_blank')}>Hire me</div>
				</div>
			</div>
		</div>
	);
}
