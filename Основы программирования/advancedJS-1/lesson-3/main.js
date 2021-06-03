// константа с адресщм сервера

const API_URL = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";



// класс с карточкой товара в html

class GoodsItem {

    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }

    render() {
        return `<div class="goods-item" itemId="${this.id}"><h3>${this.title}</h3><p>${this.price}</p> <button type="button" class="add-btn">Add to Cart</button></div>`;
    }
}
// класс с со списком товаров
class GoodsList {
    constructor() {
        this.goods = [];
    }
    // метод, который имитирует сервер, наполняя каталог товаров асинхронный для запроса к серверу
    async fetchGoods() {
        const responce = await fetch(`${API_URL}/catalogData.json`);
        if (responce.ok) {// проверка на наличие ответа на запрос
            const catalogItems = await responce.json(); // async это вместо then
            this.goods = catalogItems;
            // console.log(this.goods);
        } else {
            alert(`Ошибка при соединении сервером`);
        }


    }
    // метод наполняте карточку содержимым и внедряет ее в html
    render() {
        let listAcc = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.id_product, good.product_name, good.price) // новый объект
            listAcc += goodItem.render();// добавляем в пустую строку карточку наполненную содержимым
        })
        document.querySelector('.goods-list').innerHTML = listAcc;// внедряем в html
    }

    countAllGoods() {
        let sum = 0;
        for (let good of this.goods) {
            sum += good.price
        }

        console.log(sum);
    }
}

class CartItem extends GoodsItem {



    // отрисовывает на странице корзины выбранные карточки  без кнопки
    render() {

    }

}

class Cart {
    constructor() {
        this.cartGoods = [];
    }

    // добавляет товары в виртуальную корзину по клику на кнопе в карточке

    addToCart() {
        const addBtn = document.querySelectorAll('.add-btn');
        console.log(addBtn);
        async function test(event) {
            const goodsList = new GoodsList();
            await goodsList.fetchGoods();
            const idProduct = Number(event.target.parentElement.getAttribute('itemId'));
            // console.log(goodsList.goods);
            for (let item of goodsList.goods) {
                if (idProduct === item.id_product) {
                    this.cartGoods.push(item);

                }
            }
            console.log(this.cartGoods);
        }


        addBtn.forEach((el) => { el.addEventListener('click', test.bind(this)) });
    }



    // удаляет товары из корзины по клику на кнопку на странице корзины "удалить"
    removeFromCart() {

    }

    // считает стоимость товаров в корзине

    countCart() {

    }

    // отрисовывает блок на странице с корзиной с информацией о количестве товаров и их общей стоимости
    renderCart() {

    }


}

// класс гамбургер





const init = async () => {
    const goodsList = new GoodsList(); //  новый объект с товарами
    await goodsList.fetchGoods(); // наполняем товарами
    goodsList.render(); // отрисовываем карточки

    const cart = new Cart();
    cart.addToCart();

}

window.onload = init;



