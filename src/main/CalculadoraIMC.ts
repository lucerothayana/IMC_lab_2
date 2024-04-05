import {PesoNegativoError} from './PesoNegativoError';

import IMCService from "./IMCService";

class CalculadoraIMC {
    // Membros da classe
    private imcService: IMCService;


    constructor(imcService: IMCService) {
        this.imcService = imcService;
    }

  public calcularIMC(altura: number, peso:number): number {
    if (peso < 0) throw new PesoNegativoError("Peso negativo");

    if (altura < 0) throw new Error("Altura negativa");

    const imc = peso / altura ** 2;

    return imc;
  }
}

export default CalculadoraIMC;
