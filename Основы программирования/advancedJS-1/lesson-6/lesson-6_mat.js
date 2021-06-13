

const API_URL =
    "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

//компонет поля поиска товаров
Vue.component('search-input', {
    //входной параметр для правильной работы v-model
    props: ['value'],
    template: `
        <input type="text" class="goods-search"  v-bind:value="value"
        v-on:input = "$emit('input', $event.target.value)"/>`
})

// компонент для кнопки поиска
Vue.component('search-button', {
    //входной параметр для метода filterGoods()
    //которая является обработчиком на событие клика
    props: ['filtergoods'],
    template: `<button class="search-button" v-on:click="filtergoods" type="button">Искать</button>`
})

// компонент для блока с товарами
Vue.component('goods-list', {
    props: ['goods', 'addtocart'],
    template: `<div class="goods-list">
        <goods-item v-for="goodEntity in goods" :goodProp="goodEntity"  :id="goodEntity.id_product" v-on:addtocart = 'addtocart'></goods-item>
    </div>`
})


//компонент для карточки с товарами
Vue.component('goods-item', {
    props: ['goodProp', 'id'],
    
    template: `<div class="goods-item" v-bind:itemId='id'>
    <h3>{{goodProp.product_name}}</h3>
    <p>{{goodProp.price}}</p>
    <button type="button" v-on:click="$emit('addtocart',$event)" class="add-btn">Добавить в корзину</button>
    </div>`

})

// компонент для блока корзины
Vue.component('cart__goods-list', {
    props: ['cartgoods'],
    template: `<div class="cart__goods-list">
        <cart__goods-item v-for="goodEntity in cartgoods" :goodProp="goodEntity" :id="goodEntity.id_product"></cart__goods-item>
    </div>`
})


//компонент для карточки с товарами в корзине
Vue.component('cart__goods-item', {
    props: ['goodProp', 'id'],
    template: `<div class="cart__goods-item" :itemId='id'>
    <h3>{{goodProp.product_name}}</h3>
    <p>{{goodProp.price}}</p>
    <button type="button" class="remove-btn">Удалить из корзины</button>
    </div>`

})







const app = new Vue({
    el: "#app",
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: '',
        // массив с товарами в корзине
        cartGoods: [{ product_name: 'Телефон', price: 100 }],
        // свойство управляющие видимостью корзины
        isVisibleCart: true,
        // свойство для вывода сообщения
        // если массив  с товарами пуст
        emptyMessage: 'Список товаров пуст!',
        // параметр для корзины с товарами
        cartGoods: [],
    },

    methods: {

        //получает товары с сервера
        async getProducts() {
            const responce = await fetch(`${API_URL}/catalogData.json`);
            if (responce.ok) {
                const catalogItems = await responce.json();
                this.goods = catalogItems;
                this.filteredGoods = catalogItems;
            } else {
                alert("Ошибка при соединении с сервером");
            }
        },

        // осуществляет поиск товаров в массиве с ними
        // по запросу в строке поиска
        filterGoods() {
            // регулярное выражение на основе свойства,  
            //получаемое из строки поиска
            const regExp = new RegExp(this.searchLine, 'i');
            // фильтруем список товаров
            this.filteredGoods = this.goods.filter(good => regExp.test(good.product_name));
        },

        addToCart(event) {
            const idProduct = Number(event.target.parentElement.getAttribute('itemId')); // itemId карточки
            // проходимся циклом по массиву с товарами
            for (let item of this.filteredGoods) {
                if (idProduct === item.id_product) { // если id кликнутой карточки и товара в массиве совпадают
                    this.cartGoods.push(item); // добавляем товар в корзину
                }
            }

            // this.removeButtons = document.querySelectorAll('.remove-btn'); // получаем кнопки на карточках корзины
            // this.removeFromCart(this.removeButtons); // вызываем метод по удалению этих карточек при клике на кнопку
            // // иначе никак не получается сделать 
            // this.countCart(this.cartGoods); // вызывам метод подсчета количества товаров в корзине их стоимсоть 
        }



    },

    async mounted() {
        await this.getProducts()
    }    
});


// Vue.component('some-component',{
//     template: `<h1> Hi {{name}} <slot></slot></h1>`,//внутренности
//     // проброс данных в компоненете
//     props: ['name'], // это атрибуты, значения для name можно указать в html
//     // data(){
//     //     return {name: `Vasya`}
//     // },
// })

// //компоненты нужно вставлять перед инициализацией класса

// const app = new Vue({
//     el:"#app",
//     data: {
//         name: 'Kostya'
//     }
// })



// { product_name: 'Ноутбук', price: 46500 }, { product_name: 'Мышка', price: 1000 }





// /*



// */
// /*



// */


// /*



// */


// /*



// */
// /*



// */


// /*



// */
// /*


