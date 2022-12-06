const cardContainer = document.querySelector(".events__cards__container");

const events = [
    {
        name: "MUN'22",
        date: "2-4 Dec.",
        society: "Sarasva",
        link: "./assets/mun.jpg",
    },
    {
        name: "Feathers",
        date: "20 Nov-8 Dec.",
        society: "Sarasva",
        link: "./assets/feathers.jpg",
    },
    {
        name: "Cognoscentia",
        date: "27 Nov-8 Dec.",
        society: "Sarasva",
        link: "./assets/cognoscentia.jpg",
    },
    {
        name: "Instrumento",
        date: "28 Nov-10 Dec.",
        society: "Virtuosi",
        link: "./assets/Instrumento.jpeg",
    },
    {
        name: "Treasure Hunt",
        date: "07 Dec.",
        society: "Informal",
        link: "./assets/treasurehunt.jpg",
    },
    {
        name: "Prom Night	",
        date: "05 Dec.",
        society: "Informal",
        link: "./assets/promnight.jpg",
    },
    {
        name: "Laser Tag",
        date: "08 Dec.",
        society: "Informal",
        link: "./assets/Lasertag.jpg",
    },
    {
        name: "Roadies",
        date: "09 Dec.",
        society: "Informal",
        link: "./assets/Roadies.jpg",
    },
    {
        name: "Futsal",
        date: "03 Dec.",
        society: "Informal",
        link: "./assets/Futsal.jpg",
    },
    {
        name: "Antakshari",
        date: "06 Dec.",
        society: "Virtuosi",
        link: "./assets/Antakshari.jpeg",
    },
    {
        name: "Carpe Diem",
        date: "10 Dec.",
        society: "GeneticXCrew",
        link: "./assets/CarpDiem.jpeg",
    },
    {
        name: "Cross Roads",
        date: "08 Dec.",
        society: "Sarasva",
        link: "./assets/CrossRoads.jpg",
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
        date: "28 Nov-5 Dec.",
        society: "Rangtarangini",
        link: "./assets/shootshorts.jpeg",
    },
    {
        name: "Schizarre",
        date: "25 Nov-15 Dec.",
        society: "Nirmiti ",
        link: "./assets/schizzare.jpeg",
    },
    {
        name: "Gully Cricket",
        date: "01-02 Dec.",
        society: "Informal",
        link: "./assets/gullycricket.jpeg",
    },
    {
        name: "Pani Puri Junction",
        date: "08 Dec.",
        society: "Informal",
        link: "./assets/panipurijunction.jpeg",
    },
    {
        name: "Momos Junction",
        date: "08 Dec.",
        society: "Informal",
        link: "./assets/momosjunction.jpeg",
    },
    {
        name: "Graffiti",
        date: "08 Dec.",
        society: "Nirmiti",
        link: "./assets/Graffiti.jpg",
    },
    {
        name: "Introverse",
        date: "08 Dec.",
        society: "Rangtarangini",
        link: "./assets/Introverse.jpg",
    },
    {
        name: "Toon Con",
        date: "09 Dec.",
        society: "Nirmiti",
        link: "./assets/ToonCon.jpg",
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
        date: "24 Nov-9 Dec.",
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
        <h1>${event.name}</h1>
        <p style="margin:0;font-size:16px">Date: ${event.date}</p>
      </div>
    </div>
    
    `;
}
