const equiposNBA = [
  // CONFERENCIA ESTE
  { nombre: "Atlanta Hawks", ciudad: "Atlanta", sigla: "ATL", conferencia: "Este", fundacion: 1946, titulos: 1, estadio: "State Farm Arena", historia: "Franquicia fundada en 1946. Ganó su único campeonato en 1958, cuando jugaba en St. Louis." },
  { nombre: "Boston Celtics", ciudad: "Boston", sigla: "BOS", conferencia: "Este", fundacion: 1946, titulos: 18, estadio: "TD Garden", historia: "Una de las franquicias más exitosas de la NBA. Su historia incluye grandes figuras como Bill Russell, Larry Bird y Paul Pierce." },
  { nombre: "Brooklyn Nets", ciudad: "Brooklyn", sigla: "BKN", conferencia: "Este", fundacion: 1967, titulos: 0, estadio: "Barclays Center", historia: "La franquicia nació en la ABA y posteriormente se incorporó a la NBA." },
  { nombre: "Charlotte Hornets", ciudad: "Charlotte", sigla: "CHA", conferencia: "Este", fundacion: 1988, titulos: 0, estadio: "Spectrum Center", historia: "Equipo de Carolina del Norte conocido por su identidad y sus colores característicos." },
  { nombre: "Chicago Bulls", ciudad: "Chicago", sigla: "CHI", conferencia: "Este", fundacion: 1966, titulos: 6, estadio: "United Center", historia: "Con Michael Jordan y Scottie Pippen conquistó seis campeonatos durante los años noventa." },
  { nombre: "Cleveland Cavaliers", ciudad: "Cleveland", sigla: "CLE", conferencia: "Este", fundacion: 1970, titulos: 1, estadio: "Rocket Arena", historia: "Consiguió su primer campeonato en 2016, liderado por LeBron James." },
  { nombre: "Detroit Pistons", ciudad: "Detroit", sigla: "DET", conferencia: "Este", fundacion: 1941, titulos: 3, estadio: "Little Caesars Arena", historia: "Reconocidos por sus equipos defensivos y sus campeonatos de 1989, 1990 y 2004." },
  { nombre: "Indiana Pacers", ciudad: "Indianapolis", sigla: "IND", conferencia: "Este", fundacion: 1967, titulos: 0, estadio: "Gainbridge Fieldhouse", historia: "Franquicia histórica que ganó tres campeonatos de la ABA antes de ingresar a la NBA." },
  { nombre: "Miami Heat", ciudad: "Miami", sigla: "MIA", conferencia: "Este", fundacion: 1988, titulos: 3, estadio: "Kaseya Center", historia: "Ganó tres campeonatos NBA, con figuras como Dwyane Wade, Shaquille O'Neal y LeBron James." },
  { nombre: "Milwaukee Bucks", ciudad: "Milwaukee", sigla: "MIL", conferencia: "Este", fundacion: 1968, titulos: 2, estadio: "Fiserv Forum", historia: "Campeón en 1971 y 2021. Giannis Antetokounmpo fue protagonista del título más reciente." },
  { nombre: "New York Knicks", ciudad: "Nueva York", sigla: "NYK", conferencia: "Este", fundacion: 1946, titulos: 2, estadio: "Madison Square Garden", historia: "Una de las franquicias fundadoras de la NBA. Ganó campeonatos en 1970 y 1973." },
  { nombre: "Orlando Magic", ciudad: "Orlando", sigla: "ORL", conferencia: "Este", fundacion: 1989, titulos: 0, estadio: "Kia Center", historia: "Llegó a las Finales en 1995 y 2009, con estrellas como Shaquille O'Neal y Dwight Howard." },
  { nombre: "Philadelphia 76ers", ciudad: "Philadelphia", sigla: "PHI", conferencia: "Este", fundacion: 1946, titulos: 3, estadio: "Xfinity Mobile Arena", historia: "Franquicia histórica con figuras como Wilt Chamberlain, Julius Erving y Allen Iverson." },
  { nombre: "Toronto Raptors", ciudad: "Toronto", sigla: "TOR", conferencia: "Este", fundacion: 1995, titulos: 1, estadio: "Scotiabank Arena", historia: "Se convirtió en campeón de la NBA por primera vez en 2019." },
  { nombre: "Washington Wizards", ciudad: "Washington", sigla: "WAS", conferencia: "Este", fundacion: 1961, titulos: 1, estadio: "Capital One Arena", historia: "Ganó el campeonato de 1978 cuando la franquicia era conocida como Washington Bullets." },

  // CONFERENCIA OESTE
  { nombre: "Dallas Mavericks", ciudad: "Dallas", sigla: "DAL", conferencia: "Oeste", fundacion: 1980, titulos: 1, estadio: "American Airlines Center", historia: "Ganó su primer campeonato NBA en 2011, liderado por Dirk Nowitzki." },
  { nombre: "Denver Nuggets", ciudad: "Denver", sigla: "DEN", conferencia: "Oeste", fundacion: 1967, titulos: 1, estadio: "Ball Arena", historia: "Conquistó su primer título NBA en 2023 con Nikola Jokic como gran figura." },
  { nombre: "Golden State Warriors", ciudad: "San Francisco", sigla: "GSW", conferencia: "Oeste", fundacion: 1946, titulos: 7, estadio: "Chase Center", historia: "Una de las franquicias más ganadoras, especialmente durante la era de Stephen Curry." },
  { nombre: "Houston Rockets", ciudad: "Houston", sigla: "HOU", conferencia: "Oeste", fundacion: 1967, titulos: 2, estadio: "Toyota Center", historia: "Ganó dos campeonatos consecutivos en 1994 y 1995 con Hakeem Olajuwon." },
  { nombre: "LA Clippers", ciudad: "Los Ángeles", sigla: "LAC", conferencia: "Oeste", fundacion: 1970, titulos: 0, estadio: "Intuit Dome", historia: "La franquicia se estableció en Los Ángeles en 1984 y continúa buscando su primer campeonato." },
  { nombre: "Los Angeles Lakers", ciudad: "Los Ángeles", sigla: "LAL", conferencia: "Oeste", fundacion: 1947, titulos: 17, estadio: "Crypto.com Arena", historia: "Una de las franquicias más históricas, con leyendas como Magic Johnson, Kobe Bryant y LeBron James." },
  { nombre: "Memphis Grizzlies", ciudad: "Memphis", sigla: "MEM", conferencia: "Oeste", fundacion: 1995, titulos: 0, estadio: "FedExForum", historia: "La franquicia comenzó en Vancouver y se trasladó a Memphis en 2001." },
  { nombre: "Minnesota Timberwolves", ciudad: "Minneapolis", sigla: "MIN", conferencia: "Oeste", fundacion: 1989, titulos: 0, estadio: "Target Center", historia: "Franquicia de Minnesota que tuvo como gran figura histórica a Kevin Garnett." },
  { nombre: "New Orleans Pelicans", ciudad: "Nueva Orleans", sigla: "NOP", conferencia: "Oeste", fundacion: 2002, titulos: 0, estadio: "Smoothie King Center", historia: "La franquicia adoptó el nombre Pelicans en 2013." },
  { nombre: "Oklahoma City Thunder", ciudad: "Oklahoma City", sigla: "OKC", conferencia: "Oeste", fundacion: 1967, titulos: 1, estadio: "Paycom Center", historia: "La franquicia nació como Seattle SuperSonics y se trasladó a Oklahoma City en 2008." },
  { nombre: "Phoenix Suns", ciudad: "Phoenix", sigla: "PHX", conferencia: "Oeste", fundacion: 1968, titulos: 0, estadio: "Mortgage Matchup Center", historia: "Franquicia histórica del Oeste que alcanzó las Finales en distintas épocas." },
  { nombre: "Portland Trail Blazers", ciudad: "Portland", sigla: "POR", conferencia: "Oeste", fundacion: 1970, titulos: 1, estadio: "Moda Center", historia: "Ganó su único campeonato NBA en 1977." },
  { nombre: "Sacramento Kings", ciudad: "Sacramento", sigla: "SAC", conferencia: "Oeste", fundacion: 1923, titulos: 1, estadio: "Golden 1 Center", historia: "La franquicia tiene una larga historia y ganó el campeonato de 1951 cuando jugaba como Rochester Royals." },
  { nombre: "San Antonio Spurs", ciudad: "San Antonio", sigla: "SAS", conferencia: "Oeste", fundacion: 1967, titulos: 5, estadio: "Frost Bank Center", historia: "Ganó cinco campeonatos NBA con figuras como Tim Duncan, Tony Parker, Manu Ginóbili y David Robinson." },
  { nombre: "Utah Jazz", ciudad: "Salt Lake City", sigla: "UTA", conferencia: "Oeste", fundacion: 1974, titulos: 0, estadio: "Delta Center", historia: "Llegó a las Finales en 1997 y 1998 con Karl Malone y John Stockton." }
];

// Elementos HTML
const eastTeams = document.getElementById("eastTeams");
const westTeams = document.getElementById("westTeams");
const teamModal = document.getElementById("teamModal");
const teamDetails = document.getElementById("teamDetails");
const closeModal = document.getElementById("closeModal");

// Logos oficiales mediante ESPN
function obtenerLogo(sigla) {
  const codigos = {
    ATL: "atl", BOS: "bos", BKN: "bkn", CHA: "cha", CHI: "chi",
    CLE: "cle", DET: "det", IND: "ind", MIA: "mia", MIL: "mil",
    NYK: "ny", ORL: "orl", PHI: "phi", TOR: "tor", WAS: "wsh",
    DAL: "dal", DEN: "den", GSW: "gs", HOU: "hou", LAC: "lac",
    LAL: "lal", MEM: "mem", MIN: "min", NOP: "no", OKC: "okc",
    PHX: "phx", POR: "por", SAC: "sac", SAS: "sa", UTA: "utah"
  };

  return `https://a.espncdn.com/i/teamlogos/nba/500/${codigos[sigla]}.png`;
}

// Crear tarjetas
function crearTarjetas() {
  if (!eastTeams || !westTeams) {
    console.error("No se encontraron los contenedores de equipos en index.html.");
    return;
  }

  eastTeams.innerHTML = "";
  westTeams.innerHTML = "";

  equiposNBA.forEach(equipo => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "team-card";
    tarjeta.tabIndex = 0;
    tarjeta.setAttribute("role", "button");
    tarjeta.setAttribute("aria-label", `Ver información de ${equipo.nombre}`);

    tarjeta.innerHTML = `
      <img
        src="${obtenerLogo(equipo.sigla)}"
        alt="Logo de ${equipo.nombre}"
        class="team-logo"
        loading="lazy"
        onerror="this.style.display='none'"
      >
      <h3>${equipo.nombre}</h3>
      <span>${equipo.sigla}</span>
    `;

    tarjeta.addEventListener("click", () => mostrarEquipo(equipo));
    tarjeta.addEventListener("keydown", evento => {
      if (evento.key === "Enter" || evento.key === " ") {
        evento.preventDefault();
        mostrarEquipo(equipo);
      }
    });

    if (equipo.conferencia === "Este") {
      eastTeams.appendChild(tarjeta);
    } else {
      westTeams.appendChild(tarjeta);
    }
  });
}

// Mostrar información
function mostrarEquipo(equipo) {
  teamDetails.innerHTML = `
    <div class="team-detail-header">
      <img
        src="${obtenerLogo(equipo.sigla)}"
        alt="Logo ${equipo.nombre}"
        class="detail-logo"
        onerror="this.style.display='none'"
      >
      <h2>${equipo.nombre}</h2>
      <p>${equipo.ciudad} | ${equipo.conferencia}</p>
    </div>

    <div class="team-tabs">
      <button class="tab-button active" data-tab="info">Información</button>
      <button class="tab-button" data-tab="history">Historia</button>
      <button class="tab-button" data-tab="roster">Plantel</button>
      <button class="tab-button" data-tab="stats">Estadísticas</button>
    </div>

    <div class="tab-content active" id="info">
      <h3>Información general</h3>
      <p><strong>Ciudad:</strong> ${equipo.ciudad}</p>
      <p><strong>Conferencia:</strong> ${equipo.conferencia}</p>
      <p><strong>Fundación:</strong> ${equipo.fundacion}</p>
      <p><strong>Campeonatos NBA:</strong> ${equipo.titulos}</p>
      <p><strong>Estadio:</strong> ${equipo.estadio}</p>
      <p><strong>Abreviatura:</strong> ${equipo.sigla}</p>
    </div>

    <div class="tab-content" id="history">
      <h3>Historia de la franquicia</h3>
      <p>${equipo.historia}</p>
    </div>

    <div class="tab-content" id="roster">
      <h3>Plantel</h3>
      <p>El plantel de la temporada 2026 debe consultarse en la fuente oficial para garantizar que los jugadores y sus equipos estén actualizados.</p>
      <a href="https://www.nba.com/teams" target="_blank" rel="noopener noreferrer">
        Consultar equipos oficiales NBA
      </a>
    </div>

    <div class="tab-content" id="stats">
      <h3>Estadísticas</h3>
      <p>Las estadísticas actualizadas de cada franquicia están disponibles en el sitio oficial de la NBA.</p>
      <a href="https://www.nba.com/stats" target="_blank" rel="noopener noreferrer">
        Consultar estadísticas NBA
      </a>
    </div>
  `;

  teamModal.classList.add("active");
  teamModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  document.querySelectorAll(".tab-button").forEach(boton => {
    boton.addEventListener("click", () => cambiarPestana(boton.dataset.tab));
  });
}

// Cambiar pestañas
function cambiarPestana(tabId) {
  document.querySelectorAll(".tab-button").forEach(boton => {
    boton.classList.toggle("active", boton.dataset.tab === tabId);
  });

  document.querySelectorAll(".tab-content").forEach(contenido => {
    contenido.classList.toggle("active", contenido.id === tabId);
  });
}

// Cerrar ventana
function cerrarModal() {
  teamModal.classList.remove("active");
  teamModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

if (closeModal) {
  closeModal.addEventListener("click", cerrarModal);
}

if (teamModal) {
  teamModal.addEventListener("click", evento => {
    if (evento.target === teamModal) cerrarModal();
  });
}

document.addEventListener("keydown", evento => {
  if (evento.key === "Escape" && teamModal?.classList.contains("active")) {
    cerrarModal();
  }
});

// Iniciar página
document.addEventListener("DOMContentLoaded", crearTarjetas);


