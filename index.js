//Blue EdTech - Prof. Alexandre Russi 
//Aluno: Bruno Dutra
//AULA - FUNCTION 24/09/2021 

//FUNÇÕES

// function olaMundo() 
// {
//   console.log("Olá Mundo!");
// }

// olaMundo();


// function verificaIdade() 
// {
//   let ano = +prompt(" Em que ano você nasceu? ");
//   let idade = 2021 - ano;

//   if (idade >= 18) 
//   {
//     console.log("Você é maior de idade!");
//   } else 
//   {
//     console.log("Você é maior de idade!");
//   }
// }

// //verificaIdade();

// let resposta = prompt("Você deseja verificar sua idade novamente? (sim ou não)");

// if (resposta ==="sim") 
// {
//  verificaIdade();
// } 
// else 
// {
//   console.log("Vai na paz...então não vou verificar")
// }


// function soma(numero1, numero2)
// {
//   console.log(numero1 + numero2);
// }

// let num1 = +prompt("Digite o número 1");
// let num2 = +prompt("Digite o número 2");

// soma(num1, num2);


function verificarLogin(email, senha)
{
  if (email === "blue@top.com" && senha ==="1234")
  {
    console.log("Você acertou , agora está logado")
  }
  else 
  {
    console.log("E-mail e senha incorretos.")
  }
}

// //email = blue@top.com
// //senha = 1234

let email = prompt("Digite seu email: ");
let senha = prompt("Digite sua senha:");


verificaLogim (email, semha);
