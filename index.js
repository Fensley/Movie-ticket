const pink = document.querySelectorAll(".pink");

pink.forEach((e) => {
  e.addEventListener("click", () => {
    const w = e.classList.toggle("black");
  });
});
