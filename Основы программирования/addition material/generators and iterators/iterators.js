let chars = [...'abcd'];
console.log(chars);


let data = [1,2,3,4,5];
console.log(Math.max(...data))


// destructing owning with class Map
let m = new Map([['one', 1],['two', 2]]);
for(let [k,v] of m) console.log(k,v);

console.log([...m.keys()])
console.log([...m.values()])


//work of an iterator

let iterable = [99];
let iterator = iterable[Symbol.iterator]();
for(let result = iterator.next();!result.done; result = iterator.next()) {
    console.log(result.value)
}

// итератор сам является итерируемым
let list = [1,2,3,4,5];
let iter = list[Symbol.iterator]();
console.log(iter.next().value);
console.log([...iter]);

/*
*Объект Range представляет собой диапазон чисел {x: from <= x <= to}.
* В классе Range определен метод has() для проверки
* входит ли заданное число в диапазон
* класс Range итерируемый и обеспечивает проход по
* всем целым числам внутри диапазона
*
*/

class Range  {
    constructor (from, to) {
        this.from = from;
        this.to = to;
    }

    //сделать класс рабтающим подобно множству Set чисел
    has (x) {return typeof x === 'number' && this.from <= x && x <= this.to; }

    //строковое представление диапазона, используя запись множества
    toString () {return `{ x | ${this.from} <= x <= ${this.to}}`;}

    //сделать класс итетрируемым за счет возвращения объекта итератора.
    //именем метода является специальный символ,
    // а не строка

    [Symbol.iterator]() {
        //каждый экземпляр итератора должен проходить по диапозону
       // независимо от других. Таким образом
        // нам нужна переменная состояния, чтобы отслеживать
        // положение итерации.
        // мы начинаем с первого числа, которое
        // больше или равно from

        // это значение
        // мы возвращаем следующим
        let next = Math.ceil(this.from); 
        //мы не возвращаем ничего,
        //что больше этого
        let last = this.to;
        //это объект итератора
        return {
            //именно метод next() делает
            // его объектом итератора
            // он обязан возвращать 
            // обЪект результата итерации
            next() { 
                //если пока не возвраттили последнее
                //значение, возвратить следующие
                //значение и инкреметировать его,
                //в противном случае указать,
                // что все закончено
                return (next <= last) ? {value: next++} : {done: true}
                
            }

            // //делаем сам итератор итерируемым
            // [Symbol.iterator](){return this}
            
        };

    }
}


let range = new Range(2,8);
console.log(range.has(3));



