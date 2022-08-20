const ver = navigator.userAgent;
console.log(ver);

const isIE = /trident/i.test(ver);
console.log(isIE);

if(isIE){
  alert("익스플로러 브라우저로 접속하셨네요. 이 웹 페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속해주세요.")
}

/*
  해당 JS 파일은 IE를 판별하기 위해 존재한다.

  모든 브라우저에는 navigator이라는 객체가 존재한다.
  해당 객체 내부에 존재하는 userAgent에 브라우저의 정봇값이 문자 형태로 존재한다.

  const isIE = /trident/i.test(ver);
  해당 구문은 / 와  / 사이의 탐색하고자 하는 문자를 넣는다.
  그 뒤 i는 알파벳 대소문자를 구분하지 않고 탐색하고자 하는 문자열을 검사한다.
  즉, navigator.userAgent을 통해 브라우저 정보를 담은 문자열 대상으로 탐색을 진행한다.
  정보를 담은 문자열에 trident(/trident/)가 알파벳 대소문자 구분 없이 존재한다면,(i) true를 반환,
  존재하지 않다면 false를 반환한다. (인터넷 익스플로어는 trident가 존재하지만 사파리, 크롬, 엣지, 웨일에는 존재하지 않는 것을 이용한다.)
*/