const countyMap = {
  // LANWT — 114 counties
  "Andrews": "lanwt", "Archer": "lanwt", "Armstrong": "lanwt", "Bailey": "lanwt",
  "Baylor": "lanwt", "Borden": "lanwt", "Briscoe": "lanwt", "Brown": "lanwt",
  "Callahan": "lanwt", "Carson": "lanwt", "Castro": "lanwt", "Childress": "lanwt",
  "Clay": "lanwt", "Cochran": "lanwt", "Coke": "lanwt", "Coleman": "lanwt",
  "Collin": "lanwt", "Collingsworth": "lanwt", "Comanche": "lanwt", "Concho": "lanwt",
  "Cooke": "lanwt", "Cottle": "lanwt", "Crane": "lanwt", "Crosby": "lanwt",
  "Dallam": "lanwt", "Dallas": "lanwt", "Dawson": "lanwt", "Deaf Smith": "lanwt",
  "Denton": "lanwt", "Dickens": "lanwt", "Donley": "lanwt", "Eastland": "lanwt",
  "Ector": "lanwt", "Ellis": "lanwt", "Erath": "lanwt", "Fannin": "lanwt",
  "Fisher": "lanwt", "Floyd": "lanwt", "Foard": "lanwt", "Gaines": "lanwt",
  "Garza": "lanwt", "Glasscock": "lanwt", "Gray": "lanwt", "Grayson": "lanwt",
  "Hale": "lanwt", "Hall": "lanwt", "Hansford": "lanwt", "Hardeman": "lanwt",
  "Hartley": "lanwt", "Haskell": "lanwt", "Hemphill": "lanwt", "Hockley": "lanwt",
  "Hood": "lanwt", "Howard": "lanwt", "Hunt": "lanwt", "Hutchinson": "lanwt",
  "Irion": "lanwt", "Jack": "lanwt", "Johnson": "lanwt", "Jones": "lanwt",
  "Kaufman": "lanwt", "Kent": "lanwt", "King": "lanwt", "Knox": "lanwt",
  "Lamb": "lanwt", "Lipscomb": "lanwt", "Loving": "lanwt", "Lubbock": "lanwt",
  "Lynn": "lanwt", "Martin": "lanwt", "McCulloch": "lanwt", "Menard": "lanwt",
  "Midland": "lanwt", "Mills": "lanwt", "Mitchell": "lanwt", "Montague": "lanwt",
  "Moore": "lanwt", "Motley": "lanwt", "Nolan": "lanwt", "Ochiltree": "lanwt",
  "Oldham": "lanwt", "Palo Pinto": "lanwt", "Parker": "lanwt", "Parmer": "lanwt",
  "Potter": "lanwt", "Randall": "lanwt", "Reagan": "lanwt", "Roberts": "lanwt",
  "Rockwall": "lanwt", "Runnels": "lanwt", "San Saba": "lanwt", "Schleicher": "lanwt",
  "Scurry": "lanwt", "Shackelford": "lanwt", "Sherman": "lanwt", "Somervell": "lanwt",
  "Stephens": "lanwt", "Sterling": "lanwt", "Stonewall": "lanwt", "Swisher": "lanwt",
  "Tarrant": "lanwt", "Taylor": "lanwt", "Terry": "lanwt", "Throckmorton": "lanwt",
  "Tom Green": "lanwt", "Upton": "lanwt", "Ward": "lanwt", "Wheeler": "lanwt",
  "Wichita": "lanwt", "Wilbarger": "lanwt", "Winkler": "lanwt", "Wise": "lanwt",
  "Yoakum": "lanwt", "Young": "lanwt",

  // TRLA — 68 counties
  "Aransas": "trla", "Atascosa": "trla", "Bandera": "trla", "Bastrop": "trla",
  "Bee": "trla", "Bexar": "trla", "Blanco": "trla", "Brewster": "trla",
  "Brooks": "trla", "Burnet": "trla", "Caldwell": "trla", "Calhoun": "trla",
  "Cameron": "trla", "Comal": "trla", "Crockett": "trla", "Culberson": "trla",
  "Dewitt": "trla", "Dimmit": "trla", "Duval": "trla", "Edwards": "trla",
  "El Paso": "trla", "Frio": "trla", "Gillespie": "trla", "Goliad": "trla",
  "Gonzales": "trla", "Guadalupe": "trla", "Hays": "trla", "Hidalgo": "trla",
  "Hudspeth": "trla", "Jackson": "trla", "Jeff Davis": "trla", "Jim Hogg": "trla",
  "Jim Wells": "trla", "Karnes": "trla", "Kendall": "trla", "Kenedy": "trla",
  "Kerr": "trla", "Kimble": "trla", "Kinney": "trla", "Kleberg": "trla",
  "La Salle": "trla", "Lavaca": "trla", "Live Oak": "trla", "Llano": "trla",
  "Mason": "trla", "Maverick": "trla", "McMullen": "trla", "Medina": "trla",
  "Nueces": "trla", "Pecos": "trla", "Presidio": "trla", "Real": "trla",
  "Reeves": "trla", "Refugio": "trla", "San Patricio": "trla", "Starr": "trla",
  "Sutton": "trla", "Terrell": "trla", "Travis": "trla", "Uvalde": "trla",
  "Val Verde": "trla", "Victoria": "trla", "Webb": "trla", "Willacy": "trla",
  "Williamson": "trla", "Wilson": "trla", "Zapata": "trla", "Zavala": "trla",

  // LSLA — 71 non-Harris counties
  "Anderson": "lsla", "Angelina": "lsla", "Austin": "lsla", "Bell": "lsla",
  "Bosque": "lsla", "Bowie": "lsla", "Brazoria": "lsla", "Brazos": "lsla",
  "Burleson": "lsla", "Camp": "lsla", "Cass": "lsla", "Chambers": "lsla",
  "Cherokee": "lsla", "Colorado": "lsla", "Coryell": "lsla", "Delta": "lsla",
  "Falls": "lsla", "Fayette": "lsla", "Fort Bend": "lsla", "Franklin": "lsla",
  "Freestone": "lsla", "Galveston": "lsla", "Gregg": "lsla", "Grimes": "lsla",
  "Hamilton": "lsla", "Hardin": "lsla", "Harrison": "lsla", "Henderson": "lsla",
  "Hill": "lsla", "Hopkins": "lsla", "Houston": "lsla", "Jasper": "lsla",
  "Jefferson": "lsla", "Lamar": "lsla", "Lampasas": "lsla", "Lee": "lsla",
  "Leon": "lsla", "Liberty": "lsla", "Limestone": "lsla", "Madison": "lsla",
  "Marion": "lsla", "Matagorda": "lsla", "McLennan": "lsla", "Milam": "lsla",
  "Montgomery": "lsla", "Morris": "lsla", "Nacogdoches": "lsla", "Navarro": "lsla",
  "Newton": "lsla", "Orange": "lsla", "Panola": "lsla", "Polk": "lsla",
  "Rains": "lsla", "Red River": "lsla", "Robertson": "lsla", "Rusk": "lsla",
  "Sabine": "lsla", "San Augustine": "lsla", "San Jacinto": "lsla", "Shelby": "lsla",
  "Smith": "lsla", "Titus": "lsla", "Trinity": "lsla", "Tyler": "lsla",
  "Upshur": "lsla", "Van Zandt": "lsla", "Walker": "lsla", "Waller": "lsla",
  "Washington": "lsla", "Wharton": "lsla", "Wood": "lsla",

  // Harris County — served by both LSLA and Beacon Law
  "Harris": "harris",
};

const orgInfo = {
  lanwt: {
    name: "Legal Aid of Northwest Texas",
    desc: "Serving 114 counties across North, West, and Central Texas.",
    url: "https://www.lanwt.org",
    label: "Visit Legal Aid of NW Texas",
  },
  trla: {
    name: "Texas RioGrande Legal Aid (TRLA)",
    desc: "Serving 68 counties across South, West, and Central Texas.",
    url: "https://www.trla.org",
    label: "Visit TRLA",
  },
  lsla: {
    name: "Lone Star Legal Aid",
    desc: "Serving 72 counties across East and Southeast Texas, including Houston.",
    url: "https://lonestarlegal.org",
    label: "Visit Lone Star Legal Aid",
  },
};

function handleCountySubmit(e) {
  e.preventDefault();
  const county = document.getElementById("county-select").value;
  const resultEl = document.getElementById("county-result");

  if (!county) {
    alert("Please select your county.");
    return;
  }

  const org = countyMap[county];
  resultEl.innerHTML = "";
  resultEl.className = "county-result visible";

  if (org === "harris") {
    resultEl.innerHTML = `
      <div class="county-result__header">Harris County (Houston) — Two Organizations Serve Your Area</div>
      <div class="county-result__body">
        <p class="county-result__desc" style="margin-bottom:20px;">Both organizations below provide free legal assistance in Harris County. Visit either one to get help with your expunction.</p>
        <div class="county-result__dual">
          <div class="county-result__dual-card">
            <h4>Lone Star Legal Aid</h4>
            <p>Free civil legal services for low-income Texans in the Houston area.</p>
            <a href="https://lonestarlegal.org" target="_blank" rel="noopener">Visit Lone Star Legal Aid</a>
          </div>
          <div class="county-result__dual-card">
            <h4>Beacon Law</h4>
            <p>Free legal services for people experiencing homelessness and low-income individuals in Houston.</p>
            <a href="https://www.jotform.com/beaconlaw/record-clearing" target="_blank" rel="noopener">Visit Beacon Law</a>
          </div>
        </div>
      </div>`;
  } else {
    const info = orgInfo[org];
    resultEl.innerHTML = `
      <div class="county-result__header">${county} County — Your Legal Aid Organization</div>
      <div class="county-result__body">
        <p class="county-result__org">${info.name}</p>
        <p class="county-result__desc">${info.desc}</p>
        <a class="county-result__link" href="${info.url}" target="_blank" rel="noopener">${info.label} →</a>
      </div>`;
  }

  resultEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

document.addEventListener("DOMContentLoaded", () => {
  // Populate dropdown
  const select = document.getElementById("county-select");
  const counties = Object.keys(countyMap).sort();
  counties.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c + " County";
    select.appendChild(opt);
  });

  document.getElementById("county-form").addEventListener("submit", handleCountySubmit);
});
