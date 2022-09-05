module.exports = function put(req, res) {
    try {
        const data = require('../data/user.json');
        const fs = require('fs').promises;
        const user_list = data.users;
        console.log(data);
        const { id } = req.params;
        const new_info = req.body;

        let response = update(user_list, id, new_info, res);

        fs.writeFile('./data/user.json', JSON.stringify(data,null,2));
        res.send(response);

    }catch (err){
        if (!err.code){
            res.status(500).send(err.message);
        }
        res.status(500).send(err.code);
    }
}

function update(user_list, id, new_info, res){
    let response = 'Usuário não encontrado';
    for (user of user_list){
        if (user.id === parseInt(id)){
            if (user.deleted){
                response = 'Usuário deletado';
                res.status(202);
                return response;
            }else{
                user.nome = new_info.nome ?? user.nome;
                user.email = new_info.email ?? user.email;
                return response = "Usuário atualizado";
                
            }
        }
    }
    res.status(404);        

    return response;
}