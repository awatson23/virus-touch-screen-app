
//variable to store back button 
let backButton = document.querySelector("#back-button");

var phage = gsap.to(".draggable", 30, {x:1400, ease:Linear.easenone, repeat:-1})

//variables for each text back so i can control their opacity transition 
let infotext = document.querySelector("#info1");
let infotext2 = document.querySelector("#info2");
let infotext3 = document.querySelector("#info3");
let infotext4 = document.querySelector("#info4");

//variable to store draggable bacteriophage
let dragItems = document.querySelector(".draggable");

//variable to store dropbox
let dropArea = document.querySelector("#dragWrapper");

//variables to store all the progress bar assets
let node2 = document.querySelector("#node2-svg");
let node3 = document.querySelector("#node3-svg");
let node4 = document.querySelector("#node4-svg");
let node5 = document.querySelector("#node5-svg");

let line1 = document.querySelector("#line1");
let line2 = document.querySelector("#line2");
let line3 = document.querySelector("#line3");
let line4 = document.querySelector("#line4");


let wrapper1 = document.querySelector("#wrapper1");
let wrapper3 = document.querySelector("#wrapper3");
let wrapper4 = document.querySelector("#wrapper4");


//variables for 5th page with DNA buttons
let dnaDiv = document.querySelector("#dnaInfoDiv ");
let dna1 = document.querySelector("#r1");
let dna2 = document.querySelector("#r2");
let dna3 = document.querySelector("#r3");
let dna4 = document.querySelector("#r4");

const threshold = "70%";

Draggable.create(dragItems, {
  //bounds: document.querySelector("#wrapper"),
  onDragEnd: function(e) {
      if (this.hitTest(dropArea, threshold) & (e.target.id == 'phage')) {
              //dropAreaText.style.display = 'block';
              //dropAreaText.innerHTML = ``
              infotext2.style.opacity = 1;
              gsap.to(window, {duration: 0, scrollTo: "#wrapper3"});
              node3.style.fill = '#FFB92D';
              line2.style.backgroundColor = '#FFB92D';
              document.getElementById('vid1').play();
      }
    }
  });


backButton.onclick = function() {
  location.reload(); 
  gsap.to(window, {duration: 0, scrollTo: "#wrapper1"});
};


//where section transitions and progress bar is changed
//upon users interactions
wrapper1.onclick = function() {
  infotext.style.opacity = 1;
  gsap.to(window, {duration: 0, scrollTo: "#wrapper2"});
  node2.style.fill = '#FFB92D';
  line1.style.backgroundColor = '#FFB92D';
  document.getElementById('vid').play();
};


wrapper3.onclick = function() {
  infotext3.style.opacity = 1;
  gsap.to(window, {duration: 0, scrollTo: "#wrapper4"});
  node4.style.fill = '#FFB92D';
  line3.style.backgroundColor = '#FFB92D';
  document.getElementById('vid2').play();
};

wrapper4.onclick = function() {
  infotext4.style.opacity = 1;
  gsap.to(window, {duration: 0, scrollTo: "#wrapper5"});
  node5.style.fill = '#FFB92D';
  line4.style.backgroundColor = '#FFB92D';
};

//5th page DNA buttons functionality
dna1.onclick = function() {
  dnaDiv.innerHTML = `<p class="subTitle">What sets antibiotics and bacteriophages apart?</p>
  <p class="subText">Phages focus their attention to one strain of bacteria.
  <br></br>Antibiotics attack a broad spectrum of bacteria, including the 
  good ones. This can disrupt microbial balance. <br><br>Bacteria are evolving and building resistance to antibiotics. Predictions say by 2050, "superbugs" could kill more humans a year than cancer.
  </p>`
  dna1.style.opacity = '1';1
};

dna2.onclick = function() {
  dnaDiv.innerHTML = `<p class="subTitle">Could bacteria evolve to defend 
  themselves against Bacteriophages?</p>
  <p class="subText">Not necessarily, because 'phages can evolve in response as well.
  <br><br>In order for bacteria to become resistant to 'phages, they have to give up their resistance to antibiotics.
  <br><br>This makes the pairing of antibiotics and Bacteriophages a catch-22!
  </p>`
  dna2.style.opacity = '1';
};

dna3.onclick = function() {
  dnaDiv.innerHTML = `<p class="subTitle">How are we using Bacteriophages now?</p>
  <p class="subText">With the dilemma of "superbugs" on the horizon, Bacteriophage therapy has yet to be
  approved by the FDA. <br><br>'Phages have proven they can take care of problems that antibiotics just cannot cut.
  <br><br>With patience and care, bacteriophages have the potential to become our best weapon against disease. 
  </p>`
  dna3.style.opacity = '1';
};

dna4.onclick = function() {
  dnaDiv.innerHTML = `<p class="subTitle">Why isn't Bacteriophage therapy a more common practice?</p>
  <p class="subText">In 1915, a decade before penicillin, Bacteriophages were first discovered by Frederick Twort.
  <br><br>There were soon used to correctly treat dysentery and cholera. "In one study, 63% of untreated people suffering from cholera in Punjab
  India died while only 8% of those who were treated by phages died."<br><br>
  Bacteriophages lost attention when antiobiotics (penicillin) took over the scene because of their convenience and broad-spectrum use. </p>`
  dna4.style.opacity = '1';
};




