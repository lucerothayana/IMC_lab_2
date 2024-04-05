import ResultadoIMC from "../main/ResultadoIMC";

class MockIMCService {
    static interpretarIMC(imc: number): ResultadoIMC {
        let estado: string;
        let criticidade: number;
        let comentario: string;

    
        if (imc < 16) {
            estado = 'Magreza Grave';
            criticidade = 3;
            comentario = 'Você está com magreza grave. Consulte um médico imediatamente!';
        } else if (imc < 17) {
            estado = 'Magreza Moderada';
            criticidade = 2;
            comentario = 'Você está com magreza moderada. Consulte um médico/nutricionista para orientações.';
        } else if (imc < 18.5) {
            estado = 'Magreza Leve';
            criticidade = 1;
            comentario = 'Você está com magreza leve. Consulte um médico/nutricionista para orientações.';
        } else if (imc < 25) {
            estado = 'Peso Normal';
            criticidade = 0;
            comentario = 'Seu peso está dentro do ideal para a sua altura.';
        } else if (imc < 30) {
            estado = 'Sobrepeso';
            criticidade = 1;
            comentario = 'Você está com sobrepeso. Consulte um médico para orientações.';
        } else if (imc < 35) {
            estado = 'Obesidade Grau I';
            criticidade = 2;
            comentario = 'Você está com obesidade grau I. Consulte um médico para orientações.';
        } else if (imc < 40) {
            estado = 'Obesidade Grau II (Severa)';
            criticidade = 3;
            comentario = 'Você está com obesidade grau II. Consulte um médico imediatamente!';
        } else {
            estado = 'Obesidade Grau III (Mórbida)';
            criticidade = 3;
            comentario = 'Você está com obesidade grau III. Consulte um médico imediatamente!';
        }

        // Retorna um objeto ResultadoIMC com os valores calculados
        return new ResultadoIMC(estado, criticidade, comentario);
    }
}

