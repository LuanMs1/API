module.exports = function remove(req, res) {
    try{
        const data = require('../data/user.json');
        const fs = require('fs').promises;
        const user_list = data.users;
        let user_exist = false;
        //resposta padrão
        let response = "usuário não encontrado";
        const { id } = req.params;

        for (user of user_list){
            if (user.id === parseInt(id)){
                if (user.deleted){
                    response = `usuário ${id} já está deletado`
                    res.status(202)
                    user_exist = true;
                    break;
                }else{
                    user.deleted = true;
                    response = `usuário ${id} deletado`;
                    res.status(200)
                    user_exist = true;
                    break;
                }
            }
        }
    
        fs.writeFile('./data/user.json', JSON.stringify(data, null, 2));
        if (!user_exist) res.status(404);
        res.send(response);
    }catch(err){
        if (!err.code){
            res.status(500).send(err.message);
        }
        res.status(500).send(err.code);
    }
}