/* let message1 = window.alert('관리자만 접속할 수 있습니다.')
let message2 = window.prompt('1+1=?')
let message3 = window.confirm('인쇄하시겠습니까?')
console.log(message1,message2,message3) */
// window란? 웹브라우저 창
// window.메서드() ? 웹브라우저 창에서 실행되는 기능
// window객체명은 가장 기본이 되는 웹브라우저로 생략가능하다.
//let message4 = alert('경고') // window 생략
// 버튼 클릭 시 구글 이동 함수 생성
function btn_func(){
    window.location.href = "https://google.com"
}
// window.document.write('hello js')
// window.open("https://google.com","_blank",'width=500, height=300')
function txt_func(){
    window.document.write("Hllo JS!")
}
function google_open(){
    window.open("https://google.com","_blank")
}
function google_500_open(){
    window.open("https://google.com", "_blanck", 'width=500, height=500')
}
/* 
    인라인 스크립트
    1. 함수, 변수 등 자바스크립트는 JS 파일 내에서 작성
    2. 상호작용이 필요한 HTML태그에 JS 연결을 위해서 태그 내에 이벤트 (ex)onClick) 등으로 함수 연결
    인라인 스크립트를 피하는 방법
    * 상호작용하는 태그를 자바스크립트 내에서 객체로 만든다.
    * 객체.속성
    * 객체.메서드()
    * 선택한 DOM 태그 내에 자식, 자손까지 포함해서 선택한다.
 */
const h1Tag = document.getElementsByTagName('h1')
console.log(h1Tag)
console.log(h1Tag[1])
const ulTag = document.getElementsByTagName('ul')
console.log(ulTag) // 다수의 ul 태그 출력 (배열 구조)
console.log(ulTag[0]) // 원하는 ul 개별 출력(index)
const liTag = ulTag[0].getElementsByTagName('li') 
console.log(liTag)
console.log(liTag[0], liTag[1],liTag[2])
const aTag = liTag[1].getElementsByTagName('a')
console.log(aTag[0])
// console.log(aTag[0],aTag[1],aTag[2])
console.log("================================================")
const titleCls = document.getElementsByClassName('title')
console.log(titleCls)
console.log(titleCls[0])
console.log(titleCls[1])
const listCls = ulTag[1].getElementsByClassName('list')
console.log(listCls)
console.log("================================================")
// DOM 선택 문제
// 1. gnbCls : gnb 1개 잡기
// 2. li_menu1 : gnb의 첫번째 자식 li 잡기
// 3. li_menu2 : gnb의 두번째 자식 li 잡기
// 4. lnbAll : lnb 클래스 2개 모두 잡기
// 5. lnb_sub2 : 첫번째 lnb의 sub_menu2 a잡기
/* const navTag = document.getElementsByTagName('nav')
console.log(navTag) */
const gnbCls = document.getElementsByClassName('gnb')[0]
console.log(gnbCls)
const li_menu1 = gnbCls.getElementsByTagName('li')[0]
console.log(li_menu1)
const li_menu2 = gnbCls.getElementsByTagName('li')[3]
console.log(li_menu2)
const lnbAll = document.getElementsByClassName('lnb')
console.log(lnbAll)
const lnb_sub2 = lnbAll[0].getElementsByTagName('a')[1]
console.log(lnb_sub2)