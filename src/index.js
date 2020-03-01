
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function () {
  fetchImages();
  fetchBreed();
});

function fetchImages(){
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(obj => {
    obj.message.forEach(image => addImage(image))
  });
}

function addImage(dogUrl){
  let container = document.querySelector('#dog-image-container');
  let imageElement = document.createElement('img');
  imageElement.src = dogUrl;
  container.appendChild(imageElement);
}

function fetchBreed(){
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(obj => {
    breeds = Object.keys(results.message);
     updateBreed(breeds);
     addBreedSelectListener();
   });
}

function updateBreed(breeds) {
 let ul = document.querySelector('#dog-breeds');
 removeChildren(ul);
 breeds.forEach(breed => addBreed(breed));
}

function removeChildren(element) {
 let child = element.lastElementChild;
 while (child) {
   element.removeChild(child);
   child = element.lastElementChild;
 }
}

function BreedsThatStartWith(letter) {
 updateBreed(breeds.filter(breed => breed.startsWith(letter)));
}

function addBreedSelectListener() {
 let dropdown = document.querySelector('#dropdown');
 dropdown.addEventListener('change', function (event) {
   BreedsThatStartWith(event.target.value);
 });
}

function addBreed(breed) {
 let ul = document.querySelector('#dog-breeds');
 let li = document.createElement('li');
 li.innerText = breed;
 li.style.cursor = 'pointer';
 ul.appendChild(li);
 li.addEventListener('click', updateColor);
}
