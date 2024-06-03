// setInterval 일정 시간 반복 타이머
// setTimeout 일정 시간 후 단 한 번 실행시키는 타이머 (반복X)
// 초기 세팅 값 필요 시 사용
// 기초 숫자 증가
let num = 0
let timer = setTimeout(timer_func,1000)
function timer_func(){
    num++
    console.log(num)
}
// 로딩 후 자동으로 홈으로 이동되는 타이머 함수
/* const loadTimer = setTimeout(function(){
    window.location = './timer3_move.html'
},10000000000) */

// 새로고침 시 스크롤 위로 올리는 타이머 함수
const scroll_timer = setTimeout(function(){
    window.scrollTo(0,0)
},100)