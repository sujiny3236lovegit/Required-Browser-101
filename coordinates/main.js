const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

document.addEventListener("mousemove", (event) => {
  // console.log(`${event.clientX}`);
  const x = event.clientX;
  const y = event.clientY;
  console.log(`${x} ${y}`);

  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  tag.style.top = `${x}px`;
  tag.style.left = `${y}px`;

  // x값과 y값을 마우스 위치에 따라 위치값으로 변경시키기
  tag.innerHTML = `${x}px, ${y}px`;
});
