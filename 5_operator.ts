// function lofMessage(value:any){
//     console.log(value)
// }

// lofMessage('hello')
// lofMessage(100)

// union(유니온) 타입
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