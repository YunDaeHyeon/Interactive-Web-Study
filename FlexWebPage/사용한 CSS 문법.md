# vh와 vw
- **vh = viewport height**  
- **vw = viewport width**  
두 개의 단위는 **현재 실행중인 스크린 크기에 맞춰 상대적 크기를 반환**하는 단위이다.  
전체 화면의 기준은 `100vh`, `100vw` 이다.  
만약, 현재 사용자의 스크린 크기가 `height = 1000px`, `width = 800px`라면  
`1vh = 10px`, 1vw = 9px`가 된다.  
또 `height: 50vh;`, `width: 25vw;`라면 실질적으로 `height: 500px;`, `width: 200px;`로 설정이 이루어진다.  
  
# %와 차이?
`width: 100%`와 `width: 100vh`는 완전히 다른 의미이다.  
- % : 창이 중심이 아닌, **%를 쓰고있는 요소의 부모 요소의 길이를 반환한다.**  
- vh, vw : **열려 있는 화면 전체의 상대 길이***(스크롤바를 포함한 길이 반환)*  

# flex?
 : flexible vox, flexbox라고 부르는 flex는 레이아웃 배치 기능에 중점을 마추어 고안되었다.  
 : 수월한 퍼블리싱 가능  
  
**`flexbox`는 부모 요소인 `flex container`와 자식 요소인 `flex item`으로 구성된다.**  
`flex container`가 `flex` 태그의 영향을 받는 공간이고, 그 안에서 `flex item`들의 배치, 정렬이 설정된 속성에 따라 변경되는 것.  

## 사용법
**`flex container(item의 부모 요소)`에 `display: flex` 적용**  

```html
    <div class="flex_container">
        <div class="flex_item"></div>
        <div class="flex_item"></div>
        <div class="flex_item"></div>
        <div class="flex_item"></div>
        <div class="flex_item"></div>
    </div>
    <style>
        .flex_container{
            /* 본래 div는 기본적으로 block 속성이기에 수직으로 쌓이지만,
                부모 요소에 flex를 적용하면 item들은 수평으로 정렬된다. */
            display : flex;
            border: 1px solid white;
        }
        .flex_item{
            margin: 5px;
            width: 50px;
            height: 50px;
            background-color: #f2c94c;
        }
    </style>
```

## 속성
### flex Container (부모)
- `display`  
- `flex-flow`  
- `flex-direction`  
- `flex-wrap`  
- `justify-content`  
- `align-content`  
- `align-items`  

### flex item (자식)
- `order`  
- `flex-grow`  
- `flex-shrink`  
- `flex-basis`  
- `flex`  
- `align-self`  