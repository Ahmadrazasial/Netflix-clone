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



const resetTransforms = () => {
    main.style.transition = "none";
    deva.style.transition = "none";
    resle.style.transition = "none";

    main.style.transform = "translateX(0)";
    deva.style.transform = "translateX(0)";
    resle.style.transform = "translateX(0)";
};

// Animate slide-in from right
function bringToFront(slideInEl, other1, other2) {
    resetTransforms();

    // Start the incoming element off to the right
    slideInEl.style.transform = "translateX(100%)";

    // Force a reflow
    void slideInEl.offsetWidth;

    // Animate it to center
    slideInEl.style.transition = "transform 0.5s ease";
    slideInEl.style.transform = "translateX(0)";

    // Update z-indexes
    slideInEl.style.zIndex = 3;
    other1.style.zIndex = 2;
    other2.style.zIndex = 1;
}
const pages = [main,deva,resle];
let currentPageIndex = 0;
let intervalId = null;

function getOther(currentIndex){
    return pages.filter((_,i) => i !== currentIndex);
}
function startSwitch(){
    bringToFront(pages[currentPageIndex], ...getOther(currentPageIndex));
    intervalId = setInterval(()=>{
        currentPageIndex = (currentPageIndex + 1) % pages.length;
        bringToFront(pages[currentPageIndex], ...getOther(currentPageIndex));
    },5000);
}

function stopSwitch(){
    clearInterval(intervalId);
   
}

play.addEventListener("click",()=>{
play.style.display = "none";
pause.style.display = "block";
startSwitch();
})

pause.addEventListener("click",()=>{
    play.style.display = "block";
    pause.style.display = "none";
    stopSwitch();
    })
one.addEventListener("click", (e) =>{
        e.preventDefault();
    //    resetTransforms()
    currentPageIndex = 0;
       bringToFront(main,resle,deva)
       
    })
    two.addEventListener("click", (e) =>{
       currentPageIndex =  1;
        bringToFront(deva,main,resle)
    })
    three.addEventListener("click", (e) =>{
        e.preventDefault()
        currentPageIndex = 2;
       bringToFront(resle,deva,main)

})
right.addEventListener("click", (e) => {
    e.preventDefault();
  
    // const current = [main, deva, resle].find(el => el.style.zIndex === "3");
  
    if ( main.style.zIndex = 3) {
      bringToFront(deva, main, resle);
    }else if (deva.style.zIndex = 3) {
      bringToFront(resle, deva, main);
    } else{
      bringToFront(main, resle, deva);
    }
    console.log("Main:", main.style.zIndex, "Deva:", deva.style.zIndex, "Resle:", resle.style.zIndex);

  });