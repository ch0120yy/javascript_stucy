// 부모 parentNode, parentElement 속성
const nav_a_all = document.querySelectorAll('nav a')
const nav_a = document.querySelector('nav a')
console.log(nav_a_all) // Node List 배열로 a 2개 인식
console.log(nav_a) // 태그 상 먼저 시작대상 기준 a
console.log(nav_a_all[0].parentNode) // nav
console.log(nav_a_all[1].parentNode) // nav
console.log(nav_a.parentNode) // nav
// 객체.속성
// 객체.속성.속성
console.log(nav_a.parentNode.parentNode) // header
// 객체.속성.속성.속성 = '배경색'
nav_a.parentNode.style.backgroundColor = 'yellow';
nav_a_all[0].parentNode.parentNode.style.backgroundColor = '#f0c';
nav_a.parentNode.style.border = '2px solid red';
nav_a.parentNode.parentNode.style.width = '700px';
nav_a.parentNode.parentNode.style.height = '100px';
nav_a.parentNode.parentNode.style.backgroundImage = 'url(../images/logo.jpg)';
/* nav_a.parentNode.parentNode.style = 'width:700px; height:100px;'
속성을 2개 이상 작성하는 방법. 속성을 값으로써 사용할 때는 위에 작성된 기존 속성 값을 덮어버림 */
nav_a_all[1].addEventListener('mouseover',function(){
    nav_a_all[1].parentNode.style.borderBottom = '5px solid red'
})
nav_a_all[1].addEventListener('mouseout',function(){
    nav_a_all[1].parentNode.style.borderBottom = '0'
})
// 자식, 자손 잡기 childNodes, children
const header = document.querySelector('header')
const headerChild = header.childNodes; // 공백 포함으로 잡아줌 text : 공백노드 
const headerChild2 = header.children; // 요소만 잡아줌
console.log(headerChild) // text, h1, nav
console.log(headerChild[1]) // h1
console.log(headerChild[3]) // nav
headerChild[1].style.backgroundColor = 'yellow';
console.log(headerChild2) // h1, nav
console.log(headerChild2[0]) // h1
console.log(headerChild2[1]) // nav
console.log(headerChild2[0].children[0]) // a:nth-child(1)
// 위) 추가 속성 및 메소드를 연결해서 다양한 기능 수행
// headerChild2[0].innerHTML.style(O)
// headerChild2[0].innerHTML.addEventListener()(O)
console.log(headerChild2[0].innerHTML) // <a href="#">logo</a>
console.log(headerChild2[0].innerText) // logo
// 위) 단순 읽기, 변경 단순 수행
// headerChild2[0].innerHTML.style(X)
// headerChild2[0].innerHTML.addEventListener()(X)