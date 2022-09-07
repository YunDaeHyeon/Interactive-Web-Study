const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45; // 각 article 요소가 회전하는 각도
const len = lists.length-1; // 요소는 0부터 시작하기에 전체 길이의 1을 뺌
let i = 0;

// article의 개수만큼 반복해라.
for(let el of lists){
    // 각 article 요소를 45도씩 회전, 아래로 배치
    el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
    i++;
}