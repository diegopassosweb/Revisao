
function carregar() {
let msg = window.document.getElementById("msg");
let img = window.document.getElementById("imagem");
let data = new Date();
// let hora = data.getHours();
let hora = 22
msg.innerHTML = `Agora são ${hora} horas. `
if( hora >= 0 && hora < 12) {
    //bom dia
    img.src = "images/manha.png";
    document.body.style.background = "#e2cd9f";
    } else if( hora >= 12 && hora <= 18) {
    //boa tarde
    img.src = "images/tarde.png";
    document.body.style.background = "#b994f";
    } else {
    //boa noite
    img.src = "images/noite.png";
    document.body.style.background = "#515154";
    }
}
