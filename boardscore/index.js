// DOM HOME
let homeEl = document.getElementById("home-el")
let add1home = document.getElementById("add1")
let add2home = document.getElementById("add2")
let add3home = document.getElementById("add3")
// END DOM HOME

// START DOM GUEST
let guestEl = document.getElementById("guest-el")
let add1guest = document.getElementById("add1guest")
//  END DOM GUEST

let count = 0

//  START  FUNCTION ADDING HOME
function add1() {
  count += 1
  homeEl.textContent = count
   
}
function add2() {
  count += 2
  homeEl.textContent = count
   
}
function add3() {
  count += 3
  homeEl.textContent = count
   
}
// END FUNCTION ADD HOME

// START FUNCTION GUEST
function add1Guest () {
    count += 1
    guestEl.textContent = count
}
function add2Guest () {
    count += 2
    guestEl.textContent = count
}
function add3Guest () {
    count += 3
    guestEl.textContent = count
}
