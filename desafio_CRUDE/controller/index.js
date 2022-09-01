const create_user = require('./create_user.js');
const del_user = require('./del_user.js');
const get_user = require('./get_user');
const get_by_id = require('./get_by_Id');
const update_user = require('./update_user.js');

module.exports = {
    create_user,
    del_user,
    get_user,
    update_user,
    get_by_id
}