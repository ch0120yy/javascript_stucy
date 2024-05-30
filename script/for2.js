// 중첩 반복움
// for(){ for(){} }
// for 조건식이 거짓이 될때까지 계속 반복한다.
/* 
1단 for(초기값; 조건식; 증감식){
    1단 for의 반복결과 위치-1
    2단 for(초기값; 조건식; 증감식){
        2단 for의 반복결과
    }
    1단 for의 반복결과 위치-2
}
*/
for(let i=1; i<4; i++){
    console.log('1단 for : '+i)
    for(let j=1; j<3; j++){
        console.log('--- 2단 for : '+j)
    }
}

// section DOM 내에 다중 for문으로 태그 구성하기
const section = document.querySelector('section')
console.log(section)
// ul*2>li*4
let tag = ""
for(let i=0; i<=1; i++){
    tag += '<ul>'
    for(let j=0; j<=3; j++){
        tag += `<li>test${j+1}</li>`
    }
    tag += '</ul>'
}
section.innerHTML = tag
console.log('----------------------------')
const t = document.querySelector('#t')
console.log(t)
// 다중 for문을 이용 2행(tr) 3열(td) 생성
let tag3 = "";
for(let i=0; i<2; i++){
    tag3 += '<tr>'
    for(let j=0; j<3; j++){
        tag3 += `<td>test${i+1}-${j+1}</td>`
    }
    tag3 += '</tr>'
}
t.innerHTML = tag3
console.log('---------------------------')
// 반복문의 종류
// 1. for 횟수가 지정된 반복문
// 2. while 숫자와 상관없이 조건의 결과가 거짓이 나올 때까지 무한 반복하는 반복문
/*  
for(초기값; 조건식; 증강식){
    조건이 참일 때 반복 실행문
}
*/
for(let i=1; i<=10; i++){
    console.log(i)
}
console.log('---------------------------')
/* while(조건식){조건이 참일 때 반복 실행문} */
let i=1;
while(i<=10){
    console.log(i)
    i++;
}
console.log('while의 종료 위치')
console.log('---------------------------')
// 횟수가 정해지지 않은 반복문 while
/* let htmlQ = prompt('a는 인라인이다. 정답을 OX 중 하나로 입력하세요')
while(htmlQ != 'x'){
    htmlQ = prompt('a는 인라인이다. 정답을 OX 중 하나로 입력하세요')
}
alert('정답입니다! a는 인라인, 블록 모두 해당합니다.') */
/* let cssQ = prompt('마우스를 올렸을 때 디자인 속성이 바뀌는 것은 hover이다. (정답을 ox 중 하나로 입력하세요)')
while(cssQ != 'o'){
    cssQ = prompt('마우스를 올렸을 때 디자인 속성이 바뀌는 것은 hover이다. (정답을 ox 중 하나로 입력하세요)')
}
alert('정답입니다!') */