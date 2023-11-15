const navbarEl = document.querySelector(".navbar");

const containerEl = document.querySelector(".con");

const joinEl = document.querySelector(".join");

const popEl = document.querySelector(".pop-con");

const closeEl = document.querySelector(".cross");

const bottomContianerEl = document.querySelector(".bottom-container");

joinEl.addEventListener("click", () => {
    containerEl.classList.add("blur");
    popEl.classList.remove("blur");
});

closeEl.addEventListener("click", ()=>{
    containerEl.classList.remove("blur");
    popEl.classList.add("blur");
});


window.addEventListener("scroll",() => {
    if(window.scrollY > bottomContianerEl.offsetTop - navbarEl.offsetHeight - 50){
        navbarEl.classList.add("active");
    }
    else{
        navbarEl.classList.remove("active");
    }
});