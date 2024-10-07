// 숫자형 enum
// 초기화하지 않으면 1씩 증가
// enum Shoes{
//     Nike,
//     Adidas
// }
// 문자형 enum
enum Shoes{
    Nike = '나이키',
    Adidas = '아디다스'
}
var myShoes = Shoes.Nike
console.log(myShoes) // 나이키


// 예제, 어떻게 활용하는지
// 목록이 필요한 형태에서 사용하는 것이 정확한 코드 및 예외처리 코드 줄어들 수 있음

enum Answer{
    Yes = 'Y',
    No = 'N'
}
function askQuestion(answer:Answer){
if(answer === Answer.Yes){
    console.log('정답입니다.')
}
if(answer === Answer.Yes){
    console.log('오답입니다.')
}
}

askQuestion(Answer.Yes)
// askQuestion('yes')
// askQuestion('y')
// askQuestion('예스')