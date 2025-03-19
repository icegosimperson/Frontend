setInterval(function(){
    try{
        // 에러가 예상되는 코드
        const rand = parseInt(Math.random()*10);
        console.log("🚀 ~ setInterval ~ rand:", rand);
        
        if(rand >5) return console.log('로또 사자!');
        throw new Error('큰일났어요....');
    } catch(error){
        // 에러 처리 코드
        console.error('~error:', error);
    }

}, 2000); // 2초에 한번씩 익명함수 실행됨