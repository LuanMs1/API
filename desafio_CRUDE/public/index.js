import apiRequisition from "./requisitions.js";

window.addEventListener('load', buildTable);

async function buildTable(){
    try{
        //buildTable constroi a tabela com base no banco de dados
        const data = await apiRequisition("GET");
        const tablePlace = document.querySelector('.table_place');
        // const data = [
        //     {'nome': 'Luan', 'email': "hotmail", "deleted":"false", "id": 1}
        // ]
        const table = document.createElement('table');
        console.log(data);
        createTableHeader(table, ["#id", "NOME", "E-MAIL", "EDITAR", "EXCLUIR" ]);
        createLines(table, [{'id': 1, 'nome': 'Luan', 'email': 'hotmail'}])
        tablePlace.appendChild(table);
    }catch(err){
        console.log(err);
    }
}

function createTableHeader(table,titles){
    const header = table.createTHead();
    const row = header.insertRow(0);
    titles.forEach(element => {
        row.insertCell(-1).outerHTML = `<th>${element}</th>`;
    });
}
function createLines(table, data){
    const keys = Object.keys(data[0]);
    data.forEach(line =>{
        const newRow = table.insertRow(-1);
        for (let cell in line){
            newRow.insertCell(-1).innerHTML = line[cell];
        }
    })
}