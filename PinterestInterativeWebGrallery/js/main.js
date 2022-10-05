// 페이지 로드 이벤트
window.addEventListener("load", ()=>{
    const grid = new Isotope("section",{ // 배치할 요소를 감싸고 있는 부모 요소
        itemSelector: "article", // 배치할 요소 명
        columnWidth: "article", // 너비값을 구할 요소 명
        transitionDuration: "0.5s" // 화면 재 비치시 요소가 움직이는 속도
    });

    // 클릭할 모든 버튼 요소 변수에 저장
    const button = document.querySelectorAll("main ul li");

    // 버튼의 개수만큼 반복 돌기
    for(let element of button){
        // 각 버튼 클릭 이벤트
        element.addEventListener("click", e =>{
            e.preventDefault(); // submit 해제
            //클릭한 대상의 자식(a태그)의 href 속성값 불러오기
            const value = e.currentTarget.querySelector("a").getAttribute("href");

            // grid에 저장된 결과를 불러와 재정렬 진행
            grid.arrange({
                // 옵션으로 변수 지정
                filter: value
            });

            // 모든 버튼의 개수만큼 on 클래스 제거
            for(let element of button){
                element.classList.remove("on");
            }

            // 클릭한 대상만 on 클래스 추가
            e.currentTarget.classList.add("on");
        })
    }
});