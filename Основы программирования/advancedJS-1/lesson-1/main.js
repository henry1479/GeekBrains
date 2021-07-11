const goodsList = document.querySelector('.goods-list');
// массив с товарами 
const goods = [
    { title: 'T-shirt', price: 150 },
    { title: 'Pants', price: 100 },
    { title: 'Skirt', price: 250 },
    { title: 'Soks', price: 50 },
    { title: 'Tights', price: 1500 },
]
// возвращает строку html  с карточкой товара
const renderGoodsItem = (title, price) => {
    return `<div class="goods-item"> <h3>${title}</h3><p>${price}</p></div>`;
}


/* применяет к товарам из массива функцию renderGoodsItem
* вводит полученный результат в html
* c аргументом по умолчанию container
* 
*/
const renderGoodsList = (list, container = goodsList) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    // в goods-list внедряется массив, поэтому и есть запятые,
    // методом join() массив преобразуется в строку
    // с разделителем '' , и запятые удаляются 
    container.innerHTML = goodsList.join('');
}


const init = () => {
    renderGoodsList(goods);
    for(var i =0; i<10; i++ ){}
    console.log(i);
    const a = /abc/;
    const b = /fde/;
    console.log(a-b)
}

window.onload = init;

//lesson-1 ES-6
//arrow functions
// ()=>{}
//  const array = [1,2,3,4,5]
//  array.forEach(element=>console.log(element))

//  //destructurization
//  const obj = {
//      name: 'Ovik',
//      age: 25,
//      stack: {
//          frontend:'React',
//          backend: 'Node'
//      }
//  }

//  const {name, age, stack:{frontend, backend}} = obj;
// //shadow copy
//  const newObj = {city: 'Spb',...obj, name: 'Vlad', age: 18};
// // only first and second elements of the array
//  const arrayWithNames = ['Ovik', 'Vlad', 'Maria'];
//  const[firstName, lastName] = arrayWithNames;
// // shadow coping
// // safety coping
//  const newArrayWithNames = ['Yura', ...arrayWithNames, 'Sveta',...arrayWithNames,'Andrey'];
// // block area of visibility
//  const newFunction = () => {
//     let varA = 20;
//     const varB = 12;
//     console.log(varA);
//     console.log(varB);
//  }
// //undefind
//  console.log(varA);
//  console.log(varB);


// //lesson-2 OOP
// const car = {
//     //properties
//     brand: 'Hynday',
//     make: 'Solaris',
//     color: 'Black',
//     //method
//     makeRed: () => {
//         this.color = 'red';
//     }
// }


// car.makeRed();

// //classes
// // template for objects

// function CarClass(color, name) {
//     this.color = color;
//     this.name = name;

//     this.makeRed = function () {
//         this.color = 'red';
//     }
// }

// //creation objects
// const car1 = new CarClass('red', 'Audi');
// const car2 = new CarClass('green', 'BMW');

// //changing properties and
// //calling method
// car1.name = 'Opel';
// car1.mareRed();


// //extending
// // main principe of OOP

// function MenuItemClass(color, name) {
//     this.color = color;
//     this.name = name;
//     this.icon = icon;
// }

// function SideMenuItemsClass(color, name, icon, height) {
//     //calling constructor 
//     //MenuItem
//     MenuItem.call(this, color, name, icon);
//     this.height = height;
// }


// const SideMenuItemsObject = new SideMenuItemsClass('red', 'Messages', 'mail', '200');

// //prototype

// SideMenuItemClass.prototype.changeColor = function (newColor) {
//     this.color = newColor;
// }

// SideMenuItemsObject.changeColor('green');

// //incapsulation
// // allow to hide some properties
// //of the objects

// //poliformism
// //the inside methods make tasks
// //that I set them myself

// //OOP ES6

// class MenuItem {
//     consrtuctor(color, name) {
//         this.color = color;
//         this.name = name;
//     }
//     makeRed() {
//         this.color = 'red';
//     }

// }
// // extending
// class SideMenuItem extends MenuItem {
//     makeBlue() {
//         this.color = 'blue';
//     }
// }

// const menuItem1 = new MenuItem('red', 'Enter')
// const sideMenuItem1 = new SideMenuItem('blue', 'Message');


// // __proto__ - parent of the son's  class
// //e-shop lesson-2
// class GoodsItem {
//     constructor(title, price, product_id) {
//         this.title = title;
//         this.price = price;
//         this.id = product_id;

//     }

//     render() {
//         return `<div class="goods-item" id="${this.id}"> <h3>${this.title}</h3><p>${this.price}</p></div>`
//     }
// }


// const API_URL = '....'


// class GoodsList {
//     constructor() {
//         this.goods = [];
//     }

//     async fetchGoods() {
//         // this.goods =  [{title: 'T-shirt', price: 150},
//         // {title: 'Pants', price: 100},
//         // {title: 'Skirt', price: 250},
//         // {title: 'Soks', price: 50},
//         // {title: 'Tights', price: 1500},]

//         const responce = await fetch(`${API_URL / catalogData.json}`);
//         if (responce.ok) {
//             const catalogItems = await responce.json();
//             this.goods = catalogItems
//         } else {
//             alert('Error connection with server!')
//         }
//     }
//     render() {
//         let listAcc = '';
//         this.goods.forEach(good => {
//             const goodItem = new GoodItem(good.product_name, good.price, good.product_id);
//             listAcc += goodItem.render;
//             document.querySelector('.goods-list').innerHTML = listAcc;
//         })
//     }
// }
// // in init use key word async
// const goodList = new GoodsList;
// await goodsList.fetch();
// goodList.render();


// // lesson-3 async requests
// //http requests:
// //GET - when we need to get any data, responce is the usually JSON or bytes formats
// //POST - when we send anything, enclose anything in the responce, responce: OK or error
// //PUT - change
// //DELETE
// //OPTIONS
// //CONNET
// //HEAD
// // they self-changed
// //Promise - type of data,class, delays the execution of programs
// // state of the promise: pending - in work, error, settled - response have been 
// // async await  variaton of functions 
// // await  completed promise

// // simply promise
// // setTimeout(()=>{console.log('Hi')}, 3000);
// // without fetch

// function makeGETRequest(url,callback)
// {
//     const xhr = new window.XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             callback(xhr.responceText);
//         }
//     }

//     xhr.open("GET", url, true);
//     xhr.send();
// }


// function fecthGoods(callback){
//     makeGETRequest(`${API_URL / catalogData.json}`, (goods) => {this.goods = JSON.parse(goods)});
//     callback();
// }


// list.fetchGoods(list.render())