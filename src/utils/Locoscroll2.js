import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";



gsap.registerPlugin(ScrollTrigger);

export default function LocoScroll2(value){
	useEffect(()=>{
		if (!value) return;
		let locoScroll=null
		const Scrol_el=document.querySelector("#Main2")
		locoScroll = new LocomotiveScroll({
      el: Scrol_el,
      smooth: true,
      
      
    });
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#Main2", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },   
  scrollLeft(value) {
       
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.x;},

    getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
 
});

	ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

	// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
	ScrollTrigger.refresh();


	})
	

}