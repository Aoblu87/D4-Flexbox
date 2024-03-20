function renderArticles() {
  const articleDiv = document.getElementById('article');

  const articlesHTML = articles
    .map(
      (article) => `
      <div class="article-container">
      <div class="article">
          <div class="author">
              <div class="img-icon">
                  <img src="${article.imageUrl}" alt="Logo">
                 <p> ${article.author}</p>
              </div>
          </div>
          <div class="title">
              <h1>${article.title}</h1>
          </div>
          <div class="text">
              <p>${article.description}</p>
          </div>
          <div class="text-bottom-container">
              <div class="text-bottom">
                  <p class="tags">${article.date}</p>
                  <div class="dot"><i class="fa-solid fa-circle"></i></div>
                  <p class="tags">${article.readTime}</p>
                  <div class="dot"><i class="fa-solid fa-circle"></i></div>
                  <p id="topic" class="tags">${article.topic}</p>
                  <div class="dot"><i class="fa-solid fa-circle"></i></div>
                  <p class="tags">${article.extra}</p>
              </div>
              <div class="icon-text">
                  <i class="fa-regular fa-bookmark"></i>
                  <i class="fa-solid fa-ellipsis"></i>
              </div>
          </div>
      </div>
      <div class="img-text">
          <img src="${article.imageUrl}" alt="Immagine articolo">
      </div>
  </div>
    `
    )
    .join('');

  articleDiv.innerHTML = articlesHTML;
}

document.addEventListener('DOMContentLoaded', renderArticles);
