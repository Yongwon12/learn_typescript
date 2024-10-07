// 타입 추론 기본 1
var a = 'abc';
function getB(b = 10){
    var c = 'hi'
    return b+c;
}

// 타입 추론 기본 2
// interface Dropdown4<T>{
//     value:T
//     title:string
// }
// var shoppingItem: Dropdown4<string>={
//     value: 'abc',
//     title: 'hello'
// }

// 타입 추론 기본 3
interface Dropdown4<T>{
    value:T
    title:string
}
interface DetailedDropdown<K> extends Dropdown4<K>{
    description:string
    tag:K
}

var detailedItem: DetailedDropdown<number>={
    title: 'hello',
    description:'ab',
    value:'a',
    tag:'a'
}

// Best Common Type
var arr7 = [1,2,true,true,'a']