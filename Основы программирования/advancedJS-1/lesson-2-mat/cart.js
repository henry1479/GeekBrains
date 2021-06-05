// класс с карточкой товара в html

class GoodsItem {
    
    constructor(title,price){
        this.title = title;
        this.price = price;
    }

    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p> <button type="button" class="add-btn">Add to Cart</button></div>`;
    }
}
// класс с со списком товаров
class GoodsList {
    constructor() {
        this.goods = [];
    }
    // метод, который имитирует сервер, наполняя каталог товаров
    fetchGoods() {
        this.goods = [
            {title: 'T-shirt', price: 150},
            {title: 'Pants', price: 100},
            {title: 'Skirt', price: 250},
            {title: 'Soks', price: 50},
            {title: 'Tights', price: 1500},
        ]
    }
    // метод наполняте карточку содержимым и внедряет ее в html
    render() {
        let listAcc = '';
        this.goods.forEach(good => {const goodItem = new GoodsItem(good.title, good.price) // новый объект
            listAcc += goodItem.render();// добавляем в пустую строку карточку наполненную содержимым
        })
        document.querySelector('.goods-list').innerHTML = listAcc;// внедряем в html
    }

    countAllGoods(){
        let sum = 0;
        for(let good of this.goods){
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

class Cart extends GoodsList {
   
    // добавляет товары в виртуальную корзину по клику на кнопе в карточке

    addToCart(event) {
        console.log(this.goods);
        const goodsList = new GoodsList;
        goodsList.fetchGoods();
        // this.goods.push(event.target);
        
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


  
   

 

const init = () => {

    const cart = new Cart();
    const btn = document.querySelectorAll('button');
    for(let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click',cart.addToCart);
    }

   
  

   
    
}

window.onload = init;


 
 