// h1 마우스를 올리면
// "네이버" -> "NAVER" 내용 변경
const h1 = document.querySelector('h1')
console.log(h1)
console.log(h1.innerText)
// h1.innerText = 'NAVER'
h1.addEventListener('mouseover',function(){
    h1.innerText = 'NAVER'
})
h1.addEventListener('mouseout',function(){
    h1.innerText = '네이버'
})
// header에 마우스를 올리면
// 자식 nav-a 내용 "메뉴" -> "MENU"
const header = document.querySelector('header')
console.log(header)
console.log(header.childElementCount) // 자식 개수 2ea
console.log(header.children[1].childElementCount) // 자식 개수 4ea
console.log(header.children[1].children.innerText = 'MENU')
console.log(header.length) // header의 개수
console.log(header.children.length) // header의 자식 개수
header.addEventListener('mouseover',function(){
    header.children[1].children[0].innerText = 'MENU'
    header.children[1].children[1].innerText = 'MENU'
    header.children[1].children[2].innerText = 'MENU'
    header.children[1].children[3].innerText = 'MENU'
})
