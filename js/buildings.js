class Building {
    constructor(isBuiltSth, typeOfBuilding, buttonOfBuilding, nameBuilding){
        this.isBuiltSth = isBuiltSth
        this.typeOfBuilding = typeOfBuilding
        this.buttonOfBuilding = buttonOfBuilding
        this.nameBuilding = nameBuilding
    }

    build(isBuiltSth, typeOfBuilding, buttonOfBuilding, nameBuilding, path, gold, wood, stone){
        if (isBuiltSth === false) {

            if(this.subtractRes(gold, wood, stone)){

                const buttonBuild = document.querySelectorAll('.buttonBuild')
                const alert = document.querySelector('.alert')

                buttonBuild.forEach(function (btnBuild) {
                    btnBuild.addEventListener('click', () => {

                        alert.classList.add('show')
                        alert.classList.remove('hide')
                        alert.classList.add('showAlert')
                        setTimeout(function () {
                            alert.classList.remove('show')
                            alert.classList.add('hide')
                        }, 2500)
                    })
                })

                document.querySelector('.close-btn').addEventListener('click', () => {
                    alert.classList.remove('show')
                    alert.classList.add('hide')
                })
                const typeOfBuilding = document.getElementById(place);
                typeOfBuilding.style.backgroundImage = `url('./assets/images/${path}')`;
                typeOfBuilding.style.backgroundSize = "cover";
                typeOfBuilding.className = "square building";

                console.log(typeOfBuilding.id)
                typeOfBuilding.dataset.modalTarget = `#${nameBuilding}`;

                isBuiltSth = true;
                buttonOfBuilding.disabled = true;
                
                resources();
                closeModal(modal);

            }       
        } else {
            alert('Coś poszło nie tak')
        }
    }

    subtractRes(goldP, woodP, stoneP){
        if(gold >= goldP && wood >= woodP && stone >= stoneP){
            gold -= goldP;
            wood -= woodP;
            stone -= stoneP;
            return true
        } else {
            return false
        }
    }
}

const townHallClass = new Building(isBuiltTownhall, townHall, buttonTownhall, 'townHall')
const sawmillClass = new Building(isBuiltSawmill, sawmill, buttonSawmill, 'sawmill')





/*function build(isBuiltSth, typeOfBuilding, buttonOfBuilding, nameBuilding) {
    if(isBuiltSth === false) {
        console.log('eee')
        const typeOfBuilding = document.getElementById(place);
        typeOfBuilding.style.backgroundImage = "url('./assets/images/townHall/townHall-lvl1.png')";
        typeOfBuilding.style.backgroundSize = "cover";
        typeOfBuilding.className = "square building";

        console.log(typeOfBuilding.id)
        typeOfBuilding.dataset.modalTarget = `#${nameBuilding}`;

        isBuiltSth = true;
        buttonOfBuilding.disabled = true;
        resources();
        closeModal(modal);
    } else {
        alert('Dupa zbita - za mało surowców')
    }
}
*/

//Town hall
/*function buildTownhall() {
    if (isBuiltTownhall == false) {
        //if(gold >= 50){
            //gold -= 50;
            const townHall = document.getElementById(place);
            townHall.style.backgroundImage = "url('./assets/images/townHall/townHall-lvl1.png')";
            townHall.style.backgroundSize = "cover";
            townHall.className = "square building";
            townHall.dataset.modalTarget = "#townHall";
            isBuiltTownhall = true;
            buttonTownhall.disabled = true;
            resources();
            closeModal(modal);
        //} else {
            //alert("Za mało surowców");
        //}
    }
}*/



/*
//Sawmill
function buildSawmill(){
    if (isBuiltSawmill == false) {
        if(gold >= 50){
            gold -= 50;
            const sawmill = document.getElementById(place);
            sawmill.style.backgroundImage = `url('./assets/images/sawmill/sawmill-lvl1.png')`;
            sawmill.style.backgroundSize = "cover";
            sawmill.className = "square building";
            sawmill.dataset.modalTarget = "#sawmill";
            isBuiltSawmill = true;
            buttonSawmill.disabled = true;
            resources();
            closeModal(modal);
        }else {
            alert("Za mało surowców");
        }
    }
}

//Quarry
function buildQuarry() {
    if (isBuiltQuarry == false) {
        if (gold >= 50 && wood >= 50) {
            gold -= 50;
            wood -= 50;
            const quarry = document.getElementById(place);
            quarry.style.backgroundImage = `url('./assets/images/quarry/quarry-lvl1.png')`;
            quarry.style.backgroundSize = "cover";
            quarry.className = "square building";
            quarry.dataset.modalTarget = "#quarry";
            isBuiltQuarry = true;
            buttonQuarry.disabled = true;
            resources();
            closeModal(modal);
        }else {
            alert("Za mało surowców");
        }
    }
}

*/