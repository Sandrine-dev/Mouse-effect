// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

// --- FIRST BUBBLE
const cursorBubble = document.createElement("span");
//console.log(cursorBubble);
cursorBubble.classList.add("bubble_cursor", ".mouse");
document.body.appendChild(cursorBubble);

// --- MIDDLE BUBBLE
const middleBubble = document.createElement("span");

middleBubble.classList.add("middle_bubble", ".mouse");
document.body.appendChild(middleBubble);

// --- BIGGER BUBBLE
const bigBubble = document.createElement("span");

bigBubble.classList.add("big_bubble", ".mouse");
document.body.appendChild(bigBubble);

//MAKE THE BUBBLE Follow the cursor

const cursormove = document.querySelector(".bubble_cursor");
const middlemove = document.querySelector(".middle_bubble");
const bigmove = document.querySelector(".big_bubble");
//console.log(cursormove, bigmove, middlemove);

window.addEventListener("mousemove", (e) => {
  //console.log("In the fonction mousemove");
  //console.log(e.pageX);

  //For the cursor
  cursormove.style.left = e.pageX + "px";
  cursormove.style.top = e.pageY + "px";

  //For the middle
  middlemove.style.left = e.pageX + "px";
  middlemove.style.top = e.pageY + "px";

  //For the big
  bigmove.style.left = e.pageX + "px";
  bigmove.style.top = e.pageY + "px";
});

/* 
Si span Créér en HTML
    const mouses = document.querySelectorAll(".mouse");

    window.addEventListener("mousemove", (e) => {
    mouses.forEach((mouse) => {
        mouse.style.top = e.y + "px";
        mouse.style.left = e.x + "px";
    });
});

*/
