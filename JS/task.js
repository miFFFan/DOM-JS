const p = document.querySelector(".test-text"); // пишем в "" айдишник элемента который хотим найти
p.textContent = "Привет, мир! Меня зовут Никитос."
console.log(p);
p.style.background = "lightblue";
p.style.color = "blue";
p.style.border = "2px solid blue";

const email = document.querySelector("input[type=email]");
console.log(email);
console.log(email.getAttribute("placeholder"));
email.setAttribute("placeholder", "mail@mail.ru ");
email.disabled = true;

const box = document.querySelector("input[type=checkbox]").checked = true;
console.log(box);

const btn = document.querySelector("input[type=submit]");
console.log(btn);
console.log(btn.getAttribute("value"));
btn.setAttribute("value", "Войти");


const container = document.querySelector("#form-auth");
console.log(container);

const block = document.createElement("a"); 
block.classList.add("block");
block.textContent = "Ссылка на сайте";
block.setAttribute("href", "https://midis.ru/");
block.setAttribute("target", "_blank");
block.classList.add("big");
container.after(block);


// 9 обработка событий (клик по кнопке)
const btn1 = document.querySelector("input[type=submit]");
console.log(btn1);
btn1.addEventListener("click", function(event){
    event.preventDefault(); 
    btn1.classList.add("submit #btn1");// запрещаем браузеру перезагружаться
    // const body = document.querySelector("body");
    // body.style.transform = ""; // при нажатии фон будет меняться на темно синий
    // const pass = document.querySelector("input[type=submit]").value; // value - то что поьзователь введет
    // console.log(pass);
}); // добавить слушатель событий - браузер следит за кнопкой



