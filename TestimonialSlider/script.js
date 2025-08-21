const image=document.querySelector("img")
const Ttext = document.querySelector(".text")
const Tname = document.querySelector("h4")

const testimonials=[
    {
        name:"Emily Johnson",
        photoUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text:"I am amazed by the sleek design and powerful performance of Apple's laptops. They are perfect for both work and play, making my life so much easier. Thank you, Apple!"
    },

    {
        name:"Samantha Johnson",
        photoUrl:"https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfDJ8MHx8fDA%3D",
        text:"I am extremely impressed with Apple's sleek and powerful laptops. They have exceeded all my expectations in terms of design and performance. I highly recommend Apple to anyone in need of a reliable and innovative tech solution."
    },

    {
        name:"Sophia Reynolds",
        photoUrl:"https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlcnxlbnwwfDJ8MHx8fDA%3D",
        text:"I recently purchased a laptop from Apple and I am beyond impressed with the sleek design and powerful performance. It has truly exceeded my expectations and I couldn't be happier with my purchase."
    }
]

let idx=0

updateTestimonials()



function updateTestimonials(){
    const{name, photoUrl, text} = (testimonials[idx])
    image.src=photoUrl
    Tname.innerText=name
    Ttext.innerText=text

    idx++

    if(idx===testimonials.length){
        idx=0
    }

    setTimeout( ()=>{
        updateTestimonials()
    },5000)
}