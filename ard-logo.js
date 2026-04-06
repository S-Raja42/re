const emblem = document.getElementById("emblem");
const brand = document.getElementById("brand");

window.addEventListener("mousemove", (event) => {
  const { innerWidth, innerHeight } = window;
  const x = (event.clientX / innerWidth - 0.5) * 16;
  const y = (event.clientY / innerHeight - 0.5) * 16;

  emblem.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
  brand.style.transform = `translate3d(${x * 0.35}px, ${y * 0.25}px, 0)`;
});

window.addEventListener("mouseleave", () => {
  emblem.style.transform = "rotateX(0deg) rotateY(0deg)";
  brand.style.transform = "translate3d(0,0,0)";
});
