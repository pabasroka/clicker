const buttonChangeTownName = document.querySelector('#changeTownName');

buttonChangeTownName.addEventListener('click', () => {
    let townName = document.querySelector('#townName').value;
    document.querySelector('#mainTownName').innerHTML = townName ? townName : 'Moje miasto';
});


