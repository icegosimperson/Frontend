const personalInfo = {
    name: '이효석',
    age: `Don't ask this :)`,
    email: 'xenosign@naver.com',
};

const jobInfo = {
    position: '코딩 강사',
    experience: '4년',
};
// profile 이라는 하나의 객체로 저의 정보를 합쳐 주세요
const profile = {
    ...personalInfo,
    ...jobInfo,
    addr : '서대문구',
}
console.log(profile);

// 구조 분해 할당으로 각각 변수에 할당 해주세요
// 각 변수 콘솔에 출력
const {name, age, email, position, experience, addr} = profile;

console.log(name, age, email, position, experience, addr);