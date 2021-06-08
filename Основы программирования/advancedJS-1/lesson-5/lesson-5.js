// vue.js

/*
нужен для создание быстрых прототиаов


*/
const app = new Data({
    el: '#app',
    data: {
        name: '',
        listOfName: ['Ovik', 'lena', 'petya', 'tanya'],
        listOfItems: [{name: 'soks', price: 450},{name: 'skirt', price: 1450},]
    }, 

    methods: {
        onClickSayHello: ()=> {
            console.log('Hello!')
        }
    },

    computed:{
        transformToUpperCase(){
            return this.name.toUpperCase()
        }
    }


})


const data = new Vue ({
    el: '#app',
    data: {
        goods: [],
        filterGoods: [],
        searchLine: '',

    },

    methods: {
        async getProducts () { // нужно  так, если есть вставить a
            const responce = await fetch(`${API_URL}/catalogData.json`);
            if(responce.ok) {// проверка на наличие ответа на запроc
                const catalogItems = await respsonce.json(); // async это вместо then
                this.goods = catalogItems;
                this.filterGoods = catalogItems; // наполняем массив для поиска товарами
            } else {
                alert(`Ошибка при соединении сервером`);
            }
        

        },

       async mounted (){
            await this.getProducts();
        }

    }


})




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