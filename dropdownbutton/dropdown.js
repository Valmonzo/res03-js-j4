function dropDownButton() {
    let dropDownButton = document.getElementById("dropdown-btn");
    let menu = document.querySelector("#dropdown-section ul");
    dropDownButton.addEventListener("click", function(e) {
        menu.classList.toggle("hide");
    });

    window.addEventListener("click", function(e) {
        console.log("La window a été cliquée");
        if(e.target !== dropDownButton) {
            menu.classList.add("hide");
        }
    })
}

window.addEventListener("DOMContentLoaded", function() {
    dropDownButton();
});
