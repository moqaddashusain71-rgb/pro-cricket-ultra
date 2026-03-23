const container = document.getElementById("matches");

// 🔁 Fake + Safe Data (fallback)
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

// 🎯 Show Matches
function showMatches(matches) {
  container.innerHTML = "";

  matches.forEach(match => {
    const div = document.createElement("div");
    div.style.border = "1px solid white";
    div.style.margin = "10px";
    div.style.padding = "10px";

    div.innerHTML = `
      <h3>${match.name}</h3>
      <p>${match.status}</p>
      <p>${match.score}</p>
    `;

    container.appendChild(div);
  });
}

// 🔥 Try API (optional)
async function loadRealMatches() {
  try {
    const res = await fetch("https://api.allorigins.win/raw?url=https://api.cricapi.com/v1/currentMatches?apikey=YOUR_API_KEY");
    const data = await res.json();

    const realMatches = data.data.map(m => ({
      name: m.name,
      status: m.status,
      score: m.score ? `${m.score[0]?.r}/${m.score[0]?.w}` : "N/A"
    }));

    showMatches(realMatches);

  } catch (error) {
    console.log("API failed, showing demo data");
    showMatches(demoMatches);
  }
}

// 🚀 Load
loadRealMatches();

// 🔁 Auto refresh every 15 sec
setInterval(loadRealMatches, 15000);
