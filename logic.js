const gridSubmit = document.getElementById("grid-button");
const limit = 35;

function validateForm(num){
    if (isNaN(num) || num <= 0 || num > limit) {
        return false;
    }
    return true;
}

function shadeFill(obj){
    console.log(obj);
    obj.style.backgroundColor = "black";
}

gridSubmit.onclick = () => {
    const gridInput = document.getElementById("grid-layout-input");
    const warn = document.getElementById("status");
    const gridContainer = document.getElementById("container");
    const gridLayout = document.getElementById("grid")
    let num = gridInput.value;

    while (gridLayout.lastElementChild) {
        gridLayout.removeChild(gridLayout.lastElementChild);
    }


    console.log(num);
    if (!validateForm(num)){
        warn.textContent = "Enter a number greater than 0 and equal to or less than " + limit;
        return false;
    }
    warn.textContent = "Successfully made grid";
    
    for (let i = 0; i < num; i++){
        let columnGroup = document.createElement("div");
        columnGroup.className = "grid-column";
        gridLayout.appendChild(columnGroup);
        console.log("made column");
        for(let j = 0; j < num; j++){
            let columnItem = document.createElement("div");
            columnItem.className = "grid-box";
            columnItem.textContent = "";
            columnItem.addEventListener("mouseover",function(){
                shadeFill(columnItem);
            });
            columnGroup.appendChild(columnItem);
            console.log("made item");
        }
    }
}