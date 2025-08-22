const ImgContainer= document.querySelector(".image-container")



let value=0
function updateGallery(){
    ImgContainer.style.transform = `perspective(1000px) rotateY(${value * 45}deg)`;

    value++
}

setInterval(updateGallery,1000)