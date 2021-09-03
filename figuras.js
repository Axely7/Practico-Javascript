//Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado*4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("El área del cuadrado es: "+areaCuadrado + "cm^2");
console.groupEnd();


console.group("Triangulos");
//Código del triangulo
const lado1 = 6;
const lado2 = 6;
const base = 4;
const altura = 5.5;

console.log("Los lados del trángulo miden: " + lado1 + " cm," + lado2 + " cm,"
+ base + " cm.");

console.log("La altura del triángulo es: " + altura);

const perimetroTriangulo = lado1 + lado2 + base;
console.log("El perímetro del cuadrado es: " + perimetroTriangulo);

const areaTriangulo = (base*altura)/2;
console.log("El área del triangulo es: " + areaTriangulo);

console.groupEnd();

// Código del circulo
console.group("Circulos");

const radioCirculo = 4;
const diametroCirculo= radioCirculo*2;
//const PI = 3.1415;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo*PI;
const areaCirculo = (radioCirculo*radioCirculo)*PI;

console.log("El radio es: " + radioCirculo);
console.log("El diametro es: " + diametroCirculo);
console.log("PI ES: " + PI);
console.log("El períemtro es: " + perimetroCirculo);
console.log("El área es: " + areaCirculo);


console.groupEnd();