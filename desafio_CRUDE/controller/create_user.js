module.exports = async function create(req, res) {
    try{
        //pega req.body
        //passa body para services
        //services busca banco de dados e atualiza
        //retorna a resposta
        const createService = require('../Services/createUserService');
        const new_user_info = req.body;        
        // checando se tem 2 itens nome e email
        if (Object.keys(new_user_info).length !== 2) {
            res.status(400).end("fornecer nome e email");
            return;
        }

        //retorna verdadeiro caso usuário seja criado
        const sucess = await createService(new_user_info);

        if (sucess){
            res.status(201).send("Usuário cadastrado com sucesso");
        }else{
            res.status(500).send("algum erro");
        }

    }catch(err){
        if (!err.code){
            res.status(500).send(err.message);
        }
        res.status(500).send(err.code);s
    }
}