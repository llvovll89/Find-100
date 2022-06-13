// time
const today = document.querySelector('.today');
function timeAdd(){
const ab = new Date();
const bc = ab.getHours();
const cd = ab.getMinutes();
const ma = ab.getSeconds();
today.innerHTML = `${bc} 시 ${cd} 분 ${ma} 초`
}

const todayInterval = setInterval(timeAdd, 1000);
// timer
const mint = document.querySelector('.min');
const secd = document.querySelector('.sec');

// 100찾기 btn Event
const btn = document.querySelector('.btn').addEventListener('click', () => {
    let a = document.querySelector('.random-num');
    let b = Math.floor(Math.random() * 100) + 1;
    a.innerText = b;
    if(b === 100){
        alert(`${b} 을 찾았어!!!`);
        a.innerText = '100 찾았습니다!';
    }
});