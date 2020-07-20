const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
let modal;
let place;
let isbuiltSth;


openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.dataset.modalTarget !== "#emptyPlace"){
            modal = document.querySelector(button.dataset.modalTarget);
            openModal(modal);
            console.log(button.id);
            console.log(button.dataset.modalTarget);
        }else{
            modal = document.querySelector("#emptyPlace");
            openModal(modal);
            place = button.id;

            // BUILDINGS
            



            /*document.querySelector('#buttonTownhall').addEventListener('click', function(){
                build(isBuiltTownhall, townHall, buttonTownhall, 'townHall')
            });*/

            document.querySelector('#buttonTownhall').addEventListener('click', function(){
                townHallClass.build(isBuiltTownhall, townHall, buttonTownhall, 'townHall', 'townHall/townHall-lvl1.png', 0, 0, 0)
            })

            document.querySelector('#buttonSawmill').addEventListener('click', function () {
                townHallClass.build(isBuiltSawmill, sawmill, buttonSawmill, 'sawmill', 'sawmill/sawmill-lvl1.png', 50, 0, 0)
            })


            //document.querySelector('#buttonTownhall').addEventListener('click', buildTownhall);
            //document.querySelector('#buttonSawmill').addEventListener('click', buildSawmill);
            document.querySelector('#buttonQuarry').addEventListener('click', buildQuarry);
            document.querySelector('#buttonAcademy').addEventListener('click', buildAcademy);
            document.querySelector('#buttonBarrack').addEventListener('click', buildBarrack);
            document.querySelector('#buttonArmory').addEventListener('click', buildArmory);
            document.querySelector('#buttonMarket').addEventListener('click', buildMarket);
            document.querySelector('#buttonRoad').addEventListener('click', buildRoad);

            /*const buttonTownhall = document.querySelector('#buttonTownhall');
            buttonTownhall.addEventListener('click', buildTownhall);

            const buttonSawmill = document.querySelector('#buttonSawmill');
            buttonSawmill.addEventListener('click', buildSawmill);

            const buttonQuarry = document.querySelector('#buttonQuarry');
            buttonQuarry.addEventListener('click', buildQuarry);

            //not tested
            const buttonAcademy = document.querySelector('#buttonAcademy');
            buttonAcademy.addEventListener('click', buildAcademy);

            const buttonBarrack = document.querySelector('#buttonBarrack');
            buttonBarrack.addEventListener('click', buildBarrack);

            const buttonArmory = document.querySelector('#buttonArmory');
            buttonArmory.addEventListener('click', buildArmory);

            const buttonMarket = document.querySelector('#buttonMarket');
            buttonMarket.addEventListener('click', buildMarket);

            const buttonRoad = document.querySelector('#buttonRoad');
            buttonRoad.addEventListener('click', buildRoad);*/


        }  
    })
});



/*==============    POPUP CLOSE    ==============*/
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal = button.closest('.modal')
        closeModal(modal)
    })
});
overlay.addEventListener('click', () => {
    modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})
function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}
function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}
