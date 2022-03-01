
var htmlElements = "";


function makeGrid(numberOfGrids) {
    for (let i = 0; i < numberOfGrids; i++) {
        for (let j = 0; j < numberOfGrids; j++) {
            htmlElements += '<div class="box" style="background-color: white"></div>';
        }
    }
}

function colorGrids() {
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", function () {
            if(this.style.backgroundColor === "white"){
                this.style.backgroundColor = random_rgba();
            }
            
        });
    }
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

makeGrid(10);
// function colorGrid(divs, color) {
//     for (let i = 0; i < divs.length; i++) {
//         divs[i].addEventListener("mouseover", function () {
//             this.style.backgroundColor = color;
//         });
//     }
// }

const container = document.getElementById("container");

container.innerHTML = htmlElements;

let divs = document.getElementsByClassName("box");

function setGridSize(grids) {
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.width = ((600 - (grids * 2)) / grids) + "px";
        divs[i].style.height = ((600 - (grids * 2)) / grids) + "px";
    }
};
setGridSize(10);


let resetBtn = document.getElementById("reset");

resetBtn.onclick = function () {

    let gridNumber = prompt("Add the number of squares you want", "16");
    if (gridNumber < 100) {
        htmlElements = "";
        makeGrid(gridNumber);

        container.innerHTML = htmlElements;
    }
    // colorGrid(divs, "white");
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "white";
        setGridSize(gridNumber);
    };
    colorGrids();
};

colorGrids();
//colorGrid(divs, "red");



    // divs[i].addEventListener("mouseleave", function() {
    //     this.style.backgroundColor = "white";
    // });


