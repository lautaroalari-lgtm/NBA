
const equiposNBA = [
  // ESTE
  { nombre: "Atlanta Hawks", sigla: "ATL", conferencia: "Este", fundacion: 1946, titulos: 1 },
  { nombre: "Boston Celtics", sigla: "BOS", conferencia: "Este", fundacion: 1946, titulos: 18 },
  { nombre: "Brooklyn Nets", sigla: "BKN", conferencia: "Este", fundacion: 1967, titulos: 0 },
  { nombre: "Charlotte Hornets", sigla: "CHA", conferencia: "Este", fundacion: 1988, titulos: 0 },
  { nombre: "Chicago Bulls", sigla: "CHI", conferencia: "Este", fundacion: 1966, titulos: 6 },
  { nombre: "Cleveland Cavaliers", sigla: "CLE", conferencia: "Este", fundacion: 1970, titulos: 1 },
  { nombre: "Detroit Pistons", sigla: "DET", conferencia: "Este", fundacion: 1941, titulos: 3 },
  { nombre: "Indiana Pacers", sigla: "IND", conferencia: "Este", fundacion: 1967, titulos: 0 },
  { nombre: "Miami Heat", sigla: "MIA", conferencia: "Este", fundacion: 1988, titulos: 3 },
  { nombre: "Milwaukee Bucks", sigla: "MIL", conferencia: "Este", fundacion: 1968, titulos: 2 },
  { nombre: "New York Knicks", sigla: "NYK", conferencia: "Este", fundacion: 1946, titulos: 2 },
  { nombre: "Orlando Magic", sigla: "ORL", conferencia: "Este", fundacion: 1989, titulos: 0 },
  { nombre: "Philadelphia 76ers", sigla: "PHI", conferencia: "Este", fundacion: 1946, titulos: 3 },
  { nombre: "Toronto Raptors", sigla: "TOR", conferencia: "Este", fundacion: 1995, titulos: 1 },
  { nombre: "Washington Wizards", sigla: "WAS", conferencia: "Este", fundacion: 1961, titulos: 1 },

  // OESTE
  { nombre: "Dallas Mavericks", sigla: "DAL", conferencia: "Oeste", fundacion: 1980, titulos: 1 },
  { nombre: "Denver Nuggets", sigla: "DEN", conferencia: "Oeste", fundacion: 1967, titulos: 1 },
  { nombre: "Golden State Warriors", sigla: "GSW", conferencia: "Oeste", fundacion: 1946, titulos: 7 },
  { nombre: "Houston Rockets", sigla: "HOU", conferencia: "Oeste", fundacion: 1967, titulos: 2 },
  { nombre: "LA Clippers", sigla: "LAC", conferencia: "Oeste", fundacion: 1970, titulos: 0 },
  { nombre: "Los Angeles Lakers", sigla: "LAL", conferencia: "Oeste", fundacion: 1947, titulos: 17 },
  { nombre: "Memphis Grizzlies", sigla: "MEM", conferencia: "Oeste", fundacion: 1995, titulos: 0 },
  { nombre: "Minnesota Timberwolves", sigla: "MIN", conferencia: "Oeste", fundacion: 1989, titulos: 0 },
  { nombre: "New Orleans Pelicans", sigla: "NOP", conferencia: "Oeste", fundacion: 2002, titulos: 0 },
  { nombre: "Oklahoma City Thunder", sigla: "OKC", conferencia: "Oeste", fundacion: 1967, titulos: 1 },
  { nombre: "Phoenix Suns", sigla: "PHX", conferencia: "Oeste", fundacion: 1968, titulos: 0 },
  { nombre: "Portland Trail Blazers", sigla: "POR", conferencia: "Oeste", fundacion: 1970, titulos: 1 },
  { nombre: "Sacramento Kings", sigla: "SAC", conferencia: "Oeste", fundacion: 1923, titulos: 1 },
  { nombre: "San Antonio Spurs", sigla: "SAS", conferencia: "Oeste", fundacion: 1967, titulos: 5 },
  { nombre: "Utah Jazz", sigla: "UTA", conferencia: "Oeste", fundacion: 1974, titulos: 0 }
];

// LOGOS
const codigosLogo = {
  ATL: "atl", BOS: "bos", BKN: "bkn", CHA: "cha", CHI: "chi",
  CLE: "cle", DET: "det", IND: "ind", MIA: "mia", MIL: "mil",
  NYK: "ny", ORL: "orl", PHI: "phi", TOR: "tor", WAS: "wsh",
  DAL: "dal", DEN: "den", GSW: "gs", HOU: "hou", LAC: "lac",
  LAL: "lal", MEM: "mem", MIN: "min", NOP: "no", OKC: "okc",
  PHX: "phx", POR: "por", SAC: "sac", SAS: "sa", UTA: "utah"
};

function logoEquipo(equipo) {
  return `https://a.espncdn.com/i/teamlogos/nba/500/${codigosLogo[equipo.sigla]}.png`;
}

// ELEMENTOS
const eastTeams = document.getElementById("eastTeams");
const westTeams = document.getElementById("westTeams");
const searchInput = document.getElementById("searchInput");
const conferenceFilter = document.getElementById("conferenceFilter");
const favoritesFilter = document.getElementById("favoritesFilter");
const teamCounter = document.getElementById("teamCounter");
const noResults = document.getElementById("noResults");

const comparisonSlots = document.getElementById("comparisonSlots");
const comparisonCounter = document.getElementById("compareCounter");
const compareButton = document.getElementById("compareButton");
const clearComparison = document.getElementById("clearComparison");
const comparisonResult = document.getElementById("comparisonResult");

const teamModal = document.getElementById("teamModal");
const teamDetails = document.getElementById("teamDetails");
const closeModal = document.getElementById("closeModal");

// ESTADO
let favoritos = cargarFavoritos();
let equiposComparacion = [];
let soloFavoritos = false;

function cargarFavoritos() {
  try {
    const datos = JSON.parse(localStorage.getItem("nbaFavoritos") || "[]");
    return Array.isArray(datos) ? datos : [];
  } catch {
    return [];
  }
}

function guardarFavoritos() {
  try {
    localStorage.setItem("nbaFavoritos", JSON.stringify(favoritos));
  } catch (error) {
    console.error("No se pudieron guardar los favoritos:", error);
  }
}

// TARJETAS
function renderizarEquipos() {
  eastTeams.innerHTML = "";
  westTeams.innerHTML = "";

  const busqueda = searchInput.value.trim().toLowerCase();
  const conferencia = conferenceFilter.value;

  const filtrados = equiposNBA.filter(equipo => {
    const coincideNombre = equipo.nombre.toLowerCase().includes(busqueda) ||
      equipo.sigla.toLowerCase().includes(busqueda);

    const coincideConferencia =
      conferencia === "Todos" || equipo.conferencia === conferencia;

    const coincideFavorito =
      !soloFavoritos || favoritos.includes(equipo.sigla);

    return coincideNombre && coincideConferencia && coincideFavorito;
  });

  filtrados.forEach(equipo => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "team-card";

    const esFavorito = favoritos.includes(equipo.sigla);
    const estaComparando = equiposComparacion.includes(equipo.sigla);

    tarjeta.innerHTML = `
      <img class="team-logo"
           src="${logoEquipo(equipo)}"
           alt="Logo de ${equipo.nombre}"
           loading="lazy">

      <h3>${equipo.nombre}</h3>
      <span class="team-code">${equipo.sigla} · ${equipo.conferencia}</span>

      <div class="card-actions">
        <button
          class="favorite-button ${esFavorito ? "active" : ""}"
          type="button"
          aria-label="${esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}"
          title="Favoritos">
          ${esFavorito ? "⭐" : "☆"}
        </button>

        <button
          class="compare-button ${estaComparando ? "active" : ""}"
          type="button"
          title="Seleccionar para comparar">
          ${estaComparando ? "✓ Elegido" : "⚔️ Comparar"}
        </button>
      </div>
    `;

    tarjeta.querySelector(".team-logo").addEventListener("error", evento => {
      evento.currentTarget.style.visibility = "hidden";
    });

    tarjeta.querySelector(".favorite-button").addEventListener("click", () => {
      alternarFavorito(equipo.sigla);
    });

    tarjeta.querySelector(".compare-button").addEventListener("click", () => {
      alternarComparacion(equipo.sigla);
    });

    tarjeta.addEventListener("dblclick", () => mostrarEquipo(equipo));

    if (equipo.conferencia === "Este") {
      eastTeams.appendChild(tarjeta);
    } else {
      westTeams.appendChild(tarjeta);
    }
  });

  teamCounter.textContent = `${filtrados.length} equipos`;
  noResults.hidden = filtrados.length !== 0;

  actualizarComparador();
}

// FAVORITOS
function alternarFavorito(sigla) {
  if (favoritos.includes(sigla)) {
    favoritos = favoritos.filter(item => item !== sigla);
  } else {
    favoritos.push(sigla);
  }

  guardarFavoritos();
  renderizarEquipos();
}

favoritesFilter.addEventListener("click", () => {
  soloFavoritos = !soloFavoritos;
  favoritesFilter.classList.toggle("selected", soloFavoritos);
  favoritesFilter.textContent = soloFavoritos
    ? "⭐ Ver todos"
    : "⭐ Mis favoritos";

  renderizarEquipos();
});

// COMPARADOR
function alternarComparacion(sigla) {
  if (equiposComparacion.includes(sigla)) {
    equiposComparacion = equiposComparacion.filter(item => item !== sigla);
  } else {
    if (equiposComparacion.length >= 2) {
      alert("Podés comparar solamente dos equipos a la vez.");
      return;
    }

    equiposComparacion.push(sigla);
  }

  comparisonResult.innerHTML = "";
  renderizarEquipos();
}

function actualizarComparador() {
  comparisonCounter.textContent =
    `${equiposComparacion.length}/2 equipos`;

  comparisonSlots.innerHTML = "";

  for (let i = 0; i < 2; i++) {
    const sigla = equiposComparacion[i];
    const equipo = equiposNBA.find(item => item.sigla === sigla);

    if (equipo) {
      const slot = document.createElement("div");
      slot.className = "comparison-team";

      const imagen = document.createElement("img");
      imagen.src = logoEquipo(equipo);
      imagen.alt = `Logo de ${equipo.nombre}`;
      imagen.addEventListener("error", () => {
        imagen.style.display = "none";
      });

      const nombre = document.createElement("strong");
      nombre.textContent = equipo.nombre;

      const posicion = document.createElement("span");
      posicion.textContent = `Equipo ${i + 1}`;

      slot.append(imagen, nombre, posicion);
      comparisonSlots.appendChild(slot);
    } else {
      const slot = document.createElement("div");
      slot.className = "empty-slot";
      slot.textContent = `${i + 1}. Elegí el ${i === 0 ? "primer" : "segundo"} equipo`;
      comparisonSlots.appendChild(slot);
    }
  }

  compareButton.disabled = equiposComparacion.length !== 2;
}

compareButton.addEventListener("click", compararEquipos);

clearComparison.addEventListener("click", () => {
  equiposComparacion = [];
  comparisonResult.innerHTML = "";
  renderizarEquipos();
});

function compararEquipos() {
  if (equiposComparacion.length !== 2) return;

  const equipo1 = equiposNBA.find(e => e.sigla === equiposComparacion[0]);
  const equipo2 = equiposNBA.find(e => e.sigla === equiposComparacion[1]);

  const filas = [
    {
      nombre: "Campeonatos NBA",
      valor1: equipo1.titulos,
      valor2: equipo2.titulos,
      gana1: equipo1.titulos > equipo2.titulos,
      gana2: equipo2.titulos > equipo1.titulos
    },
    {
      nombre: "Año de fundación",
      valor1: equipo1.fundacion,
      valor2: equipo2.fundacion,
      gana1: equipo1.fundacion < equipo2.fundacion,
      gana2: equipo2.fundacion < equipo1.fundacion
    },
    {
      nombre: "Conferencia",
      valor1: equipo1.conferencia,
      valor2: equipo2.conferencia,
      gana1: false,
      gana2: false
    }
  ];

  comparisonResult.innerHTML = `
    <table class="comparison-table">
      <thead>
        <tr>
          <th>Característica</th>
          <th>${equipo1.nombre}</th>
          <th>${equipo2.nombre}</th>
        </tr>
      </thead>
      <tbody>
        ${filas.map(fila => `
          <tr>
            <td>${fila.nombre}</td>
            <td class="${fila.gana1 ? "winner" : ""}">
              fila.valor1{fila.gana1 ? " 🏆" : ""}
            </td>
            <td class="${fila.gana2 ? "winner" : ""}">
              fila.valor2{fila.gana2 ? " 🏆" : ""}
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
    <p class="section-description">
      🏆 El resaltado indica la ventaja histórica en cada categoría.
      En año de fundación, gana el equipo más antiguo.
    </p>
  `;
}

// INFORMACIÓN DE EQUIPO
function mostrarEquipo(equipo) {
  teamDetails.innerHTML = `
    <div class="team-detail-header">
      <img class="detail-logo" src="${logoEquipo(equipo)}" alt="Logo ${equipo.nombre}">
      <h2>${equipo.nombre}</h2>
      <p>${equipo.conferencia} · ${equipo.sigla}</p>
    </div>

    <div class="detail-info">
      <p><strong>Fundación:</strong> ${equipo.fundacion}</p>
      <p><strong>Campeonatos NBA:</strong> ${equipo.titulos}</p>
      <p><strong>Conferencia:</strong> ${equipo.conferencia}</p>
      <p><strong>Abreviatura:</strong> ${equipo.sigla}</p>
    </div>

    <button class="secondary-button modal-favorite" id="modalFavorite" type="button">
      ${favoritos.includes(equipo.sigla) ? "⭐ Quitar de favoritos" : "☆ Agregar a favoritos"}
    </button>
  `;

  teamModal.classList.add("active");
  teamModal.setAttribute("aria-hidden", "false");

  document.getElementById("modalFavorite").addEventListener("click", () => {
    alternarFavorito(equipo.sigla);
    mostrarEquipo(equipo);
  });
}

function cerrarModal() {
  teamModal.classList.remove("active");
  teamModal.setAttribute("aria-hidden", "true");
}

closeModal.addEventListener("click", cerrarModal);

teamModal.addEventListener("click", evento => {
  if (evento.target === teamModal) cerrarModal();
});

document.addEventListener("keydown", evento => {
  if (evento.key === "Escape") cerrarModal();
});

// BÚSQUEDA Y FILTROS
searchInput.addEventListener("input", renderizarEquipos);
conferenceFilter.addEventListener("change", renderizarEquipos);

// INICIAR
renderizarEquipos();


