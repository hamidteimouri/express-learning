/* GET home page. */
exports.clientHomeIndex = function (req, res, next) {
    res.render('index', {title: 'Express'});
};

exports.helloWorld = function (req, res) {
    res.send('Hello world');
};
