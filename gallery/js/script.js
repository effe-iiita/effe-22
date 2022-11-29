const data = [
    {
        src: "image/denis.jpg",
        title: "Neeti Mohan",
    },
    {
        src: "image/paw_patrol_music_maker.jpg",
        title: "Vishal Mishra",
    },
    {
        src: "image/favourite_movie_revealed.jpg",
        title: "WHEN CHAI MET TOAST",
    },
    {
        src: "image/dreamy2.jpg",
        title: "Footloose",
    },
    {
        src: "image/sleigher3000.jpg",
        title: "Akash Gupta",
    },
    {
        src: "image/fighter3.jpg",
        title: "Zephyrtone",
    },
    {
        src: "image/gumble.jpg",
        title: "Mariana Bo",
    },
    {
        src: "image/fighter1.jpg",
        title: "Anubhav Singh Bassi",
    },
    {
        src: "image/confettis.jpg",
        title: "FACE ART",
    },
    {
        src: "image/icon_glasses.jpg",
        title: "Virtuosi",
    },
    {
        src: "image/dangermouse.jpg",
        title: "Battle of Bands",
    },
    {
        src: "image/icon_mom.jpg",
        title: "MY FAVOURITE MUM",
    },
    {
        src: "image/cooking.jpg",
        title: "guitar skills",
    },
    {
        src: "image/dreamy1.jpg",
        title: "The local train",
    },
    {
        src: "image/spotbots_switched_on.jpg",
        title: "Ritviz",
    },
    {
        src: "image/plane_to_sphere.jpg",
        title: "plane to sphere",
    },
    {
        src: "image/sherrifcali.jpg",
        title: "Genetix Crew",
    },
    {
        src: "image/giugiu.jpg",
        title: "Farhan aktar",
    },
    {
        src: "image/handsup_001.jpg",
        title: "Neeti Mohan",
    },
    {
        src: "image/icon_rugby.jpg",
        title: "BOSS 2",
    },
    {
        src: "image/icon_saxo.jpg",
        title: "KTM Stunt-show",
    },
    {
        src: "image/address_revealed.jpg",
        title: "Zephyrtone",
    },
    {
        src: "image/blob_001.jpg",
        title: "ICOSPHERE",
    },
    {
        src: "image/icon_tinder.jpg",
        title: "MOTIVATION",
    },
    {
        src: "image/icon_twitter.jpg",
        title: "Art",
    },
];
const container = document.querySelector(".img-container");
for (const d of data) {
    container.innerHTML += `<figure>
    <img
        src="${d.src}"
        alt="${d.title}"
        width="100%"
        height="100%"
        class="photostack-img"
    />
    <figcaption>
        <h2 class="photostack-title">${d.title}</h2>
    </figcaption>
</figure>`;
}
const photo = new Photostack(document.getElementById("photostack-3"), {
    callback: function (item) {},
});
let idx = 0;
let fun = () => {
    photo.showPhoto(idx);
    idx++;
    if (idx === data.length) idx = 0;
};
let interval = setInterval(fun, 2000);
