//аргументы этой функции передаются слева


function partialLeft (f, ...outerArgs) {
    return function(...innerArgs) {
        let args = [...outerArgs,...innerArgs];
        return f.apply(this, args);
    }
}

// аргументы этой функции передаются справа
function partialRight (f, ...outerArgs) {
    return function(...innerArgs) {
        let args = [...innerArgs,...outerArgs];
        return f.apply(this, args);
    }
}


// сумма аргументов
const sum = (x,y) => x+y; 

const increment = partialLeft(sum,1);
const cuberoot = partialRight(Math.pow, 1/3)
//кубический корень 27
const result = cuberoot(increment(26))
console.log(Math.pow(27, 1/3));

//  функция высшего порядка
// передает свои аргументы f 
// возвращает логическое отрицание 
//возвращаемого значения f
// function not(f){
//     return function(...args) {
//         let result = f.apply(this.args);
//         return !result
//     }
// }

//возвращает новую функцию
//которая вычисляет f(g(...))

function compose(f,g){
    return function (...args) {
        return f.call(this, g.apply(this, args));
    }
}


const not = partialLeft(compose, x => !x);
const even = x => x % 2 === 0;
const odd = not(even);
const isNumber = not(isNaN);
console.log(odd(3) && isNumber(2))
