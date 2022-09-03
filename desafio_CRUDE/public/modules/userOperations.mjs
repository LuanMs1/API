import apiRequisition from "./requisitions.js";
import printTable from './tableBuild.mjs';

async function deleteUser(event){
    const id = event.path[2].querySelector('.id').innerHTML;
    await apiRequisition('DELETE', null, id);
    console.log('user deleted')
    printTable();
}

async function editUser(event){
    let modal = document.querySelector('.modal')
    modal.style.display = "flex";
    const chosedLine = event.path[2];
    const user = {
        "nome":chosedLine.querySelector('.nome').innerHTML,
        "email":chosedLine.querySelector('.email').innerHTML
    }
    const id = chosedLine.querySelector('.id').innerHTML;
    modal.querySelector('#name').value = user.nome;
    modal.querySelector('#email').value = user.email;
    modal.querySelector('button').addEventListener('click', async () => {
        modal = document.querySelector('.modal');
        const editUser = {
            "nome":modal.querySelector('#name').value,
            "email":modal.querySelector('#email').value
        }
        modal.style.display = "none";
        console.log(editUser, id)
        await apiRequisition('PUT',editUser,id);
        printTable();
    })
}

async function signIn(event){
    const infos = event.path[1];
    const newUser = {
        'nome': infos.querySelector('#name').value,
        'email': infos.querySelector('#email').value
        };
    if (newUser.nome === "" || newUser.email === "") return console.log("nome e email")

    console.log("usuário cadastrado")

    await apiRequisition('POST',newUser);
    printTable();
}


export { deleteUser, editUser, signIn};