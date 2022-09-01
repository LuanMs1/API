module.exports = function get(req, res) {
    try{
        const user_list = require('../data/user.json').users;
        const valid_users = [];
        const { id } = req.params;
        for (user of user_list){
            if(user.id === parseInt(id)){
                valid_users.push(user);
            }
        }
        
        if (valid_users.length === 0){
            res.status(202).end("Usuário não encontrado");
        }else {
            res.status(200).json(valid_users);
        }
    }catch(err){
        if (!err.code){
            res.status(500).end(err.message);
        }
        res.status(500).end(err.code);
    }
}