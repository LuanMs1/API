module.exports = async function get(req, res) {
    try{
        let user_list = await fs.readFile('./data/user.json', 'utf-8');
        console.log(user_list);
        const valid_users = [];
        const { id } = req.params;
        for (user of user_list){
            if(user.id === parseInt(id)){
                valid_users.push(user);
            }
        }
        
        if (valid_users.length === 0){
            res.status(202).send("Usuário não encontrado");
        }else {
            res.status(200).json(valid_users);
        }
    }catch(err){
        if (!err.code){
            res.status(500).send(err.message);
        }
        res.status(500).send(err.code);
    }
}