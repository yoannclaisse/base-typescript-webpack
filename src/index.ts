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


