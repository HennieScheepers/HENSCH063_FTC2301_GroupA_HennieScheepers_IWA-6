const primaryPhone = 'O748105141'
const secondaryPhone = '0219231568'

// Only chnage below this line

// used isNaN to determine if primaryPhone and secondaryPHone would return NaN when converted to number
const primaryValid = isNaN(primaryPhone) === true ?false : true
const secondaryValid = isNaN(secondaryPhone) === true? false : true

console.log('Priamry phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid)