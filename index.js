const today = new Date();
const formattedDate = String(today.getDate()).padStart(2, '0')+"/"+String(today.getMonth() + 1).padStart(2, '0');

document.getElementById("match-day").value = formattedDate;
document.getElementById("1-match-hour").value = "10:00";
document.getElementById("2-match-hour").value = "13:00";
const teams = {'TH': 'https://owcdn.net/img/637b7557a9225.png', 'FNC': 'https://owcdn.net/img/62a40cc2b5e29.png', 'BLG': 'https://owcdn.net/img/63f25d72216c1.png', 'DRX': 'https://owcdn.net/img/63b17ac3a7d00.png', 'KRU': 'https://owcdn.net/img/63976677069e1.png', 'GENG': 'https://owcdn.net/img/662f72041aff8.png', 'SEN': 'https://owcdn.net/img/62875027c8e06.png', 'FPX': 'https://owcdn.net/img/65a17b313b131.png', 'LEV': 'https://owcdn.net/img/61b88892a9814.png', 'TLN': 'https://owcdn.net/img/6226f3d764e03.png', 'VIT': 'https://owcdn.net/img/6466d7936fd86.png', 'TE': 'https://owcdn.net/img/6433a2d3b58c9.png', 'EDG': 'https://owcdn.net/img/62c8204fbb29d.png', 'FUT': 'https://owcdn.net/img/632be99c96c64.png', 'G2': 'https://owcdn.net/img/633822848a741.png', 'PRX': 'https://owcdn.net/img/62bbebb185a7e.png'}
const selectIds = ["1-match-1-team", "1-match-2-team", "2-match-1-team", "2-match-2-team"];

selectIds.forEach(id => {
  const selectElement = document.getElementById(id);
  Object.keys(teams).forEach(team => {
    const option = document.createElement("option");
    option.value = teams[team];
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
  };
  m1t2img.onload = () => {
    ctx.drawImage(m1t2img, 620, 350, 180, 180);
  };
  m2t1img.onload = () => {
    ctx.drawImage(m2t1img, 200, 615, 180, 180);
  };
  m2t2img.onload = () => {
    ctx.drawImage(m2t2img, 620, 615, 180, 180);
  };
});

// document.getElementById("dl-img-btn").addEventListener('click', () => {
//   const dataURL = ImageCanvas.toDataURL('image/png');
//   const link = document.createElement('a');
//   link.href = dataURL;
//   link.download = 'imagen.png';
//   link.style.display = 'none'; // Hide the anchor element
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link); // Remove the anchor element after download
// });
