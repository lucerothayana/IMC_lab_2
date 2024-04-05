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
        const imc = this.peso / (this.altura**2);
        return imc;
    }
}

export default CalculadoraIMC 
