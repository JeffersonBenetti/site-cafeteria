/*  Lógica de Programação:
        [x] Saber quando o usuário clicou no botão.
        [x] Mudar o posicionamento do modal.
        [x] Fazer a máscara ficar visível.
        [x] Quando clicar na máscara, fechar o modal.
*/

const modal = document.querySelector(".modal")
const mask = document.querySelector(".modal-mask")

function showModal(){
    modal.style.left = '50%'
    mask.style.visibility = 'visible'
}

function hideModal(){
    modal.style.left = '-30%'
    mask.style.visibility = 'hidden'
}