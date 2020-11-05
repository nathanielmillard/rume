import gsap from 'gsap'

export const inhaleExhale = (mood) => {
  let colors = {
    fine: ['hsl(128, 29%, 90%)', 'hsl(200, 14%, 96%)', 'hsl(119, 38%, 72%)',
      'hsl(120, 18%, 56%)', 'hsl(124, 11%, 24%)', 'hsl(0, 0%, 8%)'],
    anxious: ['hsl(49, 43%, 71%)', 'hsl(200, 14%, 96%)', 'hsl(48, 46%, 51%)',
      'hsl(48, 57%, 45%)', 'hsl(48, 44%, 25%)', 'hsl(225, 10%, 8%)'],
    angry: ['hsl(325, 15%, 78%)', 'hsl(200, 14%, 96%)', 'hsl(327, 18%, 52%)',
        'hsl(329, 57%, 25%)', '	hsl(327, 52%, 21%)', 'hsl(320, 30%, 12%)'],
    sad: ['hsl(198, 29%, 80%)', 'hsl(200, 14%, 96%)', 'hsl(197, 30%, 63%)',
        'hsl(210, 21%, 34%)', 'hsl(224, 26%, 20%)', 'hsl(246, 48%, 8%)']
  }
  
  var tl1 = gsap.timeline({repeat: 25, yoyo: true});
  tl1.to("#one", {
      duration: 5,
      scale: 2,
      backgroundColor: colors[mood][0],
  })
  .to("#one", {
      duration: 5,
      scale: 1,
      backgroundColor: colors[mood][1],
  })
  var tl2 = gsap.timeline({repeat: 25, yoyo: true});
  tl2.to("#two", {
      duration: 5,
      scale: 4,
      backgroundColor: colors[mood][2],
  })
  .to("#two", {
      duration: 5,
      scale: 1,
      backgroundColor: colors[mood][1],
  })
  var tl3 = gsap.timeline({repeat: 25, yoyo: true});
  tl3.to("#three", {
      duration: 5,
      scale: 6,
      backgroundColor: colors[mood][3],
  })
  .to("#three", {
      duration: 5,
      scale: 1,
      backgroundColor: colors[mood][1],
  })
  var tl4 = gsap.timeline({repeat: 25, yoyo: true});
  tl4.to("#four", {
      duration: 5,
      scale: 9,
      backgroundColor: colors[mood][4],
  })
  .to("#four", {
      duration: 5,
      scale: 1,
      backgroundColor: colors[mood][1],
  })
  var tl5 = gsap.timeline({repeat: 25, yoyo: true});
  tl5.to("#five", {
      duration: 5,
      scale: 12,
      backgroundColor: colors[mood][5],
  })
  .to("#five", {
      duration: 5,
      scale: 1,
      backgroundColor: colors[mood][1],
  })
}
