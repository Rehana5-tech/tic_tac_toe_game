"use strick";

let btns = document.querySelectorAll(".btn");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");
let turno = true;
let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [0, 4, 7],
  [2, 5, 8],
  [1, 4, 7],
  [2, 4, 6],
];
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("button was click");
    if (turno) {
      btn.innerText = "O";
      turno = false;
    } else {
      btn.innerText = "X";
      turno = true;
    }
    btn.disabled = true;
    checkWinner();
  });
});

const showWinner = (winner) => {
  msg.innerText = `Congratulations ,winner is ${winner} `;
  msgcontainer.classList.remove("hide");
};
const checkWinner = () => {
  for (let pattern of winPattern) {
    // console.log(pattern);
    // console.log(btns[pattern[0]], btns[pattern[1]], btns[pattern[2]]);
    let pos1val = btns[pattern[0]].innerText;
    let pos2val = btns[pattern[1]].innerText;
    let pos3val = btns[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("Winner", pos1val);
        showWinner(pos1val);
      }
    }
  }
};
