// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
var page_content = document.getElementById("contact-page");

var message = "Thank you for you message!";
var submit_button = document.getElementById("submit-button");

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
function submitButtonClicked() {
    page_content.innerHTML = message;
}

submit_button.addEventListener("click", submitButtonClicked);
