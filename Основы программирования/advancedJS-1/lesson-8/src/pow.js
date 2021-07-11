//jasmine

export const pow = (a,n)=> {
    //a -numder
    //b - power
    let result = 1;
    for(let i =0; i< n; i++){
        result *=a;
    }
    return result
}


// two path of development: 
//from design
//from data

module.exports = {
    pow: pow,
}