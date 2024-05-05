let btn = document.querySelectorAll(".box button");
let winnerText = document.querySelector("#winnerText");
let hand = "x";
let state = [];
let matches = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];


const reset = () => {
  state.forEach((s, index) => {
    state[index] = ''
  })

  btn.forEach((b, _) => {
    b.removeAttribute("disabled");
    b.innerText = "";
  })
  winnerText.innerText = ``;

}

const checkWinner = (h) => {
  matches.forEach((match, _) => {
    let [x, y, z] = match;
    if ((state[x] && state[y] && state[z]) && (state[x] == state[y] && state[y] == state[z])) {
      winnerText.innerText = `${h} is winner`;
      btn.forEach((b, _) => {
        b.disabled = true;
      })
    }
  })
}

btn.forEach((b, _) => {
  b.addEventListener("click", (e) => {
    let id = parseInt(e.target.id);
    state[id] = hand;
    console.log(state);
    document.getElementById(e.target.id).textContent = hand;
    document.getElementById(e.target.id).disabled = true;

    checkWinner(hand);
    hand = (hand == "x" ? "O" : "x");

  })
})
