import apiRequisition from "./requisitions.js";
import printTable from './tableBuild.mjs';
import modal from './modal.js';

async function deleteUser(event){
    const id = event.path[2].querySelector('.id').innerHTML;
    await apiRequisition('DELETE', null, id);
    console.log('user deleted')
    printTable();
}

async function editUser(event){
    const chosedLine = event.path[2];
    const user = {
        "nome":chosedLine.querySelector('.nome').innerHTML,
        "email":chosedLine.querySelector('.email').innerHTML
    }
    const id = parseInt(chosedLine.querySelector('.id').innerHTML);

    const modalWindow = modal.show(user);

    modalWindow.querySelector('.close').addEventListener('click', () => {
        modal.close();
    })
    modalWindow.querySelector('button').addEventListener('click', async () => {
        const editUser = modal.infos();
        modal.close();
        await apiRequisition('PUT',editUser,id);
        printTable();
    })
}

async function signIn(event){
    const infos = event.path[1];
    console.log(infos)
    const newUser = {
        'nome': infos.querySelector('#name').value,
        'email': infos.querySelector('#email').value
        };
    if (newUser.nome === "" || newUser.email === "") {
        document.querySelector('.error').innerHTML = "digite um nome e email"
        return;
    }

    console.log("usuário cadastrado")

    await apiRequisition('POST',newUser);
    printTable();

}


export { deleteUser, editUser, signIn};