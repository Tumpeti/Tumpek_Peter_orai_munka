window.addEventListener("load", init);

function init(){
    const LISTA = ["sorozat", "videójáték", "filmezés", "futás", "sportolás", "falmászás"];
    const felsorolas = document.getElementById("felsorolas");
    const mas = document.getElementsByClassName("mas");
    let htmlValtozo = listabakiir(LISTA);
    let htmlValtozo1 = divKiir(LISTA)
    kiir(htmlValtozo, felsorolas);
    kiir(htmlValtozo1, mas[0])
    const gombElemek = document.querySelectorAll(".mas button")
    

    for (let index = 0; index < LISTA.length; index ++){
        gombElemek[0].addEventListener("click", divHatter)
    }
}

function listabakiir(LISTA){
    let htmlValtozo = "<ul>";
    for (let index = 0; index < LISTA.length; index++){
        htmlValtozo += `<li> ${LISTA[index]} </li>`;
    }
    htmlValtozo += "</ul>";
    return htmlValtozo;
}

function kiir(mit, hova){
    hova.innerHTML += mit;
}

function divKiir(LISTA){
    let htmlValtozo = "";
    for (let index = 0; index < LISTA.length; index++){
        htmlValtozo += `<div><p> ${LISTA[index]} </p> <button>ok</button></div>`;
    }
    htmlValtozo += "";
    return htmlValtozo;
}

function divHatter(event){
    console.log(event.target.parentNode)


}