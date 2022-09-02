module.exports = async function createUser(info){
    try{
        const fs = require('fs').promises;
        let data = await fs.readFile('./data/user.json', 'utf-8');
        data = JSON.parse(data);

        const new_user = buildUserObject(info, data);
        data.users.push(new_user);

        await fs.writeFile("./data/user.json", JSON.stringify(data, null, 2));

        return true;
    }catch(err){
        console.log(err);
        return false;
    }

}

function buildUserObject(info, data){
    try{
        const user_list = data.users;
        const new_user_id = user_list.length + 1;
        const new_user = {...info}
        new_user.deleted = false;
        new_user.id = new_user_id;
        return new_user;
    }catch(err){
        console.log(err);
    }
}
