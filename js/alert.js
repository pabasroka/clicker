function popUpAlert() {
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
}







/*$('.buttonBuild').click(function () {
    $('.alert').addClass("show");
    $('.alert').removeClass("hide");
    $('.alert').addClass("showAlert");
    setTimeout(function () {
        $('.alert').removeClass("show");
        $('.alert').addClass("hide");
    }, 3000);
});
$('.close-btn').click(function () {
    $('.alert').removeClass("show");
    $('.alert').addClass("hide");
});
*/