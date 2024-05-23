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
// ------------------------------------
// childNode, children[n] == 부모 자식:nth-child(n)
// firstChild, firstElementChild == first-child, last-child
const nav = document.querySelector('nav')
console.log(nav)
console.log(nav.firstChild)
console.log(nav.firstElementChild)
console.log(nav.firstElementChild.innerText)
console.log(nav.lastElementChild)
console.log(nav.lastElementChild.innerText)
// 형제 관계 (+)
//JS 이전, 다음 형제 모두 처리 가능
//nextSibling 공백 포함 다음 형제 속성
// nextElementSiblin 다음 형제 요소만 인식 속성
// previousSibling 공백 포함 이전 형제 속성
// previousElementSibling 이전 형제 요소만 인식 속성
const nav_a = document.querySelectorAll('nav a')
console.log(nav_a)
// Q. 메뉴2의 이전 형제 메뉴 1를 선택해서 배경색 노랑 변경
console.log(nav_a[1].previousElementSibling)
nav_a[1].previousElementSibling.style.backgroundColor = 'yellow'
// Q. 메뉴2의 다음 형제 메뉴 4를 선택해서 배경색 아쿠아 변경
console.log(nav_a[1].nextElementSibling.nextElementSibling)
nav_a[1].nextElementSibling.nextElementSibling.style.backgroundColor = 'aqua'