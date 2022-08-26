# 하위 선택자(Descendant Combinator), 자식 선택자(Child Combinator)
`E F` : **E 요소의 자손인 F 요소를 선택한다.**  
`E>F` : **E 요소의 자손인 F 요소를 선택한다.***(단, IE6은 지원 X)*  

```css
/* 하위 선택자 */
section ul { border : 1px dotted black; }

/* 자식 선택자 */ 
section>ul { border : 1px dotted black; }
```
`하위 선택자(Descendant Combinator)`는 **부모 요소에 포함된 `모든` 하위 요소에게 스타일을 적용한다.**  
`자식 선택자(Child Combinator)`는 **부모의 바로 아래 **자식 요소에`만` 스타일을 적용한다.**  

# box-sizing
 : 박스의 크기를 **화면에 표시하는 방식을 변경하는 속성**  
 : **box-sizing의 속성을 `border-box`로 지정하면 테두리를 포함한 크기를 임의로 지정할 수 있어 예측하기 편리하다.**  
 : 최근 모든 요소에 해당 값을 지정하는 경우가 늘고있다. 

# background-repeat
 : 배경 이미지의 **반복 여부와 반복 방향 지정**  
 : 기본값은 `repeat`  
- repeat : 가로, 세로 방향으로 반복  
- repeat-x : 가로 방향 반복  
- repeat-y : 세로 방향 반복  
- no-repeat : 반복 X  
- initial : 기본값으로 설정  
- inherit : 부모 요소의 속성을 상속받는다.  

# background-position
 : 배경 이미지의 **위치를 정하는 속성**  
 : 기본값 : 0% 0%  
- 가로 위치 값 : left, center, right, 백분율, 길이  
- 세로 위치 값 : top, center, bottom, 백분율, 길이  
- initial : 기본값으로 설정  
- inherit : 부모 요소의 속성을 상속받는다.  

# z-index
 : 요소의 **수직 위치를 정하는 속성**  
 : 기본값 : `auto`
`position` 속성을 이용하면 요소를 겹치게 놓을 수 있다. 이때, 요소들의 *수직 위치*를 `z-index` 속성으로 정한다. 값은 **정수**이며 **숫자가 클 수록 위로 올라오고, 숫자가 작을 수록 아래로 내려간다.**