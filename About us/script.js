// -----------nav & footer-------

$(document).ready(()=>{

  $.get('../navbar.html',(data)=>{
      $('#Navbar').html(data)
  })
  $.get('../footer.html',(data)=>{
      $('#footer').html(data)
  })
})

gsap.matchMedia().add("(min-width: 768px)", () => {
  // Create a GSAP timeline with ScrollTrigger attached to it
  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#bannerimg",
      start: "top top+=7",
      end: "bottom+=500",
      scrub: true,
      // markers: true,
    }
  });

  // First animation: Move to x: -700 and y: 500
  timeline.to("#bannerimg", {
    x: -700,
    y: 490,
    rotationY: 180,
    delay: 0.1,
  });
  

  // Second animation: Continue to x: 50 and y: 1000
  timeline.to("#bannerimg", {
    x: 50,
    y: 900,
    rotationY: 360,
    delay: 0.1,
  });
});

    gsap.matchMedia().add("(max-width: 768px)", () => {
  // Create a GSAP timeline with ScrollTrigger attached to it
  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#bannerimg",
      start: "top top+=7",
      end: "bottom+=1100",
      scrub: true,
      // markers: true,
    }
  });

  // First animation: Move to x: -700 and y: 500
  timeline.to("#bannerimg", {
    // x: -700,
    y: 790,
    delay: 0.1,
  });

  // Second animation: Continue to x: 50 and y: 1000
  timeline.to("#bannerimg", {
    // x: 50,
    y: 1500,
    delay: 0.1,
  });
});



gsap.to("#logo",{
  delay: 0.6,
   rotate : 200000,
  duration: 1000,
      // delay: 2
  })
