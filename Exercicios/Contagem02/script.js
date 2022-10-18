
function contar() {
    let ini = document.getElementById("txti");
    let passo = document.getElementById("txtp");
    let fim = document.getElementById("txtf")
    let res = document.getElementById("res");

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("[ERRO] Faltam dados!");
        res.innerHTML = "Impossivel contar";
    } else {
        res.innerHTML = `Contando: <br>`;
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        //contagem  crescebte
        if(p <= 0) {
            window.alert("Passo invalido, considerando PASSO 1");
            p = 1;
        }
        if(i < f) {
        for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1f449}`;
            }
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`;
    }
}