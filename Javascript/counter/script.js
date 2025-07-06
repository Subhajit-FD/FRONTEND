let val = document.querySelector("#counter");
let add = document.querySelector("#add");
let sub = document.querySelector("#sub");
let reset = document.querySelector("#reset");

let count = 0;

add.addEventListener("click", () => {
  count++;
  val.textContent = count;
});

sub.addEventListener("click", () => {
  // Condition to stop the counter to go below 0
  if (count == 0) {
    count = 0;
    val.textContent = count;
  } else {
    count--;
    val.textContent = count;
  }
});

reset.addEventListener("click", () => {
  count = 0;
  val.textContent = count;
});
