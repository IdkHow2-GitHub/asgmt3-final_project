/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var cost_element = document.getElementById("calculated-cost");
var cost_per_day = 0;
var daily_rate = 35;

var day_button_mon = document.getElementById("monday");
var day_button_tues = document.getElementById("tuesday");
var day_button_wed = document.getElementById("wednesday");
var day_button_thrus = document.getElementById("thursday");
var day_button_fri = document.getElementById("friday");

var full_button = document.getElementById("full");
var half_button = document.getElementById("half");

var clear_button = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function dayButtonClickedMonday() {
    day_button_mon.classList.add("clicked");
    cost_per_day += 1;
    recalculate();
}
function dayButtonClickedTuesday() {
    day_button_tues.classList.add("clicked");
    cost_per_day += 1;
    recalculate();
}
function dayButtonClickedWednesday() {
    day_button_wed.classList.add("clicked");
    cost_per_day += 1;
    recalculate();
}
function dayButtonClickedThursday() {
    day_button_thrus.classList.add("clicked");
    cost_per_day += 1;
    recalculate();
}
function dayButtonClickedFriday() {
    day_button_fri.classList.add("clicked");
    cost_per_day += 1;
    recalculate();
}

day_button_mon.addEventListener("click", dayButtonClickedMonday);
day_button_tues.addEventListener("click", dayButtonClickedTuesday);
day_button_wed.addEventListener("click", dayButtonClickedWednesday);
day_button_thrus.addEventListener("click", dayButtonClickedThursday);
day_button_fri.addEventListener("click", dayButtonClickedFriday);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clearDays() {
    day_button_mon.classList.remove("clicked");
    day_button_tues.classList.remove("clicked");
    day_button_wed.classList.remove("clicked");
    day_button_thrus.classList.remove("clicked");
    day_button_fri.classList.remove("clicked");
    
    cost_per_day = 0;
    recalculate();
}

clear_button.addEventListener("click", clearDays);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function halfButtonClicked() {
    daily_rate = 20;
    full_button.classList.remove("clicked");
    half_button.classList.add("clicked");
    recalculate();
}

half_button.addEventListener("click", halfButtonClicked);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fullButtonClicked() {
    daily_rate = 35;
    full_button.classList.add("clicked");
    half_button.classList.remove("clicked");
    recalculate();
}

full_button.addEventListener("click", fullButtonClicked);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate() {
    cost_element.innerHTML = cost_per_day * daily_rate;
}