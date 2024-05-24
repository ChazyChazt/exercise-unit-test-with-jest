// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
test("One dollar should be 156.5 japan yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');
    // Uso la función como debe ser usada
    const yen = fromDollarToYen(3);
    // Si 1 dolar son 156.5 japan yen, entonces 3 dolares debe ser (3.5 * 156.5)
    const expected = 3 * 156.5;
    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3)).toBe(469.5); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("One Yen should be 0.87 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');
    // Uso la función como debe ser usada
    const yen = fromYenToPound(3);
    // Si 1 dolar son 156.5 japan yen, entonces 3 dolares debe ser (3.5 * 156.5)
    const expected = 3 * 0.87;
    // Hago mi comparación (la prueba)
    expect(fromYenToPound(3)).toBe(2.61); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
