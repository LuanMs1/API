//função que recebe um método, um objeto opcional e um id opicional
export default async function apiRequisition(method, body = null, id = null){
    try{
        if(!method) throw new Error('Metodo necessário');

        let options = {
            method: method,
            headers: {'Content-Type': 'application/json'},
            body: body ? JSON.stringify(body) : null
        }

        const req =  await fetch(`http://localhost:8080/usuarios/${id || ""}`,
                                 options);
        //tratando a resposta do servidor, fazendo um objeto em caso de que
        //a resposta tenha um json
        const res = await treatingResponse(req);
        //se a resposta retornar um json, printar res
        if(res) return res;

    }catch(err){
        console.log(err);
    }
}

async function treatingResponse(req){
    if (req.headers.get('content-type').includes("application/json")){
        return req.json();
    }else{
        return req.status + " " + req.statusText
    }
}