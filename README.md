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
  ![EventTarget](/imgs/EventTarget.png)
- 브라우저가 html파일을 읽었을 때 어떻게 이해해서 DOM요소로 변환하는지 알아봤다.
- 모든 Node는 EventTarget이고 또, Node에선 html부터 시작해 다양한 요소들이 존재한다.
- 조금 더 상세하게 **브라우저가 어떻게 렌더링하는지**에 대해 **CCSOM**에 대해 공부해보자.

[DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction "DOM")
[HTML_DOM API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API "HTML_DOM_API")
[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node "Node")
[EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget "EventTarget")
[HTML_DOM API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API "HTML_DOM_API")

---

### 4.4 알면 유용한 CCSOM

- CCSOM: CSS Object Model
- 브라우저에서 html파일을 분석하게 되면 html의 요소들은 DOM으로 변환된다.
- 그렇다면 내가 정의한 CSS 스타일은 어디로 가는 것일까?
- **브라우저가 CSS스타일을 어떻게 이해하는지**에 대해서 알아보자. => **CSSOM**에 대해 알아보자.
  ![CSSOM](/imgs/cssom.png)

:sparkles: 이번 챕터의 핵심 :sparkles:

> 브라우저가 html파일로 Document Object Model을 만들어 내가 정의한 CSS를 병합해서 CSSOM을 만든다.

- 브라우저는 기본적인 CSS 스타일을 가지고 있지 않나?
- "맞다." 브라우저는 기본적인 CSS스타일을 가지고 있다.
- => 즉, 브라우저는 DOM과 CSS 요소들을 병합해서 CSS DOM이라는 것(CSSOM)을 만들어내는 것이다.

:sparkles: 핵심 키워드 :sparkles:

> Render Tree
>
> 1. 브라우저가 html파일을 읽게 되면 가장 먼저 DOM트리를 만들게 되고
> 2. 그 다음 CSS파일을 읽은 후 최종적으로 확정된 CSS스타일의 Tree를 만든다. => CSSOM
> 3. DOM과 CSSOM을 합쳐 최종적으로 브라우저에 표기될 애들만 Render Tree에 선별되어져 표기되는것.
>    (=> Render Tree는 html 부분은 표기되지 않고 body부분처럼 사용자입장에서 눈에 보일 요소들만 선별되어진다. 또한 body에 들어간다고 다 선별되어 표기되는 것은 아니며, display: none과 같은 것은 선별되지 않는다. (opacity: 0과 같은것은 눈에 보이지 않더라도 선별되어진다.))

![RenderTree](/imgs/rendertree.png)

[CSSOM](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model "CSSOM")

---

### 4.5 성능을 좌우하는 Rendering 순서(중요:star:)

- 웹페이지, 웹어플리케이션을 브라우저가 사용자에게 어떠한 과정을 거쳐 보여주게 되는지 알아보자.(이 것을 알아야 후에 성능 좋은 웹어플리케이션을 만들 수 있다.)
- 후에 JS프레임워크나 라이브러리, CSS전처리기, CSS나 JS로 애니메이션 기능넣기 등을 할때 이것들을 알아놓아야 **성능좋은 웹페이지**를 만들 수 있다.

:sparkles: 브라우저에서 URL을 입력하게 되면 이런 순서로 진행하게 된다. :sparkles:
![RenderTree](/imgs/rendering.png)

> 1. requests: 먼저 브라우저가 서버에게 html파일을 요청하게 되고,
> 2. response: 서버에게서 html파일을 받아와서
> 3. loading: 로딩하게 된다.
> 4. scripting: 로딩한 데이터를 한줄 한줄 읽어서 DOM요소로 변환하게 된다.
> 5. rendering: DOM요소로 변환하고 CSSOM으로 변환하는 등을 통해 브라우저 Window에 표기하기 위해 Rendering tree를 만든 다음,
> 6. layout: 각각의 요소들이 어떤 위치에, 어떤 크기로 표기될 것인지 계산한 다음
> 7. painting: 그림을 그리는 스탭으로 진행하게 된다.

:sparkles: Construction, Operation(1) :sparkles:
![RenderTree](/imgs/rendering2.png)

> 더 자세하게 Construction, Operation 카테고리로 나눠서 알아보자.
> Construction파트: html페이지에서 브라우저가 이해할 수 있게 브라우저의 언어로 바꾸는 파트로, 앞서 살펴본 DOM요소로 변환하고 CSSOM을 만들어 Render Tree를 최종적으로 만들어내는 것까지의 과정.
> Operation파트: 브라우저가 이해할 수 있는 Rendering tree를 이용해 구조작성, 배치 계산 등으로 브라우저 window에 그림을 그려주는 rendering하게 되는 파트로, layout, painting, composition을 통해 최종적으로 사용자에게 내용이 보여지게 되는 과정.

:sparkles: Construction, Operation(2) :sparkles:

> Construction, Operation 각각의 과정에서 중요한 포인트를 한가지씩 짚어보자.
>
> 1. construction time에서 DOM에서 html페이지에서 rendering tree를 만들때까지 빠르게 하기 위해선 어떻게 해야할까?
>    => 당연히 DOM요소가 작으면 작을수록, 혹은 CSS규칙이 적으면 적을수록 tree 또한 작아지므로 빠르게 할 수 있을것이다. div태그, wrapping클래스, wrapping요소들을 불필요할 정도로 남발하거나 하지말고 최대한 요소들을 적게 만드는 것이 중요하다.
> 2. operation time에서는 처음 사용자에게 표기하는 것도 중요하지만 나중에 사용자가 클릭해서 요소를 움직이거나 애니메이션을 사용할 때 paint가 자주 일어나지 않도록 만드는 것이 중요하다.
>    => 무슨 말이냐, 사용자가 클릭등을 통해 변화를 줄때, 브라우저가 부분적인 레이아웃을 composition(구성) 변화되게 해야하는데 변화가 일어날때마다 전체레이아웃이 변화된다면 브라우저의 성능은 나빠질 수 밖에 없다.

---

### 4.6 모르면 후회하는 '레이어 데모':ghost:

- 브라우저가 **어떻게 html을 서버에서 받아**오고, **어떻게 이해**해서, 최종적으로 **사용자에게 보여지기까지 어떠한 과정을 거치**는지(layout, paint, composition)를 알아보았었다.
- 이제 :sparkles:**브라우저가 어떻게 layers를 만들었는지 확인할 수 있는 꿀팁**:sparkles:을 얻어보자.
  ![Layers](/imgs/layers.png)
- 개발툴 > 땡땡땡옵션 > More tools > Layers
- 를 해보면 우리의 Layers를 확인해볼 수 있다.

![Layers](/imgs/layers2.png)

- 지금 layer는 document자체 레이어와 스크롤바, 이렇게 두가지 레이어가 있음을 확인할 수 있다.
- 이미지나 다른 것들이 한개의 레이어에 있다면 브라우저는 변동이 있을때마다 **레이어 전체를 업데이트**하게 된다.
- 그렇게 되면 자그마한 부분이 변화되어도 결국 전체레이어를 다시 그려야하는 일이 발생할 수 있게 된다.
- 브라우저가 레이어의 변동가능성을 인지해, 따로 레이어를 빼놓게 하려면 보통 'will-change'같은 것을 사용한다.

![Layers](/imgs/layers3.png)

- 이렇게 opacity가 변경될것이라고 알려주는 순간, 작은 레이어가 만들어지면서 해당 레이어 부분만 변경되도록 브라우저의 성능을 개선하게 되는 것.
  > 그렇다면, 우리가 rendering path에 대해서도 알아봤고, 애니메이션 쓸 때 조심해서 사용해야한다는 것을 알게됐다. 그러면 어떤것은 쓰면 좋고 어떤것은 쓰면 최악이라는 것일까?
  > CSS의 속성값을 확인할 수 있는 방법을 알아보자.

[csstriggers](http://csstriggers.com/ "csstriggers")

- csstriggers.com은 프론트엔드에서 개발할 때마다 이 사이트를 참고해서, 내가 사용하는 css 속성값이 좋은지 안좋은지 확인하기에 너무 좋다.:star:
- 왜 이 사이트가 필요한 것일까?
- 내가 막 CSS를 쓸때는 괜찮다. 하지만 나중에 애니메이션 transition을 이용할 때, 어떤 속성값과 어떤 css를 사용하느냐에 따라 layout이 발생할 수도, paint가 발생할 수도, 더 좋게 composition만 발생할 수도 있기 때문이다.

:sparkles: layout, paint, composition 복습 :sparkles:

> composition: css가 변경되었을 때 composition만 일어난다면 가장 좋은 케이스이다. 이유는 '이미 그려져있는 레이어를 움직이거나 변형만 하면 되기때문'이다.
> paint: 작은 레이어든, 큰 레이어든 paint를 다시 준비해야하기 때문에 시간이 걸리고 메모리에도 부담이 된다.
> layout: 가장 최악의 경우인 layout은 처음부터 Render Tree를 계산해서 어느 x와 y, width와 height을 사용할 것인지를 계산한 후, 다시 paint와 composition까지 가야하므로 가장 좋지 않은 케이스이다.

![csstriggers](/imgs/csstriggers.png)

> Blink: 크롬 브라우저에서 사용되는 엔진
> Gecko: 파이어폭스에서 사용되는 엔진
> Webkit: iOS 사파리에서 사용되는 엔진
> EdgeHTML: 엣지브라우저에서 사용되는 엔진(이제 최신 엣지브라우저는 크롬의 엔진(Blink)을 사용하기에 EdgeHTML엔진은 오래된 엣지브라우저에서 쓰이고 있다.)

![csstriggers](/imgs/csstriggers2.png)

- Change from default: css에서 처음에 발생하는 것
- Subsequent updates: 주기적으로 업데이트 되어 발생하는 것
- 예를 들어 몇가지를 살펴보자.

![csstriggers](/imgs/csstriggers3.png)

- opacity를 보게 되면 layout은 발생하지 않고 paint와 composite만 발생하는 것을 볼 수 있다.
- 후에 주기적인 업데이트가 발생하면 paint는 일어나지 않고 composite만 발생하는것을 볼 수 있다.
- 즉, 크롬브라우저에서는 아주 괜찮은데 사파리와 EdgeHTML은 정말 개선이 많이 필요할 것으로 보인다.
- 그러나 요즘 흔히 크로미움(크롬)을 사용하기 때문에 composite만 발생하는 것으로 나오는 opacity는 굉장히 괜찮은 속성이다.

![csstriggers](/imgs/csstriggers4.png)

- 반대로 width와 height같은 너비와 높이는 layout을 발생시킨다. 요소의 너비를 변경하기 때문에 layout이 처음부터 다시 시작된다.
- z-index는 layout은 상관없이 위치나 크기는 그대로인 상태에서 위아래로 위치만 변동되므로 paint만 발생하는 것을 볼 수 있다.
  > 이렇게 내가 어떤 것을 쓰면 최악인지 좋은지를 확인해가면서 사용하는 것이 중요하다.
  > layout부터 발생할 수 있는 top, left 혹은 width, height와 같은 css의 속성값을 이용해 애니메이션을 하는 것은 좋지 않다는 것을 염두해두자.

---

### 4.9 성능 개선 증거:hammer:

- 그런데 정말 성능이 좋은지 않좋은지 어떻게 알 수 있을까?
  ![RenderTree](/imgs/Improving.png)
- 왼쪽 코드는 left와 top을 이용해 요소들의 위치를 변경한 것
- 오른쪽 코드는 transform을 이용해 위치를 바꾼 것
- 결과의 차이점이 육안으로는 크게 보이지 않는다. **개발자 툴**을 이용하면 차이점을 똑똑하게 분석할 수 있다.

  ![RenderTree](/imgs/Improving2.png)

- 개발툴 > performance > record 버튼 클릭 > stop 클릭 => record를 통해 내가 알고 싶은 동작들을 시행하면 내가 시행한 동작들이 녹화되면서 프로파일링을 하게 된다.
  ![RenderTree](/imgs/Improving3.png)

---

### 4.10 DOM 조작(1) - querySeletor

- **DOM요소**에서 모든 **Element는 Node**이고 **Node는 EventTarget**이다.
- 그래서 Element라는 오브젝트를 리턴하는데, 만약 Element를 찾지 못하면 null을 리턴한다.
- `querySelector`는 Edge 12, Explore 8버전부터 지원한다.(이하 버전은 바벨을 사용하거나 `getElementById`를 사용)
- `querySelector`가 **더 막강하고 폭넓게 사용가능**하다.

```javascript
const element = document.querySelector('img[src="img/avatar.png"]'); //image안에 document에 있는 querySlector를 이용해, img폴더안의 avatar이미지파일'만' 가져오겠다.

const element2 = document.querySelector("img"); //가장 처음 발견된 img만 가져온다.
```

- `querySelectorAll` => 선택된 태그 전부를 가져오겠다.

```javascript
const images = document.querySelectorAll("img"); //img 태그 전부를 가져온다.
```

> :sparkles: querySelector에는 querySelector과 querySeletorAll이 있다. :sparkles:

---

### 4.10 DOM 조작(2) - createElement, setAttribute, insertBefore

- `createElement`를 이용해 **요소 추가**하기
- `setAttribute`를 이용해 **id, class, alt와 같은 속성**들을 전달할 수 있다.

```javascript
const section = document.querySelector("section"); //querySelector를 이용해 section을 전체적으로 받아오도록 한다.
const h2 = document.createElement("h2"); //그리고 이 section에 h2를 추가한다.
h2.setAttribute("class", "title"); // <h2 class="title"></h2>
h2.textContent = "This is a title"; // <h2 class="title">This is a title</h2>
//여기까지 만들었으니 h2를 section에 추가해야한다.
```

- `ParentNode.append` => 새로운 **자식노드를 추가**할때 사용한다.
- `append`와 `appendChild`의 차이점에 대해 알아보자.
- append: string같은 것을 추가해주고 리턴되는 value가 없다. (최근에 추가된 API라 익스플로러에선 지원X)
- appendChild: 새로 추가된 자식 노드 자체를 리턴한다.
- 비록 차이점이 있지만 쉽게 생각해서 호환성을 고려한다면 appendChild를 사용하거나 append를 사용해 바벨을 사용한다.

```javascript
const section = document.querySelector("section");
const h2 = document.createElement("h2");
h2.setAttribute("class", "title");
h2.textContent = "This is a title";
section.appendChild(h2);
```

- `appendChild`라는 API를 사용하면 **컨테이너 안에서 가장 끝부분**에 추가시키게 되는 것이다.
- 그렇다면, 컨테이너의 제일 끝부분에 추가시키는 것이 아니라, **특정 부분** 혹은 **중간 부분**에 추가하려면 어떻게 해야할까?
- `parentNode.insertBefore`를 사용하면 원하는 특정 부분에 동적으로 요소를 추가할 수 있다.

```javascript
let insertedNode = parentNode.insertBefore(newNode, referenceNode);
```

- 한번 적용해보자.

```javascript
const section = document.querySelector("section");
const h2 = document.createElement("h2");
h2.setAttribute("class", "title");
h2.textContent = "This is a title";
const h3 = document.querySelector("h3"); //DOM요소로 받아오기 위해 h3을 작성해준다.
section.insertBefore(h2, h3);
```

---

# 5. DOM 완전정복 실전 - 쇼핑목록앱

---

### 5.1 쇼핑목록 앱 - HTML 마크업

- 협업에서 프로젝트를 할때 실제론 Vue나 React나 Angular를 이용해서 코드를 작성하므로 HTML 순수 마크업을 하는 일은 거의 없지만 **라이브러리, 프레임워크를 사용한다고 기본적인 것을 못해선 안된다**.
- 자바스크립트로 동적인 것을 만들기 이전에 먼저, **static**한 페이지를 먼저 만들어보자.

```html
<section class="list">
  <header class="header">Shopping List</header>
  <ul class="items"></ul>
  <!--동적으로 만들 부분-->
  <footer class="footer">
    <input type="text" class="footer__input" />
    <button class="footer__button">
      <i class="fas fa-plus"></i>
    </button>
  </footer>
</section>
```

- 위에서 `<ul class="items"></ul>`부분은 **사용자가 추가하면 DOM요소를 동적으로 추가**해볼 부분인데, 동적으로 하기 이전에 static하게 만든 것이므로 이후 JS로 작성하고 나면 지워줄 부분임을 참고하자.

```html
<ul class="items">
  <li class="item__row">
    <div class="item">
      <span class="item__name">Egg</span>
      <button class="item__delete">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  </li>
</ul>
```

---

### 5.2 쇼핑목록 앱 - CSS스타일링 + Javascript동적기능

:sparkles: 이번 챕터의 핵심 :sparkles:

> `createItem`

- paddig이나 border사이즈가 width, height에 포함될 수 있도록 box-sizing을 해준다.

```css
* {
  box-sizing: border-box;
}
```

- JS를 이용해 **동적으로 아이템 추가/삭제**까지 해보자.
- 시작에 들어가기 전에 **내가 구현할 것이 무엇인지 "정확하게 계획"하는 것이 중요하다.**

  - 사용자가 `footer__input`에 타이핑하게 하는것.
  - 사용자가 `footer__plus`버튼을 클릭하면 `item__row`에 등록되게 하는 것.(아이템 추가방법은 두가지)
    - 첫째, `footer__plus`버튼을 클릭해서 추가하는 방법
    - 둘째, 텍스트에서 `enterkey`를 치면 등록하게 하는 방법
  - 사용자가 `item__delete`버튼을 클릭하면 `item__row`에서 삭제되는 것.

- 필요한 DOM요소들을 정의해보자.

```javascript
const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");
```

- 사용할 DOM요소들을 정의했으니 **함수를 등록하자.**
- add button을 눌렀을때 이벤트처리하는 함수는 보통 `on`을 많이 붙인다. => `onClick`, `onAdd`, `onDelete`
- 내가 addBtn으로 DOM요소 등록을 했으므로, onAdd 함수를 등록시킨다.

```javascript
function onAdd() {}
```

- 내가 등록할 함수의 **로직을 작성**한다.

```javascript
function onAdd() {
  // 1. 사용자가 입력한 input text를 받는다.
  // 2. 새로운 아이템을 만들어낸다. => 사용자가 입력했던 텍스트 + 삭제 버튼
  // 3. items 컨테이너 안에 새로 만든 아이템을 추가한다.
  // 4. 새롭게 추가된 아이템으로 스크롤링 시킨다.
  // 5. 사용자가 입력했던 input을 초기화 + 마우스 포커스 해놓는다.
}
```

- onAdd(plus버튼)핸들링 작성

```javascript
//addBtn을 클릭하면 onAdd함수를 콜백(호출)한다.
addBtn.addEventListenter("click", () => {
  onAdd();
});
```

- 1번인 **"1. 사용자가 입력한 input text를 받는다."**를 작성해보자.

```javascript
const text = input.value;
console.log(text); //항상 console.log로 확인하면서 하자.
//사용자가 아무것도 입력하지 않았다면, 마우스focus를 주고 그냥 나간다(리턴한다.)
if (text === "") {
  input.focus();
  return;
}
```

- 2번인 **"2. 새로운 아이템을 만들어낸다. => 사용자가 입력했던 텍스트 + 삭제 버튼"**을 작성해보자.

```javascript
function addAdd(){
  const item = createItem(text);
  ...
}

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const name = document.createElement("span");
  name.setAttribute("class", "item__name");
  name.innerText = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item__delete");
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.addEventListener("click", () => {
    items.removeChild(itemRow);
  });

  const itemDivider = document.createElement("div");
  itemDivider.setAttribute("class", "item__divider");

  //아이템에 span과 delete버튼을 넣어줘야한다.
  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;
}

```

- 3번인 **"3. items 컨테이너 안에 새로 만든 아이템을 추가한다."**를 작성해보자.

```javascript
items.appendChild(item);
```

- 4번인 **"4. 새롭게 추가된 아이템으로 스크롤링 시킨다."**를 작성해보자.

```javascript
item.scrollIntoView({ block: "center" });
```

- 5번인 **"5. 사용자가 입력했던 input을 초기화 + 마우스 포커스 해놓는다."**를 작성해보자.

```javascript
input.value = "";
```

> "협업에서 주석을 작성할 때의 주의점"
> 주석 작성시, 공부할때처럼 설명을 작성하면 가독성이 떨어진다.
> 따라서 주석은 - 이 함수는 무엇이며(어떤 함수이며) - 어떤 의도로 만들어 졌으며 - 어떻게 사용해야 하며 - 왜 만들어 졌는지 .....
> 를 설명할 때만 작성한다.
> "왜"를 설명할 때만 사용하는것이 주석이다.

---

---

# Events

---

### 6.1 Events

- 브라우저를 이야기할 때 이벤트를 빼놓고 이야기 할 수 없다.
- 이벤트는 브라우저 안에서 이곳 저곳 발생하므로 정상적인 처리가 매우 중요하다.
- 이벤트가 무엇이며, 이벤트 안에 어떤 내용이 있으며, 이벤트를 처리함에 어떤 것을 유의해야 하는지 알아보자.

  - mouse click: 사용자 클릭
  - mouse click: 사용자 클릭
  - keyboard: 사용자 키보드
  - resizing window: 윈도우창 크기 변경
  - close window: 윈도우가 꺼졌을때
  - page loading: 페이지 로딩
  - form submission: 사용자가 입력한 내용을 제출할때
  - video is being played: 비디오, 미디어들이 재생, 중지될때
  - error: 에러발생
  - ...

- 이렇게 많은 event가 존재하는데 내가 모두 Handling하진 않는다.
- 그저 내가 원하거나 handling하고 싶은 부분에만 event를 처리한다.
- 그러기 위해 내가 특정한 요소에 **이벤트 핸들러**를 등록하게 된다.

  > Event Handler: 어느 부분이 클릭됐고, 어느 요소가 클릭되었는지 등 다양한 정보를 가진 이벤트 오브젝트를, 내가 등록한 콜백함수에 전달한다.

```javascript
$0.addEventListener('click'=> { //addEventListner = > 내가 등록한 함수를 호출해줘
  console.log("clicked");
});
```

- `EventTarget.addEventListener()`: 이벤트 추가
- `EventTarget.removeEventListener()`: 이벤트 제거
- `EventTarget.dispatchEvent()`: **인공**적으로 이벤트 발생(전달)

```javascript
const listener = () => {
  console.log("clicked");
};
$0.addEventListner("click", listener);
$0.removeEventListner("click", listener);
```

[Events 개념](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events "Events 개념")
[Events 종류](https://developer.mozilla.org/en-US/docs/Web/Events "Events 종류")

---

### Bubbling & Capturing

- 브라우저에서 이벤트를 처리하는 **bubbling과 capturing**에 대해서 알아보자.

  > 버블링(bubbling)
  > 한 요소에서 이벤트가 발생하면, 이 요소에 할당된 핸들러가 동작하는데 곧 이어 부모의 요소의 핸들러까지도 동작하게 되면서 최상단의 부모 요소까지 할당된 핸들러가 반복되는 것
  > 즉, 이벤트 버블링은 이벤트가 가장 깊은 곳에 있는 요소에서부터 부모요소를 거슬러 올라가며 발생하는 것을 의미한다.
  > ![RenderTree](/imgs/bubbling.png)
  > :
  > `event.target`: 실제 이벤트가 시작된 타깃 요소로, 버블링이 진행되도 변하지 않음.
  > `this` 혹은 `event.currentTarget`: **현재**요소로, 현재 실행중인 핸들러가 할당된 요소를 참조함.

- 그렇다면 **버블링 이벤트를 중단**시킬 수도 있는가?
- `event.stopPropagation();`, `event.stopImmediatePropagation();`를 사용해서 버블링을 중단하기도 한다. 하지만 **버블링은 유용하다.** 버블링을 꼭! 멈춰야하는 명백한 상황이 아니라면 버블링은 디버깅을 불러올 뿐이다. 따라서 사용하지 않고 아래와 같은 코드를 작성하 등 다른 코드들로 방지한다.

```javascript
outer.addEventListener("click", () => {
  if (event.target !== event.currentTarget) {
    return;
  }
  console.log(`outer: ${event.currentTarget}, ${event.target}`);
});
```

---

# 2. What's React?

---

### 2.1 리액트를 배워야 하는 이유

-
-
-
-

:sparkles: 이번 챕터의 핵심 :sparkles:

> `인라인 코드`

```javascript
function test() {
  console.log("hello world!");
}
```

- ![RenderTree](/imgs/rendering.png)
- [Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing "Box model")

---
