// 타이머 함수
// setInterval() 일정시간 반복 타이머
// setInterval 타이머함수는 단독사용도 가능하지만 초기 생성 시 다른 변수에 담아두면 버튼 등의 이벤트로 제어가 가능하기 때문에 변수에 담아 생성하는 것을 추천한다.
// let timer1 = setInterval(function(){},일정시간)
let num1 = 0; // 초기값
// let timer1 = setInterval(timer2,1000)
function timer2(){
    num1++;
    console.log(num1)
}
let num2 = 0;
/* let timer3 = setInterval(timer4,500)
function timer4(){
    // 0~5 숫자 반복 타이머
    console.log(num2)
    num2++
    if(num2==5){num2=0}
} */

// 이미지 슬라이드 만들기
// 3초 간격으로 500px 만큼 옆으로 이동하는 슬라이드 제장
// translateX(0) -> translateX(-500px) -> translateX(-1000px) -> translateX(0) -> 반복
// 0 500 1000 0 500 1000 0 반복 값부터 타이머 제작
let slide_num = 0;
let total = 0;
let slide_timer = setInterval(slide_timer_func,3000)
const slide_container = document.querySelector('.slide_container')
console.log(slide_container)

function slide_timer_func(){
    slide_num++
    if(slide_num==3){slide_num=0}
    total = slide_num*500
    console.log(total,slide_num)
    slide_container.style.transform = `translateX(-${total}px)`
    // translateX(값) 500, 1000, 0, 500, 1000
}
/* let slide_num = 0;
let slide_timer = setInterval(slide_timer_func,3000)
function slide_timer_func(){
    // 0 500 1000 0 500 1000 0 반복 값부터 타이머 제작
    // 500 1000 (0 500 1000 0 500) 반복 값부터 타이머 제작
    // slide_num 기준 : 1 - 2 - 0 - 1 - 2 - 0... 반복
    slide_num++ // 값 1부터 시작
    if(slide_num==3){slide_num=0} // 3이 되기 전까진 값은 0이 아님 (3이되면 0인 상태로 *500 단계로 넘어감)
    total = slide_num*500 // 해당 값에 *500
    console.log(total,slide_num) // 출력
} */