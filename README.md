# Frontend-Required Browser 101

- [x] What's React?
- [x] React Tools

---

# 개발자 실력 향상을 위한 공부법

---

1. 목표를 정확하게 설정하기 => '이번 강의 끝나면 웹포폴을 만들거야'
2. 자신과의 약속 결정하기 => '이번 강의는 반드시 끝까지 완주할거야'
3. 노트에 작성하기 => 기술별로 세션 작성하기
4. 직접 정리 & 검색 & 즐겨찾기 => Tip으로 받은 자료는 반드시 기록하고 즐겨찾기에 등록하기
5. **문제 해결 능력** 기르기 => 퀴즈, 과제는 반드시 하고 결과도 내놓기

---

# Web APIs 이해의 시작

---

### 2.1 Web APIs, 넌 누구니?

- 어떤 플랫폼에서 개발을 하거나 프로젝트를 할때, 그 플랫폼에서 제공하는 API에 대해 이해하고 올바르게 사용하는 것은 중요하다.
- 우리가 윈도우에서 동작하는 어플리케이션을 만들고 싶다면 Windows에서 제공하는 API를 이용해 간단한 윈도우 어플리케이션을 만들수있고, 안드로이드나 맥 OS에서 제공하는 API를 이용하면 간단하게 모바일 어플리케이션을 만들수 있다.
- 어떻게 로그인 로직과 로그아웃 로직이 작성되어져 있는지 전혀 걱정할 필요없이 로그인, 로그아웃에서 제공하는 함수들을 이용해 간단하게 로그인할 수 있고 로그아웃을 할 수 있다.

- API => Application Programming Interface
- DOM APIs => Document Object Model의 약자로 웹페이지에서는 요소들을 생성, 삭제, 스타일 수정하는 등의 조작의 기능을 제공한다. (이 외에 Network APIs, Graphics APIs, Audio/Video APIs, Device APIs, File API,Storage APIs 등이 있다.)
- 너무도 많은 기능들이 제공되어지는데 이런 여러가지 API들을 모두 알 필요는 없다. MDN사이트에서 확인하면서 찾아서 사용하면 된다.

- HTTP(Hypertext Transfer Protocal) => 웹클라이언트와 서버가 어떻게 통신하는지 통신규약을 정해 놓은것으로 클라이언트가 서버에게 정보를 요청// 다시 서버에서 정보를 받아오는 request를 하며 response를 받아오는 방식으로 이루어져 있다.
- HTTPS(Hypertext Transfer Protocal Secure) => 정보를 주고받는 것들이 잘 감싸져 있는 보안처리가 잘 되게 해주는 것이다. HTTP는 보안처리가 되지 않고 HTTPS는 보안처리가 되어있으므로 몇몇 Web APIs는 HTTPS환경에서만 동작할 수 있다.
- 브라우저는 사용자의 정보를 보호할 의무가 있으므로 정보보안에 굉장히 민감한 아이이다. 사용자의 권한 요청이나, HTTPs를 요구할 수 있다.
- Web APIs Security, encrypt 암호화

[MDN Web API](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction "MDN Web API")
[Web API collection](https://developer.mozilla.org/en-US/docs/Web/API "Web API collection")
[Security](https://www.thoughtco.com/what-javascript-cannot-do-2037666 "Security")

---

### 2.2 browser 구조 분석

- 브라우저에서 웹페이지, 웹어플리케이션을 열었을 때 어떻게 구조화되어서 보여지는지 **브라우저의 구조**에 대해서 알아보자.
- 브라우저에서 웹페이지를 열게 되면 **window**라는 전체적인 오브젝트가 존재하게 되는데 이 window는 우리의 웹페이지를 포함한 브라우저에서 열리는 전체 창을 의미한다. (한마디로 Window란 DOM의 document가 포함된 window를 나타내는 인터페이스이다.)
- window안에서 페이지가 표기되는 부분이 **Document**인데 즉, 우리가 HTML에서 작성한 요소들이 표기되어지는 부분이라고 할 수 있다.
- 사용자 눈에는 보이지 않으나 전체적인 window(브라우저 자체)에 관련된 정보들이 담겨있는 **Navigator**라는 유용한 오브젝트도 있다.
- => HTML, CSS, JS를 포함한 웹페이지를 브라우저에서 돌리면(우리의 페이지를 브라우저에서 열게되면) **Window**라는 전체 오브젝트가 있고, 그 Window안에는 **DOM(Document Object Model)**들이 있고 이 DOM을 이용해 새로운 요소 추가,제거, 수정등이 가능한것이다.
- **BOM(Browser Object Model)**는 브라우저에 관련된 Navigator, Location, Fetch, Storage, Web APIs에 관련된 오브젝트들이다.
- => 내가 자바스크립트로 브라우저 위에서 동작하는 것들을 만들때마다 DOM과 관련된 API도 사용할 수 있고 BOM과 관련된 API도 사용할 수 있었던 것이다.
- 우리가 브라우저 위에서 동작하는 것을 만들 때는 Window오브젝트나 BOM, DOM과 관련된 API를 쓸 수 있다.
- 브라우저에서 window는 최고 레벨의 오브젝트이며 글로벌 오브젝트이다. 때문에 window안에는 Document Object Model, Browser Object Model, JS와 같은 다양한 것들이 있어 많이 사용되는데, 주로 사용되는 것은 Window의 사이즈, 스크롤링, 페이지로드 등을 확인할 때 많이 사용된다.

---

### 2.3 윈도우 사이즈 표기

- window사이즈가 정말 유용하고 중요하게 쓰이므로 정확한 **차이점을** 알고 넘어가자.
-

```javascript
window.addEventListener("resize", () => {
  //window야 나 이벤트하나 추가할게. resize될때마다 내가 원하는 함수를 호출해줘
  console.log(`window.screen: ${window.screen.width}, ${window.screen.height}`); //window 안에 screen 안에 width이 있다.
  console.log(`window.outer: ${window.outerWidth},${window.outerHeight}`);
  console.log(`window.inner: ${window.innerWidth}, ${widow.innerHeight}`);
  console.log(
    `documentElement.clientWidth: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`
  );
});
```

```javascript
const tag = document.querySelector(".tag");
window.addEventListener("resize", () => {
  tag.innerHTML = `// tag안에 innerHTML을 넣어줄건데 
        window.screen: ${window.screen.width}, ${window.screen.height} <br />
        window.outer: ${window.outerWidth}, ${window.outerHeight} <br />
        window.inner: ${window.innerWidth}, ${window.innerHeight} <br />
        document.documentElement.clientWidth: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}
        `;
});
```

```javascript
const tag = document.querySelector(".tag");
function updateTag() {
  tag.innerHTML = `
        window.screen: ${window.screen.width}, ${window.screen.height}
        window.outer: ${window.outerWidth}, ${window.outerHeight}
        window.inner: ${window.innerWidth}, ${window.innerHeight}
        document.documentElement.clientWidth: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}
        `;
}
window.addEventListener("resize", () => {
  updateTag();
});
updateTag();
```

---

### 2.3 정말 중요한 브라우저 좌표

- 브라우저의 좌표에 대해서 알아보자.
- X축과 Y축에 대해 정확하게 짚고 넘어가야한다.
- ![x축과 y축](/imgs/xy.png)
- `Element.getBoundingClientRect`는 Element오브젝트 안에 들어있는 API, 즉 함수이다. `Element.-`에서의 Element는 브라우저 위에 올라가는 DOM에 들어있는 모든 요소들(이미태그, 텍스트태그 등)들을 의미한다.=> 따라서 모든 요소는 전부 getBoundingClientRect라는 함수를 가지고 있다.
- => `Element.getBoundingClientRect`함수를 호출하면 요소의 사이즈, 위치 등 다양한 정보들을 얻는다.
- Client의 X, Y: 사용자가 보고 있는 페이지와는 상관없이 브라우저에서의 window창의 x,y의 위치가 얼마인지 전달된다.
- Page의 X, Y: 반대로 브라우저(window)창이 아닌 페이지 전체의 x,y가 전달된다.
-
- **검색이 곧 실력이 된다.**
- `mdn javascript click page x y coordinates`
- `mdn Element.getBoundingClientRect`

```javascript
// click이 되면 필요한 정보들을 출력해보자.
const special = document.querySelector(".special"); // special변수에 document.querySelector를 이용해 .special라고 지정한 class에(.spec2ial라는 요소를 special라는 변수에 지정해서 )
special.addEventListener("click", (event) => {
  //special변수에 이벤트 리스너를 추가할 것인데, click이 되면 등록한 함수((event))가 호출되도록. // 항상 이벤트에는 event라는 오브젝트가 전달됨
  const rect = special.getBoundingClientRect(); //rect변수에 .special요소에서 getBoundingClientRect()함수를 호출해서 rect변수에 받아온다.
  console.log(rect);
  console.log(`client: ${event.clientX}, ${event.clientY}`); //event.clientX=> event에는 clientX가 있다.
  console.log(`client: ${event.pageX}, ${event.pageY}`);
});
```

```javascript
scrollBy.addEventListener("click", () => {});
scrollTo.addEventListener("click", () => {});
scrollInto.addEventListener("click", () => {});
```

---

### 2.10 window load의 대비밀:kissing_closed_eyes:

-**defer**를 쓰게되면 해당 js파일이 **먼저** 출력 된다.

```html
<script src="test.js" defer></script>
```

- defer > 'DOMContentLoaded' > load => 순으로 출력된다.
- 즉, defer옵션을 사용하면 html이 전부 파싱되고, `contentLoaded` 이벤트가 발생하고, 그 다음에 페이지에 사용되는 이미지, 폰트같은 리소스들이 다운받아지면서 load가 호출되는 것이다.
- (only document 즉, html만 다 완료가 되면 호출함
- after resource (css나 images 같은 것들)가 완료가 되면 호출함)

```html
<head>
  ...
  <script src="test.js" defer></script>
</head>
<body>
  <script>
    //only document
    window.addEventListenter("DOMContentLoaded", () => {
      console.log("DOMContentLoaded");
    });

    // after resources(css, images)
    window.addEventListener("load", () => {
      console.log("load");
    });
  </script>
</body>
```

- 그리고 페이지가 끝날때 호출되거나, unload될때 불려지는 것도 있다.
- 즉, 사용자가 브라우저를 나갈때(해당 페이지를 나갈때)나 페이지가 unload되었을 때 호출되는 애들도 있다.

```javascript
// before unload
window.addEventListener("beforeunload", () => {
  console.log("beforeunload");
});

// resource is being unloaded
window.addEventListener("unload", () => {
  conosle.log("unload");
});
```

---

### 3.1 실습4: 좌표찾아 007

- 브라우저 창에서 마우스를 움직이면 **나를 따라다니는 좌표 출력하기**
- 본격적으로 이벤트, DOM요소를 조작하는 법을 배우진 않았다.
- 하지만 **검색도 실력**인 만큼 검색하면서 기존에 내가 만든 html태그들을 어떻게 변형할 수 있을지 창의적으로 생각해보자.
- 1
- 2.
- 3.
- 지정한 각각의 변수를 할당하자.

```javascript
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");
```

- `javascript mouse move` 검색
- window위에서 움직이는 좌표를 받아와야하기 때문에 `clientX`

`transform:translate()` 지정 요소 X 또는 Y축으로 이동. translate는 요소를 지정한 위치로 X 또는 Y축만큼 이동 시킵니다.

```css
.target {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

- id가 하나만 필요한 부분은 id를 넣어주자.

```html
<img src="img/carrot.png" alt="carrot" />
<img src="img/carrot.png" alt="carrot" />
<img id="rabbit" src="img/rabbit.png" alt="rabbit" />
<img src="img/carrot.png" alt="carrot" />
```

- button과 img는 inline-block이므로 한줄에 여러개가 허용된다.
- `text-align: center;`를 했음에도 중간에 오지 않는 것은 오른쪽에 margin이 존재하기 때문이므로 `margin: auto;`를 추가해준다.

```css
body {
  background-color: green;
  text-align: center;
}
img {
  display: block;
  margin: auto;
}
```

- `mdn javascript`라고 검색해보면 `scrollIntoView`에 대해서 어떻게 사용할 것인지 찾아볼 수 있다.
- `behavior`, `block`, `inline`등을 scrollIntoView의 옵션으로 사용할 수 있다.
- API에 전달할 수 있는 인자들은 무엇이 있으며, 각각 전달했을 때 어떻게 다르게 행동하는지를 확인해가면서 사용하는 것이 중요하다.

```javascript
button.addEventListener("click", () => {
  rabbit.scrollIntoView({ behavior: "smooth", block: "center" }); //rabit에 있는 것을 scrollIntoView를 이용해서 behavior라는 옵션을 사용할 것이다.
});
```

---

# DOM 완전 정복

---

### 4.1 DOM 큰 그림 이해하기

- 브라우저가 웹페이지나 웹애플리케이션을 어떻게 분석해서 정확한 위치에 표시를 하는지, 우리가 어떻게 DOM요소를 조작할 수 있는지에 대해서 배워보자.
- 좀더 깊이 있게 브라우저가 렌더링하는 순서를 공부하면서 어떤 식으로 CSS를 사용해야 하며, 어떤 애니메이션이 브라우저 성능에 놓은지 나쁜지도 알아보자.
  ![DOM Tree](/imgs/DOMtree.png)

- **Node**
- **DOM Node**라는 인터페이스는 우리가 DOM API를 쓰는데에 필수적인 인터페이스이다.
- Node 안에는 document나 Element같은 아이들이 포함되어 있다.
- Node는 EventTarget을 상속한다.(=> 모든 node는 EventTarget이라고도 할 수있다.)
  ![Node](/imgs/node.png)

- 모든 Node는 이벤트가 발생할 수도 있고, 이벤트를 들을 수도 있다. => 모든 Node가 EventTarget이기 때문이다.

  :sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```html

```

```javascript
function test() {
  console.log("hello world!");
}
```

```javascript
function test() {
  console.log("hello world!");
}
```

```javascript
function test() {
  console.log("hello world!");
}
```

[DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction "DOM")
[HTML_DOM API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API "HTML_DOM_API")
[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node "Node")
[EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget "EventTarget")
[HTML_DOM API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API "HTML_DOM_API")

https://developer.mozilla.org/en-US/docs/Web/API/Node

# Web APIs 이해의 시작

---

### 2.2 리액트 컨셉과 구현 사항

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```html

```

```javascript
function test() {
  console.log("hello world!");
}
```

```javascript
function test() {
  console.log("hello world!");
}
```

```javascript
function test() {
  console.log("hello world!");
}
```

[Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")
