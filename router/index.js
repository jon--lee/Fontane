module.exports.init = init;
module.exports.route = route;
module.exports.listen = listen;

/*
 * exp - express library
 * app - instance of express
 * http - instance of http server
 * sessions - array of session ids
 */
function init(exp, app, http, sessions)
{
    this.exp = exp;
    this.app = app;
    this.http = http;
    this.sessions = sessions;
};

/*
 * view_eng - string describing the view engine type (eg 'ejs')
 */
function route(view_eng){
    this.app.use(this.exp.static(__dirname + '/../public'));
    console.log("static directory: " + __dirname + '/../public');
    if(view_eng){ this.app.set('view engine', view_eng); }
    
    this.app.get('/', renderHomePage);
    this.app.get('/test', renderDownloadPage(this.sessions));
    this.app.get('/:id', renderDownloadPage(this.sessions));
};

/*
 * sessions - array of session ids
 * returns a function to render valid session given req.params
 */
function renderDownloadPage(sessions){
    return function(req, res){

        if(sessions.indexOf(req.params.id) >= 0) {
            res.render('pages/download', {id: req.params.id});
        }
        else {
            res.send('This session has timed out.');
        }
    
    };
};

function renderHomePage(req, res){
    res.render('pages/index');
};

function renderTestPage(req, res){
    res.render('pages/download');
};

/*
 * port - integer port number
 */
function listen(port){
    this.http.listen(port, function(){
        console.log('Running on http://localhost:' + port);
    });
};
