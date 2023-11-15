const btnEl = document.getElementById("btn");

const jokeEl = document.getElementById("joke");

const apikey = "xjNwm2+u2OyF0Icgj4H+gA==9nFLh9p13iSHHf1R";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    },
};

const apiUrL = "https://api.api-ninjas.com/v1/jokes?limit=1";

async function getjoke() {
    try {
        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading..";
        const response = await fetch(apiUrL, options);
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        jokeEl.innerText = data[0].joke;


    } catch (error) {
        jokeEl.innerText = "An error occured, Please try again later!";
        btnEl.innerText = "Tell me a joke";

    }

}
btnEl.addEventListener("click", getjoke)