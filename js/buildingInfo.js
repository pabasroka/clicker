const openInfo = document.querySelectorAll('.buttonInfo');
const closeInfo = document.querySelectorAll('[data-close-button-info]');
const overlayInfo = document.getElementById('overlayInfo');
let modalInfo;



openInfo.forEach(button => {
    button.addEventListener('click', () => {
        modalInfo = document.querySelector(button.dataset.modalTargetInfo);
        openModalInfo(modalInfo);
        
    });
});



/*==============    POPUP CLOSE    ==============*/
closeInfo.forEach(button => {
    button.addEventListener('click', () => {
        modalInfo = button.closest('.modalInfo')
        closeModalInfo(modalInfo)
    })
});
overlayInfo.addEventListener('click', () => {
    modalsInfo = document.querySelectorAll('.modalInfo.active')
    modalsInfo.forEach(modalInfo => {
        closeModalInfo(modalInfo)
    })
})
function openModalInfo(modalInfo) {
    if (modalInfo == null) return
    modalInfo.classList.add('active');
    overlayInfo.classList.add('active');
}
function closeModalInfo(modalInfo) {
    if (modalInfo == null) return
    modalInfo.classList.remove('active');
    overlayInfo.classList.remove('active');
}
