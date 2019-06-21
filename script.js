console.log("script running!")


const dragon = document.querySelector(".dragon1");
const writing = document.querySelector(".centerWriting")


const changeImage = (e)=> {
        
    e.target.classList.toggle("hidden");
    toggle("dragon1");
    console.log("hello world!");
}
dragon.addEventListener("click", changeImage)

// const y = document.querySelector("#centerWriting");


// const clickMeNow = (e) => {
//     console.log(e.target)
//     e.target.innerHTML = '<img id = "dragon" src="https://ui-ex.com/images/chinse-clipart-easy-6.png">'
    
// }

// y.addEventListener('click', clickMeNow)

