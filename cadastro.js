function verificaDados() {
    //console.log('opa')
    //alert(document.getElementById('usuario').value)

    //alert(document.getElementById('senha').value)

    //capturar info do nome
     let usuario = document.getElementById('usuario').value;
     let email = document.getElementById('email').value;
     let senha = document.getElementById('senha').value;

     let caractereVerificaEmail = '@';
     let verificacao = email.match(caractereVerificaEmail);

     if (usuario.length <= 5 || senha.length < 6)// usuario/senha
     {
         alert('usuário ou senha insuficentes');
         return;
     }
     else if (usuario.length === "" || senha.length === "")// usuario/senha
     {
         alert('deve informar os dados do cadastro');
         return;
     }
     else if (verificacao.length <= 0)// email
     {
         //verifica o array de string e checa se há @
         alert('Campo email deve conter email válido!');
         return;
     }
    // //todas as validações estão ok
    localStorage.setItem(1, usuario.valueOf());
localStorage.setItem(2, senha.valueOf());

    console.log('passou pelas validações');

    window.location.href = "login.html";
    // chamaLogin();
}

function chamaLogin() {
    // debugger;
    console.log('chama funcao')
    // window.location.href = "\\projeto_site\\login.html"
    window.location.assign("//projeto_site//login.html")
    // window.location.replace("\\projeto_site\\login.html")
}