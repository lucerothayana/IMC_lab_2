import {PesoNegativoError} from './PesoNegativoError';

class CalculadoraIMC {
  // Membros da classe
  private altura: number;
  private peso: number;

  constructor(altura: number, peso: number) {
    // Inicialize os membros da classe
    this.peso = peso;
    this.altura = altura;
  }

  public calcularIMC(): number {
    if (this.peso < 0) throw new PesoNegativoError("Peso negativo");

    if (this.altura < 0) throw new Error("Altura negativa");

    const imc = this.peso / this.altura ** 2;

    return imc;
  }
}

export default CalculadoraIMC;
