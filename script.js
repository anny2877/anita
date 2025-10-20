console.log("Hola desde script.js 😎");

const images = document.querySelectorAll(".any img");
images.forEach((img, i) => {
    img.addEventListener("click", () => {
        alert(`Imagen ${i + 1} seleccionada`);
    });
});
