var foo = 'test';
var bar = 5;
var boolean = true;
// type object
var obj = {};
// type générique
var anything = {};
// assigner une caleur précise et unique
var myconst = '5';
//ARRAY ET TUPLE
// ARRAY
// array de type number, il faut renseigner ce que l'array va contenir en TS
var array = [1, 2, 3];
// Array de type number façon alternantive fonction aussi pour les strin, il faut juste le renseigner 
var array2 = [1, 2, 3];
// TUPLE
// le tuple s'aatent à deux valeurs dans le tableau 
var tuple = [1, 2];
var tuple2 = [1, '2'];
// ENUM
// sert a faire un lien entre un nom et une valeur numérique
// Chaque element  de l'enum correspond à un index/nombre et part de zéro
var XhrReadyState;
(function (XhrReadyState) {
    XhrReadyState[XhrReadyState["UNSENT"] = 0] = "UNSENT";
    XhrReadyState[XhrReadyState["OPENED"] = 1] = "OPENED";
    XhrReadyState[XhrReadyState["HEADERS_RECEIVED"] = 2] = "HEADERS_RECEIVED";
    XhrReadyState[XhrReadyState["LOADING"] = 3] = "LOADING";
    XhrReadyState[XhrReadyState["DONE"] = 4] = "DONE";
})(XhrReadyState || (XhrReadyState = {}));
// Retour de l'enum
// console.log(XhrReadyState.LOADING)
var readyState = 0;
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
var foo3 = null;
var foo4 = undefined;
// LE TYPE VOID
// pricipalement pour les fonctions
// le type void veut dire que la fonction ne doit rien retourner
function add(num1, num2) {
    console.log(num1 + num2);
}
// Le type never veut dire que la fonction ne va jamais retourner, il ne faut pas que la fonction se termine
function loop(error) {
    // while(true) {
    // ...
    // }
    // OU avec une erreur
    throw new Error(error);
}
// là c'est une variable du type de l'interface avec des valeurs définis
var user = {
    username: 'Yo',
    age: 34,
    IsDrinking: true,
    isHealthy: true,
    isSmoking: false,
};
function death(user) { }
function goodShape(user) { }
// ----------------------------------------------------
function greet(user) {
    console.log("hello ".concat(user.username));
}
greet(user);
