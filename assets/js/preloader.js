document.addEventListener("DOMContentLoaded", function () {
    // Отображаем прелоадер при начале загрузки страницы
    document.getElementById("preloader").style.display = "flex";
});

window.addEventListener("load", function () {
    // Скрываем прелоадер после полной загрузки страницы
    document.getElementById("preloader").style.opacity = "0";
    setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
    }, 500); // Дополнительная задержка для анимации исчезновения
});
