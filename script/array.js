//배열
let yoil = [] // 빈 배열
yoil = ['월', '화', '수', '목', '금', '토', '일']
console.log(yoil)
console.log(`오늘은 ${yoil[0]}요일입니다.`) //오늘은 월요일입니다.
// 배열 작성법 2.
let yoil_v2 = new Array(2); // 빈 배열 * 2
console.log(yoil_v2)
console.log(yoil_v2[1]) //undefined
yoil_v2[1] = '월'
console.log(yoil_v2)
yoil_v2[0] = '일'
console.log(yoil_v2[0]+"요일")
console.log(yoil_v2)
console.log("-----------------------------------")
// 배열 기초 문제
// 1. 원하는 색상을 6개 배열로 각각 저장하고 그 중 좋아하는 색상 2개를 골라서 콘솔에 출력하세요.
// 콘솔 결과 예) 내가 좋아하는 색상은 0, 0 입니다.
/* let color = new Array(6);
color[0] = "파랑"
color[1] = "노랑"
color[2] = "빨강"
color[3] = "초록"
color[4] = "보라"
color[5] = "검정" */
const colorArray = [`파랑`, `노랑`, `빨강`, `초록`, `보라`, `검정`]
console.log(`내가 좋아하는 색상은 ${colorArray[0]},${colorArray[4]} 입니다.`)
// 좋아하는 과일을 5개 배열로 저장하고 모두 역순으로 출력해보세요.
const fruitList = new Array(`포도`, `딸기`, `사과`, `블루베리`, `바나나`)
let result = `${fruitList[4]},${fruitList[3]},${fruitList[2]},${fruitList[4]},${fruitList[0]}`;
console.log(result);
//날씨카드(맑음,흐림,비,눈)을 배열로 생성하고 이번주 기상예보를 출력하세요.
//결과 예)
//월요일 : 맑음
//화요일 : 눈
//수요일 : 비
//목요일 : 흐림
//금요일 : 맑음
//토요일 : 맑음
//일요일 : 눈
const weatherList = new Array(`맑음`,`흐림`,`비`,`눈`)
// const weatherList = ['맑음','흐림','비','눈']
console.log(`${yoil[0]}요일 : ${weatherList[0]}`)
console.log(`${yoil[1]}요일 : ${weatherList[3]}`)
console.log(`${yoil[2]}요일 : ${weatherList[2]}`)
console.log(`${yoil[3]}요일 : ${weatherList[1]}`)
console.log(`${yoil[4]}요일 : ${weatherList[0]}`)
console.log(`${yoil[5]}요일 : ${weatherList[0]}`)
console.log(`${yoil[6]}요일 : ${weatherList[3]}`)
console.log("-----------------------------------------")
let cgv = new Array(8)
console.log(cgv)
console.log(cgv.length)
cgv[0] = 'A1'
console.log(cgv)
cgv[1] = 'C3'
console.log(cgv)
cgv.push('F5')
console.log(cgv)
// 배열 속성 활용
let megabox = []
console.log(megabox)
console.log(megabox.length)
megabox.push('A2')
console.log(megabox)
megabox.push('B2')
console.log(megabox)
megabox.unshift('A1')
console.log(megabox)
megabox.pop()
console.log(megabox)
megabox.shift()
console.log(megabox)
console.log("-----------------------------------------")
let price = 10000
let lottecinema = []
// ex) 좌석 배열에 3개의 좌석 정보가 들어있을 때
// 예매하신 좌석은 총 3좌석이며 성인 1명당 10000원 기준으로 총 결제 금액은 30000원입니다.

console.log(lottecinema)
console.log(lottecinema.length)
lottecinema.push('A5','A6')
console.log(lottecinema)
lottecinema.unshift('A4')
console.log(lottecinema) // a4 a5 a6
// 결제하기 클릭 후 메세지 출력
total_func()
//뒤로가기 인원 수정
lottecinema.pop()
//결제하기 클릭 후 메세지 출력
total_func()
lottecinema.push('D5','D6')
total_func()
total_func()
function total_func(){
    total = `예매하신 좌석은 총 ${lottecinema.length}개의 좌석이며 성인 1명당 ${price}원 기분으로 총 결제 금액은 ${lottecinema.length*price}원 입니다.`
    console.log(total)
}