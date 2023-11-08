const foo: string = 'test'
const bar: number = 5
const boolean: boolean = true

// type object
const obj: object = {}

// type générique
const anything: any = {}

// assigner une caleur précise et unique
const myconst: '5' = '5'



//ARRAY ET TUPLE

// ARRAY
// array de type number, il faut renseigner ce que l'array va contenir en TS
const array: number[] = [1, 2, 3]
// Array de type number façon alternantive fonction aussi pour les strin, il faut juste le renseigner 
const array2: Array<number> = [1, 2, 3]

// TUPLE
// le tuple s'aatent à deux valeurs dans le tableau 
const tuple: [number, number] = [1, 2]
const tuple2: [number, string] = [1, '2']

// ENUM
// sert a faire un lien entre un nom et une valeur numérique
// Chaque element  de l'enum correspond à un index/nombre et part de zéro
enum XhrReadyState {
    UNSENT,
    OPENED,
    HEADERS_RECEIVED,
    LOADING,
    DONE,
}

// Retour de l'enum
// console.log(XhrReadyState.LOADING)

const readyState: number = 0;

if (readyState === XhrReadyState.UNSENT) {
    // request configured
}
if (readyState === XhrReadyState.OPENED) {
    // entête de la réponse recu
}
if (readyState === XhrReadyState.HEADERS_RECEIVED) {
    // chargement en cours
}
if (readyState === XhrReadyState.LOADING) {
    // terminée
}
if (readyState === XhrReadyState.DONE) {
    // Terminée
}
