const cardContainer = document.querySelector(".events__cards__container");
console.log(cardContainer);

const events = [
    {
        name: "MUN",
        date: "24-26 Dec.",
        society: "Sarasva",
        link: "./assets/mun.png",
        day: "Day 0",
    },
    {
        name: "Feathers",
        date: "13-26 Dec.",
        society: "Sarasva",
        link: "./assets/feathers.png",
        day: "Day 0",
    },
    {
        name: "Quiz",
        date: "16-17 Dec.",
        society: "Sarasva",
        link: "./assets/quiz.png",
        day: "Day 0",
    },
    {
        name: "Antakshari",
        date: "16-17 Dec.",
        society: "Virtuosi ",
        link: "./assets/antakshari.png",
        day: "Day 0",
    },
    {
        name: "Euphony ",
        date: "4-17 Dec.",
        society: "Virtuosi ",
        link: "./assets/euphony.png",
        day: "Day 1",
    },
    {
        name: "Intro-Verse",
        date: "14-16 Dec.",
        society: "Rangtarangini",
        link: "./assets/IVposter.png",
        day: "Day 1",
    },
    {
        name: "Tongues on Fire",
        date: "18 Dec.",
        society: "Rangtarangini",
        link: "./assets/TOF1.png",
        day: "Day 1",
    },
    {
        name: "Shoot your Shots	",
        date: "6-18 Dec.",
        society: "Rangtarangini",
        link: "./assets/SYSupdated.png",
        day: "Day 1",
    },
    {
        name: "Skechers ",
        date: "2-19 Dec.",
        society: "Nirmiti ",
        link: "./assets/skechers.png",
        day: "Day 1",
    },
    {
        name: "Toon-Con",
        date: "9-19 Dec.",
        society: "Nirmiti ",
        link: "./assets/toon-con.png",
        day: "Day 1",
    },
    {
        name: "WorkShop",
        date: "19 Dec.",
        society: "Nirmiti ",
        link: "./assets/workshop.png",
        day: "Day 1",
    },
    {
        name: "Impulso",
        date: "4-19 Dec.",
        society: "GeneticXCrew",
        link: "./assets/impulso.png",
        day: "Day 1",
    },
    {
        name: "Tasveer",
        date: "10-24  Dec.",
        society: "Thunderbolts",
        link: "./assets/tasveernew.png",
        day: "Day 1",
    },
    {
        name: "Valorant",
        date: "17-19  Dec.",
        society: "Informal",
        link: "./assets/valorant.png",
        day: "Day 1",
    },
    {
        name: "BGMI",
        date: "17 Dec. (Classic), 19 Dec. (TDM)",
        society: "Informal",
        link: "./assets/bgmi.png",
        day: "Day 1",
    },
    {
        name: "Animania",
        date: "18 Dec.",
        society: "Informal",
        link: "./assets/animania.png",
        day: "Day 1",
    },
    {
        name: "Franchise Quiz",
        date: "17  Dec.",
        society: "Informal",
        link: "./assets/FRANCHISE QUIZ.png",
        day: "Day 1",
    },
    {
        name: "Chess",
        date: "19 Dec.",
        society: "Informal",
        link: "./assets/chess.png",
        day: "Day 1",
    },
    {
        name: "Arcane",
        date: "17 Dec.",
        society: "Informal",
        link: "./assets/arcane.png",
        day: "Day 1",
    },
    {
        name: "Talent Hunt",
        date: "13 - 19 Dec.",
        society: "Informal",
        link: "./assets/skillbash.png",
        day: "Day 1",
    },
    {
        name: "Consilio",
        date: "16 Dec.",
        society: "Informal",
        link: "./assets/consilio.png",
        day: "Day 1",
    },
    {
        name: "Plot Twist",
        date: "14-19 Dec.",
        society: "Informal",
        link: "./assets/PLOT TWIST.png",
        day: "Day 1",
    },
    {
        name: "Blind Date",
        date: "18 Dec.",
        society: "Informal",
        link: "./assets/BlindDate.png",
        day: "Day 1",
    },
    {
        name: "Guess the Tune",
        date: "16th Dec.",
        society: "Informal",
        link: "./assets/tune.png",
        day: "Day 1",
    },
    {
        name: "Meme War",
        date: "13-19 Dec.",
        society: "Informal",
        link: "./assets/MEME WAR.png",
        day: "Day 1",
    },
];

for (const event of events) {
    cardContainer.innerHTML += `
        <div class="events__card" data-society = ${event.society} data-day=${event.day}>
        <img src="${event.link}" alt="Effervescence effe" />
        <div class="events__card__content">
        <h1>${event.name}</h1>
        <p>Date: ${event.date}</p>
      </div>
    </div>
    
    `;
}
