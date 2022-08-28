const circle = document.querySelector("#circle");
const article = circle.querySelectorAll("article");

// article 개수만큼 반복, mouseEnter, mouseLeave 이벤트 연결
for(let le of article){
    //article에 마우스를 올리면 부모인 #circle의 animation-play-state값을 "paused"로 변경하여 애니메이션 정지
    le.addEventListener("mouseenter", e =>{
        circle.style.animationPlayState = "paused";
        
    });
    //article에서 마우스가 떠나면 부모인 #circle의 animation-play-state값을 "running"으로 변경
    le.addEventListener("mouseleave", e=>{
        circle.style.animationPlayState = "running";
        
    });
}