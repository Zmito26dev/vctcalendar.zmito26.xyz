const today = new Date();
const formattedDate = String(today.getDate()).padStart(2, '0')+"/"+String(today.getMonth() + 1).padStart(2, '0');

document.getElementById("match-day").value = formattedDate;
document.getElementById("1-match-hour").value = "10:00";
document.getElementById("2-match-hour").value = "13:00";
const teams = ['TH', 'FNC', 'BLG', 'DRX', 'KRU', 'GEN', 'SEN', 'FPX', 'LEV', 'TLN', 'VIT', 'TE', 'EDG', 'FUT', 'G2', 'PRX'];
const selectIds = ["1-match-1-team", "1-match-2-team", "2-match-1-team", "2-match-2-team"];

selectIds.forEach(id => {
  const selectElement = document.getElementById(id);
  teams.forEach(team => {
    const option = document.createElement("option");
    option.value = "./assets/teams/"+team+".png";
    option.text = team;
    selectElement.appendChild(option);
  });
});


const ImageCanvas = document.getElementById('image-canvas');
const ctx = ImageCanvas.getContext('2d');

window.addEventListener('keydown', (event) => {
  if (event.altKey && event.key === 'q') {
    if (!ImageCanvas.classList.contains("show-canvas")) {
      document.getElementById('options').classList.add("op-debug")
      ImageCanvas.classList.add("show-canvas")
    } else {
      document.getElementById('options').classList.remove("op-debug")
      ImageCanvas.classList.remove("show-canvas")
    }
  }
});

// Text font, size and position.
ctx.font = '100px Foundry';
ctx.fillStyle = 'white';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

const imgFondo = new Image();
const m1t1img = new Image();
const m1t2img = new Image();
const m2t1img = new Image();
const m2t2img = new Image();

imgFondo.src = './assets/background.png';

let teamIconLoaded = 0;
function checkFinishLoaded() {
  if (teamIconLoaded === 4) {
    const dataURL = ImageCanvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = "VCT-CALENDAR-"+document.getElementById('match-day').value.split('/').join('')+".png";
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

document.getElementById("gen-img-btn").addEventListener('click', () => {
  document.getElementById('options').classList.add("op-debug")
  ImageCanvas.classList.add("show-canvas")
  m1t1img.src = document.getElementById('1-match-1-team').value
  m1t2img.src = document.getElementById('1-match-2-team').value
  m2t1img.src = document.getElementById('2-match-1-team').value
  m2t2img.src = document.getElementById('2-match-2-team').value
  ctx.drawImage(imgFondo, 0, 0, ImageCanvas.width, ImageCanvas.height);
  ctx.fillText(document.getElementById('match-day').value, 500, 245);
  m1t1img.onload = () => {
    ctx.drawImage(m1t1img, 200, 350, 180, 180);
    teamIconLoaded++;
    checkFinishLoaded();
  };
  m1t2img.onload = () => {
    ctx.drawImage(m1t2img, 620, 350, 180, 180);
    teamIconLoaded++;
    checkFinishLoaded();
  };
  m2t1img.onload = () => {
    ctx.drawImage(m2t1img, 200, 615, 180, 180);
    teamIconLoaded++;
    checkFinishLoaded();
  };
  m2t2img.onload = () => {
    ctx.drawImage(m2t2img, 620, 615, 180, 180);
    teamIconLoaded++;
    checkFinishLoaded();
  };
});