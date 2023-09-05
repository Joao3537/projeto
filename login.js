function validaLogin() {
   var usuario = document.card.usuario.value;
   var password = document.card.password.value;

   if (usuario == "" || password == ""){
      alert("deve informar os dados de login");
   }
   else if (usuario === "joao" || password === "4687"){
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