const btnEl = document.getElementById("btn");

const animeContainerEl = document.querySelector(".anime-container");

const imgContainerEl = document.querySelector(".img");

const infoEl = document.getElementById("info");



btnEl.addEventListener("click",async function(){
  try {
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    imgContainerEl.src = "spinner.svg";
    const result = await fetch("https://api.catboys.com/img");
    const data = await result.json();
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
    animeContainerEl.style.display = "block";
    imgContainerEl.src = data.url;
    infoEl.innerText = data.artist;
    
  } catch (error) {
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
    infoEl.innerText = "An error occurred, Please try again later"; 
  }
});