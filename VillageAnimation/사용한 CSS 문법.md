# transform
 : CSS에서는 `transform` 속성으로 요소에 회전, 크기 조절, 기울이기, 이동 효과를 부여할 수 있다.  
 : `2D transform`은 프로퍼티값으로 **변환함수(transform function)**를 사용한다.

## 변환함수
- translate(x, y) : 요소의 위치를 X축으로 x만큼, Y축으로 y만큼 이동  
- translateX(n) : 요소의 위치를 X축으로 x만큼 이동  
- translateY(n) : 요소의 위치를 Y축으로 y만큼 이동  
- scale(x,y) : 요소의 크기를 X축으로 x배, Y축으로 확대 또는 축소  
- scaleX(n) : 요소의 크기를 X축으로 x배 확대 또는 축소  
- scaleY(n) : 요소의 크기를 Y축으로 y배 확대 똔느 축소  
- skew(x-angle, y-angle) : 요소를 X축으로 x각도만큼, Y축으로 y각도만큼 기움.  
- skewX(x-angle) : 요소를 X축으로 x각도만큼 기움.  
- skewY(y-angle) : 요소를 Y축으로 y각도만큼 기움.  
- rotate(angle) : 요소를 angle만큼 회전  

## transform-origin?
 : **요소의 기본 기준점을 설정할 때 사용.**  
: 기본값은 **요소의 정 중앙(50%, 50%)**이다.  

# CSS 애니메이션 - @keyframs와 animation

## @keyframes 규칙
 : CSS에서 애니메이션 효과를 사용하기 위해서는 **애니메이션에 대한 `키 프레임(keyframe)`을 정의해야 한다.**  
 : `키 프레임(keyframe)`에는 **특정한 시간에 해당 요소가 가져야 할  CSS 스타일을 명시한다.**
 : 즉, **키 프레임을 설정한 해당 요소의 스타일은 특정 시간까지 현재 스타일에서 설정해 놓은 새로운 스타일로 천천히 변화한다.**  
  
애니메이션 효과를 사용하기 위해서는, `animation-name` 속성을 이용하여 **요소와 키 프레임을 연결해야한다.**  
  
```html
<!-- 출처 : http://www.tcpschool.com/css/css3_transform_animation -->
<style>
    p {
        animation-name: movingPara;
        animation-duration: 3s;
        animation-name: movingPara;
        animation-duration: 3s;
    }

    @keyframes movingPara {
        from { margin-left: 100%; }
        to { margin-left: 0%; }
    }
</style>
```
- from 키워드 : 처음 스타일 명시  
- to 키워드 : 마지막 스타일 명시  
만약, 복잡한 효과를 추가하고자 하면 `퍼센트(%) 사용`  
**0%에는 처음 스타일을, 100%에는 마지막 스타일을 명시한다. 중간에 원하는 수만큼의 키 프레임을 생성할 수 있음.  


```html
<!-- 출처 : http://www.tcpschool.com/css/css3_transform_animation -->
<style>
    p {
        animation-name: movingPara;
        animation-duration: 4s;
        animation-name: movingPara;
        animation-duration: 4s;
    }

    @-webkit-keyframes movingPara {
        0% { border-color: red; }
        20% { border-color: orange; }
        40% { border-color: yellow; }
        50% { border-color: green; }
        60% { border-color: blue; }
        80% { border-color: navy; }
        100% { border-color: purple; }
    }
</style>
```

## animation 속성 종류
1. animation-name : 키프레임 애니메이션 **이름**을 지정  
2. animation-duration : 애니메이션 **재생 시간**  
 -> 단위는 `s(초)`, `ms(밀리초)`  
3. animation-timing-function : 애니메이션 **진행 속도**, 도는 **가속 방식**  
 -> 방식 : `linear`, `ease`, `ease-in/out`, 등등..  
4. animation-delay : 애니메이션 **시작 지연 시간**  
 -> 단위는 `s(초)`, `ms(밀리초)`  
5. animation-direction : 애니메이션 **진행 방향**  
 -> `normal` : *정방향 재생*  
 -> `reverse` : *역방향 재생*  
 -> `alternate` : *정방향과 역방향으로 한 번씩 번갈아 재생*  
 -> `alternate-reverse` : *역방향과 정방향으로 한 번씩 번갈아 재생*  
6. animation-iteration-count : 애니메이션 **반복 횟수**  
 -> `양수(정수)`만큼 반복실행 후 정지. **(`infinite`는 무한 반복을 의미)**  
7. animation-fill-mode : 애니메이션 **시작 전, 종료 후 적용할 CSS 스타일 지정**.  
8. animation-play-state : 애니메이션 **초기 실행 상태 결정**. 웹 페이지 로딩 후 애니메이션 **자동 실행 여부 선택 가능**  
 -> `paused` : *애니메이션이 일시 중지된 상태 유지*  
 -> `running` : *애니메이션이 재생중인 상태*  

## animation 속성 축약 표현하기
 : 8개의 애니메이션 속성은 **`animation`속성 하나로 표현할 수 있다.**  
  
`animation-name: rotate;`  
`animation-duration: 2s;`  
`animation-iteration-count: infinite;`  
`animation-timing-function: ease;`  
이들은 아래와 **동일하다.**  
  
**`animation : rotate 2s infinite ease;`**  