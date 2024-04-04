import ResultadoIMC from "./ResultadoIMC";

interface IMCService {
    interpretarIMC(imc: number): ResultadoIMC ;
}


export default IMCService;
