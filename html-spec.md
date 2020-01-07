### input type="number"
- 넘버타입의 input은 기본적으로 숫자만 유효한 값으로 인식한다.
- 숫자외의 문자열이 입력되면 input에 값이 입력되어 보이지만 내부 value는 null이 된다.
- 숫자외의 문자열이 입력되면 onChange 이벤트 호출되지 않으므로 주의.
- 참고 : https://jsfiddle.net/50bchL8v/70/
```html
<!--기본-->
<input type="number"/> 
<!--ISO의 경우 숫자키패드 노출하기 위해서는 pattern값을 넣어주어야 함-->
<input type="number" pattern="[0-9]*"/> 
```  
### 사파리 onChnage, onBlur, runder 이벤트 트리거링이 다른 문제
input type="number" 인풋에 0을 입력하면 '개수 제한이 없다면...' 알럿을 띄우는 과정에서 나타난 문제
```
1. PC 브라우저
	onChange()
	onBlur()
	alert('...') 확인 클릭
	onChange()에서 setState호출		
	onBlur()
	onBlur()에서 setState호출
	render() ==> 한번호출됨
```
```
2. 안드로이드 브라우저
	onChange()
	alert('...') 확인 클릭
	onChange()에서 setState호출
	render() ==> 한번호출됨
```
```
3. iphone 사파리
	onChange()
	alert('...') 확인 클릭
	onChange()에서 setState호출
	render()
	onBlur()
	onBlur()에서 setState호출
	render() ==> 두번 호출됨
```

### BFCache, Navigation Timing
- IPhone 파이어폭스, 사파리에서 swipe back/forward시 스크립트가 제대로 실행되지 않는 이슈가 있었음
- BFCache가 원인

- 대안1. pageshow, pagehide 이벤트를 사용하는 것을 대안으로 제시함
- 대안2. history back/forward가 되었다는 것은 window.performance.navigation.type으로 알 수 있으므로 처리 가능
- 대안3. SPA의 경우에는 pageshow, pagehide로 안됨. popstate로 해결(?)

- BFCache 설명 https://programmingsummaries.tistory.com/380
- BFCache https://developer.mozilla.org/en-US/docs/Archive/Misc_top_level/Working_with_BFCache
- Navigation Timing https://developer.mozilla.org/ko/docs/Navigation_timing
- Navigation Timing으로 해결 https://tnsgud.tistory.com/387