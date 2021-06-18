// файл для node
// позволяет запустить браузера

//node script.js - команда для запуска файла

// npm - это подключение библиотек

//momemnt - lib for time and date

//через npm install можно скачать все библиотеки, которые хранятся в  package.json


const moment = require('moment');
const http = require('http');
const static = require('node-static');// подключаем библиотеки


const file = new static.Server('.');// creating server

http.createServer((req,res)=>{
    file.serve(req,res);
}).listen(3000);//number of port





