const data = [
    {//첫번째 책
        title: '나를 소모하지 않는 현명한 태도에 관하여',
        author: ['마티아스 뇔케','이미옥'],
        publishing: '퍼스트펭귄',
        date: '2024년 03월',
        origin_price:17800,
        sale:10,
        tag: ['#얼리리더','#이달의굿즈','#나를바라보다','#인간관계에대하여']
    },{//두번째 책
        title: '하루 한 장 나의 어휘력을 위한 필사 노트',
        author: '유선경',
        publishing: '위즈덤하우스',
        date: '2024년 03월',
        origin_price:23800,
        sale:10,
        tag: ['#얼리리더','#필사','#쓰는맛']

    },{//세번째 책
        title: '불변의 법칙',
        author: ['모건 하우절','이수경'],
        publishing: '서삼독',
        date: '2024년 02월',
        origin_price:17800,
        sale:10,
        tag: ['#얼리리더','#부자되는법','#부자만들기','#돈좀벌어보자',`#돈모으고싶을때`]

    }
]
console.log(data[0].tag[1])
let book = '';
let total_price = 100-data[0].sale;
let price_result = total_price / 100;
let total = data[0].origin_price*price_result;
console.log(total)
const section = document.querySelector('section')
book += `<div class="book">`
book += `<h1>${data[0].title}</h1>`
book += `<p class = "info">`
book += `${data[0].author[0]}/${data[0].author[1]}역</p>`
book += `<a href="#">${data[0].publishing}</a>`
book += `<span>${data[0].date}</span>`
book += `</p>`
book += `<p class="price">`
book += `<em class="total">${total}원</em>`
book += `<span class="sale">(${data[0].sale}% 할인)</span>`
book += `</p>`
book += `<p class="tag">`
book += `${data[0].tag[0]}
        ${data[0].tag[1]}
        ${data[0].tag[2]}
        ${data[0].tag[3]}`
book += `</p>`
//내용 끝
book += `</div>`
section.innerHTML = book