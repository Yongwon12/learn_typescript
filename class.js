// 기존의 로직
function Person(name,age){
    this.name = name
    this.age = age
}
var capt = new Person('캡틴',100)


// 클래스 로직
class Person{
    constructor(name, age){
        console.log('생성되었습니다.')
        this.name = name;
        this.age = age
    }
}

var seho = new Person('세호',30);
console.log(seho)