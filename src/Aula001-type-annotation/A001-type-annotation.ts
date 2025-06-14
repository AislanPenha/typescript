/* eslint-disable */
// Tipos básicos (aqui ocorre inferência de tipos)
// Se tiver tipo n ele não conseguiu inferir
let nome: string = 'Aislan';
let idade: number = -38; // float int hexadecimais binario octal
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol');
let bi: bigint = 10n;
//let nome: string = 'Aislan'; //Type string trivially inferred from a string literal, remove type annotation. O TS já sabe que é string não precisa

// Arrays
let arrayDeNumeros1: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];

let arrayDeStrings1: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b'];

// Objetos
let pessoa: {nome: string, sobrenome: string, idade: number, fuma?: boolean} = {
    idade: 38,
    nome: 'Aislan',
    sobrenome: 'Penha'
};//fuma? é facultativo o campo, ademais obrigatórios

// Funções
function soma(num1: number, num2: number): number {  // void number string ...
    return num1 + num2;
}
//tipagem inteira ==> type alias
const soma2: (x: number, y: number) => number = (x, y) => x + y;
