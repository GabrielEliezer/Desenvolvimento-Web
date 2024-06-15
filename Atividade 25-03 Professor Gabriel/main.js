/*const usuario = document.getElementById('usuario').value
console.log(usuario);   
*/

const usuario = document.getElementById('usuario').value
const senha = document.querySelector('#senha').value


const UsuarioPermitido = newgate
const SenhaPermitida = newgate


const botao = document.querySelector('#enviar');

botao.addEventListener("click", (evento)=> {

evento.preventDefault()

const usuario = document.getElementById('usuario').value
const senha = document.querySelector('#senha').value

global_user = usuario
global_password = senha

console.log(global_user,global_password)

})


if(usuario === UsuarioPermitido && senha === SenhaPermitida){
console.log(usuario,senha)
}





console.log(usuario,senha);