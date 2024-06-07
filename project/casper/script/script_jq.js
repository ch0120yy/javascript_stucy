// ================ jquery ver
const $sub = $('.sub')
const $sub_bg = $('.sub_bg')
const $nav = $('nav')
const $nav_clone = $nav.clone() // true 생략 가능
const $m_nav = $('.m_nav')
console.log($sub, $sub_bg, $nav, $nav_clone, $m_nav)

$sub_bg.hide()
$sub.hide()

$m_nav.append($nav_clone)

// 마우스 올렸을 때 서브 보이기
$nav.on('mouseover',function(){
    $sub_bg.stop().slideDown(300)
    $sub.stop().slideDown(300)
})
// 마우스 나갔을 때 서브 숨기기
$nav.on('mouseout',function(){
    $sub_bg.stop().slideUp(300)
    $sub.stop().slideUp(300)
})

// ============= 모바일 메뉴
const $all_nav_m = $('.all_nav')
const $nav_m = $('.m_nav nav')
const $sub_m = $('.m_nav .sub')
const $gnb_li_m = $('.m_nav .gnb > li')
console.log($all_nav_m, $nav_m, $sub_m, $gnb_li_m)
// 제이쿼리 반복문 for, 조건문 if, 삼항조건, 함수 작성방법 js와 동일

// 제이쿼리 클래스 적용 명령
// js(classList.add) -> jq(addClass(클래스명))
// js(classList.toggle) -> jq(toggleClass(클래스명))
// 제이쿼리객체.css('속성','값').css('속성','값');
// 제이쿼리객체.css({'속성','값'});
// 제이쿼리객체.find('자식 자손 대상')
// 제이쿼리객체.eq(인덱스)
$nav_m.addClass('m_nav_hide')
// 1. 모바일 전체메뉴 아이콘(m_nav > all_nav) 클릭 시
$sub_m.hide()
// 1-1. 모바일 nav가(m_nav > nav) 보이는 상태라면 -> 숨기기
// 1-2. 모바일 nav가 숨겨진 상태라면 -> 보이기
$all_nav_m.on('click',function(e){
    e.preventDefault();
    $nav_m.toggleClass('m_nav_hide')
})
// 2. 모바일 서브메뉴 모두 숨기기(기본)
// 3. 모바일 주 메뉴 클릭 시
// 3-1. 모든 서브 메뉴 숨기기
// 3-2. 해당 주 메뉴의 서브 메뉴 보이기
$gnb_li_m.on('click',function(){
    $sub_m.hide()
    // $(this)란? 클릭 이벤트 현재 대상
    $(this).find('.sub').show()
})