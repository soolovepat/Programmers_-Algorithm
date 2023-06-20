// 문자열 내림차순으로 배치하기
// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.
// 입출력 예
// s	return
// "Zbcdefg"	"gfedcbZ"

//은석
function solution(s) {
  return [...s].sort((a, b) => (a > b ? -1 : a == b ? -1 : 1)).join("");
}

// Khusan
function solution(s) {
  return s.split("").sort().reverse().join("");
}

// 민희
// 쪼개고, 정렬하고, 유니코드 값으로 영어 대문자는 소문자보다 작기 때문에 오름차순으로 정렬 후 reverse메서드로 뒤집고 다시 합치기
function solution(s) {
  return s.split("").sort().reverse().join("");
}
//수진
function solution(s) {
  return s
    .split("")
    .sort((a, b) => (a < b ? 1 : a > b ? -1 : a === b ? 0 : -1))
    .join("");
}
