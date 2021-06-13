Vue.component('search-input', {
    props: ['value'],
    template: `<input type="text" v-bind:value="value" v-on:input ="$emit('input',$event.target.value)" class="goods-search">
   `
})

Vue.component('search-button',{
    template: `<button class="search-button">Искать</button>`
})




const input = new Vue({
    el: "#app",
    data: {
        text: 'Искать товары',
        searchLine: ''
    },

   
})

const API_URL =
    "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";




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
        methods:{ 
            test () {
                console.log(this.searchLine);
            },
        }
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



// */