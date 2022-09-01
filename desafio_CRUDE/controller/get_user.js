module.exports = function get(req, res) {
    try{
        const user_list = require('../data/user.json').users;
        const valid_users = [];
        for (user of user_list){
            if(!user.deleted){
                valid_users.push(user);
            }
        }
        res.json(valid_users);
    }catch(err){
        if (!err.code){
            res.status(500).end(err.message);
        }
        res.status(500).end(err.code);
    }
}