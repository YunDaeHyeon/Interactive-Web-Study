const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");

const deg = 45; // 각 article 요소가 회전하는 각도
const len = lists.length-1; // 요소는 0부터 시작하기에 전체 길이의 1을 뺌

// 곡 선택 버튼 관련 변수
const prev = document.querySelector(".buttonPrev");
const next = document.querySelector(".buttonNext");
let num = 0;

// 곡이 선택되었을 때 가운데 있는 패널 활성화
let active = 0;

// 활성화 된 패널만 곡 실행 가능하게.
const audio = frame.querySelectorAll("audio");

let i = 0;

// article 요소를 45도씩 회전하고 아래로 배치
for(let el of lists){
    let pic = el.querySelector(".pic");
    // 각 article 요소를 45도씩 회존하고 아래로 배치
    el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
    pic.style.backgroundImage = `url(./img/member${i+1}.jpg)`; /* 배경 이미지 추가 */  
    i++;

    // 각 article 요소에 존재하는 재생, 정지, 처음부터 재생 버튼을 가져오기
    let play = el.querySelector(".play");
    let pause = el.querySelector(".pause");
    let load = el.querySelector(".load");

    // Play 버튼 클릭 시 
    play.addEventListener("click", e=>{
        let isActive = e.currentTarget.closest("article").classList.contains("on");
        if(isActive){
            // play 버튼으로부터 .pic 요소까지 탐색한 후 클래스 on를 추가시켜 요소 활성화
            e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
            // play 버튼부터 audio 요소까지 탐색한 후 음악 재생
            e.currentTarget.closest("article").querySelector("audio").play();
        }
    });

    // Pause 버튼 클릭 시
    pause.addEventListener("click", e=>{
        let isActive = e.currentTarget.closest("article").classList.contains("on");
        if(isActive){
            // pause 버튼으로부터 .pic까지 탐색한 후 클래스 on를 제거시켜 비활성화
            e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");
            // pause 버튼으로부터 audio 요소까지 탐색한 뒤 음악 정지
            e.currentTarget.closest("article").querySelector("audio").pause();
        }
    });

    // load 버튼 클릭 시 
    load.addEventListener("click", e=>{
        let isActive = e.currentTarget.closest("article").classList.contains("on");
        if(isActive){
            // load 버튼으로부터 .pic까지 탐색한 후 클래스 on 추가시켜 활성화
            e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
            // load 버튼으로부터 audio 요소까지 탐색한 뒤 음악 다시 로드하고 재생
            e.currentTarget.closest("article").querySelector("audio").load();
            e.currentTarget.closest("article").querySelector("audio").play();
        }
    });
}

// 곡 선택 로직
// 이전곡, 다음곡 버튼 클릭시 num의 값을 감소 혹은 증가시켜 deg와 연산 진행.
// deg의 기본값은 45이기에 45도, 90도, 135도 혹은 45도, 0도, -45도 식으로 article이 회전하는 효과를 나타냄
prev.addEventListener("click",()=>{
    initMusic();
    num++;
    frame.style.transform = `rotate(${deg*num}deg)`;

    // 현재 패널의 순번이 0이면 다시 마지막으로 이동, 그렇지 않으면 정상적으로 activation 함수 호출
    (active == 0) ? active = len : active--;
    activation(active, lists);
});

next.addEventListener("click",()=>{
    initMusic();
    num--;
    frame.style.transform = `rotate(${deg*num}deg)`;

    // 현재 패널의 순번이 마지막이면 다시 처음 패널의 순번으로 변경
    (active == len) ? active = 0 : active++;
    activation(active, lists);
});

function activation(index, lists){
    // 모든 article의 on 클래스 제거
    for(let el of lists){
        el.classList.remove("on");
    }
    // 버튼을 클릭했을 때 나타내는 패널(인수)에게 on 클래스 추가
    lists[index].classList.add("on");
}

// 패널의 음악이 실행중인 상태에서 다음 곡 혹은 이전 곡으로 넘어가면 곡이 멈추지 않고 계속 재생되는 오류가 존재.
// 이를 해결하기 위해 활성화된 패널이 아닌 경우 컨트롤 관련 이벤트를 발생하지 않도록 수정.

// 모든 오디오 요소를 반복하면서 정지, .pic 요소의 모션을 중지시켜 초기화 시키는 역할
function initMusic(){
    for(let el of audio){
        el.pause(); // 정지
        el.load(); // 다시 재생
        el.parentElement.previousElementSibling.classList.remove("on");
    }
}