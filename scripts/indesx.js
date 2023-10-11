//Pablo Gonzalez Ruiz
//

//variables necesarias para unir el html con las operaciones y los datos del .js
const calcular = document.getElementById("calcular");
const area = document.getElementById("area"); 
const perimetro = document.getElementById("perimetro");
const diagonal = document.getElementById("diagonal");

//en esta función calculamos los resultados y los imprimimos cuando el boton "Calcular" es presionado.
calcular.addEventListener("click", () => {

//variable que recoge el valor insertado en el imput
    const base = parseFloat(document.getElementById("base").value);
    const lado = parseFloat(document.getElementById("lado").value);

//si el los valores son correctos se ejecutarán las diferentes operaciones y se mostrara el resultado
    if (!isNaN(lado) && !isNaN(base)) {
        area.innerHTML = `Área del rectángulo : ${(base * lado).toFixed(2)} `;

        perimetro.innerHTML = `Perímetro del rectángulo : ${((2 * base) + (2 * lado)).toFixed(2)}`;

        diagonal.innerHTML = `Diagonal del rectángulo : ${Math.sqrt((Math.pow(base, 2)) + (Math.pow(lado, 2))).toFixed(2)}`;

//si el ancho o la longitud insertados no es un número se mostrará un mensaje de error
    } else {
        area.innerHTML = `Por favor, ingrese valores válidos`;
    }
})