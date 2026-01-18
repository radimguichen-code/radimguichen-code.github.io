const tlPlus = document.getElementById("tlPlus");
const tlMinus = document.getElementById("tlMinus");
const tlKrat = document.getElementById("tlKrat");
const tlDeleno = document.getElementById("tlDeleno");

let vstup1 = document.getElementById("vstup1");
let vstup2 = document.getElementById("vstup2");

function plus() {
    let vysledek = Number(vstup1.value) + Number(vstup2.value);
    document.getElementById("vysledek").innerText = "Výsledek je " + vysledek;
}

function minus() {
    let vysledek = Number(vstup1.value) - Number(vstup2.value);
    document.getElementById("vysledek").innerText = "Výsledek je " + vysledek;
}

function deleno(){
    if (Number(vstup2.value)==0){
        document.getElementById("vysledek").innerText = "Nulou dělit nemůžeš"
    } else {let vysledek = Number(vstup1.value) / Number(vstup2.value);
        document.getElementById("vysledek").innerText = "Výsledek je " + vysledek;
}
}

function krat (){
    let vysledek = Number(vstup1.value) * Number(vstup2.value);
    document.getElementById("vysledek").innerText = "Výsledek je " + vysledek;
}

tlPlus.addEventListener("click", plus);
tlMinus.addEventListener("click", minus);
tlDeleno.addEventListener("click", deleno);
tlKrat.addEventListener("click", krat);