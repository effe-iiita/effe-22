const cardContainer = document.querySelector(".events__cards__container");

const events = [
    {
        name: "MUN'22",
        date: "2-4Dec.",
        society: "Sarasva",
        link: "./assets/mun.jpg",
    },
    {
        name: "Feathers",
        date: "20Nov-8Dec.",
        society: "Sarasva",
        link: "./assets/feathers.jpg",
    },
    {
        name: "Cognoscentia",
        date: "27Nov-8Dec.",
        society: "Sarasva",
        link: "./assets/cognoscentia.jpg",
    },
    // {
    //     name: "Antakshari",
    //     date: "16-17 Dec.",
    //     society: "Virtuosi ",
    //     link: "./assets/effe22.png",
    // },
    // {
    //     name: "Euphony ",
    //     date: "4-17 Dec.",
    //     society: "Virtuosi ",
    //     link: "./assets/effe22.png",
    // },
    // {
    //     name: "Intro-Verse",
    //     date: "14-16 Dec.",
    //     society: "Rangtarangini",
    //     link: "./assets/effe22.png",
    // },
    // {
    //     name: "Tongues on Fire",
    //     date: "18 Dec.",
    //     society: "Rangtarangini",
    //     link: "./assets/effe22.png",
    // },
    {
        name: "Shoot your Shots	",
        date: "28Nov-5Dec.",
        society: "Rangtarangini",
        link: "./assets/shootshorts.jpeg",
    },
    {
        name: "Schizarre",
        date: "25Nov-15Dec.",
        society: "Nirmiti ",
        link: "./assets/schizzare.jpeg",
    },
    // {
    //     name: "Toon-Con",
    //     date: "9-19 Dec.",
    //     society: "Nirmiti ",
    //     link: "./assets/effe22.png",
    // },
    // {
    //     name: "WorkShop",
    //     date: "19 Dec.",
    //     society: "Nirmiti ",
    //     link: "./assets/effe22.png",
    // },
    {
        name: "Show Off",
        date: "24Nov-9Dec.",
        society: "GeneticXCrew",
        link: "./assets/showoff.jpeg",
    },
    // {
    //     name: "Tasveer",
    //     date: "10-24  Dec.",
    //     society: "Thunderbolts",
    //     link: "./assets/effe22.png",
    // },
    // {
    //     name: "Valorant",
    //     date: "17-19  Dec.",
    //     society: "Informal",
    //     link: "./assets/effe22.png",
    // },
    // {
    //     name: "BGMI",
    //     date: "17 Dec. (Classic), 19 Dec. (TDM)",
    //     society: "Informal",
    //     link: "./assets/effe22.png",
    // },
    // {
    //     name: "Animania",
    //     date: "18 Dec.",
    //     society: "Informal",
    //     link: "./assets/effe22.png",
    // },
    // {
    //     name: "Franchise Quiz",
    //     date: "17  Dec.",
    //     society: "Informal",
    //     link: "./assets/FRANCHISE QUIZ.png",
    // },
    // {
    //     name: "Chess",
    //     date: "19 Dec.",
    //     society: "Informal",
    //     link: "./assets/chess.png",
    // },
    // {
    //     name: "Arcane",
    //     date: "17 Dec.",
    //     society: "Informal",
    //     link: "./assets/arcane.png",
    // },
    // {
    //     name: "Talent Hunt",
    //     date: "13 - 19 Dec.",
    //     society: "Informal",
    //     link: "./assets/skillbash.png",
    // },
    // {
    //     name: "Consilio",
    //     date: "16 Dec.",
    //     society: "Informal",
    //     link: "./assets/consilio.png",
    // },
    // {
    //     name: "Plot Twist",
    //     date: "14-19 Dec.",
    //     society: "Informal",
    //     link: "./assets/PLOT TWIST.png",
    // },
    // {
    //     name: "Blind Date",
    //     date: "18 Dec.",
    //     society: "Informal",
    //     link: "./assets/BlindDate.png",
    // },
    // {
    //     name: "Guess the Tune",
    //     date: "16th Dec.",
    //     society: "Informal",
    //     link: "./assets/tune.png",
    // },
    // {
    //     name: "Meme War",
    //     date: "13-19 Dec.",
    //     society: "Informal",
    //     link: "./assets/MEME WAR.png",
    // },
];

for (const event of events) {
    cardContainer.innerHTML += `
        <div class="events__card" data-society = ${event.society}>
        <img src="${event.link}"style="height:max-content" alt="Effervescence effe"  />
        <div class="events__card__content">
        <h1 >${event.name}</h1>
        <p style="margin:0;font-size:16px">Date: ${event.date}</p>
      </div>
    </div>
    
    `;
}
