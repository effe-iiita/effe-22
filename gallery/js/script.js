const data = [
    {
        src: "image/denis.jpg",
        title: "Neeti Mohan",
    },
    {
        src: "image/denis.jpg",
        title: "Neeti Mohan",
    },
    {
        src: "image/denis.jpg",
        title: "Neeti Mohan",
    },
    {
        src: "image/denis.jpg",
        title: "Neeti Mohan",
    },
    {
        src: "image/denis.jpg",
        title: "Neeti Mohan",
    },
    {
        src: "image/denis.jpg",
        title: "Neeti Mohan",
    },
    {
        src: "image/denis.jpg",
        title: "Neeti Mohan",
    },
    {
        src: "image/denis.jpg",
        title: "Neeti Mohan",
    },
    {
        src: "image/denis.jpg",
        title: "Neeti Mohan",
    },
    {
        src: "image/denis.jpg",
        title: "Neeti Mohan",
    },
    {
        src: "image/denis.jpg",
        title: "Neeti Mohan",
    },
    {
        src: "image/denis.jpg",
        title: "Neeti Mohan",
    },
    {
        src: "image/denis.jpg",
        title: "Neeti Mohan",
    },
    {
        src: "image/denis.jpg",
        title: "Neeti Mohan",
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
