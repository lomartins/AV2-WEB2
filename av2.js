/*
01:
total de homens;
total de mulheres;
média das idades dos homens;
média dos pesos das mulheres.
*/
let pessoas = [];

let submitPessoa = document.getElementById('submit-pessoa');
submitPessoa.addEventListener('click', () => {
    let countPessoas = document.getElementById('count-pessoas');
    if (+countPessoas.innerText < 10) {
        let pessoa = {
            idade: +document.getElementById('input-pessoa-idade').value,
            peso: +document.getElementById('input-pessoa-peso').value,
            sexo: document.getElementById('input-pessoa-sexo').value,
        };
        pessoas.push(pessoa);
        countPessoas.innerText = +countPessoas.innerText + 1;
        if (+countPessoas.innerText >= 10) {
            document.getElementById('submit-pessoa').value = 'Calcular';
        }
    } else {
        let divResposta = document.getElementById('resposta1');

        let totalHomens = 0;
        let totalMulheres = 0;
        let mediaIdadeHomens = 0;
        let mediaIdadeMulheres = 0;

        pessoas.map( pessoa => {
            if (pessoa.sexo.toLocaleLowerCase() == "m") {
                totalHomens++;
                mediaIdadeHomens += pessoa.idade;
            } else if (pessoa.sexo.toLocaleLowerCase() == "f") {
                totalMulheres++;
                mediaIdadeMulheres += pessoa.idade;
            }
        });

        mediaIdadeHomens = (totalHomens > 0) ? mediaIdadeHomens / totalHomens : 0;
        mediaIdadeMulheres = (totalMulheres > 0) ? mediaIdadeMulheres / totalMulheres : 0;

        divResposta.innerHTML = (`
            <span>Total de Homens: ${totalHomens}</span><br />
            <span>Total de Mulheres: ${totalMulheres}</span><br />
            <span>Media das idades dos homens: ${mediaIdadeHomens}</span><br />
            <span>Media das idades das mulheres: ${mediaIdadeMulheres}</span><br />
        `);
    }
});

/*
02:
Crie uma caixa de texto em html ;
Crie um botão em html que chama código em Javascript ,usando o DOM, que dependendo do valor introduzido mostre uma mensagem diferente ;
Entre 0 e 10, 10 excluído, mostra “Insuficiente” 
Entre 10 e 14, 14 excluído, mostra “Bom”  
Maior que 14, mostra “Muito Bom”
*/

let submitCafe = document.getElementById('submit-cafe');

submitCafe.addEventListener('click', () => {
    let numCafe = +document.getElementById('input-num-cafe').value;
    let resposta = document.getElementById('resposta2');

    let mensagem = "";

    if (numCafe >= 0 && numCafe < 10) {
        mensagem = "Insuficiente";
    } else if (numCafe >= 10 && numCafe < 14) {
        mensagem = "Bom";
    } else if (numCafe >= 14) {
        mensagem = "Muito Bom";
    }

    resposta.innerHTML = mensagem + "<br/>";

});

/*
03:
a) Receber o nome de 3 candidatos.
b) Receber o número de votos que cada candidato obteve.
c) Exibir uma tabela com os nomes e % de votos dos candidatos na página.
d) Digitar FIM para encerrar o programa.
*/

let candidatos = [];

let submitCandidato = document.getElementById('submit-candidato');
submitCandidato.addEventListener('click', () => {
    let countCandidatos = document.getElementById('count-candidatos');
    if (+countCandidatos.innerText < 3) {
        let candidato = {
            nome: document.getElementById('input-candidato-nome').value,
            numVotos: +document.getElementById('input-candidato-votos').value,
        };
        candidatos.push(candidato);

        countCandidatos.innerText = +countCandidatos.innerText + 1;
        if (+countCandidatos.innerText >= 3) {
            document.getElementById('submit-candidato').value = 'Criar Tabela';
        }

    } else {
        let divResposta = document.getElementById('resposta3');

        let totalVotos = 0;

        candidatos.map( candidato => {
            totalVotos += candidato.numVotos;
        });

        console.log(totalVotos);
        candidatos.map( candidato => {
            candidato.porcentagem = ((candidato.numVotos / totalVotos) * 100).toFixed(2) + "%"
        });
        let htmlText = "";
        htmlText = (`
            <table>
                <tr>
                    <th>Nome Candidato</th>
                    <th>Porcentagem de votos</th>
                </tr>
        `);

        candidatos.map( candidato => {
            htmlText = htmlText + (`
            <tr>
                <td>${candidato.nome}</td>
                <td>${candidato.porcentagem}</td>
            </tr>

            `);
        });

        htmlText = htmlText + `</table>`;
        divResposta.innerHTML = htmlText;
        
    }
});


/*
04:
Crie uma função, usando o DOM, para fazer a manipulação dessas imagens: (pode ser qualquer imagem)
*/

let imagem = document.getElementById('resposta4');

imagem.addEventListener('mouseenter', () => {
    imagem.src = "casa.jpg";
});
imagem.addEventListener('mouseleave', () => {
    imagem.src = "cachorro.jpg";
});
imagem.addEventListener('click', () => {
    imagem.src = "abacaxi.jpg";
});