import React, { useEffect, useRef } from "react";
import "./moreprojects.css";


export default function Moreprojects(props) {
	return (
		<section className="moreprojectsection" data-scroll-section>
			<div className="moreprojects">
				<div className="open-content"></div>
				<div className="open-content-design"></div>
				<div className="paddisplay">
					<div className="textwrapper">
						<div className="headertext">project 1 </div>
						<div className="texttittle">FLIRTY FLOWERS</div>
						<div className="text1">
							This websites is kind of like a portfolio websites.
							It has beautifull art direction and awesome layouts.
							This website has smooth scroll and other awesome effects.
						</div>
						<div className="straightarrow">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="96.202"
								height="111.349"
								viewBox="0 0 296.202 111.349"
							>
								<line
									id="Line_2"
									data-name="Line 2"
									x2="266"
									transform="translate(6 58.058)"
									fill="none"
									stroke="#fafafa"
									stroke-linecap="round"
									stroke-width="12"
								/>
								<path
									id="Path_20"
									data-name="Path 20"
									d="M3526.686,10904.171l57.112,47.118-57.112,39.979Z"
									transform="translate(-3297.5 -10891.442)"
									fill="#fff"
									stroke="#fff"
									stroke-width="12"
								/>
							</svg>
						</div>
					</div>
					<div className="pad">	
					<video
								autoPlay={true}
								muted
								loop={true}
								playsInline={true}
							>
								<source src ="/image/images/Flirtyflowers/ff.mp4" type="video/mp4" />
							</video></div>
				</div>
				<div className="paddisplay2">
					<div className="pad2">	<video
								autoPlay={true}
								muted
								loop={true}
								playsInline={true}
							>
								<source src="/image/images/disneyclone/disney.mp4" type="video/mp4" />
							</video></div>
					<div className="textwrapper2">
						<div className="headertext2">project 2 </div>
						<div className="texttittle2">Disney clone</div>
						<div className="text2">
							I have also cloned many websites and disney clone is the one that i have started with.
							This uses firesbase to store the data.Redux is used for login funtionality.Also my cloning skills are top notch. 
						</div>
						<div className="straightarrow2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="96.202"
								height="111.349"
								viewBox="0 0 296.201 111.349"
							>
								<line
									id="Line_2"
									data-name="Line 2"
									x2="266"
									transform="translate(290.201 53.292) rotate(180)"
									fill="none"
									stroke="#000000"
									stroke-linecap="round"
									stroke-width="12"
								/>
								<path
									id="Path_20"
									data-name="Path 20"
									d="M3526.686,10904.171l57.112,47.118-57.112,39.979Z"
									transform="translate(3593.702 11002.791) rotate(180)"
									stroke="#000000"
									stroke-width="12"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div>
						
				<div className="paddisplay">
					<div className="textwrapper">
						<div className="headertext">project 3 </div>
						<div className="texttittle">PATH FINDER</div>
						<div className="text1">
						This pathfinding algorithm is used in 
						google maps to find the 
						shortest direction between two points.
						The two points are start  and end points.The purple blocks represents the shortest path. 
						</div>
						<div className="straightarrow">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="96.202"
								height="111.349"
								viewBox="0 0 296.202 111.349"
							>
								<line
									id="Line_2"
									data-name="Line 2"
									x2="266"
									transform="translate(6 58.058)"
									fill="none"
									stroke="#fafafa"
									stroke-linecap="round"
									stroke-width="12"
								/>
								<path
									id="Path_20"
									data-name="Path 20"
									d="M3526.686,10904.171l57.112,47.118-57.112,39.979Z"
									transform="translate(-3297.5 -10891.442)"
									fill="#fff"
									stroke="#fff"
									stroke-width="12"
								/>
							</svg>
						</div>
					</div>
					<div className="pad">	
					<video
								autoPlay={true}
								muted
								loop={true}
								playsInline={true}
							>
								<source src="/image/images/pathfinder/pathfinder.mp4" type="video/mp4" />
							</video></div>
				</div>
				<div className="end-content"></div>
				<div className="end-content-design"></div>
				</div>
			</div>

		</section>
	);
}
