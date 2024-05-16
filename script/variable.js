var box1; // 변수 생성은 됐지만 데이터는 정의되지 않은 상태
console.log(box1) // undefined
var box1 = 1; // 중복 선언해도 에러는 나지 않음
box_all() // 변수가 없어도 undefined가 출력된다
var box2 = "box1" + 1;
box_all() // box3 선언 전
var box3 = "1"+(1+1);
box_all()
console.log(box1); //1
console.log(box2); //box11? 2?
console.log(box3);
box_all()
// ================================
function box_all(){
    console.log("all=>",box1, box2, box3);
    // 템플릿 문자열 (ES6)
    console.log(`all=>${box1}과 ${box2}와 ${box3}입니다`);
    console.log(`all=>${box1, box2, box3}`);
}
// ====================== 회원의 나이를 저장하고 있는 함수
var lee = 20
var kim = 21
var soo = 22
function user_age(){
    console.log(`당신의 나이는 ${kim}살 입니다.`)
}
// ====================== 상품 수량 증가 함수
var num = 0; // 기본 수량
function producktNum(){
    num = num+1
    console.log(num)
}
console.log('========================')
// var vs let
var a = 1; // 초기 생성
var a = 2; // 이미 생성한 변수를 중복 선언해도 에러 없음
let b = 3; // 초기 생성
b = 4; // 이미 생선한 변수를 중복 선언하면 에러 발생
// let 변하는 변수 vs const 변하지 않는 상수 (undefined X)
const c = 5;
// 자바스크립트는 절차적언어이다.
// 자바스크립트는 객체지향언어이다.
// 자바스크립트는 함수형언어이다.
const js = "자바스크립트";
let js_lang = "절차적";
console.log(`${js}는 ${js_lang}언어이다.`)
js_lang="객체지향";
console.log(`${js}는 ${js_lang}언어이다.`)
js_lang="함수형";
console.log(`${js}는 ${js_lang}언어이다.`)
console.log(`-----------------------------`)
// const는 변하지 않는 상수를 가지는 변수이다.
// let은 변하는 데이터 값을 가지는 변수이다.
// var는 변하는 데이터 값을 가지는 변수이다.
let data1 = "const"
let data2 = "변하지 않는 상수"
const data3 = "변수"
console.log(`${data1}는 ${data2}를 가지는 ${data3}이다.`)
data1 = "let"
data2 = "변하는 데이터 값"
console.log(`${data1}는 ${data2}를 가지는 ${data3}이다.`)
data1 = "var"
console.log(`${data1}는 ${data2}를 가지는 ${data3}이다.`)
console.log(`-----------------------------`)
// 회원 정보 저장 변수
// 이름 : 홍길동
// 나이 : 20
// 혈액형 : O
// mbti : enfj
// 거주지 : 인천시 부평구
// 성별 : 남성
let user_Name = "홍길동"
let user_Age = 20
const user_Btype = "O"
let user_Mbti = "enfj"
let user_Address = "인천시 부평구"
let user_Gender = "남성"
console.log(`${user_Name}의 나이는 ${user_Age}살 입니다.`)
console.log(`${user_Name}의 내년 나이는 ${user_Age + 1}살 입니다.`)
console.log(`${user_Name}의 작년 나이는 ${user_Age - 1}살 입니다.`)
console.log(`올해 ${user_Age}살이 된 ${user_Name}은 현재 ${user_Address}에 거주하고 있다.`)
console.log(`----------------------`)
let global_variable = 1;
function local_func(){
    let local_variable = 2+global_variable;
    console.log(local_variable)
}
console.log(global_variable)
local_func()
console.log(`----------------------`)
// null(비어 있는, 삭제된) vs undefined(정의 안 됨
let cart1 = 10; //장바구니 10개 상품
console.log(cart1);
cart1 = null // 장바구니 비움
console.log(cart1);
let cart2; // 처음 사용자가 아무것도 물건을 담지 않았을 때
console.log(cart2); // undefined
console.log(`----------------------`)
// 하루 총 지출액 가계부 만들기
// 커피 1500원, 도시락 6000원 대중교통 2000원
// 오늘 총 지출액은 000원 입니다.
let coffee = 1500;
let lunch = 6000;
let traffic = 2000;
let phone = 2000000;
function money(){
    let result = coffee + lunch + traffic;
    console.log(`오늘 총 지출액은 ${result}원 입니다.`);
}
function installment(){
    let result = phone / 6
    console.log(`핸드폰 6개월 할부 비용은 ${result}원 입니다.`);
}
function total_result(){
    let result = coffee + lunch + traffic;
    let monthly = phone / 6;
    let monthly_total = result + monthly;
    // let result2 = coffee+lunch+traffic+(phone/6);
    console.log(`핸드폰 할부 포함 총 지출액은 ${monthly_total}원 입니다.`)
}