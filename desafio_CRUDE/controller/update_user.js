module.exports = function put(req, res) {
    try {
        const data = require('../data/user.json');
        const fs = require('fs').promises;
        const user_list = data.users;

        const { id } = req.params;
        const new_info = req.body;

        let response = update(user_list, id, new_info);

        fs.writeFile('./data/user.json', JSON.stringify(data,null,2));
        if (response == "Usuário não encontrado") res.status(404);
        res.end(response);

    }catch (err){
        if (!err.code){
            res.status(500).end(err.message);
        }
        res.status(500).end(err.code);
    }
}

function update(user_list, id, new_info){
    let response = 'Usuário não encontrado';
    user_list.forEach((user) => {
        if (user.id === parseInt(id)) {
            user.nome = new_info.nome ?? user.nome;
            user.email = new_info.email ?? user.email;
            response = "Usuário atualizado";
        }
    });
    return response;
}