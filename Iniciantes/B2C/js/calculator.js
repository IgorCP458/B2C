console.log("Iniciado")
function tradNum() {
    var dec = document.getElementById("dec")
    var response = document.createTextNode(verNum())
    dec.innerHTML = ""
    dec.appendChild(response)
}
function verNum() {
    bin = document.getElementById("numInput").value
    if (bin === "") {
        return "Digite um número binário!"
    }
    const regexp = /[a-z]/g;
    const regexp2 = /[2-9]/g;
    ArrayAZ = bin.match(regexp)
    Array09 = bin.match(regexp2)
    if(Array09 === null && ArrayAZ === null) {
        return convertNum(bin)
    }else {
        return "Numero Inválido"
    }
}
function convertNum(num) {
   return parseInt(num,2)
}
