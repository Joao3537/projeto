function verificaDados() {
    // console.log('opa')
    //alert(document.getElementById('usuario').value)

    //alert(document.getElementById('senha').value)

    //capturar info do nome
    let usuario = document.getElementById('usuario').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    let caractereVerificaEmail = '@';

   if (usuario.length <= 5 || senha.length < 8){
        alert('usuário ou senha insuficentes')
   }
   else if (usuario.length === "" || senha.length === ""){
       alert('deve informar os dados do cadastro')
   }

    //email
    let verificacao = email.match(caractereVerificaEmail);
    if (verificacao.length <= 0) {
        //verifica o array de string e checa se há @
        alert('Campo email deve conter email válido!');
    }

    
}