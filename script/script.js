function increaseScore(id) {
  const score = document.getElementById(id);
  score.textContent = parseInt(score.textContent) + 1;
}

function decreaseScore(id) {
  const score = document.getElementById(id);
  if (parseInt(score.textContent) > 0) {
    score.textContent = parseInt(score.textContent) - 1;
  }
}

function changeName(teamId) {
  const newName = prompt("Enter new team name:");
  if (newName) {
    document.querySelector(`#${teamId} h2`).textContent = newName;
  }
}
