let counter = 0
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let display = document.getElementById("counter")

plus.addEventListener("click", function(){
    counter++;
    display.style.color = "green"
    display.textContent = counter
})
minus.addEventListener("click", function(){
    if(counter > 0){
        counter--;
    }
    display.style.color = "red"
    display.textContent = counter
})


let box = document.getElementById("box")
let coordinates = document.getElementById("coordinates")
box.addEventListener("mousemove", function(event){
    let x = event.clientX
    let y = event.clientY
    coordinates.textContent = "X: " + x + " | Y: " + y
})



let color = document.getElementById("color")

color.addEventListener("input", function(){
    document.body.style.backgroundColor = color.value 
})

