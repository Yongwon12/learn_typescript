// promise를 return하는 경우 promise에 대한 타입이 어떤 것인지
// typescript는 추론할 수 없기에 promise에 대한 타입을 명시해줘야 함
function fetchItem():Promise<string[]>{
    let items:string[] = ['a','b','c']
    return new Promise(function(resolve){
        resolve(items)
    })
}

fetchItem()