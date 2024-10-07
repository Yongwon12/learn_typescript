// 타입 호환
interface Developer{
    name:string
    skill:string
}
interface Person{
    name:string
}
class Person{
    name: string
    skill: string
}
var developer:Developer
var person:Person
developer = new Person()


// 함수
var add3 = function(a:number){
    // ...
    }
    var sum3 = function(a:number,b:number){
        // ...
    }
    sum3 = add3
    add3 = sum3


// 제네릭
interface Empty<T>{
    //...
}
var empty1:Empty<string>
var empty2:Empty<number>
empty1 = empty2
empty2 = empty1
interface NotEmpty<T>{
    data:T
}
var notempty1: NotEmpty<string>
var notempty2: NotEmpty<number>
notempty1 = notempty2
notempty2 = notempty1