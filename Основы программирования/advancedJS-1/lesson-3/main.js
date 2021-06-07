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
    // направляет запрос к серверу, получает ответ и наполняет массив товарами
    // async fetchGoods() {
    //     const responce = await fetch(`${API_URL}/catalogData.json`);
    //     if (responce.ok) {// проверка на наличие ответа на запрос
    //         const catalogItems = await responce.json(); // async это вместо then
    //         this.goods = catalogItems;
    //         // console.log(this.goods);
    //     } else {
    //         alert(`Ошибка при соединении сервером`);
    //     }


    // }

    fetchGoods() {
        this.goods = [
            { product_name: 'Ноутбук', id_product: 123, price: 46500 },
            { product_name: 'Мышка', id_product: 456, price: 1000 },
        ]
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
    constructor(id, title, price,data) {
        super(id, title, price);
        this.data = data;
    }

    render() {

        return `<div class="cart__goods-item" data-number="${this.data}" itemId="${this.id}"><h3>${this.title}</h3><p>${this.price}</p> <button type="button" class="remove-btn">Remove from cart</button></div>`;

    }

}


class Cart {
    constructor() {
        this.cartGoods = [];
        this.removeButtons = [];
    }

    // добавляет товары в виртуальную корзину по клику на кнопе в карточке

    addToCart(event) {
        const goodsList = new GoodsList()//экземпляр класса GoodList
        goodsList.fetchGoods(); // наполняем товарами
        const idProduct = Number(event.target.parentElement.getAttribute('itemId')); // itemId карточки
        // проходимся циклом по массиву с товарами
        for (let item of goodsList.goods) {
            if (idProduct === item.id_product) { // если id кликнутой карточки и товара в массиве совпадают
                this.cartGoods.push(item); // добавляем товар в корзину
            }
        }

        
        
        this.renderCart();
        // console.log(this.cartGoods)
        this.removeButtons = document.querySelectorAll('.remove-btn');
        // this.addDataAttribute(this.removeButtons,this.cartGoods);
        this.removeFromCart(this.removeButtons);
        // console.log(this.cartGoods)
        this.countCart(this.cartGoods); 
       
        
        
        

    }

   

    // удаляет товары из корзины по клику на кнопку на странице корзины "удалить"
    removeFromCart(buttons) {
        function test(event) { 
            const product = Number(event.target.parentElement.dataset.number);
            const elem = event.target.parentElement;
            elem.parentNode.removeChild(elem);
            delete this.cartGoods[product];
            this.cartGoods.length -=1;
            console.log(this.cartGoods);
            
            
            
        }

        buttons.forEach(el => el.addEventListener('click', test.bind(this)))
    }

    // считает стоимость товаров в корзине

    countCart(cart) {
        let sum = 0;
        for (let good of cart) {
            sum += good.price
        }

        console.log(sum);
        console.log(cart.length)

    }

   

    // отрисовывает блок на странице с корзиной с информацией о количестве товаров и их общей стоимости
    renderCart() {
        
        let listHTML = '';
        this.cartGoods.forEach((good,i=0) => {
            let data = i++;
            // const data = datas.forEach((el)=>{console.log(el)})
            
            const item = new CartItem(good.id_product, good.product_name, good.price, data)
            // новый объект
        
            listHTML += item.render();// добавляем в пустую строку карточку наполненную содержимым
            
        })

        document.querySelector('.cart .cart__goods-list').innerHTML = listHTML;// внедряем в html

    }


}







const init = () => {
    const goodsList = new GoodsList(); //  новый объект с товарами
    goodsList.fetchGoods(); // наполняем товарами
    goodsList.render();// отрисовываем карточки
    let el = document.getElementsByClassName('goods-item');
    const cart = new Cart();

    const addBtn = document.querySelectorAll('.add-btn');
    // вешаем обработчик на кнопки в карточке и привязываем к this объекта
    addBtn.forEach((el) => { el.addEventListener('click', cart.addToCart.bind(cart)) });
    
    



}

window.onload = init;



