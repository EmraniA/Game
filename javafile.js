let random = Math.random() * 100
let perfectNum = Math.ceil(random)

let score = 0
let tries = 25
function start() {
    let input = document.getElementById("input").value
    if (input == perfectNum) {
        score += 10
        document.getElementById("score").textContent = score
        document.getElementById("message").textContent = "You guess it right! it was "+perfectNum
        random = Math.random() * 100
        perfectNum = Math.ceil(random)

    }else if (input < perfectNum & input != 0) {
        tries--
        document.getElementById("try").textContent = tries
        document.getElementById("message").textContent = "It's more than " + input + "."
    }else if (input > perfectNum) {
        tries--
        document.getElementById("try").textContent = tries
        document.getElementById("message").textContent = "It's less than " + input + "."
    }else if (input == "") {
        document.getElementById("message").textContent = "Please type the number first"
    }if (score == 50) {
        document.querySelector(".alert").classList.remove("hidden")
        document.getElementById("p-win-lose").textContent = "Congratulations! you won the game."
    }if (tries == 0) {
        document.querySelector(".alert").classList.remove("hidden")
        document.getElementById("p-win-lose").textContent = "Sorry you lose the game! because there is no more attemps it was " + perfectNum
    }
    
}

function restart() {
    document.getElementById("input").value = ""
    document.querySelector(".alert").classList.add("hidden")
    document.getElementById("message").textContent = ""
    score = 0
    tries = 25
    document.getElementById("try").textContent = tries
    document.getElementById("score").textContent = score

}

function help() {
    let x = perfectNum-8
    let y = perfectNum+12
    if (x<0) {
        x = 0
    }
    if (y>100) {
        y = 100
    }


    if (score >= 30) {
    document.querySelector(".help").classList.remove("hidden")
    document.getElementById("help-message").textContent = "Its between "+x+" and "+y
    }else if(score < 30){
        alert("Your score must be more than 30.")
    }

}

function okay() {
    document.querySelector(".help").classList.add("hidden")
    
}
