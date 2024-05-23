/* 
    계산식 ) 적정체중 = (본인신장-100)*0.9
    -현재 키와 몸무게를 자유롭게 입력하고
    -버튼을 눌렀을 때 최종 목표 칸에 메세지 출력하기
    결과예시) 적정체중은 ?kg이며 ?kg 초과되셨습니다.
 */
    let height = document.querySelector('#height')
    let weight = document.querySelector('#weight')
    let calcWeight = document.querySelector('#calc_weight')
    let goals = document.querySelector('#goals')
    let result = document.querySelector('#result')
    console.log(height.value)
    result.addEventListener('click',function(){
        console.log(height.value)
        let nomalWeight = (Number(height.value)-100)*0.9
        console.log(calcWeight)
        let userGoals = Number(weight.value)-nomalWeight
        calcWeight.value = `${nomalWeight}`
        goals.value = `${userGoals}kg 감량이 필요합니다.`
    })