// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
  return a + b;
}

sum(10, 20);

// 함수의 반환값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식(가장 기본적인 모습)
function result(a: number, b: number): number {
  return a + b;
}
// 함수의 spec을 확인하고 파라미터 제한해주는 기능
// sum(10, 20, 30, 40);

// 함수의 옵셔널 파라미터 "?" (객체에서도 사용함)
function log(a: string, b?: string) {}
log("hello world");
log("hello world", "abc");
