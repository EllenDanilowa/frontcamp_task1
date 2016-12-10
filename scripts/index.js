require('../styles/style.scss')

const ArticleController = require('./controllers/ArticleController');
const articleController =  new ArticleController();

articleController.initialize();
