// skill bars
const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('skill-pers');
            return
        }
        
    });
});
for (let i = 0; i < document.querySelectorAll('.skill-per').length; i++) {
    observer.observe(document.querySelectorAll('.skill-per')[i]);;
}


const animations_in_education = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('w3-animate-zoom');
            return
        }
    });
});
for (let i = 0; i < document.querySelectorAll('.box').length; i++) {
    animations_in_education.observe(document.querySelectorAll('.box')[i]);;
}
  
const typing = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('typing');
            return
        }
    });
});
for (let i = 0; i < document.querySelectorAll('.no-typing').length; i++) {
    typing.observe(document.querySelectorAll('.no-typing')[i]);
}


// observer.observe(document.querySelectorAll('.skill-per'));
console.log(document.querySelectorAll('.no-typing').length)





// scroll to top
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// responsive
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}