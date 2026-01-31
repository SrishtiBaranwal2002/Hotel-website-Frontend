// preloader
window.addEventListener("DOMContentLoaded", function () {
  // console.log("loaded");
  setTimeout(function () {
  document.getElementById("preloader").style.display = "none";
  
}, 2000); // 2seconds
}
);

function handlesubmit(event) {
  event.preventDefault(); // page reload stop

  let fname = document.getElementById("fName").value;
  let lname = document.getElementById("lName").value;
  let mail = document.getElementById("mail").value;

  if (fname === "" || lname === "" || mail === "") {
    alert("Please fill all required fields");
    return;
  }

  alert("Form submitted successfully ");
}





// back-to-top
// Get the button
let mybutton = document.getElementById("back-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function backtotop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function openSidebar(){
  document.getElementById("sidebar").classList.add("active");
}

function closeSidebar(){
  document.getElementById("sidebar").classList.remove("active");
}
