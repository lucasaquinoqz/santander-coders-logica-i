// EXERCÍCIO
// Crie um algoritmo usando o for que leia uma lista.
// Retorne duas novas listas, uma contendo apenas os números pares e outra, os ìmpares.
// Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Lista -> [1,2,3,4,5,6,7,8,9]
// [2, 4, 6, 8] -> pares
// [1, 3, 5, 7, 9] -> impares


const lista = [1,2,3,4,5,6,7,8,9]
let listaPar = []
let listaImpar = []
for(let i=0 ; i<lista.length ; i++){
    if(lista[i] % 2 == 0){
        listaPar.push(lista[i])
    } else {
        listaImpar.push(lista[i])
    }
}

console.log("Lista -> [" + lista.join(',') + "]")
console.log("[" +listaPar.join(', ') + "] -> pares")
console.log("[" +listaImpar.join(', ') + "] -> impares")

// console.log(typeof(lista))
// console.log(typeof(listaPar))
// console.log(typeof(listaImpar))
