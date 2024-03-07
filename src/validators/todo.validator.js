function createTodoValidator(req, res, next) {
    if(!req.body.todoText) {
        return res.json({msg: 'Invalid Request'});
    }
    next();
}

module.exports = {
    createTodoValidator
}