// script.js file
'use strict'; // JavaScript ko behtar performance aur error checking ke liye strict mode mein chalao

// Gallery Slideshow Variables
let slideIndex = 0;
let slideTimer;
const slideDuration = 2000; // 2 seconds

// --- 1. Gallery Slideshow Functionality ---
function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    
    // Sabhi slides ko hide karo
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Index ko aage badhao
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }    
    
    // Current slide ko dikhao
    slides[slideIndex - 1].style.display = "block";  
    
    // Har 2 second baad doosri slide ko automatic dikhane ke liye timer set karo
    slideTimer = setTimeout(showSlides, slideDuration); 
}

/**
 * Ye function slideshow ko rokta hai (agar aap baad mein pause button add karna chahte hain)
 */
function pauseSlides() {
    clearTimeout(slideTimer);
    console.log("Slideshow Paused.");
}

// --- 2. Back to Top Button Functionality ---
const mybutton = document.getElementById("back-to-top");
const scrollThreshold = 200; // Jab 200px scroll hoga tab button dikhega

function scrollFunction() {
    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// --- 3. WhatsApp Click Logging (Advanced Tracking Practice) ---
function trackWhatsappClick(itemName) {
    // Console mein log karke dikhata hai ki kaunsa product click hua hai
    console.log(WhatsApp Link Clicked for: ${itemName});
    // Real website mein, yahan aap Google Analytics ya server par data bhej sakte hain
}


// --- 4. Initialization (Sab kuch shuru karna) ---
window.addEventListener('load', () => {
    // A) Slideshow shuru karo
    showSlides(); 

    // B) Scroll event listener set karo
    window.onscroll = scrollFunction;

    // C) Back to Top button ke liye click listener set karo
    if(mybutton) {
        mybutton.addEventListener('click', topFunction);
    }
    
    // D) Shopping table mein har "Buy Now" button par tracking listener set karo
    const whatsappLinks = document.querySelectorAll('#shopping .whatsapp-link');
    whatsappLinks.forEach(link => {
        // Link se product name extract karna
        const row = link.closest('tr');
        const itemName = row.querySelector('td:nth-child(2)').textContent.trim();
        
        link.addEventListener('click', () => {
            trackWhatsappClick(itemName);
        });
    });

    console.log("Website Initialized: Slideshow running and event listeners set.");
});