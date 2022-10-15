

function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById("txtano");
    let res = document.getElementById("res");
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert("Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex");
        let idade = ano - Number(fano.value);
        let genero = '';
        let img = document.createElement("img");
        img.setAttribute("id", "foto");

        if(fsex[0].checked) {
            genero = "Homem";
            if(idade >= 0 && idade < 10) {
                img.setAttribute("src", "images/foto-bebe-m.png")
            } else if( idade < 21) {
                img.setAttribute("src", "images/foto-jovem-m.png")
            } else if( idade < 50) {
                img.setAttribute("src", "images/foto-adulto-m.png")
            } else {
                img.setAttribute("src", "images/foto-idoso-m.png")
            }
        } else if(fsex[1].checked) {
            genero = "Mulher";
            if(idade >= 0 && idade < 10) {
                img.setAttribute("src", "images/foto-bebe-f.png")
            } else if( idade < 21) {
                img.setAttribute("src", "images/foto-jovem-f.png")
            } else if( idade < 50) {
                img.setAttribute("src", "images/foto-adulto-f.png")
            } else {
                img.setAttribute("src", "images/foto-idoso-f.png")
            }
        }
        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img);
        
    }
}