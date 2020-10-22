const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

addEventListener("load", () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener("mousemove", (event) => {
    // console.log(`${event.clientX}`);
    const x = event.clientX;
    const y = event.clientY;
    console.log(`${x} ${y}`);

    // vertical.style.left = `${x}px`;
    // horizontal.style.top = `${y}px`;
    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;

    // target.style.left = `${x}px`;
    // target.style.top = `${y}px`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`;

    // tag.style.top = `${x}px`;
    // tag.style.left = `${y}px`;
    tag.style.transform = `translate(${x}px, ${y}px)`;

    // x값과 y값을 마우스 위치에 따라 위치값으로 변경시키기
    tag.innerHTML = `${x}px, ${y}px`;
  });
});
