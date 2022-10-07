const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("nav-links")[0];

toggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});

$(document).ready(function () {
  $(".legends").owlCarousel({
    stagePadding: 0,
    items: 1,
    loop: true,
    margin: 0,
    singleItem: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  });
});

let clientList = $(".client-list");
$(document).ready(function () {
  clientList.owlCarousel({
    items: 5,
    loop: true,
    margin: 10,
    autoplay: true,
    dots: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  });
});

let partnerList = $(".partner-list");
$(document).ready(function () {
  partnerList.owlCarousel({
    items: 5,
    loop: true,
    margin: 10,
    autoplay: true,
    dots: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  });
});

let testimonyList = $(".col-1");
$(document).ready(function () {
  testimonyList.owlCarousel({
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    items: 1,
    loop: true,
    margin: 50,
    stagePadding: 30,
    autoplay: true,
    dots: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    smartSpeed: 450,
  });
});

function pricePlan(evt, priceType) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(priceType).style.display = "block";
  evt.currentTarget.className += " active";
}
