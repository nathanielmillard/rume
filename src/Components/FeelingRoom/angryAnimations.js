import gsap from 'gsap'

export const angryFeelingAnimation = () => {
  let angryTimeline = gsap.timeline({repeat: 10});
  for (var i = 0; i <= 9; i++) {
    angryTimeline.from(`.square${i}`, {
      duration: .5,
      y: "-50vh",
      display: "flex",
    })
    .to(`.square${i}`, {
      duration: 1.75,
      y: "60vh",
      ease: "bounce",
      backgroundColor: 'hsl(329, 57%, 25%)',
    })
    .add("shake")
    .to(`.square${i}`, {
      backgroundColor: 'hsla(329, 57%, 25%)',
    }, "shake")
    .to(`.square${i} #part1`, {
      backgroundColor: 'hsla(329, 57%, 25%)',
    }, "shake")
    .to(`.square${i} #part2`, {
      backgroundColor: 'hsla(329, 57%, 25%)',
    }, "shake")
    .to(`.square${i} #part3`, {
      backgroundColor: 'hsla(329, 57%, 25%)',
    }, "shake")
    .to(`.square${i} #part4`, {
      backgroundColor: 'hsla(329, 57%, 25%)',
    }, "shake")
    .add("explode")
    .to(`.square${i}`, {
      backgroundColor: 'hsla(225, 10%, 8%, 0%)',
      duration: .02
    }, "explode")
    .to(`.square${i} #part1`, {
      y: "-=50vh",
      x: "-=30vh",
      duration: .5,
      rotate: "random(-45, 45, 2)",
      backgroundColor: 'hsla(225, 10%, 8%, 0%)',
    }, "explode")
    .to(`.square${i} #part2`, {
      y: "-=50vh",
      x: "+=10vh",
      duration: .5,
      rotate: "random(-45, 45, 2)",
      backgroundColor: 'hsla(225, 10%, 8%, 0%)'
    }, "explode")
    .to(`.square${i} #part3`, {
      y: "-=50vh",
      x: "-=60vh",
      duration: .5,
      rotate: "random(-45, 45, 2)",
      backgroundColor: 'hsla(225, 10%, 8%, 0%)'
    }, "explode")
    .to(`.square${i} #part4`, {
      y: "-=50vh",
      x: "+=30vh",
      duration: .5,
      rotate: "random(-45, 45, 2)",
      backgroundColor: 'hsla(225, 10%, 8%, 0%)'
    }, "explode")
  }
}
