# Find-100

## 연습용 100찾기 (오니기리 형식UI)

```
    const btn = document.querySelector('.btn').addEventListener('click', () => {
    let a = document.querySelector('.random-num');
    let b = Math.floor(Math.random() * 100) + 1;
    a.innerText = b;
    if(b === 100){
        alert(`${b} 을 찾았어!!!`);
    }
});
```

##### btn 클래스를 만들어 이벤트리스너를 click을 걸고 -> Math.random * 100 + 1 함수를 통해 1 ~ 100의 숫자를 랜덤으로 // 성공 시 alert 창
