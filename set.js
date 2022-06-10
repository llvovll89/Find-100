// 상속, prototype
const btn = document.querySelector('.btn').addEventListener('click', () => {
    let a = document.querySelector('.random-num');
    let b = Math.floor(Math.random() * 100) + 1;
    a.innerText = b;
    if(b === 100){
        alert(`${b} 을 찾았어!!!`);
    }
});