const btnEntrar = document.getElementById("btnEntrar");
const btnVoltar = document.getElementById("btnVoltar");

if (btnEntrar) {
    btnEntrar.addEventListener("click", function () {
        const form = btnEntrar.closest("form");

        if (form.checkValidity()) {
            window.location.href = "404.html";
        } else {
            form.reportValidity();
        }
    });
}

if (btnVoltar) {
    btnVoltar.addEventListener("click", function () {
        window.location.href = "index.html";
    });
}