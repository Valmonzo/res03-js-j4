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

    let btn = document.getElementById("btn-add-hero");
    let tab = document.querySelector("#ex4 tbody");
    let count = 0

    btn.addEventListener("click", function() {

            let tr = document.createElement("tr");
            let tdName = document.createElement("td");
            let tdSecret = document.createElement("td");

            let txtName = document.createTextNode(heroes[count].name);
            let txtSecret = document.createTextNode(heroes[count].secret);

            tdName.appendChild(txtName);
            tdSecret.appendChild(txtSecret);
            tr.appendChild(tdName);
            tr.appendChild(tdSecret);

            tab.appendChild(tr);
            count++;


    });
}

function exercice5() {
let blue = document.getElementById("blue");
let red = document.getElementById("red");
let green = document.getElementById("green");
let btnColor = document.getElementById("btn-turn")

btnColor.addEventListener("click", function() {
    blue.id = "red";
    red.id = "green"
    green.id = "blue";
})
}

function exercice6() {

    let btnBall = document.getElementById("btn-roll");

    btnBall.addEventListener("click", function() {
        let ball = document.getElementById("ball");
        ball.classList.toggle("animation");
    })


}


window.addEventListener("DOMContentLoaded", function(){
    exercice1();
    exercice2();
    exercice3();
    exercice4();
    exercice5();
    exercice6();
});