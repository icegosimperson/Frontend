const tetz = {
    name : "이효석",
    age : 41,
    heght : 172,
    weight: 72,
}
for(let key in tetz){
    console.log(key);
    console.log(tetz[key]);
    console.log(`${key} : ${tetz[key]}`);
}