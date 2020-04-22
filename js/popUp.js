const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.dataset.modalTarget !== "#emptyPlace"){
            const modal = document.querySelector(button.dataset.modalTarget);
            openModal(modal);
            console.log(button.id);
            console.log(button.dataset.modalTarget);
        }else{
            const modal = document.querySelector("#emptyPlace");
            console.log(button.id);
            openModal(modal);

            const buildButton = document.querySelector('#buildSawmill');
            buildButton.addEventListener('click', () => {
                
                console.log(`buduje ${button.id} tutaj`)
            });
        }  
        // const modal = document.querySelector(button.dataset.modalTarget);
        // openModal(modal);
    })
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
});

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
