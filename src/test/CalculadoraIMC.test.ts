import CalculadoraIMC from '../main/CalculadoraIMC';

// Descreva o conjunto de testes usando describe
describe('CalculadoraIMC', () => {
    // Descreva o teste específico usando it
    it('deve calcular o IMC corretamente', () => {
        // Crie uma instância da CalculadoraIMC
        const calculadora = new CalculadoraIMC(1.75, 70);

        // Chame o método calcularIMC com valores conhecidos
        const imcCalculado = calculadora.calcularIMC();

        // Verifique se o IMC calculado está dentro de uma margem de erro aceitável
        expect(imcCalculado).toBeCloseTo(22.86, 2); // IMC esperado para altura 1.75m e peso 70kg
    });
});