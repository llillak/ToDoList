const { factorial } = require('./factorial');

test('calculates the factorial of 0', async () => {
    expect(factorial(0)).resolves.toBe(1);
});

test('calculates the factorial of 3', async () => {
    expect(factorial(3)).resolves.toBe(6);

});
test('calculates the factorial of 5', async () => {
    expect(factorial(5)).resolves.toBe(120);

});
test('calculates the factorial of 11', async () => {
    expect(factorial(11)).resolves.toBe(39916800);

});
test('calculates the factorial of 1', async () => {
    expect(factorial(1)).resolves.toBe(1);

});
test('calculates the factorial of -1', async () => {
    expect(()=> factorial(-1)).rejects.toThrow();

});
