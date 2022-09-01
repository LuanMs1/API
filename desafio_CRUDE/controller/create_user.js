module.exports = function create(req, res) {
    try{
        //pega req.body
        //passa body para services
        //services busca banco de dados e atualiza
        //retorna a resposta

        const data = require('../data/user.json');
        const fs = require('fs').promises;
        const new_user_info = req.body;

        if (Object.keys(new_user_info).length !== 2) {
            res.status(400).end("fornecer nome e email");
            return;
        }

        const new_user = buildUserObject(new_user_info, data);
        data.users.push(new_user);
    
        fs.writeFile("./data/user.json", JSON.stringify(data, null, 2))
    
        res.status(201).json("Usuário cadastrado com sucesso");
        
    }catch(err){
        if (!err.code){
            res.status(500).end(err.message);
        }
        res.status(500).end(err.code);
    }
}

function buildUserObject(info, data){
    const user_list = data.users;
    const new_user_id = user_list.length + 1;
    const new_user = {...info}
    new_user.deleted = false;
    new_user.id = new_user_id;
    return new_user;
}