function teste() {
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    
    localStorage.setItem(1, nome.valueOf());
    localStorage.setItem(2, cpf.valueOf());

    console.log('Nome: ' + localStorage.getItem(1).valueOf() + ' CPF: ' + localStorage.getItem(2).valueOf())
    alert('Nome: ' + localStorage.getItem(1).valueOf() + ' CPF: ' + localStorage.getItem(2).valueOf())
}