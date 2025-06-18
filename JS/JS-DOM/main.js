// window.alert("olá mundo")
// window.confirm("")
// window.prompt("digite um número de 1 a 10")
// window.open()
// window.close()

// (nome da função, tempo para chama a função)
// window.setTimeout(mensagem, 5000)
// 5s > 5000 mil mile segundos

// FUNCTION > ações que o código pode executar quando for solcitado pelo usuario no navegador
function Mensagem(){
    // alert("aprendendo DOM com JS")
    alert(Date())
}


let tagH1 = document.createElement("h1")
// innerHTML > Para adicionar uma informação das tags do HTML 
tagH1.innerHTML = "olá mundo, criei você"
// A quem ela vai pertencer
document.body.appendChild(tagH1)
