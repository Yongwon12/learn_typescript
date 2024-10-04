// 인터페이스
interface User{
    age:number
    name:string
}

// 변수에 인터페이스 활용
var seho:User = {
age:33,
name:"세호"
}

// 함수에 인터페이스 활용
function getUser(user:User):void{
    console.log(user)
}
const capt = {
    name:"캡틴",
    age:100
}
getUser(capt)


// 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction{
    (a:number,b:number):number;
}

var sum2: SumFunction
sum2 = function(a:number,b:number):number{
    return a+b
}

// 인덱싱
interface StringArray{
    [index:number]:string
}

var arr2:StringArray = ["a","b","c"]
// arr2[0] = 10;

// 딕셔너리 패턴
interface StringRegexDictionary{
[key:string]:RegExp
}

var obj2:StringRegexDictionary = {
    // sth:/abc/,
    cssFile:/\.css$/,
    jsFile:/\.js$/
}

Object.keys(obj2).forEach(function(value){

})

// 인터페이스 확장
interface Person{
    name:string
    age:number
}

interface Developer extends Person{
    language:string
}

var captain:Developer = {
    language:"ts",
    age:100,
    name:"캡틴"
}