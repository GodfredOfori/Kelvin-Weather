const kelvin = 0;
//Temperature constant value
const celsius = kelvin - 273;
//Celsius is kelvin - 273
let fahrenheit = celsius * (9/5) + 32;
//Fahrenheit temperature;
fahrenheit = Math.floor(fahrenheit);
//Fahrenheit value to the nearest whole number
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton =  celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`)


