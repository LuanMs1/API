export default function dataClean(data){
    let cleanData = [];
    let edit = `<span class="material-symbols-outlined table_icon">
    edit
    </span>`
    let del = `<span class="material-symbols-outlined table_icon">
    delete
    </span>`
    data.forEach(user =>{
        const newObj = {};
        newObj.id = user.id;
        newObj.nome = user.nome;
        newObj.email = user.email;
        newObj.edit = edit;
        newObj.delete = del;
        cleanData.push(newObj);
    })
    return cleanData;
}