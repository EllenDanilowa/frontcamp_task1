require('es6-promise').polyfill();
require('isomorphic-fetch');

const config = require('../configs/config.json');
const ArticleModel = require('../models/ArticleModel');
const ErrorModel = require('../models/ErrorModel');

class ArticleProvider {
    constructor (apiKey) {
        this.link = config.apiLink;
        this.apiKey = apiKey;
    };

    get requestLink() {
        return `${this.link}&apiKey=${this.apiKey}`;
    };

    loadArticles() {
        return fetch(new Request(this.requestLink), {
                method: 'GET',
                mode: 'cors'
            })
            .then(response => response.json())
            .then(data => 
                data.articles.map(item => 
                    new ArticleModel(item)
                )
            )
            .catch(error => {
                return new ErrorModel(error);
            });
    };
}

module.exports = ArticleProvider;
