const items = document.querySelectorAll("article"); // article 모든 요소 가져오기
const aside = document.querySelector("aside");
const close = aside.querySelector("span"); // aside에 존재하는 span 요소 가져오기

for(let el of items){
    // 마우스 호버
    el.addEventListener("mouseenter", e=>{
        e.currentTarget.querySelector("video").play();
    });
    // 마우스 호버가 아닐 때
    el.addEventListener("mouseleave", e=>{
        // 마우스 오버 시 비디오 일시 정지
        e.currentTarget.querySelector("video").pause();
    });
    // 마우스 클릭
    el.addEventListener("click", e=>{
    // 제목, 본문, video를 변수의 저장
    let title = e.currentTarget.querySelector("h2").innerText;
    let content = e.currentTarget.querySelector("p").innerText;
    let videoSrc = e.currentTarget.querySelector("video").getAttribute("src");

    // aside 요소에 불러온 변수 지정
    aside.querySelector("h1").innerText = title;
    aside.querySelector("p").innerText = content;
    aside.querySelector("video").setAttribute("src", videoSrc);
    
    // aside 요소에 있는 동영상 재싱 및 on을 붙여 패널 활성화
    aside.querySelector("video").play();
    aside.classList.add("on"); // on이라는 클래스를 aside에 새로 추가 
    });

    // close 클릭 시
    close.addEventListener("click", e=>{
        // aside 요소에 클래스 on 제거 및 영상 재생 중지
        aside.classList.remove("on");
        aside.querySelector("video").pause();
    })
}