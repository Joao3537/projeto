function carregaUsuario() {
   if (localStorage.getItem(1).valueOf() != '') {
      // localStorage.getItem(1).valueOf()
      // document.getElementById('usuario')
      console.log(localStorage.getItem(1).valueOf());
   }

   if (localStorage.getItem(2).valueOf() != '') {
      // localStorage.getItem(2).valueOf()
      // document.getElementById('senha')
      console.log(localStorage.getItem(2).valueOf());
   }
}

function validaLogin() {
   //debugger;
   var usuario = document.card.usuario.value;
   var password = document.card.password.value;

   if (usuario == "" || password == "") {
      alert("deve informar os dados de login");
   }
   else if (usuario === "joao3536" && password === "468725Aa") {
      alert("conta válida");
   }
   else {
      alert("conta inválida");
   }

   carregaUsuario();
   //   console.log(password);
   //   if (password === "4687"){
   //      alert("conta válida");
   //   }
   //   else {
   //      alert("conta inválida")
   //   }
}
