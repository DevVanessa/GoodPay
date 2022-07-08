import userLogin from "./moduloDados.js;"
const alertaLogin = new bootstrap.Modal("#alertaLogin")

const userLogin = [
    {
        id: 1001, 
        userName: "victor",
        senha:"gordinho123",
        email:"victor.icoma@gmail.com"
    },
    {
        id: 1002, 
        userName: "janasilva",
        senha:"ja123456",
        email:"janasilva@gmail.com"
    },
    {
        id: 1003, 
        userName: "marcospinheiro",
        senha:"m123456",
        email:"pinheiromarcos@gmail.com"
    },
    {
        id: 1004, 
        userName: "elisamarcondes",
        senha:"123456",
        email:"elimarcondes@gmail.com"
    },
    ];
    
entrarUsuario.addEventListener("click", _event => { 
    let login =document.getElementById("login").value;
    let senha =document.getElementById("Senha").value;
    letvalidaLogin = userLogin.find(userLogin => userLogin.userName === login);
    if (login === validaLogin.userName && senha === validaLogin.senha) {
        alert( "Parabéns está Logado");
        window.location.pathname="/app.html";
    } else {
        alertaLogin.show();
    }
});


