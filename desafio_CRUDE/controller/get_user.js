module.exports = async function get(req, res) {
    try{
        const fs = require('fs').promises;
        let user_list = await fs.readFile('./data/user.json', 'utf-8');
        console.log(user_list);
        user_list = JSON.parse(user_list).users;
        const valid_users = user_list
                            .filter((element) => element.deleted === false );
        res.json(valid_users);
    }catch(err){
        console.log(err);
        if (!err.code){
            res.status(500).send(err.message);
        }
        res.status(500).send(err.code);
    }
}