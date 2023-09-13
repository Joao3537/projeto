function verificaDados() {
    // console.log('opa')
    //alert(document.getElementById('usuario').value)

    //alert(document.getElementById('senha').value)

    //capturar info do nome
    let usuario = document.getElementById('usuario').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    let caractereVerificaEmail = '@';

    if (usuario <= 5){
        alert('Campo usuario deve ter mais que 5 caracteres!');
    }
    
    let verificacao = email.match(caractereVerificaEmail);
    if (verificacao.length <= 0){ //verifica o array de string e checa se há @
        alert('Campo email deve conter email válido!');
    }

    if (senha.length() < 8 || senha == 'asd'){
        alert("A senha deve ter mais que 8 caracteres e não pode ser 'asd'");
    }
    if (usuario <= "" || verificacao.length <= "" || senha.length() < ""|| senha == ""){
        alert("deve informar os dados de cadastro");
    }
}