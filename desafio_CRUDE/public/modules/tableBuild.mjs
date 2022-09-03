import apiRequisition from "./requisitions.js";
import dataClean from './handlingData.js';
import {deleteUser, editUser, signIn} from './userOperations.mjs';


export default async function printTable(){
    try{
        const data = await apiRequisition("GET");
        const tablePlace = document.querySelector('.table_place');
        tablePlace.innerHTML = "";
        const cleanData = dataClean(data);
        const table = buildTable(cleanData);
        tablePlace.appendChild(table);

        document.querySelectorAll('.delete')
                .forEach(item => item.addEventListener('click',deleteUser));
    
        document.querySelectorAll('.edit')
                .forEach(item => item.addEventListener('click',editUser))
    
        document.querySelector('.sign_in').addEventListener('click', signIn);

    }catch(err){
        console.log('erro index.js');
        console.log(err);
    }
}

function buildTable(data){
    try{
        //buildTable constroi a tabela com base no banco de dados
        const table = document.createElement('table');
        createTableHeader(table, Object.keys(data[0]));
        createLines(table, data)
        return table;
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
        for (let info in line){
            let cell = newRow.insertCell(-1);
            cell.innerHTML = line[info];
            cell.className = info;
        }
    })
}
