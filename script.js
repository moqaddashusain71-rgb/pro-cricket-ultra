function showLive() {
  document.getElementById("matches").innerHTML = `
    <h3>RCB vs SRH</h3>
    <p>Status: Live</p>
    <p>Score: RCB 120/3</p>
  `;
}

function showUpcoming() {
  document.getElementById("matches").innerHTML = `
    <h3>MI vs CSK</h3>
    <p>Starts: 7:30 PM</p>
  `;
}

function showResults() {
  document.getElementById("matches").innerHTML = `
    <h3>KKR vs DC</h3>
    <p>Winner: KKR</p>
  `;
}

// default load
showLive();
