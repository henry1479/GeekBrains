

const API_URL =
    "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

Vue.component('goods-list', {
    props: ['goods'],
    template: ` <div class="goods-list">
        <goods-item v-for="goodEntity in goods" :goodProp="goodEntity"></goods-item>
    </div>`
})

Vue.component('goods-item', {
    props: ['goodProp'],
    template: `<div class="goods-item">
    <h3>{{goodProp.product_name}}</h3>
    <p>{{goodProp.price}}</p>
    </div>`

})

Vue.component('search-block',{
    props: ['search',   'goods'],
    template: `<div class="search-block">
        <input type="text" class="goods-search" v-model="search">
        <button v-on:click="filterGoods" class="search-button" type="button">Искать</button> 
    </div>`

    }
)




const app = new Vue({
    el: "#app",
    data: {
        goods: [],
        filteredGoods: [{product_name:'Ноутбук', price: 46500}, {product_name:'Мышка', price: 1000}],
        searchLine: '',
        // массив с товарами в корзине
        cartGoods: [{product_name: 'Телефон', price: 100}],
        // свойство управляющие видимостью корзины
        isVisibleCart: true,
        // свойство для вывода сообщения
        // если массив  с товарами пуст
        emptyMessage: 'Список товаров пуст!'
    },

    methods: {
       
        //получает товары с сервера
        // async getProducts() {
        //     const responce = await fetch(`${API_URL}/catalogData.json`);
        //     if (responce.ok) {
        //         const catalogItems = await responce.json();
        //         this.goods = catalogItems;
        //         this.filteredGoods = catalogItems;
        //     } else {
        //         alert("Ошибка при соединении с сервером");
        //     }
        // },

        // осуществляет поиск товаров в массиве с ними
        // по запросу в строке поиска
        filterGoods() {
            // регулярное выражение на основе свойства,  
            //получаемое из строки поиска
            const regExp = new RegExp(this.searchLine, 'i');
            // фильтруем список товаров
            this.filteredGoods = this.goods.filter(good => regExp.test(good.product_name));
        },


       
    },

    // async mounted() {
    //     await this.getProducts()
    // }    
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


