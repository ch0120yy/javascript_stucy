// slider 모든 대상 opacity 0
// slider 모든 대상 transition:opacity 0.3s
// slider 첫번째 opacity:1
const slider = document.querySelectorAll('.slide')
// slider[1] opacity 1 = 2번 보이기
// slider[2] opacity 1 = 3번 보이기
let num = 0;
// slider 공통 재사용 함수
let slider_style = (properti='opacity', val=0) => {
    // console.log(properti, val)
    for(let i of slider){i.style[properti] = val}
}
slider_style() // 모두 숨기기 (opacity 0)
slider_style('transition', 'opacity 0.3s') // 모든 동적기능
/*
let slider_style = ()=>{
    for(let i of slider){i.style.opacity = 0}
}
let slider_style2 = ()=>{
    for(let i of slider){i.style.transition = 'opacity 0.3s'}
}
slider_style()
slider_style2()
*/
slider[0].style.opacity = 1 // (초기) 첫번째 슬라이드 보이기
// 슬라이드 진행 타이머 함수
let slide_timer = setInterval(timer_func,3000)
function timer_func(){
    num++
    if(num>=slider.length){
        num=0
        slider_style()
    }
    console.log(num)
    slider[num].style.opacity = '1'
}