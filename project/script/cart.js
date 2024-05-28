// item_wrap 안 자식 item 개수를 top의 total_num 출력
// item_wrap 안 자식 item 개수를 <- 콘솔 출력
const item_wrap = document.querySelector('.item_wrap')
const total_num = document.querySelector('.total_num')
console.log(item_wrap.childElementCount)
console.log(item_wrap.children.length)
console.log(total_num.innerText)
//DOM 값을 읽거나 변경하는 속성 = innerHTML, innerText
total_num.innerText = item_wrap.children.length
const select_num = document.querySelector('.select_num')
console.log(select_num.innerText)
const item_check = document.querySelector('#item_check')
item_check.addEventListener('click',function(){
    let addCount = 1
})
// 장바구니 수량 설정하기
// 1. 기본 수량 1
// DOM 기본 태그 및 내용 추가 innerText, innerHTML 속성
// input, textarea 입력 수정, 읽기 value 속성
const countInpt = document.querySelector('#count')
const original_price = document.querySelector('.original_price')
const total_price = document.querySelector('.total_price')
let count = 1 // 수량변수
let price = 1000; // 가격변수
let rate = 0.10; // 할인변수
console.log(countInpt)
countInpt.value = count;
total_price.innerHTML = `${(price*(1-rate)).toLocaleString('ko-kr')}원`
original_price.innerHTML = `${price.toLocaleString('ko-kr')}원`
// 증가되는 count 변수를 활용 price 변수를 이용해서
// original_price 변수에 수량에 따른 가격 출력
// 2. plus 버튼 클릭 시 count가 1씩 증가
/* const plusBtn = document.querySelector('#plus')
console.log(plusBtn)
plusBtn.addEventListener('click',()=>{
    // console.log('+++')
    // 최대 구매 수량 10개, 삼항조건연산자 조건 ? 참결과:거짓결과
    // 10개 이상 수량 변경 시 '최대 구매수량입니다' 메세지 출력
    // count++; // 조건 없이 무조건 1씩 증가
    count < 10 ? count++ : alert('최대구매수량입니다.')
    console.log(count)
    countInpt.value = count
})
// 3. minus 버튼 클릭 시 1씩 감소 (최소 구매 수량 1)
const minusBtn = document.querySelector('#minus')
minusBtn.addEventListener('click',()=>{
    count > 1 ? count-- : alert('최소구매수량입니다')
    console.log(count)
    countInpt.value = count
}) */
const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')

const minusFunc = () => {
    count > 1 ? count-- : alert('최소구매수량입니다')
    countInpt.value = count
    original_price_func()
}
const plusFunc = () => {
    count < 10 ? count++ : alert('최대구매수량입니다')
    countInpt.value = count
    original_price_func()
}
plusBtn.addEventListener('click',plusFunc)
minusBtn.addEventListener('click',minusFunc)

console.log(original_price)
function original_price_func(){
    let total_p = count*price
    let total_rate = total_p*(1-rate)
    original_price.innerHTML = `${total_p.toLocaleString('ko-kr')}원`
    total_price.innerHTML = `${total_rate.toLocaleString('ko-kr')}원`
}