/*
Асинхронные запросы

Браузер формирует запрос
сервер находит данные
сервер формирует ответ
браузер реагирует на ответ

http запросы

Посмотреть запросы можно в networks


promise - тип данных, который позволяет работать асинхронно
есть три состояния

fetch  не работает c ie

async await - для работы с промисами


*/
GET // когда нужно получить данные от сервера, в ответ json или байтовый код
POST // когда что-то отправляем на сервер. Что-то запихиваем в запрос. В ответ приходит подтверждение или ошибка
PUT // когда что-то нужно заменить


const API_URL = 'https://'// взять из API интеренет магазина

class GoodItem {
    constructor(title,price,id) {
        this.title = title;
        this.price = price;
        this.id = id;

    }

    render(){
        return `<div class="good-item" itemId="${this.id}"><h3>${this.title}</h3><p>${this.price}</p></div>`
    }
}

class GoodsList {
    constructor(){
        this.goods = [];
    }

    async fetchGoods (callback) {
        // это устаревщий метод, this = undefind
       const jsonResponse =  fetch(`${API_URL}/catalogData.json`) // промис
       .then(function(data) {
           return data.json()})//это тоже промис
       .then(function (catalogItems){ //  вот здесь идет окончательная переработка в json
           this.gooods = catalogItems; // со стрелками this  не работает
        });   // библиотека, получаем в ответ promise и добавляем then 

        const responce = await fetch(`${API_URL}/catalogData.json`);
        // нужно  так, если есть вставить async
        if(responce.ok) {// проверка на наличие ответа на запрос
            const catalogItems = await respsonce.json(); // async это вместо then
            this.goods = catalogItems;
        } else {
            alert(`Ошибка при соединении сервером`);
        }

        //старый вариант
        makeGETrequest(`${API_URL}/catalogData.json`,(goods) => {
            this.goods = JSON.parse(goods);
            callback();
        })



    }

    render() {
        listAcc = '';
        this.goods.forEach(good => goodItem = new GoodItem( good.product_name, good.price, good.id) );
        listAcc += goodItem.render();
        document.querySelector('.goods-list').innerHTML = listAcc;
    }
}

const init = async() => {// поскольку функция fetchGoods асинхронная, то это нужно указывать при инициализации
    const goodList = new GoodList();
    goodList.fetchGoods(()=>{goodList.render()});// старый вариант с callback
    goodList.render();

    // простой промис
    setTimeout(console.log(`HI!`), 5000);

    //  в большинстве случаев вся асинхронность это работа с запрсосами

    // работа с запросами без fetch

    function makeGETrequest(url, callback) {// callback  - 
        const xhr = new window.XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) { // состояние запроса: 1 работает, 2 принят, 3 обмен данными, 4 сработал, 5 ошибка
                callback(xhr.responceText);
            }
        }
    }

    xhr.OPENED('GET',  url, true);
    xhr.send();

}

window.onload = init;
 // отрисовывает на странице корзины выбранные карточки с кнопкой удалить из корзины
 function render() {
    const addBtn = document.querySelectorAll('.add-btn');// получаем кнопки в карточках
    const cards = document.querySelectorAll('.goods-item'); // получаем сами карточки
    const cartContainer = document.querySelector('.cart .cart__goods-list');// получаем контейнер корзины
    function copy (event) {
        let card = event.target.parentElement// событие родительского элемента кнопки - новая карточка для корзины
        card.classList.add('cart__goods-item'); // добавляем свой класс для карточки корзины
        card.lastChild.innerHTML = 'remove from cart';
        card.lastChild.classList.add(`remove-button`);
        card.lastChild.classList.remove(`add-btn`);
        // новое содержание кнопки
        card = card.outerHTML // html новой карточки
        cards.forEach((item)=>{item.lastChild.innerHTML = 'Add to cart'}); // старое содержание кнопки для карточек в товарах
        cartContainer.innerHTML += card; //внедряем новые карточки в контейнер корзины
    }
    addBtn.forEach((el) => { el.addEventListener('click', copy.bind(this)) }); // обработчик событий для кнопок в карточках товаров



/*



*/

/*



*/

/*



*/



/*



*/
/*



*/
/*



*/
/*



*/
/*



*/