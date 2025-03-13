const express = require('express');
const cors = require('cors');

const PORT = 4000;

const server = express(); // 서버 실행
server.use(cors());

server.get('/request', function(req, res){
    res.status(200).json('안녕하세요. 여기는 백엔드 입니다');
});

server.get('/error', function(req, res){
    res.status(500).json('쵸비상!!');
});

server.listen(PORT, function (){
    console.log(`서버가 ${PORT}번에서 작동 중입니다.`);
});