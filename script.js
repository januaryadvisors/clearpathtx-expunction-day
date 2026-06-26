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
    name: "Legal Aid of NorthWest Texas",
    desc: "Serving 114 counties across North, West, and Central Texas.",
    url: "https://lanwtoi.legalserver.org/modules/matter/extern_intake.php?pid=132&h=f0baaf&",
    label: "Apply",
  },
  trla: {
    name: "Texas RioGrande Legal Aid (TRLA)",
    desc: "Serving 68 counties across South, West, and Central Texas.",
    url: "https://www.trla.org/help",
    label: "Apply",
  },
  lsla: {
    name: "Lone Star Legal Aid",
    desc: "Serving 72 counties across East and Southeast Texas, including Houston.",
    url: "https://lslaoi.legalserver.org/modules/matter/extern_intake.php?pid=132&h=f0baaf&state_uuid=af9cb316-601e-11f1-ac7d-0eea33fe5494&f=375&d_id=6",
    label: "Apply",
  },
};

// Per-county apply-link overrides.
//  - LANWT counties default to the LegalServer intake link (see orgInfo.lanwt).
//    Lubbock, Taylor (Abilene), and Collin (McKinney) keep the Microsoft Forms
//    intake instead. Dallas is an in-person clinic — see countyInPerson below.
//  - TRLA: Brewster uses a county-specific intake form; all other TRLA counties
//    (including El Paso) fall back to the general help page.
// NOTE: remove the Brewster override on 2026-08-02 (it falls back to trla.org/help).
const LANWT_MS_FORM = "https://forms.cloud.microsoft/r/5cCiuTLXPG?origin=lprLink";
const countyUrlOverrides = {
  "Lubbock": LANWT_MS_FORM,
  "Taylor": LANWT_MS_FORM,
  "Collin": LANWT_MS_FORM,
  "Brewster": "https://forms.office.com/pages/responsepage.aspx?id=r_0sCXTsb0OJ74sahFt5f3aNFzITsmxHmvIcPn0n095UNkxMVlBTQlpYUUEwTzczTk1WMjFXOU02VC4u&route=shorturl",
};

// Counties whose clinics are in person — these render a location/instructions
// panel instead of an apply link.
const countyInPerson = {
  "Dallas": {
    org: "Legal Aid of NorthWest Texas",
    desc: "The Dallas County clinic will be held in person. No online application is required — please come to the clinic site:",
    html: `<p class="county-result__inperson-place">Dooney Barber and Beauty Academy<br>4333 Gannon Ln #115, Dallas, TX 75237</p>`,
  },
  "Bowie": {
    org: "Lone Star Legal Aid",
    desc: "Please apply in person at one of the following locations:",
    html: `
      <ul class="county-result__inperson-list">
        <li>Texarkana Homeless Coalition</li>
        <li>Randy Sams Shelter</li>
        <li>Mission Texarkana</li>
        <li>Bowie County Family Health Center</li>
      </ul>
      <p class="county-result__inperson-hours">Outreach will take place from 10:00 a.m. to 2:00 p.m.</p>`,
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

  if (countyInPerson[county]) {
    const ip = countyInPerson[county];
    resultEl.innerHTML = `
      <div class="county-result__header">${county} County — In-Person Clinic</div>
      <div class="county-result__body">
        <p class="county-result__org">${ip.org}</p>
        <p class="county-result__desc">${ip.desc}</p>
        ${ip.html}
      </div>`;
  } else if (org === "harris") {
    resultEl.innerHTML = `
      <div class="county-result__header">Harris County (Houston) — Two Organizations Serve Your Area</div>
      <div class="county-result__body">
        <p class="county-result__desc" style="margin-bottom:20px;">Both organizations below provide free legal assistance in Harris County. Visit either one to get help with your expunction.</p>
        <div class="county-result__dual">
          <div class="county-result__dual-card">
            <h4>Lone Star Legal Aid</h4>
            <p>Free civil legal services for low-income Texans in the Houston area.</p>
            <a href="https://lslaoi.legalserver.org/modules/matter/extern_intake.php?pid=132&h=f0baaf&state_uuid=af9cb316-601e-11f1-ac7d-0eea33fe5494&f=375&d_id=6" target="_blank" rel="noopener">Apply</a>
          </div>
          <div class="county-result__dual-card">
            <h4>Beacon Law</h4>
            <p>Free legal services for people experiencing homelessness and low-income individuals in Houston.</p>
            <a href="https://www.jotform.com/beaconlaw/record-clearing" target="_blank" rel="noopener">Apply</a>
          </div>
        </div>
      </div>`;
  } else {
    const info = orgInfo[org];
    const url = countyUrlOverrides[county] || info.url;
    resultEl.innerHTML = `
      <div class="county-result__header">${county} County — Your Legal Aid Organization</div>
      <div class="county-result__body">
        <p class="county-result__org">${info.name}</p>
        <p class="county-result__desc">${info.desc}</p>
        <a class="county-result__link" href="${url}" target="_blank" rel="noopener">${info.label} →</a>
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

  // Leaving-site confirmation for external links (e.g. Texas Law Help).
  const modal = document.getElementById("leave-modal");
  const continueBtn = document.getElementById("leave-modal-continue");

  const openModal = (url) => {
    continueBtn.href = url;
    modal.hidden = false;
  };
  // Note: don't clear continueBtn.href here — closeModal also runs on the
  // Continue click, and resetting the href before the browser follows the
  // link would send the new tab to "#". openModal sets a fresh href each time.
  const closeModal = () => {
    modal.hidden = true;
  };

  document.querySelectorAll("a[data-external]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(link.href);
    });
  });

  modal.querySelectorAll("[data-leave-cancel]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });
  continueBtn.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });
});
