//Is built ...?
let isBuiltSawmill = false;
let isBuiltTownhall = false;







//Create map with blocks
for(let i=0; i<72; i++){
        const block = document.createElement('div');
        const map = document.getElementById('map');
        block.className = 'square emptyPlace';
        block.dataset.modalTarget = "#emptyPlace";
        block.id = `b${i}`;
        map.appendChild(block);
}



//Town hall
const townHall = document.getElementById('b30');
townHall.style.backgroundImage = "url('./assets/images/townHall/townHall-lvl1.png')";
townHall.style.backgroundSize = "cover";
townHall.className = "square building";
townHall.dataset.modalTarget = "#townHall";




//Sawmill
// const sawmill = document.getElementById('b15');
// sawmill.style.backgroundImage = "url('./assets/images/sawmill/sawmill-lvl1.png')";
// sawmill.style.backgroundSize = "cover";
// sawmill.className = "square building";
// sawmill.dataset.modalTarget = "#sawmill";



//Quarry
//Academy
//Barrack
//Armory
//Market
//UnderConstruction
//Road
