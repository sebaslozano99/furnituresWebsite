const BURGER = document.querySelector(".burger");
const NAV = document.querySelector(".nav");

BURGER.addEventListener("click", () => {
    BURGER.classList.toggle("active");
    NAV.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    BURGER.classList.remove("active");
    NAV.classList.remove("active");
}))


// dot's functions
let allColors = document.querySelectorAll(".dot"); // all span buttons
const goldLine = document.querySelector(".gold-line"); //ring line 
const browseBtn = document.querySelector(".browse"); // browse btn
const plusSing = document.querySelector(".plus-sign"); //plus sign
let sofa = document.querySelector(".image-sofa"); //sofa image
let title = document.querySelector("h2"); //title


allColors.forEach(element => element.addEventListener("click",() => { //for each element once is clicked
    document.querySelector(".active")?.classList.remove("active"); //if any of the element has the classList .active we will remove it first
    element.classList.add("active"); //will add the class to the one that was clicked

    BURGER.classList.remove("active");
    NAV.classList.remove("active");
}))


allColors.forEach(button => button.addEventListener("click", () => {
    if(button == allColors[0]){
        colorChanger("#8E6841", "./img/image2.png");
        localStorage.setItem("colorClicked", button);
    }
    else if(button == allColors[1]){
        colorChanger("#585934", "./img/image 1.png");
        localStorage.setItem("colorClicked", button);
    }
    else if(button == allColors[2]){
        colorChanger("#50418E", "./img/image3.png");
        localStorage.setItem("colorClicked", button);
    }
    else if(button == allColors[3]){
        colorChanger("#000000", "./img/image4.png");
        localStorage.setItem("colorClicked", button);
    }
}))


function colorChanger(color, image){
    goldLine.style.border = `60px solid ${color}`;
    browseBtn.style.backgroundColor = `${color}`;
    plusSing.style.backgroundColor = `${color}`;
    title.style.color = `${color}`; 
    sofa.src = `${image}`;
    NAV.style.backgroundColor = `${color}`;
    if(color === "#000000"){
        browseBtn.style.color = "#ffffff";
        
    }
}








