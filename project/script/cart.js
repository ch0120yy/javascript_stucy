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