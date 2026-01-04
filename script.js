let poster = document.querySelector(".poster")
let main = document.querySelector("#main")
let deva = document.querySelector("#deva")
let resle = document.querySelector("#wrestle")
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let play = document.querySelector(".play")
let pause = document.querySelector(".pause")
let left = document.querySelector("#left")
let right = document.querySelector("#right")


//reset animations
const resetTransforms = () => {
    main.style.transition = "none";
    deva.style.transition = "none";
    resle.style.transition = "none";

    main.style.transform = "translateX(0)";
    deva.style.transform = "translateX(0)";
    resle.style.transform = "translateX(0)";
};

document.addEventListener("DOMContentLoaded",()=>{
    currentPageIndex = 0;
    bringToFront(main,deva,resle)
})

// Animate pages
function bringToFront(slideInEl, other1, other2) {
    resetTransforms();

    // Force a reflow
    void slideInEl.offsetWidth;

    // Animate it to center
    slideInEl.style.maxWidth = "100%";
    slideInEl.style.opacity = 1;
    slideInEl.style.transition = "maxWidth 1s ease , opacity 1s ease,transform 2s ease";
    slideInEl.style.transform = "translateX(0)";
    
    //updating opacity
    other1.style.opacity = 0;
    other2.style.opacity = 0;
}

//on clicking 1st button
one.addEventListener("click", (e) =>{
    e.preventDefault();
   resetTransforms()
currentPageIndex = 0;
   bringToFront(main,resle,deva)
   
})
//on clicking 2nd
two.addEventListener("click", (e) =>{
    resetTransforms();
    e.preventDefault();
   currentPageIndex =  1;
    bringToFront(deva,main,resle)
})
//onclicking 3rd
three.addEventListener("click", (e) =>{
    resetTransforms();
    e.preventDefault()
    currentPageIndex = 2;
   bringToFront(resle,deva,main)

})


const pages = [main,deva,resle];
let currentPageIndex = 0;
let intervalId = null;
let paused = false;


//filtering the pages that are not currently shown
function getOther(currentIndex){
    return pages.filter((_,i) => i !== currentIndex);
}

//looping the pages
function startSwitch(){
    if(intervalId !==null) return;

    bringToFront(pages[currentPageIndex], ...getOther(currentPageIndex));
    
    intervalId = setInterval(()=>{
        if(!paused){
        currentPageIndex = (currentPageIndex + 1) % pages.length;
        bringToFront(pages[currentPageIndex], ...getOther(currentPageIndex));
        }
    },5000);
}

//tringers the loop function
play.addEventListener("click",()=>{
play.style.display = "none";
pause.style.display = "block";
startSwitch();
})


//pause the function
pause.addEventListener("click",()=>{
    play.style.display = "block";
    pause.style.display = "none";
    paused= true;
    })

// right.addEventListener("click", (e) => {
//     e.preventDefault();
  
//     // const current = [main, deva, resle].find(el => el.style.zIndex === "3");
  
//     if ( main.style.zIndex = 3) {
//       bringToFront(deva, main, resle);
//     }else if (deva.style.zIndex = 3) {
//       bringToFront(resle, deva, main);
//     } else{
//       bringToFront(main, resle, deva);
//     }
//     console.log("Main:", main.style.zIndex, "Deva:", deva.style.zIndex, "Resle:", resle.style.zIndex);

//   });

  //animating the answes of frequently asked questions
  let queryBtn = document.querySelectorAll(".query");
  let add = document.querySelectorAll(".add");
  let queryAns = document.querySelectorAll(".queryAns");
queryBtn.forEach((btn,index)=>{
    btn.addEventListener("click",e=>{
        e.preventDefault();
    
        queryAns[index].classList.toggle("show")
    add[index].classList.toggle("rotate")
    })
})



//trending section buttons 
let left1 = document.getElementById("left1");
let right1 = document.getElementById("right1");

let scrollBox = document.getElementById("contents")


right1.addEventListener("click", e=>{
    e.preventDefault();
    scrollBox.scrollBy({
        left:200,
        behavior:'smooth',
    })
    left1.style.display = "block";
    if(scrollBox.right = 0){
        right1.style.display = "none";
    }
})

left1.addEventListener("click", e=>{
    e.preventDefault();
    scrollBox.scrollBy({
        left:-200,
        behavior:'smooth',
    })
})
