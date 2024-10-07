// function logText(text:any){
//     console.log(text)
//     return text

// }

// logText(10) // 숫자 10
// logText('GOOD') // 문자열 GOOD
// logText(true) // 진위값 true

// 제네릭 사용
// function logText<T>(text:T):T{
//     console.log(text)
//     return text
// }

// logText<string>('하이')

// function logText(text:string){
//     console.log(text)
//     // text.split('').reverse().join('')
//     return text
// }

// function logNumber(num:number){
//     console.log(num)
//     return num;
// }

// union의 문제점
// return시 타입이 string | number로 추론되기에
// 제공하는 메서드를 사용할 수 없음
// function logText(text: string | number){
// console.log(text)
// return text
// }
// logText('a')
// logText(10)
// const num = logNumber(10)
// logText(true)

// 제네릭의 장점
// 유니온
function logText<T>(text:T):T{
    console.log(text)
    return text
}
const str3 = logText<string>('abc')
str3.split('')
const login = logText<boolean>(true)

// logText('a')
// logText(10)


// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown{
//     value: string
//     selected: boolean
// }
// const obj5:Dropdown={value:"abc",selected:false}


interface Dropdown<T>{
    value:T;
    selected:boolean
}

const obj5:Dropdown<string>={value:"abc",selected:false}
const obj6:Dropdown<number>={value:10,selected:false}

// 제네릭의 타입 제한
// function logTextLength<T>(text:T[]):T[]{
//     console.log(text.length)
//     text.forEach((text)=>{
// console.log(text)
//     })
// return text;
// }
// logTextLength<string>(['hi','abc'])

// 제네릭 타입제한 2 - 정의된 타입 이용하기
interface LengthType{
    length: number
}
function logTextLength<T extends LengthType>(text:T):T{
    text.length;
    return text
}
logTextLength(10)
logTextLength({leng:10})

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem{
    name:string
    price:number
    stock:number
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption:T):T{
    return itemOption
}
// getShoppingItemOption(10)
// getShoppingItemOption<string>('a')
getShoppingItemOption("name")