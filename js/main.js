// Exo 3


function Cards(title, phrase, description) {

  this.title = title;
  this.phrase = phrase;
  this.description = description;
  this.getValue = function () {

    title = document.getElementById("title").value;
    phrase = document.getElementById("phrase").value;
    description = document.getElementById("description").value;
    this.createProducts(title, phrase, description);

  }

  this.createProducts = function (title, phrase, description) {

    parentManager = document.getElementById('cardList');
    childElement = document.createElement('div');
    titleElement = document.createElement('h1');
    phraseElement = document.createElement('p');
    descriptionElement = document.createElement('p');
    titleElement.innerHTML = title;
    phraseElement.innerHTML = phrase;
    descriptionElement.innerHTML = description;
    parentManager.appendChild(childElement);
    childElement.appendChild(titleElement);
    childElement.appendChild(phraseElement);
    childElement.appendChild(descriptionElement);

    this.clearAllInput();
  }

  this.clearAllInput = function (title, phrase, description) {
    title = document.getElementById('title').value = "";
    phrase = document.getElementById('phrase').value = "";
    description = document.getElementById('description').value = "";
  }
}




let card = new Cards(title, phrase, description);
