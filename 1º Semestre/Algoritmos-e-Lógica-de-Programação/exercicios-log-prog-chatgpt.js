/* ==========================================================
   NÍVEL FÁCIL
   ========================================================== */

/*
1. Crie uma função que receba um número e informe se ele é
par ou ímpar.

Exemplo:
Entrada: 8
Saída: "Par"
*/

/*
2. Crie uma função que receba dois números e retorne
qual deles é o maior.

Exemplo:
Entrada: 15 e 9
Saída: 15
*/

/*
3. Crie uma função que receba um número e faça uma contagem
regressiva até 0.

Exemplo:
Entrada: 5

Saída:
5
4
3
2
1
0
*/

/*
4. Crie uma função que receba um número e imprima a tabuada
dele de 1 até 10.

Exemplo:
Entrada: 7

Saída:
7 x 1 = 7
...
7 x 10 = 70
*/

/*
5. Crie uma função que receba um array de números e retorne
a soma de todos eles.

Exemplo:
Entrada: [2, 4, 6]

Saída:
12
*/


/* ==========================================================
   NÍVEL MÉDIO
   ========================================================== */

/*
6. Crie uma função que receba um número e calcule seu fatorial.

Exemplo:
Entrada: 5

Saída:
120
*/

/*
7. Crie uma função que receba uma string e retorne
a quantidade de vogais existentes.

Exemplo:
Entrada:
"JavaScript"

Saída:
3
*/

/*
8. Crie uma função que receba um array de números e retorne
o maior e o menor valor encontrados.

Exemplo:
Entrada:
[12, 5, 30, 8, 17]

Saída:
Maior: 30
Menor: 5
*/

/*
9. Crie uma função que receba uma palavra e verifique
se ela é um palíndromo.

Palíndromo é uma palavra que pode ser lida da mesma forma
de trás para frente.

Exemplos:
"arara" -> verdadeiro
"javascript" -> falso
*/

/*
10. Crie uma função que receba um número N e imprima
os N primeiros números da sequência de Fibonacci.

Exemplo:
Entrada:
7

Saída:
0
1
1
2
3
5
8
*/


/* ==========================================================
   NÍVEL DIFÍCIL
   ========================================================== */

/*
11. Crie uma função que receba um array de números
e retorne um novo array sem valores repetidos.

Exemplo:
Entrada:
[1,2,2,3,4,4,5]

Saída:
[1,2,3,4,5]
*/

/*
12. Crie uma função que receba uma frase e retorne
a palavra que mais aparece.

Exemplo:
Entrada:
"oi tudo bem oi tudo oi"

Saída:
"oi"
*/

/*
13. Crie uma função que receba um array de objetos
representando alunos e suas notas.

Exemplo:
[
 { nome: "Ana", nota: 8 },
 { nome: "Carlos", nota: 6 },
 { nome: "Maria", nota: 9 }
]

Retorne:
- média da turma
- aluno com maior nota
- aluno com menor nota
*/

/*
14. Crie uma função que receba uma string contendo
apenas (), {}, [].

Verifique se todos os símbolos estão corretamente
abertos e fechados.

Exemplos:

"([]{})" -> verdadeiro

"([)]" -> falso

"((()))" -> verdadeiro
*/

/*
15. Crie um jogo de adivinhação.

- Gere um número aleatório entre 1 e 100.
- O usuário deve tentar acertar.
- Informe se o número é maior ou menor que o chute.
- Conte quantas tentativas foram necessárias.
- O jogo termina quando o usuário acertar.

(Se quiser fazer no navegador, pode utilizar prompt() e alert().
Se fizer no Node.js, pode utilizar readline.)
*/


//exercício 1

const parOuImpar = (num) => {
    if (num % 2 === 0){
        return `Este número é par.`
    }else{
        return `Este número é ímpar.`
    }
}
console.log(parOuImpar(10));
console.log(parOuImpar(1));

//Exercício 2
const maiorNum = (num1, num2) => {
    
    if(num1 === num2){
        return `Ambos números são iguais.`
    }
    
    if (num1 > num2){
        return `O maior número é ${num1}`
    }else{
        return `O maior número é ${num2}`
    }
    
}

console.log(maiorNum(10, 5));
console.log(maiorNum(9, 15));
console.log(maiorNum(9, 9));

//Exercício 3

const contagemRegressiva = (num) => {
    for (let i = num; i >= 0; i--){
        console.log(i);

        if (i === 0){
            return `Contagem regressiva finalizada.`
        }
    }
}
console.log(contagemRegressiva(5));

//Exercício 4

const tabuada = (num) => {
    for (let x = 1; x <= 10; x++){
        console.log(`${num} X ${x} = ${num * x}`);

        if(x === 10){
            return `Tabuada Finalizada.`
        }
    } 
}

console.log(tabuada(8));

//Exercício 5

const somaArray = (array) => {
    let soma = 0;

    for(let y = 0; y < array.length; y++){
        soma += array[y];
    }
    return soma;
}

console.log(somaArray([2, 4, 95]));

//Exercício 6

const fat = (num) => {
    if (num === 0 || num === 1){
        return 1;
    }

    return num * fat(num - 1);
}

console.log(fat(5))

//Exercício 7

const contarVogais = (str) => {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;

    for(let a = 0; a < str.length; a++){
        if(vogais.includes(str[a].toLowerCase())){
            contador++
        }
    }
    return `A quantidade de vogais na palavra ${str} é: ${contador}`;
}

console.log(contarVogais('Donovan'));

//Exercício 8

const maiorMenor = (arrayMaiorMenor) => {
    let maior = arrayMaiorMenor[0];
    let menor = arrayMaiorMenor[0];

    for(let b = 1; b < arrayMaiorMenor.length; b++){
        if(arrayMaiorMenor[b] > maior){
            maior = arrayMaiorMenor[b];
        }

        if(arrayMaiorMenor[b] < menor){
            menor = arrayMaiorMenor[b];
        }
    }

    return `O maior número é: ${maior} e o menor número é: ${menor}`;
}

console.log(maiorMenor([10, 9, 5, 1, 0]));