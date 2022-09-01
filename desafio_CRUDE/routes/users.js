module.exports = (app) => {
    const controllers = require('../controller/index');

    app.route('/usuarios')
        .get(controllers.get_user)
        .post(controllers.create_user);

    app.route('/usuarios/:id')
        .get(controllers.get_by_id)
        .put(controllers.update_user)
        .delete(controllers.del_user);
}