const container = document.getElementById("matches");

const demoMatches = [
  {
    name: "RCB vs SRH",
    status: "Live",
    score: "RCB 145/4 (16.2)"
  },
  {
    name: "MI vs CSK",
    status: "Upcoming",
    score: "Starts 7:30 PM"
  },
  {
    name: "KKR vs DC",
    status: "Result",
    score: "KKR won by 5 wickets"
  }
];

function showMatches() {
  container.innerHTML = "";

  demoMatches.forEach(match => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${match.name}</h3>
      <p>${match.status}</p>
      <p>${match.score}</p>
      <hr>
    `;

    container.appendChild(div);
  });
}

showMatches();
