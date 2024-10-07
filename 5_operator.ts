// function lofMessage(value:any){
//     console.log(value)
// }

// lofMessage('hello')
// lofMessage(100)


// union(유니온) 타입 실무에서 많이 사용
var seho2: string | number | boolean;
function lofMessage(value:string | number){
    // 타입 가드
    if(typeof value === 'number'){
        value.toLocaleString();
    }
    if(typeof value === 'string'){
        value.toString();
    }
    throw new TypeError('value must be string or number')
}

lofMessage('hello')
lofMessage(100)



interface Developer1{
    name:string
    skill:string
}
interface Person{
    name:string
    age:number
}
// 유니온 타입의 특징 공통된 속성만 접근이 가능함
// function askSomeone(someone:Developer1 | Person){
//     // someone.name
//     // someone.age
//     // someone.skill
// }
// askSomeone({name: "디벨로퍼",skill:"웹 개발"})
// askSomeone({name: '캡틴',age:13})
// intersection(인터섹션) 타입 실무에서 잘 사용하지 않음
// var capt: string & number & boolean
function askSomeone(someone:Developer1 & Person){
    someone.name
    someone.age
    someone.skill
}
askSomeone({name: "디벨로퍼",skill:"웹 개발",age:13})
// askSomeone({name: '캡틴',age:13})
// var seho2: string | number | boolean
