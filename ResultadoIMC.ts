class ResultadoIMC {

    private estado: string;
    private comentario: string;
    private criticidade: number;

    constructor(estado: string, criticidade: number, comentario: string) {
        this.criticidade = criticidade;
        this.comentario = comentario;
        this.estado = estado;
    }

}

export default ResultadoIMC 
