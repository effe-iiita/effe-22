const data = [
    {
        src: "image/denis.jpg",
        title: "Neeti Mohan",
    },
    {
        src: "image/favourite_movie_revealed.jpg",
        title: "BANDS",
    },
    {
        src: "image/dreamy2.jpg",
        title: "dancing",
    },
    {
        src: "image/sleigher3000.jpg",
        title: "akash gupta",
    },
    {
        src: "image/fighter3.jpg",
        title: "motivation",
    },
    {
        src: "image/gumble.jpg",
        title: "gumble",
    },
    {
        src: "image/fighter1.jpg",
        title: "Bassi",
    },
    {
        src: "image/confettis.jpg",
        title: "FACE ART",
    },
    {
        src: "image/dangermouse.jpg",
        title: "dangermouse",
    },
    {
        src: "image/cooking.jpg",
        title: "cooking",
    },
    {
        src: "image/dreamy1.jpg",
        title: "dreamy",
    },
    {
        src: "image/spotbots_switched_on.jpg",
        title: "spotbots",
    },
    {
        src: "image/plane_to_sphere.jpg",
        title: "singing",
    },
    {
        src: "image/sherrifcali.jpg",
        title: "sherrifcali",
    },
    {
        src: "image/giugiu.jpg",
        title: "Farhan aktar",
    },
    {
        src: "image/handsup_001.jpg",
        title: "handsup",
    },
    {
        src: "image/icon_rugby.jpg",
        title: "freshee",
    },
    {
        src: "image/icon_saxo.jpg",
        title: "Bike skill",
    },
    {
        src: "image/address_revealed.jpg",
        title: "DJ",
    },
    {
        src: "image/blob_001.jpg",
        title: "dramming",
    },
    {
        src: "image/icon_tinder.jpg",
        title: "speech",
    },
    {
        src: "image/icon_twitter.jpg",
        title: "Art",
    },
    {
        src: "image/IMG_7092.jpg",
        title: "dramming",
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
