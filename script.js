
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Equipos NBA 2026</title>

<style>
* {
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, sans-serif;
    background: #1a1a2e;
    color: white;
    margin: 0;
    padding: 25px;
}

h1 {
    text-align: center;
    margin-bottom: 35px;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.container {
    display: flex;
    max-width: 1400px;
    margin: auto;
    gap: 25px;
    align-items: flex-start;
}

.grid-equipos {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(145px, 1fr));
    gap: 15px;
    flex: 2;
}

.card-equipo {
    background: #162447;
    border-radius: 12px;
    padding: 15px;
    text-align: center;
    cursor: pointer;
    transition: .2s;
    border: 2px solid transparent;
}

.card-equipo:hover {
    transform: translateY(-5px);
    border-color: #e43f5a;
    box-shadow: 0 6px 15px #0005;
}

.logo-equipo {
    width: 85px;
    height: 85px;
    object-fit: contain;
    margin-bottom: 10px;
}

.nombre-equipo {
    font-size: .9rem;
    font-weight: 600;
}

.panel-info {
    flex: 1;
    min-width: 260px;
    background: #1f4068;
    border-radius: 15px;
    padding: 25px;
    position: sticky;
    top: 20px;
    box-shadow: 0 10px 25px #0005;
    border: 1px solid #e43f5a;
}

.panel-info h2 {
    color: #e43f5a;
    border-bottom: 2px solid #e43f5a;
    padding-bottom: 10px;
}

.dato-item {
    margin: 15px 0;
    font-size: 1rem;
}

.dato-item strong {
    color: #00bbf9;
}

.logo-grande {
    width: 150px;
    height: 150px;
    object-fit: contain;
    display: block;
    margin: 25px auto 0;
}

.instruccion {
    color: #bbb;
    font-style: italic;
    text-align: center;
}

@media(max-width: 850px) {
    .container {
        flex-direction: column;
    }

    .grid-equipos {
        width: 100%;
    }

    .panel-info {
        position: static;
        width: 100%;
    }
}
</style>
</head>

<body>

<h1>🏀 Franquicias NBA 2026</h1>

<div class="container">

    <div class="grid-equipos" id="gridEquipos"></div>

    <div class="panel-info" id="panelInfo">
        <p class="instruccion">
            Seleccioná el escudo de cualquier equipo para conocer
            sus detalles.
        </p>
    </div>

</div>

<script>

const equiposNBA = [

{
id:"bos", nombre:"Boston Celtics", siglas:"BOS",
color:"#007A33", conferencia:"Este", division:"Atlántico",
estrella:"Jayson Tatum", titulos:18, arena:"TD Garden",
logo:"https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg"
},

{
id:"lal", nombre:"Los Angeles Lakers", siglas:"LAL",
color:"#552583", conferencia:"Oeste", division:"Pacífico",
estrella:"LeBron James", titulos:17, arena:"Crypto.com Arena",
logo:"https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg"
},

{
id:"gsw", nombre:"Golden State Warriors", siglas:"GSW",
color:"#1D428A", conferencia:"Oeste", division:"Pacífico",
estrella:"Stephen Curry", titulos:7, arena:"Chase Center",
logo:"https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg"
},

{
id:"mil", nombre:"Milwaukee Bucks", siglas:"MIL",
color:"#00471B", conferencia:"Este", division:"Central",
estrella:"Giannis Antetokounmpo", titulos:2, arena:"Fiserv Forum",
logo:"https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg"
},

{
id:"nyk", nombre:"New York Knicks", siglas:"NYK",
color:"#006BB6", conferencia:"Este", division:"Atlántico",
estrella:"Jalen Brunson", titulos:2, arena:"Madison Square Garden",
logo:"https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg"
},

{
id:"mia", nombre:"Miami Heat", siglas:"MIA",
color:"#98002E", conferencia:"Este", division:"Sureste",
estrella:"Bam Adebayo", titulos:3, arena:"Kaseya Center",
logo:"https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg"
},

{
id:"phx", nombre:"Phoenix Suns", siglas:"PHX",
color:"#E56020", conferencia:"Oeste", division:"Pacífico",
estrella:"Devin Booker", titulos:0, arena:"Mortgage Matchup Center",
logo:"https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg"
},

{
id:"dal", nombre:"Dallas Mavericks", siglas:"DAL",
color:"#00538C", conferencia:"Oeste", division:"Suroeste",
estrella:"Anthony Davis", titulos:1, arena:"American Airlines Center",
logo:"https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg"
},

{
id:"den", nombre:"Denver Nuggets", siglas:"DEN",
color:"#0E2240", conferencia:"Oeste", division:"Noroeste",
estrella:"Nikola Jokic", titulos:1, arena:"Ball Arena",
logo:"https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg"
},

{
id:"phi", nombre:"Philadelphia 76ers", siglas:"PHI",
color:"#006BB6", conferencia:"Este", division:"Atlántico",
estrella:"Joel Embiid", titulos:3, arena:"Xfinity Mobile Arena",
logo:"https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg"
},

{
id:"okc", nombre:"Oklahoma City Thunder", siglas:"OKC",
color:"#007AC1", conferencia:"Oeste", division:"Noroeste",
estrella:"Shai Gilgeous-Alexander", titulos:1, arena:"Paycom Center",
logo:"https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg"
},

{
id:"min", nombre:"Minnesota Timberwolves", siglas:"MIN",
color:"#0C2340", conferencia:"Oeste", division:"Noroeste",
estrella:"Anthony Edwards", titulos:0, arena:"Target Center",
logo:"https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg"
},

{
id:"sas", nombre:"San Antonio Spurs", siglas:"SAS",
color:"#8A8D8F", conferencia:"Oeste", division:"Suroeste",
estrella:"Victor Wembanyama", titulos:5, arena:"Frost Bank Center",
logo:"https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg"
},

{
id:"ind", nombre:"Indiana Pacers", siglas:"IND",
color:"#FDBB30", conferencia:"Este", division:"Central",
estrella:"Tyrese Haliburton", titulos:0, arena:"Gainbridge Fieldhouse",
logo:"https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg"
},

{
id:"cle", nombre:"Cleveland Cavaliers", siglas:"CLE",
color:"#860038", conferencia:"Este", division:"Central",
estrella:"Donovan Mitchell", titulos:1, arena:"Rocket Arena",
logo:"https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg"
},

{
id:"atl", nombre:"Atlanta Hawks", siglas:"ATL",
color:"#C8102E", conferencia:"Este", division:"Sureste",
estrella:"Trae Young", titulos:1, arena:"State Farm Arena",
logo:"https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg"
},

{
id:"bkn", nombre:"Brooklyn Nets", siglas:"BKN",
color:"#000000", conferencia:"Este", division:"Atlántico",
estrella:"Cam Thomas", titulos:0, arena:"Barclays Center",
logo:"https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg"
},

{
id:"cha", nombre:"Charlotte Hornets", siglas:"CHA",
color:"#1D1160", conferencia:"Este", division:"Sureste",
estrella:"LaMelo Ball", titulos:0, arena:"Spectrum Center",
logo:"https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg"
},

{
id:"chi", nombre:"Chicago Bulls", siglas:"CHI",
color:"#CE1141", conferencia:"Este", division:"Central",
estrella:"Zach LaVine", titulos:6, arena:"United Center",
logo:"https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg"
},

{
id:"det", nombre:"Detroit Pistons", siglas:"DET",
color:"#C8102E", conferencia:"Este", division:"Central",
estrella:"Cade Cunningham", titulos:3, arena:"Little Caesars Arena",
logo:"https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg"
},

{
id:"orl", nombre:"Orlando Magic", siglas:"ORL",
color:"#0077C0", conferencia:"Este", division:"Sureste",
estrella:"Paolo Banchero", titulos:0, arena:"Kia Center",
logo:"https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg"
},

{
id:"was", nombre:"Washington Wizards", siglas:"WAS",
color:"#002B5C", conferencia:"Este", division:"Sureste",
estrella:"Alex Sarr", titulos:1, arena:"Capital One Arena",
logo:"https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg"
},

{
id:"por", nombre:"Portland Trail Blazers", siglas:"POR",
color:"#E03A3E", conferencia:"Oeste", division:"Noroeste",
estrella:"Scoot Henderson", titulos:1, arena:"Moda Center",
logo:"https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg"
},

{
id:"uta", nombre:"Utah Jazz", siglas:"UTA",
color:"#002B5C", conferencia:"Oeste", division:"Noroeste",
estrella:"Lauri Markkanen", titulos:0, arena:"Delta Center",
logo:"https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg"
},

{
id:"sac", nombre:"Sacramento Kings", siglas:"SAC",
color:"#5A2D81", conferencia:"Oeste", division:"Pacífico",
estrella:"DeMar DeRozan", titulos:1, arena:"Golden 1 Center",
logo:"https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg"
},

{
id:"lac", nombre:"LA Clippers", siglas:"LAC",
color:"#C8102E", conferencia:"Oeste", division:"Pacífico",
estrella:"Kawhi Leonard", titulos:0, arena:"Intuit Dome",
logo:"https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg"
},

{
id:"mem", nombre:"Memphis Grizzlies", siglas:"MEM",
color:"#5D76A9", conferencia:"Oeste", division:"Suroeste",
estrella:"Ja Morant", titulos:0, arena:"FedExForum",
logo:"https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg"
},

{
id:"nop", nombre:"New Orleans Pelicans", siglas:"NOP",
color:"#0C2340", conferencia:"Oeste", division:"Suroeste",
estrella:"Zion Williamson", titulos:0, arena:"Smoothie King Center",
logo:"https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg"
},

{
id:"hou", nombre:"Houston Rockets", siglas:"HOU",
color:"#CE1141", conferencia:"Oeste", division:"Suroeste",
estrella:"Alperen Sengun", titulos:2, arena:"Toyota Center",
logo:"https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg"
},

{
id:"tor", nombre:"Toronto Raptors", siglas:"TOR",
color:"#CE1141", conferencia:"Este", division:"Atlántico",
estrella:"Scottie Barnes", titulos:1, arena:"Scotiabank Arena",
logo:"https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg"
}

];

const gridEquipos = document.getElementById("gridEquipos");
const panelInfo = document.getElementById("panelInfo");

equiposNBA.forEach(equipo => {

    const card = document.createElement("div");
    card.className = "card-equipo";

    card.onclick = () => mostrarDetalles(equipo);

    card.innerHTML = `
        <img
            class="logo-equipo"
            src="${equipo.logo}"
            alt="Logo ${equipo.nombre}"
            onerror="this.style.display='none'"
        >
        <div class="nombre-equipo">${equipo.nombre}</div>
    `;

    gridEquipos.appendChild(card);

});

function mostrarDetalles(equipo) {

    panelInfo.innerHTML = `
        <h2>${equipo.nombre}</h2>

        <div class="dato-item">
            <strong>Conferencia:</strong> ${equipo.conferencia}
        </div>

        <div class="dato-item">
            <strong>División:</strong> ${equipo.division}
        </div>

        <div class="dato-item">
            <strong>Jugador destacado:</strong> ${equipo.estrella}
        </div>

        <div class="dato-item">
            <strong>Estadio:</strong> ${equipo.arena}
        </div>

        <div class="dato-item">
            <strong>Campeonatos NBA:</strong> ${equipo.titulos}
        </div>

        <img
            class="logo-grande"
            src="${equipo.logo}"
            alt="Logo ${equipo.nombre}"
            onerror="this.style.display='none'"
        >
    `;

}

</script>

</body>
</html>

