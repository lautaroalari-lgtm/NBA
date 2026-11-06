
const equiposNBA = [
    {
        id: "bos", nombre: "Boston Celtics", conferencia: "Este",
        division: "Atlántico", estrella: "Jayson Tatum",
        titulos: 18, arena: "TD Garden",
        logo: "https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg",
        fundacion: 1946,
        historia: "Una de las franquicias más exitosas de la NBA. Su rivalidad con Los Angeles Lakers es histórica. Ganó numerosos campeonatos, especialmente durante la era de Bill Russell.",
        mejorPosicion: "Campeón NBA (18 veces)",
        tienda: "https://www.nba.com/celtics/store"
    },
    {
        id: "lal", nombre: "Los Angeles Lakers", conferencia: "Oeste",
        division: "Pacífico", estrella: "LeBron James",
        titulos: 17, arena: "Crypto.com Arena",
        logo: "https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg",
        fundacion: 1947,
        historia: "Una de las franquicias más famosas del deporte. Tuvo leyendas como Magic Johnson, Kareem Abdul-Jabbar, Kobe Bryant y LeBron James.",
        mejorPosicion: "Campeón NBA (17 veces)",
        tienda: "https://www.nba.com/lakers/store"
    },
    {
        id: "gsw", nombre: "Golden State Warriors", conferencia: "Oeste",
        division: "Pacífico", estrella: "Stephen Curry",
        titulos: 7, arena: "Chase Center",
        logo: "https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg",
        fundacion: 1946,
        historia: "Fundados como Philadelphia Warriors. Su época moderna estuvo marcada por Stephen Curry, Klay Thompson y Draymond Green.",
        mejorPosicion: "Campeón NBA (7 veces)",
        tienda: "https://www.nba.com/warriors/store"
    },
    {
        id: "mil", nombre: "Milwaukee Bucks", conferencia: "Este",
        division: "Central", estrella: "Giannis Antetokounmpo",
        titulos: 2, arena: "Fiserv Forum",
        logo: "https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg",
        fundacion: 1968,
        historia: "La franquicia de Wisconsin conquistó sus títulos en 1971 y 2021. Giannis Antetokounmpo fue la figura principal del campeonato de 2021.",
        mejorPosicion: "Campeón NBA (1971 y 2021)",
        tienda: "https://www.nba.com/bucks/store"
    },
    {
        id: "nyk", nombre: "New York Knicks", conferencia: "Este",
        division: "Atlántico", estrella: "Jalen Brunson",
        titulos: 2, arena: "Madison Square Garden",
        logo: "https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg",
        fundacion: 1946,
        historia: "Una de las franquicias originales de la NBA. Ganó sus campeonatos en 1970 y 1973 y juega en el histórico Madison Square Garden.",
        mejorPosicion: "Campeón NBA (1970 y 1973)",
        tienda: "https://www.nba.com/knicks/store"
    },
    {
        id: "mia", nombre: "Miami Heat", conferencia: "Este",
        division: "Sureste", estrella: "Bam Adebayo",
        titulos: 3, arena: "Kaseya Center",
        logo: "https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg",
        fundacion: 1988,
        historia: "Conquistó tres campeonatos, en 2006, 2012 y 2013. Su historia está ligada a figuras como Dwyane Wade, Shaquille O'Neal y LeBron James.",
        mejorPosicion: "Campeón NBA (3 veces)",
        tienda: "https://www.nba.com/heat/store"
    },
    {
        id: "phx", nombre: "Phoenix Suns", conferencia: "Oeste",
        division: "Pacífico", estrella: "Devin Booker",
        titulos: 0, arena: "Mortgage Matchup Center",
        logo: "https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg",
        fundacion: 1968,
        historia: "Franquicia histórica del Oeste. Tuvo grandes equipos liderados por Charles Barkley, Steve Nash y Devin Booker.",
        mejorPosicion: "Finalista NBA (1976, 1993 y 2021)",
        tienda: "https://www.nba.com/suns/store"
    },
    {
        id: "dal", nombre: "Dallas Mavericks", conferencia: "Oeste",
        division: "Suroeste", estrella: "Anthony Davis",
        titulos: 1, arena: "American Airlines Center",
        logo: "https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg",
        fundacion: 1980,
        historia: "Ganó su primer campeonato en 2011 con Dirk Nowitzki como figura. También llegó a las finales en 2006 y 2024.",
        mejorPosicion: "Campeón NBA (2011)",
        tienda: "https://www.nba.com/mavericks/store"
    },
    {
        id: "den", nombre: "Denver Nuggets", conferencia: "Oeste",
        division: "Noroeste", estrella: "Nikola Jokic",
        titulos: 1, arena: "Ball Arena",
        logo: "https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg",
        fundacion: 1967,
        historia: "Conquistó su primer título NBA en 2023, liderado por Nikola Jokic y Jamal Murray.",
        mejorPosicion: "Campeón NBA (2023)",
        tienda: "https://www.nba.com/nuggets/store"
    },
    {
        id: "phi", nombre: "Philadelphia 76ers", conferencia: "Este",
        division: "Atlántico", estrella: "Joel Embiid",
        titulos: 3, arena: "Xfinity Mobile Arena",
        logo: "https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg",
        fundacion: 1946,
        historia: "Franquicia con una larga tradición. Ganó títulos en 1955, 1967 y 1983. Entre sus leyendas están Julius Erving y Allen Iverson.",
        mejorPosicion: "Campeón NBA (3 veces)",
        tienda: "https://www.nba.com/sixers/store"
    },
    {
        id: "okc", nombre: "Oklahoma City Thunder", conferencia: "Oeste",
        division: "Noroeste", estrella: "Shai Gilgeous-Alexander",
        titulos: 1, arena: "Paycom Center",
        logo: "https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg",
        fundacion: 1967,
        historia: "La franquicia nació como Seattle SuperSonics y se trasladó a Oklahoma City en 2008. Su historia incluye el título de Seattle en 1979 y el campeonato de Oklahoma City en 2025.",
        mejorPosicion: "Campeón NBA (1979 como Seattle y 2025 como Oklahoma City)",
        tienda: "https://www.nba.com/thunder/store"
    },
    {
        id: "min", nombre: "Minnesota Timberwolves", conferencia: "Oeste",
        division: "Noroeste", estrella: "Anthony Edwards",
        titulos: 0, arena: "Target Center",
        logo: "https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg",
        fundacion: 1989,
        historia: "La franquicia tuvo sus mejores etapas con Kevin Garnett y, más recientemente, con Anthony Edwards.",
        mejorPosicion: "Finalista de la Conferencia Oeste",
        tienda: "https://www.nba.com/timberwolves/store"
    },
    {
        id: "sas", nombre: "San Antonio Spurs", conferencia: "Oeste",
        division: "Suroeste", estrella: "Victor Wembanyama",
        titulos: 5, arena: "Frost Bank Center",
        logo: "https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg",
        fundacion: 1967,
        historia: "Ganó cinco campeonatos entre 1999 y 2014. Fue liderado durante años por Tim Duncan, Tony Parker y Manu Ginóbili.",
        mejorPosicion: "Campeón NBA (5 veces)",
        tienda: "https://www.nba.com/spurs/store"
    },
    {
        id: "ind", nombre: "Indiana Pacers", conferencia: "Este",
        division: "Central", estrella: "Tyrese Haliburton",
        titulos: 0, arena: "Gainbridge Fieldhouse",
        logo: "https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg",
        fundacion: 1967,
        historia: "Fue una potencia de la ABA antes de ingresar a la NBA. Llegó a las finales NBA en 2000 y 2025.",
        mejorPosicion: "Finalista NBA (2000 y 2025)",
        tienda: "https://www.nba.com/pacers/store"
    },
    {
        id: "cle", nombre: "Cleveland Cavaliers", conferencia: "Este",
        division: "Central", estrella: "Donovan Mitchell",
        titulos: 1, arena: "Rocket Arena",
        logo: "https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg",
        fundacion: 1970,
        historia: "Conquistó su primer campeonato en 2016, liderado por LeBron James y Kyrie Irving.",
        mejorPosicion: "Campeón NBA (2016)",
        tienda: "https://www.nba.com/cavaliers/store"
    },
    {
        id: "atl", nombre: "Atlanta Hawks", conferencia: "Este",
        division: "Sureste", estrella: "Trae Young",
        titulos: 1, arena: "State Farm Arena",
        logo: "https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg",
        fundacion: 1946,
        historia: "La franquicia nació en 1946 y ganó su único título en 1958, cuando todavía jugaba como St. Louis Hawks.",
        mejorPosicion: "Campeón NBA (1958)",
        tienda: "https://www.nba.com/hawks/store"
    },
    {
        id: "bkn", nombre: "Brooklyn Nets", conferencia: "Este",
        division: "Atlántico", estrella: "Cam Thomas",
        titulos: 0, arena: "Barclays Center",
        logo: "https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg",
        fundacion: 1967,
        historia: "Comenzó como New Jersey Americans y fue una franquicia importante de la ABA. Llegó a dos finales NBA consecutivas en 2002 y 2003.",
        mejorPosicion: "Finalista NBA (2002 y 2003)",
        tienda: "https://www.nba.com/nets/store"
    },
    {
        id: "cha", nombre: "Charlotte Hornets", conferencia: "Este",
        division: "Sureste", estrella: "LaMelo Ball",
        titulos: 0, arena: "Spectrum Center",
        logo: "https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg",
        fundacion: 1988,
        historia: "Franquicia de Carolina del Norte que ha tenido figuras como Alonzo Mourning, Larry Johnson y Kemba Walker.",
        mejorPosicion: "Semifinales de Conferencia",
        tienda: "https://www.nba.com/hornets/store"
    },
    {
        id: "chi", nombre: "Chicago Bulls", conferencia: "Este",
        division: "Central", estrella: "Zach LaVine",
        titulos: 6, arena: "United Center",
        logo: "https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg",
        fundacion: 1966,
        historia: "Dominó la NBA durante los años noventa con Michael Jordan, Scottie Pippen y Phil Jackson. Ganó seis campeonatos.",
        mejorPosicion: "Campeón NBA (6 veces)",
        tienda: "https://www.nba.com/bulls/store"
    },
    {
        id: "det", nombre: "Detroit Pistons", conferencia: "Este",
        division: "Central", estrella: "Cade Cunningham",
        titulos: 3, arena: "Little Caesars Arena",
        logo: "https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg",
        fundacion: 1941,
        historia: "Ganó tres campeonatos NBA, en 1989, 1990 y 2004. Los equipos conocidos como Bad Boys marcaron una época.",
        mejorPosicion: "Campeón NBA (3 veces)",
        tienda: "https://www.nba.com/pistons/store"
    },
    {
        id: "orl", nombre: "Orlando Magic", conferencia: "Este",
        division: "Sureste", estrella: "Paolo Banchero",
        titulos: 0, arena: "Kia Center",
        logo: "https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg",
        fundacion: 1989,
        historia: "Llegó a las finales NBA en 1995 y 2009. Tuvo figuras como Shaquille O'Neal, Penny Hardaway y Dwight Howard.",
        mejorPosicion: "Finalista NBA (1995 y 2009)",
        tienda: "https://www.nba.com/magic/store"
    },
    {
        id: "was", nombre: "Washington Wizards", conferencia: "Este",
        division: "Sureste", estrella: "Alex Sarr",
        titulos: 1, arena: "Capital One Arena",
        logo: "https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg",
        fundacion: 1961,
        historia: "Ganó su único campeonato en 1978, cuando la franquicia era conocida como Washington Bullets.",
        mejorPosicion: "Campeón NBA (1978)",
        tienda: "https://www.nba.com/wizards/store"
    },
    {
        id: "por", nombre: "Portland Trail Blazers", conferencia: "Oeste",
        division: "Noroeste", estrella: "Scoot Henderson",
        titulos: 1, arena: "Moda Center",
        logo: "https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg",
        fundacion: 1970,
        historia: "Conquistó su único título en 1977 con Bill Walton. También llegó a las finales en 1990 y 1992.",
        mejorPosicion: "Campeón NBA (1977)",
        tienda: "https://www.nba.com/blazers/store"
    },
    {
        id: "uta", nombre: "Utah Jazz", conferencia: "Oeste",
        division: "Noroeste", estrella: "Lauri Markkanen",
        titulos: 0, arena: "Delta Center",
        logo: "https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg",
        fundacion: 1974,
        historia: "Tuvo una de sus mejores épocas con John Stockton y Karl Malone. Llegó a las finales NBA en 1997 y 1998.",
        mejorPosicion: "Finalista NBA (1997 y 1998)",
        tienda: "https://www.nba.com/jazz/store"
    },
    {
        id: "sac", nombre: "Sacramento Kings", conferencia: "Oeste",
        division: "Pacífico", estrella: "DeMar DeRozan",
        titulos: 1, arena: "Golden 1 Center",
        logo: "https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg",
        fundacion: 1923,
        historia: "La franquicia tiene una larga historia que incluye distintas ciudades y nombres. Su campeonato fue en 1951 como Rochester Royals.",
        mejorPosicion: "Campeón NBA (1951 como Rochester Royals)",
        tienda: "https://www.nba.com/kings/store"
    },
    {
        id: "lac", nombre: "LA Clippers", conferencia: "Oeste",
        division: "Pacífico", estrella: "Kawhi Leonard",
        titulos: 0, arena: "Intuit Dome",
        logo: "https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg",
        fundacion: 1970,
        historia: "La franquicia nació como Buffalo Braves y luego jugó en San Diego antes de trasladarse a Los Ángeles. Alcanzó las finales del Oeste en 2021.",
        mejorPosicion: "Finalista de la Conferencia Oeste (2021)",
        tienda: "https://www.nba.com/clippers/store"
    },
    {
        id: "mem", nombre: "Memphis Grizzlies", conferencia: "Oeste",
        division: "Suroeste", estrella: "Ja Morant",
        titulos: 0, arena: "FedExForum",
        logo: "https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg",
        fundacion: 1995,
        historia: "Nació en Vancouver y se trasladó a Memphis en 2001. Su mejor etapa incluyó equipos competitivos conocidos como Grit and Grind.",
        mejorPosicion: "Semifinales de Conferencia",
        tienda: "https://www.nba.com/grizzlies/store"
    },
    {
        id: "nop", nombre: "New Orleans Pelicans", conferencia: "Oeste",
        division: "Suroeste", estrella: "Zion Williamson",
        titulos: 0, arena: "Smoothie King Center",
        logo: "https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg",
        fundacion: 2002,
        historia: "La franquicia comenzó como New Orleans Hornets. Ha contado con figuras como Chris Paul, Anthony Davis y Zion Williamson.",
        mejorPosicion: "Semifinales de Conferencia",
        tienda: "https://www.nba.com/pelicans/store"
    },
    {
        id: "hou", nombre: "Houston Rockets", conferencia: "Oeste",
        division: "Suroeste", estrella: "Alperen Sengun",
        titulos: 2, arena: "Toyota Center",
        logo: "https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg",
        fundacion: 1967,
        historia: "Ganó dos campeonatos consecutivos en 1994 y 1995, liderado por Hakeem Olajuwon.",
        mejorPosicion: "Campeón NBA (1994 y 1995)",
        tienda: "https://www.nba.com/rockets/store"
    },
    {
        id: "tor", nombre: "Toronto Raptors", conferencia: "Este",
        division: "Atlántico", estrella: "Scottie Barnes",
        titulos: 1, arena: "Scotiabank Arena",
        logo: "https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg",
        fundacion: 1995,
        historia: "Es el primer equipo canadiense que ganó un campeonato NBA. Conquistó el título en 2019, con Kawhi Leonard como figura.",
        mejorPosicion: "Campeón NBA (2019)",
        tienda: "https://www.nba.com/raptors/store"
    }
];

// Referencias HTML
const eastTeams = document.getElementById("eastTeams");
const westTeams = document.getElementById("westTeams");
const modal = document.getElementById("teamModal");
const teamDetails = document.getElementById("teamDetails");
const closeModal = document.getElementById("closeModal");

// Generar tarjetas
function crearTarjetas() {
    equiposNBA.forEach(equipo => {
        const card = document.createElement("article");
        card.className = "team-card";
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `Ver información de ${equipo.nombre}`);

        card.innerHTML = `
            <img src="${equipo.logo}" alt="Logo de ${equipo.nombre}"
                 onerror="this.style.display='none'">
            <div class="team-name">${equipo.nombre}</div>
        `;

        card.addEventListener("click", () => mostrarDetalles(equipo));
        card.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                mostrarDetalles(equipo);
            }
        });

        if (equipo.conferencia === "Este") {
            eastTeams.appendChild(card);
        } else {
            westTeams.appendChild(card);
        }
    });
}

// Abrir ficha
function mostrarDetalles(equipo) {
    teamDetails.innerHTML = `
        <div class="team-header">
            <img class="team-logo-large"
                 src="${equipo.logo}"
                 alt="Logo de ${equipo.nombre}"
                 onerror="this.style.display='none'">
            <h2>${equipo.nombre}</h2>
            <p>${equipo.conferencia} · División ${equipo.division}</p>
        </div>

        <nav class="team-tabs" aria-label="Secciones del equipo">
            <button class="tab-btn active" data-tab="info">Información</button>
            <button class="tab-btn" data-tab="history">Historia</button>
            <button class="tab-btn" data-tab="roster">Plantel</button>
            <button class="tab-btn" data-tab="stats">Estadísticas</button>
        </nav>

        <section class="tab-content active" id="info">
            <h3>Información general</h3>
            <div class="info-item"><strong>Conferencia:</strong> ${equipo.conferencia}</div>
            <div class="info-item"><strong>División:</strong> ${equipo.division}</div>
            <div class="info-item"><strong>Fundación:</strong> ${equipo.fundacion}</div>
            <div class="info-item"><strong>Estadio:</strong> ${equipo.arena}</div>
            <div class="info-item"><strong>Jugador destacado:</strong> ${equipo.estrella}</div>
            <div class="info-item"><strong>Campeonatos NBA:</strong> ${equipo.titulos}</div>
            <div class="info-item"><strong>Mejor resultado:</strong> ${equipo.mejorPosicion}</div>
            <a class="store-link" href="${equipo.tienda}" target="_blank" rel="noopener noreferrer">
                Visitar tienda oficial ↗
            </a>
        </section>

        <section class="tab-content" id="history">
            <h3>Historia de la franquicia</h3>
            <p>${equipo.historia}</p>
            <div class="info-item"><strong>Año de fundación:</strong> ${equipo.fundacion}</div>
            <div class="info-item"><strong>Títulos NBA:</strong> ${equipo.titulos}</div>
            <div class="info-item"><strong>Mejor resultado:</strong> ${equipo.mejorPosicion}</div>
        </section>

        <section class="tab-content" id="roster">
            <h3>Plantel</h3>
            <p><strong>Jugador destacado:</strong> ${equipo.estrella}</p>
            <p class="stat-note">
                La lista completa de jugadores debe actualizarse con el plantel oficial
                de la temporada 2026-27. No se muestran nombres sin verificar.
            </p>
        </section>

        <section class="tab-content" id="stats">
            <h3>Estadísticas de temporada</h3>
            <p class="stat-note">
                Las estadísticas oficiales de la temporada 2026-27 todavía deben
                conectarse a una fuente de datos actualizada.
            </p>
            <div class="info-item"><strong>Franquicia:</strong> ${equipo.nombre}</div>
            <div class="info-item"><strong>Conferencia:</strong> ${equipo.conferencia}</div>
            <div class="info-item"><strong>Campeonatos históricos:</strong> ${equipo.titulos}</div>
        </section>
    `;

    // Cambiar entre pestañas
    const tabButtons = teamDetails.querySelectorAll(".tab-btn");
    const tabContents = teamDetails.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(section => section.classList.remove("active"));

            button.classList.add("active");
            document.getElementById(button.dataset.tab).classList.add("active");
        });
    });

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

// Cerrar modal
function cerrarModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

closeModal.addEventListener("click", cerrarModal);

modal.addEventListener("click", event => {
    if (event.target === modal) {
        cerrarModal();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.classList.contains("active")) {
        cerrarModal();
    }
});

// Iniciar página
crearTarjetas();




