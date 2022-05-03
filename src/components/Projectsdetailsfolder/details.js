import React, { useEffect, useRef, useState } from "react";
import "./projectdetails.css";
import useOnScreen from "../../utils/Onscreen";
import cn from "classnames";
import { gsap } from "gsap";
import "../../index.css";
import SplitText from "../../utils/SplitText.min";
import LocoScroll2 from "../../utils/Locoscroll2";


const detail = [
	{
		bg: "#ffa929",
		title: "Ecommerce Websites",
		cardbig: "/image/images/ecommerce/bige.jpg",
		cardsmall: "/image/images/ecommerce/smalle.jpg",
		media: {
			first: "/image/images/ecommerce/ehomepage.png",
			second: "/image/images/ecommerce/eaddtocartpage.png",
			third: "/image/images/ecommerce/echeckoutpage.png",
			forth: "/image/images/ecommerce/echeckoutfunctionality.png",
			video: "/image/images/ecommerce/ecommerce.mp4",
		},
		card: "card3",
		content2:
			"This website is a wonderfull website to deliver your product worldwide.This website even has online payment method.",
		content:
			"This is a fully functioning ecommerce website.This website has all the features that amazon is having. I used cookies to store the data in the websites. ",
	},
	{
		cardbig: "/image/images/portfolio/bigport.jpg",
		cardsmall: "/image/images/portfolio/smallport.jpg",
		card: "card2",
		title: "Portfolios",
		media: {
			first: "/image/images/portfolio/protfirst.png",
			second: "/image/images/portfolio/portpurple.png",
			third: "/image/images/portfolio/portsecond.png",
			forth: "/image/images/portfolio/port4.png",
			video: "/image/images/portfolio/portfolio.mp4",
		},
		bg: "#f2816f",
		content2: "Your projects will be displayed in a creative manner.",
		content:
			"I ensure that your portfolio websites attract high paying clients.This website had a professional look.The website is having four modes each and every mode will have good color choice and the art direction of the websites is good too.",
	},
	{
		bg: "#80BABF",
		card: "card1",
		title: "Music Controller",
		cardbig: "/image/images/musicController/bigparty.jpg",
		cardsmall: "/image/images/musicController/smallparty.jpg",
		media: {
			first: "/image/images/musicController/mchomepage.png",
			second: "/image/images/musicController/mccreatepage.png",
			third: "/image/images/musicController/mcmainpage.png",
			forth: "/image/images/musicController/mcjoinpage.png",
			video: "/image/images/musicController/create.mp4",
		},

	content2:"I'm using Spotify API to access songs for this page,Spotify premium account is required to run the app.",
		content:"Music Controller,a web application is used in house party celebrations. A room will be created and a code will be generated for the room.By using that you can join the room.You can allow the users to skip the songs.In that room you have to set number of votes if it is reached the song will be automatically skipped.",
	
	},
];

export default function Projectsdetails(props) {
	const [reveal, setReveal] = useState(false);
	const [reveal1, setreaveal1] = useState(false);
	const [reveal2, setreaveal2] = useState(false);
	const [rendercontent, setrendercontent] = useState("");
	const [rendertopic, setrendertopic] = useState("");
	const [big, setbig] = useState("");
	const [small, setsmall] = useState("");
	const [bgs, setbg] = useState("");
	const [media, setmedia] = useState(false);
	const [preloader,setpreloader]=useState(true)
	const projectcode = props.match.params.projectcode;

	const square = useRef();
	const rectangle1 = useRef();
	const rectangle2 = useRef();
	const rectangle = useRef();
	const myScreen = useOnScreen(square);
	const another = useOnScreen(rectangle);
	const another1 = useOnScreen(rectangle2);
	useEffect(() => {
		for (var i = detail.length - 1; i >= 0; i--) {
			if (projectcode == detail[i].card) {
				setrendercontent(detail[i].content + detail[i].content2);
				setrendertopic(detail[i].title);
				setbig(detail[i].cardbig);
				setsmall(detail[i].cardsmall);
				setbg(detail[i].bg);
				setmedia(detail[i].media);
			}
		}
	}, [projectcode]);

	LocoScroll2(true);
		/*window.onload = function() {
    setpreloader(false)
}*/
	function renderpreloader(){
		return(
		<div className="preloaderwrapper" id="Main2" data-scroll-container>
		<h1>Project Details</h1>
		<h2>Hold On Dressing Up</h2>
		</div>)
	}
		const Preloader=window.setInterval(()=>{
			setpreloader(false)
			window.clearInterval(Preloader)

		},3000)



	console.log(media);
	return (
	<>{preloader?( renderpreloader()):(
		<div className="section" id="Main2" data-scroll-container>
			<div data-scroll-section>
				<div>
					<div
						className={cn("detailswrapper", {
							"is-revealed": reveal,
						})}
					>
						<div className="topicwrapper">
							<div className="detailtopic">{rendertopic}</div>
							<div className="detailcontent">{rendercontent}</div>
						</div>
						<div className="detailssmall">
							<img src={small} />
						</div>
						<div className="detailsbig">
							<img src={big} />
						</div>
					</div>
					<div
						className="gallery-wrapper"
						style={{ backgroundColor: `${bgs}` }}
					>
						<div className="gallery-board">
							<img src={media.first} />
						</div>
						<div className="gallery-board">
							<img src={media.second} />
						</div>
					</div>
					<div
						className="gallery-wrapper"
						style={{ backgroundColor: `${bgs}`, marginTop: "40px" }}
					>
						<div className="gallery-board">
							<img src={media.third} />
						</div>
						<div className="gallery-board">
							<img src={media.forth} />
						</div>
					</div>
					<div className="artboardwrapper">
						<div className="artboard">
						{media?							
							<video
								autoPlay={true}
								muted
								loop={true}
								playsInline={true}
							>
								<source src={media.video} type="video/mp4" />
							</video>:<></>}
						
						</div>
					</div>
				</div>
			</div>
		</div>)}</>
	);
}
