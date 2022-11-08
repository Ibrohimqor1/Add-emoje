const input = document.getElementById("myemoji")

const fromEnd = document.getElementById("remEnd")
const fromBeing = document.getElementById("remBeing")
const theEnd = document.getElementById("addEnd")
const theBeing = document.getElementById("addBeing")

const str = document.getElementById("stickers")
const arr = ["😀", "😁", "😂"];
console.log(arr); 

stickers.innerHTML = arr 


function addToTheBeing() {
    arr.unshift(input.value)  
    input.value = ""  
    stickers.innerHTML = arr 
}

function addToTheEnd() {
    arr.push(input.value)    
    input.value = ""
    stickers.innerHTML = arr 
}

function removeFromEnd() {
    arr.pop(input.value)
    input.value = ""    
    stickers.innerHTML = arr 
}

function removeFromBeing() {
    arr.shift(input.value)   
    input.value = ""
    stickers.innerHTML = arr 
}