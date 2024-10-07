interface Developer{
    name:string
    skill:string
}
interface Person5{
    name:string
    age:number
}

function introduce():Developer | Person5{
    return {name:'Tony',age:13,skill:'iron making'}
}
var tony = introduce()
console.log(tony.skill)
// 타입 단언(as) 사용시 생기는 문제점
// 가독성 떨어지고, 코드량 늘어남 (클린코드에서 멀어짐)
if((tony as Developer).skill){
    var skill = (tony as Developer).skill
    console.log(skill)
}else if((tony as Person5).age){
    var age = (tony as Person5).age
    console.log(age)
}
// ** !!중요!! 위의 문제를 해결하기 위한 타입 가드(is)의 정의 **
function isDeveloper(target:Developer | Person5):target is Developer{
    return (target as Developer).skill !== undefined
}
if(isDeveloper(tony)){
    tony.skill
}else{
    tony.age
}