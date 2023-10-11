document.addEventListener('DOMContentLoaded', function() {
    function escopoFormulario() {
        const form = document.querySelector('.form');

        function recebeEventoForm(event) {
            event.preventDefault();
        
            const nome = form.querySelector('.nome').value;
            const peso = parseFloat(form.querySelector('.peso').value);
            const altura = parseFloat(form.querySelector('.altura').value);
            
            function criaPessoa(nome, peso, altura) {
                return { nome, peso, altura };
            }

            const novaPessoa = criaPessoa(nome, peso, altura);

            function calculaImc(pessoa) {
                const imc = pessoa.peso / (pessoa.altura * pessoa.altura);
                return imc.toFixed(2);
            }

            const resultadoImc = calculaImc(novaPessoa);

            let mensagem = '';

            if (resultadoImc < 18.5) {
                mensagem = `${nome}, o seu IMC é ${resultadoImc}. Você está abaixo do peso!`;
            } else if (resultadoImc >= 18.5 && resultadoImc <= 24.9) {
                mensagem = `${nome}, o seu IMC é ${resultadoImc}. Você está com peso normal!`;
            } else if (resultadoImc >= 25 && resultadoImc <= 29.9) {
                mensagem = `${nome}, o seu IMC é ${resultadoImc}. Você está acima do peso!`;
            } else {
                mensagem = `${nome}, o seu IMC é ${resultadoImc}. Você já está em um alto grau de obesidade, procure ajuda! Sua saúde está em PERIGO!`;
            }

            const result = form.querySelector('.resultado');
            console.log(result);
            result.textContent = mensagem;
        }

        form.addEventListener('submit', recebeEventoForm);
    }

    escopoFormulario();
});