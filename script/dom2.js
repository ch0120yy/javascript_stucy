const header = document.getElementsByTagName('header')
console.log(header)
// tag, class 등과 같이 다수가 존재할 수 있는 대상을 DOM으로 선택하면 특정 대상 1개만 잡히는 게 아닌 collection기준으로 여러개가 잡히기 때문에 원하는 대상 사용 시 정확히 그 대상을 인덱스로 선택해야 한다.
console.log(header[0])
const logoCls = document.getElementsByClassName('logo')
console.log(logoCls[1])
// 클래스, 태그 대상을 정확히 특정 대상만 변수로 저장
const aTag1 = document.getElementsByTagName('a');
const aTag2 = document.getElementsByTagName('a')[0];
/*
    변수 생성 시 인덱스를 작성하지 않으면 호출할 때 인덱스를 작성하며 자유롭게 원하는 대상을 가져올 수 있다.
    console.log(aTag1[0])
    console.log(aTag1[5])
    console.log(aTag1[10])
*/
/* 
    변수 선언 시 인덱스를 작성하고 선언했다면
    변수 사용 시 인덱스를 붙이지 않고 변수명만 간편하게 쓸 수 있다.
    consloe.log(aTag2);
    consloe.log(aTag2[1]); // aTag2[0][1] error
*/
const gnb = document.getElementById('gnb')
console.log(gnb)
// id는 하나이므로 중복할 수 없어서 index가 들어가지 않는다.
// float, flex, grid
console.log("============================================")
const headerTag = document.querySelector('header')
console.log(headerTag)
// querySelector는 tag, class를 선택 시 메서드 괄호 안 문자열 대상 기준으로 가장 먼저 인식된 대상을 출력해준다.
const aQ = document.querySelector('a')
console.log(aQ)
const logoQ = document.querySelector('.logo')
console.log(logoQ)
const gnbQ = document.querySelector('#gnb')
console.log(gnbQ)
console.log("============================================")
const aQAll = document.querySelectorAll('a')
console.log(aQAll)
console.log(aQAll[2])
const logoAll = document.querySelectorAll('.logo')
console.log(logoAll)
console.log(logoAll[0])
console.log("============================================")
// #order, #text, #num, #btn
const order = document.querySelector('#order')
const input_text = document.querySelector('#text')
const input_num = document.querySelector('#num')
const btn = document.querySelector('#btn')
console.log(order, input_text, input_num, btn)
//버튼 클릭 시 아래 함수 호출하기
function btn_func1(){
    // 위 변수에 대한 데이터타입 출력하기(콘솔 한 줄씩 출력)
    /* console.log(typeof order)
    console.log(typeof input_text)
    console.log(typeof input_num)
    console.log(typeof btn) */
    console.log(input_text.value)
    console.log(typeof input_text.value)
    console.log(input_num.value)
    console.log(typeof Number(input_num.value))
}
function btn_func2(){
    //#num 입력칸에 숫자 2를 입력했을 때
    // 주문 버튼을 클릭하면
    // +1 이벤트로 숫자 3이 #num 입력칸에 입력되는 코드 작성
    // input_num.value = Number(input_num.value)+1
    let total = Number(input_num.value)
    input_num.value = total+1
}
// 객체.메서드(실행값);
// 객체.속성=속성에 대입할 값;
function btn_func3(){
    // 사용자가 요청사항을 입력 후 주문 버튼을 클릭하면
    // 윈도우 경고창으로 다음과 같이 출력하기
    // "사용자 요청사항은 0000 입니다."
    let user_order = input_text.value;
    alert(`사용자 요청사항은 ${user_order}입니다.`)
}
function btn_func4(){
    // 사용자 요청사항과 주문수량을 확인하고
    // 주문 버튼을 클릭하면 다음과 같이 경고창 출력하기
    // "요청사항은 0000, 주문 수량은 0개, 총 결제 금액은 000원 입니다."
    // 제품 1개당 1000원 기준
    let request = input_text.value; // 요청사항
    let order_num = Number(input_num.value); // 수량
    let price = 1000; // 금액
    let total = order_num * price
    alert(`요청사항은 ${request}, 주문수량은 ${order_num}, 총 결제 금액은 ${total}원 입니다.`)
}