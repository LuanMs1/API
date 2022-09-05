let modal = document.querySelector('.modal')
function show(user){
    modal.style.display = "flex";
    modal.querySelector('#name').value = user.nome;
    modal.querySelector('#email').value = user.email;
    return modal;
}

function close(){
    modal.style.display = 'none';
    return;
}

function infos(){
    return {
        "nome":modal.querySelector('#name').value,
        "email":modal.querySelector('#email').value
    }
}

export default {show, close, infos};