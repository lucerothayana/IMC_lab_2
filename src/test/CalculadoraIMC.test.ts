import CalculadoraIMC from '../main/CalculadoraIMC';
import { PesoNegativoError } from '../main/PesoNegativoError';

let sut: CalculadoraIMC = null

describe('CalculadoraIMC', () => {
    beforeEach(() => {
        sut = new CalculadoraIMC(1.75, 70);
    });

    it('deve calcular o IMC corretamente', () => {
        const imcCalculado = sut.calcularIMC();

        expect(imcCalculado).toBeCloseTo(22.86, 2); 
    });

    it('peso negativo', () => {
        sut = new CalculadoraIMC(1.75, -70);

        expect(async() => sut.calcularIMC()).rejects.toThrowError("Peso negativo"); 
    });

    it('peso negativo', () => {
        sut = new CalculadoraIMC(1.75, -70);

        expect(async() => sut.calcularIMC()).rejects.toBeInstanceOf(PesoNegativoError); 
    });

    it('altura negativa', () => {
        sut = new CalculadoraIMC(-1.75, 70);

        expect(async() => sut.calcularIMC()).rejects.toThrowError("Altura negativa"); 
    });

    it('peso e altura negativos', () => {
        sut = new CalculadoraIMC(-1.75, -70);

        expect(async() => sut.calcularIMC()).rejects.toThrowError("Peso negativo"); 
    });
});