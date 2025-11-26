const sumar = require('./calculadora');

test('Suma 1 + 2 igual a 3', () => {
    expect(sumar(1, 2)).toBe(3);
});
