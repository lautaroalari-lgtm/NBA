// Dataset estructurado con los 30 equipos de la NBA
const teamsData = [
    // CONFERENCIA ESTE
    { id: "1610612738", name: "Boston Celtics", conference: "east", city: "Boston, MA", arena: "TD Garden", founded: "1946", championships: "18" },
    { id: "1610612751", name: "Brooklyn Nets", conference: "east", city: "Brooklyn, NY", arena: "Barclays Center", founded: "1967", championships: "0" },
    { id: "1610612752", name: "New York Knicks", conference: "east", city: "New York, NY", arena: "Madison Square Garden", founded: "1946", championships: "2" },
    { id: "1610612755", name: "Philadelphia 76ers", conference: "east", city: "Philadelphia, PA", arena: "Wells Fargo Center", founded: "1946", championships: "3" },
    { id: "1610612761", name: "Toronto Raptors", conference: "east", city: "Toronto, ON", arena: "Scotiabank Arena", founded: "1995", championships: "1" },
    { id: "1610612741", name: "Chicago Bulls", conference: "east", city: "Chicago, IL", arena: "United Center", founded: "1966", championships: "6" },
    { id: "1610612739", name: "Cleveland Cavaliers", conference: "east", city: "Cleveland, OH", arena: "Rocket Mortgage FieldHouse", founded: "1970", championships: "1" },
    { id: "1610612765", name: "Detroit Pistons", conference: "east", city: "Detroit, MI", arena: "Little Caesars Arena", founded: "1941", championships: "3" },
    { id: "1610612754", name: "Indiana Pacers", conference: "east", city: "Indianapolis, IN", arena: "Gainbridge Fieldhouse", founded: "1967", championships: "0" },
    { id: "1610612749", name: "Milwaukee Bucks", conference: "east", city: "Milwaukee, WI", arena: "Fiserv Forum", founded: "1968", championships: "2" },
    { id: "1610612737", name: "Atlanta Hawks", conference: "east", city: "Atlanta, GA", arena: "State Farm Arena", founded: "1946", championships: "1" },
    { id: "1610612766", name: "Charlotte Hornets", conference: "east", city: "Charlotte, NC", arena: "Spectrum Center", founded: "1988", championships: "0" },
    { id: "1610612748", name: "Miami Heat", conference: "east", city: "Miami, FL", arena: "Kaseya Center", founded: "1988", championships: "3" },
    { id: "1610612753", name: "Orlando Magic", conference: "east", city: "Orlando, FL", arena: "Kia Center", founded: "1989", championships: "0" },
    { id: "1610612764", name: "Washington Wizards", conference: "east", city: "Washington, D.C.", arena: "Capital One Arena", founded: "1961", championships: "1" },

    // CONFERENCIA OESTE
    { id: "1610612743", name: "Denver Nuggets", conference: "west", city: "Denver, CO", arena: "Ball Arena", founded: "1967", championships: "1" },
    { id: "1610612750", name: "Minnesota Timberwolves", conference: "west", city: "Minneapolis, MN", arena: "Target Center", founded: "1989", championships: "0" },
    { id: "1610612760", name: "Oklahoma City Thunder", conference: "west", city: "Oklahoma City, OK", arena: "Paycom Center", founded: "1967", championships: "1" },
    { id: "1610612757", name: "Portland Trail Blazers", conference: "west", city: "Portland, OR", arena: "Moda Center", founded: "1970", championships: "1" },
    { id: "1610612762", name: "Utah Jazz", conference: "west", city: "Salt Lake City, UT", arena: "Delta Center", founded: "1974", championships: "0" },
    { id: "1610612744", name: "Golden State Warriors", conference: "west", city: "San Francisco, CA", arena: "Chase Center", founded: "1946", championships: "7" },
    { id: "1610612746", name: "LA Clippers", conference: "west", city: "Los Angeles, CA", arena: "Intuit Dome", founded: "1970", championships: "0" },
    { id: "1610612747", name: "Los Angeles Lakers", conference: "west", city: "Los Angeles, CA", arena: "Crypto.com Arena", founded: "1947", championships: "17" },
    { id: "1610612756", name: "Phoenix Suns", conference: "west", city: "Phoenix, AZ", arena: "Footprint Center", founded: "1968", championships: "0" },
    { id: "1610612758", name: "Sacramento Kings", conference: "west", city: "Sacramento, CA", arena: "Golden 1 Center", founded: "1923", championships: "1" },
    { id: "1610612742", name: "Dallas Mavericks", conference: "west", city: "Dallas, TX", arena: "American Airlines Center", founded: "1980", championships: "1" },
    { id: "1610612745", name: "Houston Rockets", conference: "west", city: "Houston, TX", arena: "Toyota Center", founded: "1967", championships: "2" },
    { id: "1610612763", name: "Memphis Grizzlies", conference: "west", city: "Memphis, TN", arena: "FedExForum", founded: "1995", championships: "0" },
    { id: "1610612740", name: "New Orleans Pelicans", conference: "west", city: "New Orleans, LA", arena: "Smoothie King Center", founded: "2002", championships: "0" },
    { id: "1610612759", name: "San Antonio Spurs", conference: "west", city: "San Antonio, TX", arena: "Frost Bank Center", founded: "1967", championships: "5" }
];

document.addEventListener("DOMContentLoaded", () => {
    const eastContainer = document.getElementById('east-conference');
    const westContainer = document.getElementById('west-conference');
    const modal = document.getElementById('team-modal');
    const closeModal = document.getElementById('close-modal');

    // Mapeo dinámico y renderizado de tarjetas
    teamsData.forEach(team => {
        const card = document.createElement('div');
        card.className = 'team-card';
        
        // Genera la URL del logo usando el ID del CDN oficial de la NBA
        const logoUrl = `https://nba.com{team.id}/global/L/logo.svg`;

        card.innerHTML = `
            <img src="${logoUrl}" alt="Logo de ${team.name}">
            <div class="team-name">${team.name}</div>
        `;

        // Evento interactivo para el modal
        card.addEventListener('click', () => {
            document.getElementById('modal-logo').src = logoUrl;
            document.getElementById('modal-name').innerText = team.name;
            document.getElementById('modal-city').innerText = team.city;
            document.getElementById('modal-arena').innerText = team.arena;
            document.getElementById('modal-founded').innerText = team.founded;
            document.getElementById('modal-championships').innerText = team.championships;
            
            modal.style.display = 'flex';
        });

        // Clasificación por conferencia
        if (team.conference === 'east') {
            eastContainer.appendChild(card);
        } else {
            westContainer.appendChild(card);
        }
    });

    // Cerrar modal mediante interacciones de usuario
    closeModal.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
});
