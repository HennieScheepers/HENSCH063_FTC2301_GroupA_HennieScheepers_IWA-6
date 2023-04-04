const rent = 400;
//changed tax value to represent percentage
const tax = 12;
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

//Removed quotation marks around numbers and moved variables out of if statement scope
const taxAsDecimal = tax / 100
const startingAfterTax = salary * (1 - taxAsDecimal)
//fixed spelling error in balance and startingAfterTax
const balance = startingAfterTax - transport - food - rent
//Added missing curly bracket before hourOfDay

console.log(hourOfDay, minuteOfDay)
// Gave hourOfDay and minuteOfDay their own undefined check. Proogram doesn't work with hourOfDay && minuteOfday !== undefined
if ((hourOfDay === 00 && minuteOfDay === 00) && (hourOfDay !== undefined && minuteOfDay !== undefined)) {
    console.log(balance.toFixed(2))
}

