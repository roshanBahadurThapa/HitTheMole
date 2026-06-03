// // let currMoleTile;
// // let currPlantTile;
// // let score = 0;
// // let gameOver = false;

// // window.onload = function() {
// //     setGame();
// // }

// // function setGame() {
// //     //set up the grid in html
// //     for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
// //         //<div id="0-8"></div>
// //         let tile = document.createElement("div");
// //         tile.id = i.toString();
// //         tile.addEventListener("click", selectTile);
// //         document.getElementById("board").appendChild(tile);
// //     }
// //     setInterval(setMole, 1000); // 1000 miliseconds = 1 second, every 1 second call setMole
// //     setInterval(setPlant, 2000); // 2000 miliseconds = 2 seconds, every 2 second call setPlant
// // }

// // function getRandomTile() {
// //     //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
// //     let num = Math.floor(Math.random() * 9);
// //     return num.toString();
// // }

// // function setMole() {
// //     if (gameOver) {
// //         return;
// //     }
// //     if (currMoleTile) {
// //         currMoleTile.innerHTML = "";
// //     }
// //     let mole = document.createElement("img");
// //     mole.src = "./monty-mole.png";

// //     let num = getRandomTile();
// //     if (currPlantTile && currPlantTile.id == num) {
// //         return;
// //     }
// //     currMoleTile = document.getElementById(num);
// //     currMoleTile.appendChild(mole);
// // }

// // function setPlant() {
// //     if (gameOver) {
// //         return;
// //     }
// //     if (currPlantTile) {
// //         currPlantTile.innerHTML = "";
// //     }
// //     let plant = document.createElement("img");
// //     plant.src = "./piranha-plant.png";

// //     let num = getRandomTile();
// //     if (currMoleTile && currMoleTile.id == num) {
// //         return;
// //     }
// //     currPlantTile = document.getElementById(num);
// //     currPlantTile.appendChild(plant);
// // }

// // function selectTile() {
// //     if (gameOver) {
// //         return;
// //     }
// //     if (this == currMoleTile) {
// //         score += 10;
// //         document.getElementById("score").innerText = score.toString(); //update score html
// //     }
// //     else if (this == currPlantTile) {
// //         document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
// //         gameOver = true;
// //     }
// // }


// let currMoleTile;
// let currPlantTile;
// let score = 0;
// let gameOver = false;
// let moleInterval;   // Stores the ID for the mole timer
// let plantInterval;  // Stores the ID for the plant timer


// window.onload = function() {
//     setGame();
// }

// function setGame() {
//     //set up the grid in html
//     for (let i = 0; i < 9; i++) {
//         let tile = document.createElement("div");
//         tile.id = i.toString();
//         tile.addEventListener("click", selectTile);
//         document.getElementById("board").appendChild(tile);
//     }
    
//     // FIX 3: Store the interval IDs so we can stop them later
//     moleInterval = setInterval(setMole, 1000); 
//     plantInterval = setInterval(setPlant, 2000); 
// }

// function getRandomTile() {
//     let num = Math.floor(Math.random() * 9);
//     return num.toString();
// }

// function setMole() {
//     if (gameOver) {
//         return;
//     }
//     if (currMoleTile) {
//         currMoleTile.innerHTML = "";
//     }
//     let mole = document.createElement("img");
//     mole.src = "./monty-mole.png";

//     let num = getRandomTile();
//     if (currPlantTile && currPlantTile.id == num) {
//         return;
//     }
//     currMoleTile = document.getElementById(num);
//     currMoleTile.appendChild(mole);
// }

// function setPlant() {
//     if (gameOver) {
//         return;
//     }
//     if (currPlantTile) {
//         currPlantTile.innerHTML = "";
//     }
//     let plant = document.createElement("img");
//     plant.src = "./piranha-plant.png";

//     let num = getRandomTile();
//     if (currMoleTile && currMoleTile.id == num) {
//         return;
//     }
//     currPlantTile = document.getElementById(num);
//     currPlantTile.appendChild(plant);
// }

// function selectTile() {
//     if (gameOver) {
//         return;
//     }
    
//     if (this == currMoleTile) {
//         score += 10;
//         document.getElementById("score").innerText = score.toString();
        
//         // FIX 1: Clear the mole immediately after it is hit
//         currMoleTile.innerHTML = "";
//         currMoleTile = null; 
        
//     } else if (this == currPlantTile) {
//         document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        
//         // FIX 3: Stop the intervals when the game ends
//         clearInterval(moleInterval);
//         clearInterval(plantInterval);
        
//         gameOver = true;
        
//         // FIX 2: Clear the plant image when the game ends
//         currPlantTile.innerHTML = "";
//     }
// }

let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    //set up the grid in html
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 2000); // 1000 miliseconds = 1 second, every 1 second call setMole
    setInterval(setPlant, 3000); // 2000 miliseconds = 2 seconds, every 2 second call setPlant
}

function getRandomTile() {
    //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant() {
    if (gameOver) {
        return;
    }
    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
    else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
    }
}