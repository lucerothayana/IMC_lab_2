import CalculadoraIMC from '../main/CalculadoraIMC';
import { PesoNegativoError } from '../main/PesoNegativoError';
import ResultadoIMC from '../main/ResultadoIMC';

let sut: CalculadoraIMC = new CalculadoraIMC({interpretarIMC});

function interpretarIMC(): ResultadoIMC {
    return new ResultadoIMC("Normal", 0, "Normal");
}

describe('CalculadoraIMC', () => {
    beforeEach(() => {
        sut = new CalculadoraIMC({interpretarIMC});
    });

    it('deve calcular o IMC corretamente', () => {
        const imcCalculado = sut.calcularIMC(1.75, 70);

        expect(imcCalculado).toBeCloseTo(22.86, 2); 
    });

    it('peso negativo', () => {
        expect(() => sut.calcularIMC(1.75, -70)).toThrowError("Peso negativo"); 
    });

    it('altura negativa', () => {
        expect(() => sut.calcularIMC(-1.75, 70)).toThrowError("Altura negativa"); 
    });

    it('peso e altura negativos', () => {
        expect(() => sut.calcularIMC(-1.75, -70)).toThrowError("Peso negativo"); 
    });
});
