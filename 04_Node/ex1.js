// youKnow() 함수를 작성해 주세요
function youKnow(cb){
    console.log('You Know');
    cb();
}
function sayMyName() {
    console.log('엄.... 제 이름은 홍길동 입니다');
}
function sayMyDinner() {
    console.log('내가 이따 먹을 저녁 메뉴는 갈비탕 입니다');
}

youKnow(sayMyName);
youKnow(sayMyDinner);
youKnow(function (){
    console.log("내일 아침은 브리또를 먹겠어요");
});