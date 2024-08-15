$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "UI/UX Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "UI/UX Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // CV download

    // Owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    // Initialize EmailJS with your user ID
    emailjs.init("vl1zGPErZS7ZgF_Ps"); // Replace with your actual EmailJS Public Key

    // Form submission handler
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Use EmailJS to send the email
        emailjs.sendForm("service_bmqxbva", "template_a1p7vxp", this)
            .then(function(response) {
                console.log("Sent successfully:", response);
                alert("Your message has been sent successfully!");
            }, function(error) {
                console.error("Failed to send:", error);
                alert("Failed to send your message. Please try again.");
            });
    });
});