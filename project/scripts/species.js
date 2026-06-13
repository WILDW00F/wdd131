const birds = [

{
name: "Arctic Tern",
distance: "44,000 miles",
habitat: "Arctic",
image: "images/arctic-tern.webp"
},

{
name: "Barn Swallow",
distance: "7,000 miles",
habitat: "North America",
image: "images/swallow.webp"
},

{
name: "Canada Goose",
distance: "3,000 miles",
habitat: "Canada",
image: "images/goose.webp"
}

];

const cards = document.querySelector("#birdCards");

birds.forEach(bird => {

cards.innerHTML += `

<section class="card">

    <img src="${bird.image}" alt="${bird.name}" loading="lazy">

    <h3>${bird.name}</h3>

    <p><strong>Migration Distance:</strong> ${bird.distance}</p>

    <p><strong>Habitat:</strong> ${bird.habitat}</p>

</section>

`;

});