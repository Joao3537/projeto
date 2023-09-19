function validaLogin() {

   function carregaUsuario() {
      if (localStorage.getItem(1) != '') {
         localStorage.getItem(1).valueOf()
   
         document.getElementById('usuario')
      }

      if (localStorage.getItem(2) != ''){
         localStorage.getItem(1).valueOf()
   
         document.getElementById('senha')
      }
   }
   
   var usuario = document.card.usuario.value;
   var password = document.card.password.value;

   if (usuario == "" || password == ""){
      alert("deve informar os dados de login");
   }
   else if (usuario === "joao3536" || password === "468725Aa"){
      alert("conta válida");
   }
   else {
      alert("conta inválida");
   }
   //   console.log(password);
   //   if (password === "4687"){
   //      alert("conta válida");
   //   }
   //   else {
   //      alert("conta inválida")
   //   }
}
