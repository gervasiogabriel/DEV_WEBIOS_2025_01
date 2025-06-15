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

    let nota = 6.9
    // se a nota for igual igual ou maior que 7 então o aluno passou na materia
    // se nao a nota for menor ou igual a 6.9 o aluno vai ficar de recuperação
    if(nota >= 7){
        console.log("Passou na materia")
    }
    else{
        console.log("Vai ficar de recuperação")
    }

    nota >= 7 ? console.log("Passou na materia") : console.log("Vai ficar de recuperação")