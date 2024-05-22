// 1. 서브 숨기기 <ul class="sub">
// 2. gnb 마우스를 올리면 <ul class="gnb"><li>
// 3. sub 3개가 모두 출력 <ul class="sub">
// 동적 절차 체크 후 HTML 태그 확인 후
// HTML DOM 필요 변수 생성
const sub = document.querySelectorAll('.sub')
const gnb = document.querySelectorAll('.gnb > li')
console.log(sub, gnb)
// 1. sub 숨기기
sub[0].style.display = 'none';
sub[1].style.display = 'none';
sub[2].style.display = 'none';
// 2. gnb 마우스 올리면
/* gnb[0].addEventListener('mouseover', function () {
    // 3. sub 3개 모두 출력
    sub[0].style.display = 'block'
    sub[1].style.display = 'block'
    sub[2].style.display = 'block'
})
// 4. gnb 마우스를 나가면
gnb[0].addEventListener('mouseout', function () {
    // 5. sub 3개 모두 숨기기
    sub[0].style.display = 'none';
    sub[1].style.display = 'none';
    sub[2].style.display = 'none';
})
// 6. gnb 모든 메뉴에 마우스 올리면 sub 모두 출력하기
gnb[1].addEventListener('mouseover',function(){
    sub[0].style.display = 'block'
    sub[1].style.display = 'block'
    sub[2].style.display = 'block'
})
gnb[1].addEventListener('mouseout',function(){
    sub[0].style.display = 'none'
    sub[1].style.display = 'none'
    sub[2].style.display = 'none'
})
gnb[2].addEventListener('mouseover',function(){
    sub[0].style.display = 'block'
    sub[1].style.display = 'block'
    sub[2].style.display = 'block'
})
gnb[2].addEventListener('mouseout',function(){
    sub[0].style.display = 'none'
    sub[1].style.display = 'none'
    sub[2].style.display = 'none'
}) */
gnb[0].addEventListener('mouseover',subOpen)
gnb[0].addEventListener('mouseout',subClose)
gnb[1].addEventListener('mouseover',subOpen)
gnb[1].addEventListener('mouseout',subClose)
gnb[2].addEventListener('mouseover',subOpen)
gnb[2].addEventListener('mouseout',subClose)
function subOpen(){
    sub[0].style.display = 'block'
    sub[1].style.display = 'block'
    sub[2].style.display = 'block'
}
function subClose(){
    sub[0].style.display = 'none'
    sub[1].style.display = 'none'
    sub[2].style.display = 'none'
}