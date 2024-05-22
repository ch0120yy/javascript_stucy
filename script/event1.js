const btn1 = document.querySelector('#btn1')
console.log(btn1)
// 버튼을 클릭했을 때 실행
// 인라인스크립트 <button onclick = "실행함수"></button>
// JS내에서 addEventListener 메서드 활용한 이벤트 방식
// 이벤트대상.addEventListener('이벤트종류',실행함수)
/* btn1.addEventListener('click',btn1_func)
*/
/* function btn1_func(){
    console.log('test')
}
btn1.addEventListener('click',function(){
    console.log('test')
})
btn1.addEventListener('mouseover',btn1_func)
btn1.addEventListener('mousedown',btn1_func)
btn1.addEventListener('mouseout',btn1_func) */
// -----------------
const btn2 = document.querySelector('#btn2')
btn2.addEventListener('click',calc)
function calc(){
    let num1 = Number(prompt('')) // 더하기 첫번째 수
    let num2 = Number(prompt('')) // 더하기 두번째 수
    let total = num1+num2
    alert(`${num1}+${num2}=${total}`)
}
// btn2 클릭했을 때 위 prompt 메서드로 받은 두개의 수를 더해서 경고창에 출력
// 결과 출력 예시) 1+2=3