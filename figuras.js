//Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: "+ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado*4;
} 
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado*lado;
}
//console.log("El área del cuadrado es: "+areaCuadrado + "cm^2");
console.groupEnd();


console.group("Triangulos");
//Código del triangulo
// const lado1 = 6;
// const lado2 = 6;
// const base = 4;
// const altura = 5.5;

// console.log("Los lados del trángulo miden: " + lado1 + " cm," + lado2 + " cm,"
// + base + " cm.");

// console.log("La altura del triángulo es: " + altura);

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
//console.log("El perímetro del cuadrado es: " + perimetroTriangulo);

function areaTriangulo(base, altura){
    return (base*altura)/2;
}
//console.log("El área del triangulo es: " + areaTriangulo);

console.groupEnd();

// Código del circulo
console.group("Circulos");

// const radioCirculo = 4;
function diametroCirculo(radio){
    return radio*2;
} 
//const PI = 3.1415;
const PI = Math.PI;


function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return 
    diametro*PI;
} 
function areaCirculo(radio){
    return (radio*radio)*PI
} 

//console.log("El radio es: " + radioCirculo);
console.log("El diametro es: " + diametroCirculo);
console.log("PI ES: " + PI);
console.log("El períemtro es: " + perimetroCirculo);
console.log("El área es: " + areaCirculo);


console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}