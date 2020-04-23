//Sawmill
function buildSawmill(){
    if (isBuiltSawmill == false) {
        const sawmill = document.getElementById(place);
        sawmill.style.backgroundImage = `url('./assets/images/sawmill/sawmill-lvl1.png')`;
        sawmill.style.backgroundSize = "cover";
        sawmill.className = "square building";
        sawmill.dataset.modalTarget = "#sawmill";
        isBuiltSawmill = true;
        buttonSawmill.disabled = true;
    }
}


//Town hall
function buildTownhall() {
    if (isBuiltTownhall == false) {
        const townHall = document.getElementById(place);
        townHall.style.backgroundImage = "url('./assets/images/townHall/townHall-lvl1.png')";
        townHall.style.backgroundSize = "cover";
        townHall.className = "square building";
        townHall.dataset.modalTarget = "#townHall";
        isBuiltTownhall = true;
        buttonTownhall.disabled = true;
    }
}