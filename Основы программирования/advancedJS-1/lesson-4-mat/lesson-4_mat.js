





//Урок №4 Регулярные выражения





        // const API_URL = 'https://'// взять из API интеренет магазина

        // class GoodItem {
        //     constructor(title,price,id) {
        //         this.title = title;
        //         this.price = price;
        //         this.id = id;

        //     }

        //     render(){
        //         return `<div class="good-item" itemId="${this.id}"><h3>${this.title}</h3><p>${this.price}</p></div>`
        //     }
        // }

        // class GoodsList {
        //     constructor(){
        //         this.goods = [];
        //         this.filterGoods = []; // массив для результатов поиска
        //     }
            
        //     async fetchGoods() { // нужно  так, если есть вставить async
        //         const responce = await fetch(`${API_URL}/catalogData.json`);
        //         if(responce.ok) {// проверка на наличие ответа на запроc
        //             const catalogItems = await respsonce.json(); // async это вместо then
        //             this.goods = catalogItems;
        //             this.filterGoods = catalogItems; // наролняем массив для поиска товарами
        //         } else {
        //             alert(`Ошибка при соединении сервером`);
        //         }
            

        //     }

        //     render() {
        //         listAcc = '';
        //         this.filterGoods.forEach(good => goodItem = new GoodItem( good.product_name, good.price, good.id) );
        //         listAcc += goodItem.render();
                
        //         document.querySelector('.goods-list').innerHTML = listAcc;
        //     }
        //     // метод выводит товары по поиску
        //     filterGoods (value) {
        //         const regExp = new RegExp(value, 'i');// регулярное выражение на основе аргумента
        //         this.filterGoods = this.goods.filter(good => regExp.test(good.product_name));// фильтруем список товаров
        //         this.render();
        //     }
        // }

        // const init = async() => {// поскольку функция fetchGoods асинхронная, то это нужно указывать при инициализации
        //     const goodList = new GoodList();
        //     await goodList.fetchGoods;// старый вариант с callback
        //     goodList.render();

        //     const searchButton = document.querySelector('.search-button');
        //     searchButton.addEventListener('click', (event)=> {
        //         GoodsList.filterGoods(event.value);
        //     })

        //     const option = new RegExp('pattern');//способы задания
        //     const option2 = /pattern/;
            
        //     //поиск совпадений
            
        //     const firstRegExp = /Geek/g; // ищет все соответствия
        //     const str = 'Geekbrains the Geek best GEEK place';
            
        //     console.log(str.match(firstRegExp));// выводит совпадения
        //     const newStr = str.replace(firstRegExp, '+');//заменяет совапдения
            
        //     console.log(newStr);
            
        //     const ourRegExp = /(g.+?k)/gi // первый g, любое количество букв и 
        //     //к, + - один или более символов, 
        //     //i - без учета регистра,
        //     // . - любой символ,
        //     //? - символа нет или один конкретный символ
        //     const str2 = 'Hi, I am Greek geek from Geelbrains '
        //     console.log(str2.match(ourRegExp));
            
        //     ourRegExp = /(g(e?|o?))/gi // логическое "или"
            
        //     ourRegExp = /^\d+$/;// получить последовательность цифр,
        //     //проверяемая строка содержит только цифры
        //     // символы можно перечислять через запятую [A-D],[E-H]
        //     // можно и так [a-zA-Z]
        //     // регулярные выражения очень гибкие
        //     // regexp101.com 
            
        //     const str3 = '1234455666e6 dfsshhg';
            
        //     console.log(ourRegExp.test(str3)) // проходит ли строка наше regexp, возвращает true false
            
        //     // длинные выражения лучше брать из интернета 
        //     // почта, телефон, url 
            
        // }

        // window.onload = init;

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