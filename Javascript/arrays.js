var myArray = new Array();

myArray[0] = "Pepperoni";
myArray[1] = "Chocolate";

// Adiciona um elemento no final do Array
myArray.push("Pizza");

// Posição 1, deleta 1 elemento
myArray.splice(1, 1);

// Posição 0, deleta 0, insere elemento
myArray.splice(0, 0, "Chocolate");

// Posição 0, deleta 1 elemento, insere elemento
myArray.splice(0, 1, "Lasagna");

// Printa no log do console html
console.log(myArray);