// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.//

function ParOImpar(num) {
  if(num % 2 === 0) {
    console.log(num + " es un número par");
  } else {
    console.log(num + " es un número impar");
  }
}

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno 
//lo es, indicar por consola que son iguales.

console.log ("Escribir dos numeros")

function queNumEsMayor (num1 num2) {
    if(num1===num2)
    console.log ("son iguales");
    
    if(num1>num2)
    console.log ("el numero mayor es : "+num1);

    if(num2>num1)
    console.log ("el numero mayor es : "+num2);

}

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multiplo5 (num)
    
    if (num %5)==0
    console.log (`el número es múltiplode 5`)
    else
        console.log (`el número no es múltiplo de 5`)

    // 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 
    //hasta llegar a ese número.

    max = console.log ("Escriba un numero ")
    
    let i=0
    for (i = 1; i <= max; i++) {
     console.log(i);
     }

    //  5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra 
    //la cantidad correspondiente al número indicado.

    console.log (`escriba una palabra`)
    const palabra = [i]
    console.log (`escriba un núnero`)
    let num
    for(let i = 0;  i < num.length; ++1); {
        if (palabra [i] > num) {
            break
        }
        console.log (palabra[i]);
    } 
    // 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
    let fruta = {
        nombre: "frutilla"
        color: "rojo"
        cantidad: "845"
    }

    const values = Object.values(fruta);
    console.log (values)

    // 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array,
    // menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    for (arraynum of num){
        if (arraynum === 6) {
            continue;
        }
    }
    console.log (arraynum)

    // 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada 
    //número del array multiplicado por el número pasado por parámetro.

    function multiplo(n, narray) {
        for (let i = 0; i < narray.length; i++) {
          let multiplicacion = narray[i] * n;
          console.log(multiplicacion);
        }
      }
      
      const narray = [1, 2, 3];
      multiplo(5, narray);