// 1 выбирать элементы на стринице 


// 1.1 выбрать элемент по айдишнику 
let header = document.getElementById("title"); // пишем в "" айдишник элемента который хотим найти
console.log(header);


// 1.2 выбрать один элемент по селектору 
const container = document.querySelector(".container");
console.log(container);
// const container1 = document.querySelector("h2");
// console.log(container);
// querySelector ищет сверху вниз и выписывает первый попавшийся селектор


// 1.3 выбрать несколько элементов по селектору
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);


// 2 работа с контентом
console.log(header.textContent); // берет контент игнорируя все теги
console.log(header.innerHTML); // берет контент с тегами
console.log(header.outerHTML); // берет сам элемент + текст и теги
console.log(header.innerText); // работает как textcontent
console.log(header.outerText); // работает как textcontent + почитать для чего он

// изменить текст (теги воспринимаются как текст)
header.textContent = "Новый заголовок <i class=\"bi bi-heartbreak-fill\"></i>";
// меняем html (теги воспринимаются как теги)
header.innerHTML = "Новый заголовок <i class=\"bi bi-heartbreak-fill\"></i>"; // подходит для иконок
// полностью перезаписываем и содержимое и сам тег
header.outerHTML = "<h3>Новый заголовок <i class=\"bi bi-heartbreak-fill\"></i></h3>";


// 3 работа с классами (с атрибутом class)
const h2 = document.querySelector("h2");
// добавление классов
h2.classList.add("big"); // применяет класс к селектору, например big, который изменяет в css
h2.classList.add("red");
h2.classList.add("title");
// удаление классов
h2.classList.remove("big"); // удаляет класс у селектора
// проверить есть ли класс у элемента
console.log(h2.classList.contains("red")); // при наличии класса будет писать true, при отсутствии false
// "переключатель" классов
for (let elem of paragraphs){
    // elem.classList.toggle("text"); // toggle - переключатель
    if(elem.classList.contains("text")){ // переключатель, но длиннее
        elem.classList.remove("text");
    } else{
        elem.classList.add("text");
    }
}


// 4 работа со стилями (атрибут style)
const btn = document.querySelector("input[type=submit]");
console.log(btn);
// добавление стилей
btn.style.color = "purple"; // задали btn цвет
btn.style.background = "cyan"; // background
btn.style.fontSize = "24px"; // fontSize
btn.style.border = "5px solid red";


// 5 работа с атрибутами
let link = document.querySelector("li:nth-child(1) a");
console.log(link);
// считывание атрибута
console.log(link.getAttribute("href"));
// установить/изменить атрибут
link.setAttribute("href", "https://www.wikipedia.org/"); // устанавливаем ссылку у href
link.setAttribute("target", "_blank"); // открывается в соседней вкладочке
// удалить атрибут
btn.removeAttribute("style");


// 6 создание нового элемента (тега)
const block = document.createElement("div"); // создаем элемент - див
block.classList.add("block");
block.textContent = "новый блок";
container.append(block); // добавляет блок в контейнер

const image = document.createElement("img");
image.setAttribute("src", "img/1.jpg");
image.alt = "ай львица"; // еще 1 способ задать атрибут 
// container.append(image); // добавляет в конец контейнера
//container.prepend(image); // добавляет в начало контейнера
//container.before(image); // добавляет до контейнера
container.after(image); // добавляет после контейнера


// 7 работа/выбор потомков
// выбираем все параграфы
const lorems = document.querySelectorAll('p');
console.log(lorems);
// выбираем только дочерние параграфы
const content = document.querySelector(".content"); // внутри класса content 
const loremsInContent = content.querySelectorAll("p");
console.log(loremsInContent);


// 8 выбор предков 
let form = btn.closest("form"); // ближайший предок
form.style.border = "4px dotted red";


// 9 обработка событий (клик по кнопке)
btn.addEventListener("click", function(event){
    event.preventDefault(); // запрещаем браузеру перезагружаться
    const body = document.querySelector("body");
    body.style.background = "darkblue"; // при нажатии фон будет меняться на темно синий
    body.style.color = "white"; // а текст на белый
    const pass = document.querySelector("input[type=password]").value; // value - то что поьзователь введет
    console.log(pass);
}); // добавить слушатель событий - браузер следит за кнопкой


// 10 удаление тегов
// живая коллекция 
const texts = document.querySelector('.content').childNodes;
console.log(texts);
const p1 = document.querySelector('p'); // выбираю первый параграф в документе
p1.outerHTML = ""; // приравнимаем к пустоте
console.log(paragraphs);
console.log(texts);