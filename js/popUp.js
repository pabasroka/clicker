const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
let modal;
let place;


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
            const buttonTownhall = document.querySelector('#buttonTownhall');
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
            buttonRoad.addEventListener('click', buildRoad);


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
