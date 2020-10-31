const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

function onAdd() {
  // 1. 사용자가 입력한 input text를 받는다.(value값을 이용해 받아올 수 있다.)
  const text = input.value;
  //사용자가 아무것도 입력하지 않았다면, 마우스focus를 주고 그냥 나간다(리턴한다.)
  if (text === "") {
    input.focus();
    return;
  }
  // 2. 새로운 아이템을 만들어낸다. => 사용자가 입력했던 텍스트 + 삭제 버튼
  const item = createItem(text);
  // 3. items 컨테이너 안에 새로 만든 아이템을 추가한다.
  items.appendChild(item);
  // 4. 사용자가 입력했던 input을 초기화 + 마우스 포커스 해놓는다.
  input.value = "";
  input.focus();
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

// (plus)버튼 핸들링
addBtn.addEventListener("click", () => {
  onAdd();
});

// 사용자가 input에서 keypress를 누르면 아이템을 등록하자.
input.addEventListener("keypress", (event) => {});
