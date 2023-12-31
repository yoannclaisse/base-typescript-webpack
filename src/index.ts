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

// LES TYPES NULL, VOID, UNDIFINED ET NEVER
// TYPE NULL ET UNDIFINED
// Par défault ces types seront null
const foo3:null = null
const foo4:undefined = undefined

// LE TYPE VOID
// pricipalement pour les fonctions
// le type void veut dire que la fonction ne doit rien retourner
function add(num1: number, num2: number): void {
    console.log(num1 + num2)
}

// Le type never veut dire que la fonction ne va jamais retourner, il ne faut pas que la fonction se termine
function loop(error: any): never {
    // while(true) {
    // ...
    // }
    // OU avec une erreur
    throw new Error(error)
}

// LES INTERFACES


// ----------------------AUTRE EXEMPLES D'INTERFACES------------------
// Une interface décris la forme d'un objet, c'est un contrat
// Tout ce que va être défini dans l'interface doit être présent dans ce qui l'emploi
// Une interface est un contrat qui définit la forme que doit prendre un objet JavaScript (objets littéraux, classes et fonctions).
// Les points d'interrogation rendent les paramètres optionneles il n'est pa obligatoire de les renseigner, ou peuvent être renseigner plus tard
interface UserInterface {
    readonly username: string; // ce username est juste en readonly, il est initialisé au début, et ne pourra pas être réasigné par la suite
    age: number;
    IsDrinking?: boolean;
    isHealthy?: boolean;
    isSmoking?: boolean;
}

// là c'est une variable du type de l'interface avec des valeurs définis
const user: UserInterface = {
    username: 'Yo',
    age: 34,
    IsDrinking: true,
    isHealthy: true,
    isSmoking: false,
}

function death(user: UserInterface) {}

function goodShape(user: UserInterface) {}

// ici on rend le truc un peu plus maléable
const newUser: UserInterface = {
    username: 'clovis',
    age: 50,
}

// ----------------------------------------------------

function greet(user: {username: string}): void {
    console.log(`hello ${user.username}`)
}

greet(user)

