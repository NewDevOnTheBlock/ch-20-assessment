import "./styles.css";

/**
  Write the addheadings() function here
*/

function addHeadings() {
  const articles = document.querySelectorAll("article");
  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    const content = article.innerText;
    article.innerText = ""
    article.innerHTML += `<h2>${content}</h2>`;
  }
}

/**
  Write the styleTutorialsAndArticles() function here
*/

function styleTutorialsAndArticles() {
  const articles = document.querySelectorAll("article");
  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    
    if (article.innerText.includes("Tutorial")) {
      article.classList.add("tutorial")
    }

    if (article.innerText.includes("Article")) {
      article.classList.add("article")
    }
  }
}

/**
  Write the separateAllTutorials() function here
*/

function separateAllTutorials() {
  const newElement = document.createElement('section');
  const container = document.querySelector(".container")
  container.appendChild(newElement);
  newElement.classList.add("tutorials")
  const tutorialis = document.querySelectorAll(".tutorial");
  for (let i = 0; i < tutorialis.length; i++) {
    const tutorial = tutorialis[i];
    newElement.appendChild(tutorial);
  }
}

/**
  No need to edit the following
*/
function main() {
  addHeadings();
  styleTutorialsAndArticles();
  separateAllTutorials();
}

main();
