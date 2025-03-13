// 순서대로 출력됨
const fs = require('fs').promises;

fs.readFile('readme.txt')
    .then(function(data){
        console.log('1번', data.toString());
        return fs.readFile('readme.txt');
    })
    .then(function(data){
        console.log('2번', data.toString());
        return fs.readFile('readme.txt');
    })
    .then(function(data){
        console.log('3번', data.toString());
        return fs.readFile('readme.txt');
    })
    .then(function(data){
        console.log('4번', data.toString());
        return fs.readFile('readme.txt');
    })
    .catch(function(arr){
        console.error(err);
        throw err;
    })
