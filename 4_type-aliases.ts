// interface와 type 별칭의 큰 차이는 type 별칭의 경우 확장이 불가능하고, interface의 경우 확장이 가능
// 따라서 가능한 interface를 사용하는 것이 바람직함

interface Person {
    name:string
    age:number
}
type Person2 = {
    name:string
    age:number
}

var seho:Person2 = {
    name:"세호",
    age:30
}

type MyString = string
var str2:MyString = "hello"

type Todo = {id:string;title:string;done:boolean;}
function getTodo(todo:Todo){
    
}