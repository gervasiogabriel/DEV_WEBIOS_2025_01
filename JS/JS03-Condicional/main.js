    let atividadeEntregue = true
    let diaFinalEntrega = 19

    if (atividadeEntregue == true){ // TRUE
        console.log("parabéns, valeu fera");

        if(diaFinalEntrega <= 13){
            console.log("entregou a atividade na data e sua nota é 10!")
        }
        else{
            console.log("entregou a atividade fora da data prevista e será retirado 2 pontos da nota final");
        }
    } 
    else if(atividadeEntregue == false){ // FALSE
        console.log("ops, você ainda não entregou sua atividade");
    }
    else{ // RESPOSTA ALTERNATIVA
        console.log("você inseriu uma informação invalida");
    }