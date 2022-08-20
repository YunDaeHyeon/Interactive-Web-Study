# inline 요소와 block 요소
- inline : 줄 속에 넣는 요소라고 하며, `b`, `span`, `a` 등 특정한 문자열을 선택할 때 사용하는 태그를 말한다.  
이들은 **줄바꿈이 이루어지지 않는다.**  
- block : 더 넒은 범위를 지정할 때 사용하는 `p`, `h1`, `div`, `ul`, `ol`, 같은 태그를 말한다.  
이들은 **가로 화면 100%를 차지하기 때문에 자동을 앞뒤 줄바꿈(개행)이 이루어진다.**  

## 다양한 display 속성
- display : inline;  
기본값. 요소를 inline 요소처럼 표시 (개행 X)  
- display : block  
요소를 block 처럼 표시 (개행 O)  
- display : none  
박스 생성 X, 공간 차지 X  
- display: inline-block  
요소는 inline, 내부는 block처럼 표시. 즉, 박스 모양이 inline처럼 옆으로 나열된다.  
  
# 파비콘(favicon)이란?
 : 파비콘(favicon - Favorites + Icon의 합성어)이란, 인터넷 웹 브라우저의 주소창에 표시되는 웹사이트나 웹페이지를 대표하는 아이콘  

# defer 속성?
 : `defer` 속성은 `script` 태그에 존재하며 해당 속성이 명시된 `script` 태그는 **페이지가 모두 로드된 후에 해당 외부 스크립트가 실행됨**을 명시한다.  
 해당 속성은 `script`가 외부 스크립트를 참조하는 경우에만 사용할 수 있으며 **`src` 속성이 명시된 경우에만 사용 가능하다.  
  
또한, 참조된 외부 스크립트 파일을 아래와 같이 다양한 방법으로 실행 가능하다.  
- async 속성 명시 : 브라우저가 페이지를 파싱하는 동안에도 스크립트 실행  
- async 속성 X defer 속성만 명시 : 브라우저가 페이지의 파싱을 모두 끝내면 스크립트 로드  
- async, defer 모두 명시 X : 브라우저가 페이지를 파싱하기 전에 스크립트를 가져와 실행  

---  
[출처]  
[TCPSCHOOL](http://www.tcpschool.com/html-tag-attrs/script-defer)  

# section
HTML의 `section`은 HTML 문서의 독립적인 구획을 나타낸다.

# article
HTML의 `article`은 문서, 페이지, 애플리케이션 또는 사이트에서 독립적으로 구분하여 배포하거나 재사용할 수 있는 구획을 나타낸다.  
대표적으로 게시판과 블로그 글, 매거진, 뉴스 기사 등이 있다.  

# nav
HTML의 `nav`는 다른 페이지, 현재 페이지의 다른 부분과 연결되는 네이게이션 링크(navigation links)들의 집합을 정의할 때 사용  
대표적으로 메뉴, 목차, 인덱스등이 존재한다.  
기본적으로 `display: block`이 설정되어 있다.  

# ::before와 ::after
1. ::before - 실제 내용 바로 앞에서 생성되는 자식 요소(요소의 콘텐츠 시작 부분에 생성된 콘텐츠 추가)  
2. ::after - 실제 내용 바로 뒤에서 생성되는 자식 요소(요소의 콘텐츠 끝 부분에 생성된 콘텐츠 추가)  
`::before`, `::after`와 꼭 함께 쓰이는 요소 `content`.  
이는 **가짜(가상)** 속성으로 *HTML 문서에 정보로 포함되지 않은 요소를 CSS에서 새롭게 생성시킨다.*  
