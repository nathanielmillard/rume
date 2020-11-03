import gsap from 'gsap'

export const angryFeelingAnimation = () => {
  let angryTimeline = gsap.timeline({repeat: 10});
  for (var i = 0; i <= 10; i++) {
    angryTimeline.from(`.square${i}`, {
      duration: .5,
      y: "-60vh",
      display: "flex",
    })
    .from(`.square${i} .childSquare`, {
      duration: .5,
      x: "0",
      y: "0",
      backgroundColor: 'hsl(329, 57%, 25%)',
      rotate: "random(-45, 45, 2)",
    })
    .to(`.square${i}`, {
      backgroundColor: 'hsl(329, 57%, 25%)',
      duration: 1.5,
      height: "150px",
      width: "150px",
      y: "55vh",
      ease: "bounce"
     })
     .add("explode")
     .to(`.square${i}`, {
       duration: .2,
       backgroundColor: 'hsla(329, 57%, 25%, 0%)'
     }, "explode")
     .to(`.square${i} #part1`, {
       duration:.5,
       y: "-=50vh",
       x: "-=30vh",
       backgroundColor: 'hsla(329, 57%, 25%, 0%)',
     }, "explode")
     .to(`.square${i} #part2`, {
       duration:.5,
       y: "-=50vh",
       x: "+=10vh",
       backgroundColor: 'hsla(329, 57%, 25%, 0%)',
     }, "explode")
     .to(`.square${i} #part3`, {
       duration:.5,
       y: "-=50vh",
       x: "-=60vh",
       backgroundColor: 'hsla(329, 57%, 25%, 0%)',
     }, "explode")
     .to(`.square${i} #part4`, {
       duration:.5,
       y: "-=50vh",
       x: "+=30vh",
       backgroundColor: 'hsla(329, 57%, 25%, 0%)',
     }, "explode")
     .to(`.square${i} #part5`, {
       duration:.5,
       height: "10%",
       width: "10%",
       y: "-=90vh",
       x: "+=20vh",
       backgroundColor: 'hsla(329, 57%, 25%, 0%)',
     }, "explode")
     .to(`.square${i} #part6`, {
       duration:.5,
       height: "15%",
       width: "15%",
       y: "-=80vh",
       x: "-=50vh",
       backgroundColor: 'hsla(329, 57%, 25%, 0%)',
     }, "explode")
     .to(`.square${i} #part7`, {
       duration:.5,
       height: "20%",
       width: "20%",
       y: "-=70vh",
       x: "+=0vh",
       backgroundColor: 'hsla(329, 57%, 25%, 0%)',
     }, "explode")
     .to(`.square${i} #part8`, {
       duration:.5,
       height: "30%",
       width: "30%",
       y: "-=60vh",
       x: "-=20vh",
       backgroundColor: 'hsla(329, 57%, 25%, 0%)',
     }, "explode")
    }
  }

export const angryFeelingAnimation2 = () => {
   let angryTimeline2 = gsap.timeline({repeat: 10, delay: .5});
   for (var i = 3; i <= 13; i++) {
     angryTimeline2.from(`.square${i}`, {
       duration: .5,
       y: "-60vh",
       display: "flex",
     })
     .from(`.square${i} .childSquare`, {
       duration: .5,
       x: "0",
       y: "0",
       backgroundColor: 'hsl(329, 57%, 25%)',
       rotate: "random(-45, 45, 2)",
     })
     .to(`.square${i}`, {
       backgroundColor: 'hsl(329, 57%, 25%)',
       duration: 1,
       height: "150px",
       width: "150px",
       y: "55vh",
       ease: "bounce"
      })
      .add("explode")
      .to(`.square${i}`, {
        duration: .2,
        backgroundColor: 'hsla(329, 57%, 25%, 0%)'
      }, "explode")
      .to(`.square${i} #part1`, {
        duration:.5,
        y: "-=50vh",
        x: "-=30vh",
        backgroundColor: 'hsla(329, 57%, 25%, 0%)',
      }, "explode")
      .to(`.square${i} #part2`, {
        duration:.5,
        y: "-=70vh",
        x: "+=10vh",
        backgroundColor: 'hsla(329, 57%, 25%, 0%)',
      }, "explode")
      .to(`.square${i} #part3`, {
        duration:.5,
        y: "-=60vh",
        x: "-=60vh",
        backgroundColor: 'hsla(329, 57%, 25%, 0%)',
      }, "explode")
      .to(`.square${i} #part4`, {
        duration:.5,
        y: "-=50vh",
        x: "+=30vh",
        backgroundColor: 'hsla(329, 57%, 25%, 0%)',
      }, "explode")
      .to(`.square${i} #part5`, {
        duration:.5,
        height: "10%",
        width: "10%",
        y: "-=90vh",
        x: "+=20vh",
        backgroundColor: 'hsla(329, 57%, 25%, 0%)',
      }, "explode")
      .to(`.square${i} #part6`, {
        duration:.5,
        height: "15%",
        width: "15%",
        y: "-=80vh",
        x: "-=50vh",
        backgroundColor: 'hsla(329, 57%, 25%, 0%)',
      }, "explode")
      .to(`.square${i} #part7`, {
        duration:.5,
        height: "20%",
        width: "20%",
        y: "-=70vh",
        x: "+=0vh",
        backgroundColor: 'hsla(329, 57%, 25%, 0%)',
      }, "explode")
      .to(`.square${i} #part8`, {
        duration:.5,
        height: "30%",
        width: "30%",
        y: "-=60vh",
        x: "-=20vh",
        backgroundColor: 'hsla(329, 57%, 25%, 0%)',
      }, "explode")
     }
   }
export const angryFeelingAnimation3 = () => {
  let angryTimeline3 = gsap.timeline({repeat: 10, delay: 1});
  for (var i = 2; i <= 12; i++) {
    angryTimeline3.from(`.square${i}`, {
      duration: .5,
      y: "-60vh",
      display: "flex",
    })
    .from(`.square${i} .childSquare`, {
      duration: .5,
      x: "0",
      y: "0",
      backgroundColor: 'hsl(329, 57%, 25%)',
      rotate: "random(-45, 45, 2)",
    })
    .to(`.square${i}`, {
      backgroundColor: 'hsl(329, 57%, 25%)',
      duration: 1,
      height: "150px",
      width: "150px",
      y: "55vh",
      ease: "bounce"
     })
     .add("explode")
     .to(`.square${i}`, {
       duration: .2,
       backgroundColor: 'hsla(329, 57%, 25%, 0%)'
     }, "explode")
     .to(`.square${i} #part1`, {
       duration:.5,
       y: "-=50vh",
       x: "-=30vh",
       backgroundColor: 'hsla(329, 57%, 25%, 0%)',
     }, "explode")
     .to(`.square${i} #part2`, {
       duration:.5,
       y: "-=50vh",
       x: "+=10vh",
       backgroundColor: 'hsla(329, 57%, 25%, 0%)',
     }, "explode")
     .to(`.square${i} #part3`, {
       duration:.5,
       y: "-=50vh",
       x: "-=60vh",
       backgroundColor: 'hsla(329, 57%, 25%, 0%)',
     }, "explode")
     .to(`.square${i} #part4`, {
       duration:.5,
       y: "-=50vh",
       x: "+=30vh",
       backgroundColor: 'hsla(329, 57%, 25%, 0%)',
     }, "explode")
     .to(`.square${i} #part5`, {
       duration:.5,
       height: "10%",
       width: "10%",
       y: "-=90vh",
       x: "+=20vh",
       backgroundColor: 'hsla(329, 57%, 25%, 0%)',
     }, "explode")
     .to(`.square${i} #part6`, {
       duration:.5,
       height: "15%",
       width: "15%",
       y: "-=80vh",
       x: "-=50vh",
       backgroundColor: 'hsla(329, 57%, 25%, 0%)',
     }, "explode")
     .to(`.square${i} #part7`, {
       duration:.5,
       height: "20%",
       width: "20%",
       y: "-=70vh",
       x: "+=0vh",
       backgroundColor: 'hsla(329, 57%, 25%, 0%)',
     }, "explode")
     .to(`.square${i} #part8`, {
       duration:.5,
       height: "30%",
       width: "30%",
       y: "-=60vh",
       x: "-=20vh",
       backgroundColor: 'hsla(329, 57%, 25%, 0%)',
     }, "explode")
   }
 }
