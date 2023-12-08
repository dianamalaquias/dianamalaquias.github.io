let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #ba62b1 '>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #ba62b1 ">Me gusta realizar mapas y aprender Desarrollo Web.  </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
