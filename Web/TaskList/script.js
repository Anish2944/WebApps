const addbtn = document.querySelector("#addbtn");

const Tasklist = document.querySelector(".LIST");

const Task = document.querySelector(".task");

addbtn.addEventListener("click", () => {

    let inputCount = 0;

    const div = document.createElement("div");
    div.className = "list-task";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = `DynamicInput${inputCount}`;

    const label = document.createElement("label");
    label.textContent = Task.value;
    label.htmlFor = `DynamicInput${inputCount}`;

    const i = document.createElement("i");
    i.classList = `i fa-solid fa-trash fa-xs`;
    i.style.display = `none`;
    
    Tasklist.appendChild(div);
    div.appendChild(input);
    div.appendChild(label);
    div.appendChild(i);
    
    label.addEventListener("click", ()=>{
        label.classList.toggle("labelClick");
        if (label.classList == "labelClick") {
            i.style.display = ``;
        }
        else{
            i.style.display = `none`;
        }
    });

    i.addEventListener("click", ()=>{
        Tasklist.removeChild(div);
        div.removeChild(label);
        div.removeChild(input);
        div.removeChild(i);
    });

    Task.value ="";
});

