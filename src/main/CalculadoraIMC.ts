import IMCService from "./IMCService";

class CalculadoraIMC {
    // Membros da classe
    private imcService: IMCService;


    constructor(imcService: IMCService) {
        this.imcService = imcService;
    }

    public calcularIMC(altura: number, peso:number): number {
        const imc = peso / (altura*altura);
        return imc;
    }

}

export default CalculadoraIMC 
