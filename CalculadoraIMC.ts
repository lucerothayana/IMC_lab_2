class CalculadoraIMC {
    // Membros da classe
    private altura: number;
    private peso: number;


    constructor(altura: number, peso: number) {
        // Inicialize os membros da classe
        this.peso = peso;
        this.altura = altura;
    }

    public calcularIMC(altura: number, peso:number): number {
        const imc = peso / (altura*altura);
        return imc;
    }
}

export default CalculadoraIMC 
