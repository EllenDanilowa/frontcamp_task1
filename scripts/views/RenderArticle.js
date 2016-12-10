const Render = require('./Render');

class RenderArticle extends Render {
	constructor(articles) {		
		super();
		this.articles = articles;
	};

	createArticleBlock(article) {
		const articleItemBlock = document.createElement('div');
        articleItemBlock.classList.add('article-list__item'); 

        const titleBlock = this.createArticleTitleBlock(article.title);
        const imageBlock = this.createArticleImageBlock(article.urlToImage.replace('http:', 'https:'));
        const descriptionBlock = this.createArticleDescriptionBlock(article.description);
        const linkBlock = this.createArticleLinkBlock(article.url.replace('http:', 'https:'));
        const additionalInformationBlock = this.createArticleAdditionalInformationBlock(article.author, article.publishedAt);

        articleItemBlock.appendChild(titleBlock);
        articleItemBlock.appendChild(imageBlock);
        articleItemBlock.appendChild(descriptionBlock);
        articleItemBlock.appendChild(linkBlock);
        articleItemBlock.appendChild(additionalInformationBlock);

        return articleItemBlock;
	};

    createArticleTitleBlock(title) {
        const articleTitleBlock = document.createElement('h2');
        articleTitleBlock.classList.add('article-list__item__title');
        articleTitleBlock.innerText = title;

        return articleTitleBlock;
    };

    createArticleImageBlock(imageUrl) {
        const articleImageBlock = document.createElement('img');
        articleImageBlock.classList.add('article-list__item__image');
        articleImageBlock.setAttribute('src', imageUrl);
        articleImageBlock.setAttribute('alt', 'awesome picture');

        return articleImageBlock;
    };

    createArticleDescriptionBlock(description) {
        const articleDescriptionBlock = document.createElement('p');
        articleDescriptionBlock.classList.add('article-list__item__description');
        articleDescriptionBlock.innerText = description;

        return articleDescriptionBlock;
    };

    createArticleLinkBlock(url) {
        const articleLinkBlock = document.createElement('a');
        articleLinkBlock.classList.add('link');
        articleLinkBlock.classList.add('article-list__item__link');
        articleLinkBlock.setAttribute('href', url);
        articleLinkBlock.setAttribute('target', '_blank');
        articleLinkBlock.innerText = 'Read more...';

        return articleLinkBlock;
    }; 

    createArticleAdditionalInformationBlock(author, date) {
        const additionalInformationBlock = document.createElement('div');
        additionalInformationBlock.classList.add('article-list__item__additional-information');

        const authorBlock = this.createArticleAuthorBlock(author);
        const dateBlock = this.createArticleDateBlock(date);      

        additionalInformationBlock.appendChild(authorBlock);
        additionalInformationBlock.appendChild(dateBlock);

        return additionalInformationBlock;
    };

    createArticleAuthorBlock(author) {
        const articleAuthorBlock = document.createElement('div');
        articleAuthorBlock.classList.add('article-list__item__additional-information__author');
        const authorIcon = document.createElement('i');
        authorIcon.classList.add('icon');
        authorIcon.classList.add('icon-user');
        authorIcon.setAttribute('aria-hidden', true);
        const articleAuthor = document.createElement('span');
        articleAuthor.innerText = author;

        articleAuthorBlock.appendChild(authorIcon);
        articleAuthorBlock.appendChild(articleAuthor);

        return articleAuthorBlock;
    };

    createArticleDateBlock(date) {
        const articleDateBlock = document.createElement('div');
        articleDateBlock.classList.add('article-list__item__additional-information__date');
        const dateIcon = document.createElement('i');
        dateIcon.classList.add('icon');
        dateIcon.classList.add('icon-clock');
        dateIcon.setAttribute('aria-hidden', true);
        const articleDate = document.createElement('span');
        articleDate.innerText = new Date(date).toLocaleDateString();

        articleDateBlock.appendChild(dateIcon);
        articleDateBlock.appendChild(articleDate);

        return articleDateBlock;
    };

	render(){
		const articleBlockFragment = document.createDocumentFragment();
        for (const article of this.articles) {
            articleBlockFragment.appendChild(this.createArticleBlock(article));
        };

        super.render(articleBlockFragment);
	};
};

module.exports = RenderArticle;