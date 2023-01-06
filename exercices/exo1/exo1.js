function exercice1() {
    let btn = document.getElementById("btn-change-color");
    let box1 = document.getElementById("box1")
    btn.addEventListener("click", function() {
        box1.style.backgroundColor = "blue";
    })

};

function exercice2() {
    let btnMove = document.getElementById("btn-move");
    let box2 = document.getElementById("box2")
    btnMove.addEventListener("click", function() {
        box2.classList.add("move");
    });
}

function exercice3() {
    let ingredients = ["Salade", "Tomate", "Oignon"];
    let list = document.querySelector("#ex3 ul");
    let btn = document.getElementById("btn-add-ingredients")
    btn.addEventListener("click", function() {
        for (ingredient of ingredients) {
            let li = document.createElement("li");
            let txt = document.createTextNode(ingredient)

            list.appendChild(li)
            li.appendChild(txt)
        }
    });

}

function exercice4() {
    let heroes = [{
            name: "Clark Kent",
            secret: "Superman"
        },
        {
            name: "Diana Prince",
            secret: "Wonder Woman"
        },
        {
            name: "Tony Stark",
            secret: "Iron Man"
        }
    ];
}

function exercice5() {

}

function exercice6() {

}


window.addEventListener("DOMContentLoaded", function(){
    exercice1();
    exercice2();
    exercice3();
});