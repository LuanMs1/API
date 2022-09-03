module.exports = async function get(req, res) {
    try{
        const fs = require('fs').promises;
        let user_list = await fs.readFile('./data/user.json', 'utf-8');
        user_list = JSON.parse(user_list).users;
        console.log(user_list);
        const valid_users = [];
        for (user of user_list){
            if(!user.deleted){
                valid_users.push(user);
            }
        }
        res.json(valid_users);
    }catch(err){
        console.log(err);
        if (!err.code){
            res.status(500).send(err.message);
        }
        res.status(500).send(err.code);
    }
}