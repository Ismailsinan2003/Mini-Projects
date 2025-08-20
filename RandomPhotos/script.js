document.addEventListener("DOMContentLoaded", () => {
    const PhotoContainer = document.querySelector(".photo-container");
    const button = document.querySelector(".btn");

    button.addEventListener('click', () => {
        const imageNum = 10;
        addNewImages(imageNum);
    });

    function addNewImages(imageNum) {
        for (let index = 0; index < imageNum; index++) {
            const newImage = document.createElement("img");
            newImage.src = `https://picsum.photos/300?random=${Date.now() + index}`;
            PhotoContainer.appendChild(newImage);
        }
    }
});
