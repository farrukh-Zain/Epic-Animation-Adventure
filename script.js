function init(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();

}

init()

var crscr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove", function(dets){
    crscr.style.left = dets.x + 20+"px"
    crscr.style.top = dets.y + 20+"px"
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top 27%",
        end: "top 0",
        scrub:3
    }
})

tl.to(".page1 h1",{
    x:-100,    
},"anim")

tl.to(".page1 h2",{
    x:100,    
},"anim")
tl.to(".page1 video",{
    width:"90%"
},"anim")
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller: ".main",
        markers:true,
        start: "top -115%",
        end: "top -120%",
        scrub:3
    }
})
tl2.to(".main", {
    backgroundColor:"#fff"
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -280%",
        end: "top -300%",
        scrub:3
    }
})
tl3.to(".main", {
    backgroundColor: "#0F0D0D"
})


var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        // elem.style.backgroundColor = "red"
         var att = elem.getAttribute("data-image")
        // console.log(att)
        crscr.style.width = "470px"
        crscr.style.height = "370px"
        crscr.style.borderRadius = "0"
        crscr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave", function(){
        elem.style.backgroundColor = "transparent"
        crscr.style.width = "20px"
        crscr.style.height = "20px"
        crscr.style.borderRadius = "50%"
        crscr.style.backgroundImage = `none`
    })
})

var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        purple.style.display = "block"
        purple.style.opacity = "1"
    })
    elem.addEventListener("mouseleave", function(){
        purple.style.display = "none"
        purple.style.opacity = "0"
    })
})  