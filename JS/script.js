function validarCPF() {
    let cpf = document.getElementById('cpf').value;
    
    // Remove os pontos e o hífen
    cpf = cpf.replaceAll(/[^\d]/g, '');

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) 
    {
        document.getElementById('resultado').innerText = 'CPF inválido (tamanho incorreto).';
        return;
    }

    // Valida o primeiro dígito verificador
    let total = 0;
    let j = 10;
    for (let i = 0; i < 9; i++)
    {
        total += parseInt(cpf.charAt(i)) * j;
        j--;
    }
    let primeiroDigito = (total * 10) % 11;
    if (primeiroDigito === 10) primeiroDigito = 0;

    // Valida o segundo dígito verificador
    total = 0;
    j = 11;
    for (let i = 0; i < 9; i++) 
    {
        total += parseInt(cpf.charAt(i)) * j;
        j--;
    }
    total += primeiroDigito * 2;
    let segundoDigito = (total * 10) % 11;
    if (segundoDigito === 10) segundoDigito = 0;

    // Checa se os dígitos calculados são iguais aos do CPF
    if (parseInt(cpf.charAt(9)) === primeiroDigito && parseInt(cpf.charAt(10)) === segundoDigito) 
    {
        document.getElementById('resultado').innerText = 'CPF válido.';
        document.getElementById('resultado').style.color = 'green';
    } else 
    {
        document.getElementById('resultado').innerText = 'CPF inválido.';
        document.getElementById('resultado').style.color = 'red';
    }
}
