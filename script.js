const API_KEY = "6b6d143f-b3b8-4a38-97c5-2ba6f5fbb7eb";
const container = document.getElementById("matches");

// 🔁 Fallback data (अगर API fail हो जाए)
const demoMatches = [
  {
    name: "RCB vs SRH",
    status: "Live",
    score: "RCB 145/4 (16.2)"
  }
];

// 🎯 Show function
function showMatches(matches) {
  container.innerHTML = "";

  matches.forEach(match => {
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

// 🌐 Load real matches
async function loadMatches() {
  container.innerHTML = "Loading live matches...";

  try {
    const res = await fetch(
      `https://api.allorigins.win/raw?url=https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&offset=0`
    );

    const data = await res.json();

    if (!data.data || data.data.length === 0) {
      showMatches(demoMatches);
      return;
    }

    const matches = data.data.map(m => ({
      name: m.name,
      status: m.status,
      score: m.score
        ? `${m.score[0]?.r}/${m.score[0]?.w}`
        : "No score"
    }));

    showMatches(matches);

  } catch (error) {
    console.log("API failed, using demo");
    showMatches(demoMatches);
  }
}

// 🚀 Run
loadMatches();

// 🔁 Auto refresh every 20 sec
setInterval(loadMatches, 20000);
