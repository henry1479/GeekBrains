const fs = require('fs');// add lib

// read file data.json
fs.readFile('./data.json', 'utf-8', (err,data) => {
    if(!err){
        const obj = JSON.parse(data);
        

        //change data
        obj.Three = 'три';
        obj.four = 4;

        // write data.json
        fs.writeFile('./data.json', 'utf-8', err=>{})

        console.log(obj);
    }
})