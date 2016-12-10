const config = require('../configs/config.json');

class ArticleController {

    initialize() {
        const loadButton = document.getElementById(config.id.loadButton);
        
        loadButton.addEventListener('click', () => {
            loadButton.classList.add('hidden');
                require.ensure([], (require) => {  
                    const RenderManager = require('../views/RenderManager');
                    const renderManager = new RenderManager(); 

                    this.renderArticles(renderManager);            
                }, 'app');

        });
    };

    renderArticles(renderManager) {
        const apiKey = this.getApiKey();
        if (apiKey) {
            require('../../styles/article.scss');

            const ArticleProvider = require('../services/ArticleProvider');
            const articleProvider = new ArticleProvider(apiKey);

            articleProvider.loadArticles().then(articles => {
                this.renderArticleBlock(renderManager, articles);
            }).catch(error => {
                this.renderErrorBlock(renderManager, error);
            });

        } else {
            const ErrorModel = require('../models/ErrorModel');
            const error = new ErrorModel(config.errorMessages.notExistApiKey);
            
            this.renderErrorBlock(renderManager, error);
        }
    };

    getApiKey() {
        const ApiKeyProvider = require('../services/ApiKeyProvider');
        const apiKeyProvider = new ApiKeyProvider();
        const apiKey = apiKeyProvider.getApiKey();

        return apiKey;
    };

    renderArticleBlock(renderManager, articles) {
        renderManager.execute({
                requestInfo: 'renderArticles', 
                data: articles
        });
    };

    renderErrorBlock(renderManager, error){
        renderManager.execute({ 
                requestInfo: 'renderError', 
                data: error
        });
    };
    
};

module.exports = ArticleController;