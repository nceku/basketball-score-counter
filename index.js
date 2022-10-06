let homeCard = document.getElementById("home-card")
let guestCard = document.getElementById("guest-card")

let homeScore = 0
let guestScore = 0

homeCard.textContent = homeScore
guestCard.textContent = guestScore

function add1home(){
    homeScore += 1
    homeCard.textContent = homeScore
}

function add2home(){
    homeScore += 2
    homeCard.textContent = homeScore
}

function add3home(){
    homeScore += 3
    homeCard.textContent = homeScore
}

function add1guest(){
    guestScore += 1
    guestCard.textContent = guestScore
}

function add2guest(){
    guestScore += 2
    guestCard.textContent = guestScore
}

function add3guest(){
    guestScore += 3
    guestCard.textContent = guestScore
}