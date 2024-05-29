// id, pw 유효성 검사 JS
// id, pw를 입력하지 않고 로그인 버튼을 클릭 시 error위치에 "정보를 입력하세요" 출력
// 올바른 정보 기준 : admin / 1234
// id, pw가 모두 입력 기준으로 id가 admin이 아니면 '아이디를 확인하세요' error 출력
// id, pw가 모두 입력된 것 기준으로 id가 admin이 맞고 pw가 1234가 아니면 '비밀번호를 확인하세요' error 출력
// id, pw가 모두 입력 기분으로 id = admin, pw = 1234면 로그인 성공 팝업 출력
// 디자인 스타일 조건 추가
// 입력 안해서 생긴 에러 -> 초록, 700굵기
// 입력은 했는데 데이터가 잘못돼서 생긴 에러 -> 빨강, 90굵기
const user_id = document.querySelector('#user_id')
const user_pw = document.querySelector('#user_pw')
const error_p = document.querySelector('.error')
const login_btn = document.querySelector('#login_btn')
console.log(user_id, user_pw, error_p, login_btn)
// id, pw 입력하지 않고 로그인 클릭 시 error 위치에 "정보를 입력하세요" 출력
// 1. 클릭 이벤트 생성
// 2. 조건문으로 id, pw 입력했는가?
// 3. 위 2번이 입력 안했다면 "정보를 입력하세요"
let error_message = ''
login_btn.addEventListener('click', () => {
    // 2. 조건문 id, pw 입력했는가?
    if (user_id.value == "" || user_pw.value == "") {
        if (user_id.value == "" && user_pw.value == "") {
            error_message = '아이디와 비밀번호를 입력하세요'
        } else if (user_id.value == "") {
            error_message = '아이디를 입력하세요'
        } else if (user_pw.value == "") {
            error_message = '비밀번호를 입력하세요'
        }
        error_p.innerHTML = error_message
        error_p.classList.remove('error_input')
        error_p.classList.add('no_input')
        /* error_p.style.color = 'green'
        error_p.style.fontWeight = '700' */
    } else {
        console.log('정보입력 확인')
        //id, pw 모두 입력 기준으로 id가 admin이 아니면 '아이디를 확인하세요'
        if (user_id.value == 'admin' && user_pw.value == 1234) {
            alert('로그인 성공')
        }else if (user_id.value != "admin") {
            error_message = '아이디를 확인하세요'
        }else if (user_pw.value != 1234) {
            error_message = '비밀번호를 확인하세요'
        }
        error_p.innerHTML = error_message
        error_p.classList.remove('no_input')
        error_p.classList.add('error_input')
        /* error_p.style.color = 'red'
        error_p.style.fontWeight = '900' */
    }
})